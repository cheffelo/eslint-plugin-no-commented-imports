module.exports = {
  meta: {
    messages: {
      noCommentedImports: "Imports should not be commented",
    },
  },
  create(context) {
    return {
      onCodePathStart: (_, node) => {
        if (node.comments) {
          node.comments.forEach((comment) => {
            if (comment.value.trim().startsWith("import")) {
              context.report({
                loc: comment.loc,
                messageId: "noCommentedImports",
              });
            }
          });
        }
      },
    };
  },
};
