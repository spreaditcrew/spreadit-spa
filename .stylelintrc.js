module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines"
  ],
  "plugins": [
    "@namics/stylelint-bem"
  ],
  "rules": {
    "selector-class-pattern": null,
    "plugin/stylelint-bem-namics": {
      "patternPrefixes": []
    }
  }
};