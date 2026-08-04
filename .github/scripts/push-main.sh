#!/usr/bin/env bash
# Push HEAD to main, from a workflow, through a branch ruleset.
#
# A ruleset that requires pull requests rejects a direct push to main — including the workflow's
# own, with `GH013: ... Changes must be made through a pull request`. The bypass list is the way
# around that, but GitHub will NOT accept the GitHub Actions app as a bypass actor on a
# REPOSITORY-level ruleset:
#
#   422: Actor GitHub Actions integration must be part of the ruleset source or owner organization
#
# So a workflow cannot be exempted directly, and the default GITHUB_TOKEN can never land on a
# protected main. Pushing as a user who IS on the bypass list is what works, which is what
# MARKETPLACE_PUSH_TOKEN is for. (The alternative is an organization-level ruleset, where the
# Actions app can be a bypass actor — worth revisiting if these rules ever move up to the org.)
#
# Without the secret set, this falls back to the ordinary push, so the workflow still works on a
# repo with no ruleset and needs no secret to be useful there.
#
# The token is passed through a credential helper reading an environment variable, never as an
# argument: an argv entry is visible in process listings and can be captured in crash dumps for the
# life of the push.
set -uo pipefail

if [ -n "${MARKETPLACE_PUSH_TOKEN:-}" ]; then
  # actions/checkout (persist-credentials: true, the default) stores GITHUB_TOKEN as
  #   http.https://github.com/.extraheader = AUTHORIZATION: basic <base64 x-access-token:...>
  # That header is scoped to the whole host, so it is attached to a push to ANY github.com URL and
  # takes precedence over a credential helper. Leave it in place and the push authenticates as
  # GITHUB_TOKEN no matter what token the helper offers — which looks exactly like the secret being
  # ignored, and gets rejected by the ruleset all the same. Drop it for this repo's config first.
  git config --unset-all "http.https://github.com/.extraheader" 2>/dev/null || true
  exec git \
    -c credential.helper= \
    -c 'credential.helper=!f() { echo username=x-access-token; echo password=$MARKETPLACE_PUSH_TOKEN; }; f' \
    push "https://github.com/${GITHUB_REPOSITORY}.git" HEAD:main
fi

echo "MARKETPLACE_PUSH_TOKEN is not set — pushing with the default credentials." >&2
exec git push origin HEAD:main
