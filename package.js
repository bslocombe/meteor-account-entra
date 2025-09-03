Package.describe({
  name: "bslocombe:accounts-entra",
  version: "0.0.5",
  summary: "Accounts connector for bslocombe:entra-oauth package, for Meteor 3+.",
  git: "https://github.com/bslocombe/meteor-account-entra",
});

Package.onUse(function (api) {
  api.versionsFrom(["2.16", "3.0"]);

  api.use("ecmascript");
  api.use("accounts-base", ["client", "server"]);

  api.imply("accounts-base", ["client", "server"]);
  api.use("accounts-oauth", ["client", "server"]);
  api.use("bslocombe:entra-oauth@0.0.7");
  api.imply("bslocombe:entra-oauth@0.0.7");

  api.addFiles("entra.js");
});
