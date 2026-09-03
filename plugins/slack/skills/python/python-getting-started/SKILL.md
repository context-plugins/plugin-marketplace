---
name: "python-getting-started"
description: "Slack Web API Python SDK identity and lookup layer (Python only) — install, import root, base URL/environments, the auth pattern, the SDK map that ships at the SDK root (`sdk-map.md` + `map/operations/`) and how to traverse it, and the module table naming the one file owning each fact the map leaves to the source. Load this before answering any Slack Web API Python SDK contract question or writing any SDK code."
---

# Getting started with the Slack Web API Python SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing Slack Web API Python SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source modules it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `python-integrate-slack` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated Python SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `python-client-initialization`, `python-authentication`, `python-calling-endpoints`, `python-models`, `python-error-handling`, `python-configuration-resilience` and `python-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the controllers, which module owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a module in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `slack_web_api/` and `pyproject.toml` of the generated package at version `1.7.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Slack Web API |
| Distribution name (what you install) | `slack-web-api` — **not on any package index**; installed from source (see *Install*) |
| Import root (what you import) | `slack_web_api` — not the string you install |
| Source repository | https://github.com/context-plugins/slack-python-sdk |
| Source branch | `main` |
| Version | `1.7.0` |
| Sync client class | `SlackWebApiClient` (alias `Client`) |
| Async client class | `AsyncSlackWebApiClient` (alias `AsyncClient`) |
| Client construction | **keyword-only**: `environment` · `base_url` · `timeout` (default `30.0`) · `slack_auth` · `slack_auth_token_source`, and the transport override — `custom_http_client` on the sync client, `custom_async_http_client` on the async one (the names differ; see step 1) |
| Auth | **OAuth 2.0** authorization code — set `slack_auth` |
| Environments | 2 environments selected by `environment` (default `"production"`), overridable with `base_url` |
| Base-URL config | `ServerConfig` (`slack_web_api/server/server_config.py`), frozen, `extra="forbid"` |
| Python floor | **`>=3.10`** (classifiers list `3.10–3.14`) |
| Runtime dependencies | `httpx (>=0.28.1,<1.0.0)` · `pydantic[email] (>=2.11.0,<3.0.0)` · `typing-extensions (>=4.13.0,<5.0.0)` |
| Typing | ships `py.typed`; the package is checked under `mypy --strict` with `warn_unreachable`. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Line length / lint | `ruff`, 120 cols (only relevant when editing the SDK itself) |
| Surface | 253 operations across 56 controllers · 357 models · 0 unions · 89 enums · 0 per-operation error unions |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import roots, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Imports — the package splits its surface across four modules

Python does not re-export child modules transitively, so `from slack_web_api import models` alone does **not** make enums, error unions, or runtime types reachable. Import each kind of type from the module that owns it.

`slack_web_api/__init__.py` exports exactly 6 names beside the `slack_web_api.models` subpackage it re-exports:

```python
from slack_web_api import (
    AsyncClient,
    AsyncSlackWebApiClient,
    Client,
    Environment,
    ServerConfig,
    SlackWebApiClient,
)
```

Everything else comes from its own subpackage, and the split matters because each kind of type a caller reaches for lives in a different module:

| What you need | Where it lives |
| --- | --- |
| Domain models, their `…Dict` companions | `slack_web_api.models` |
| Enums (and their open `…OrStr` aliases) | `slack_web_api.models.enums` |
| `ApiError` · `RawError` · `ApiResult` · `RequestOptions` · `AuthorizationCodeCredentials` · `HttpClient` · `SdkBaseModel` · `UNSET` · `Optional` | `slack_web_api.core` |
| Per-operation error *unions* | `slack_web_api.errors` — *this SDK declares none* |

`slack_web_api.core` re-exports its whole public surface (a curated `__all__`), so import from `…core` rather than from the private modules beneath it (`…core.results`, `…core.exceptions`, `…core.auth.schemes`).

## Environments

The constructor takes an `environment` keyword — a **string literal alias**, not an enum — followed by `base_url`. The declared environments and the base URL each resolves to:

| `environment=` | Base URL | Hosting |
| --- | --- | --- |
| `"production"` *(default)* | `https://slack.com/api` | — |
| `"environment2"` | `https://slack.com/oauth` | — |

Consequences to state on every contract sheet that touches configuration:

- Omitting `environment` gives you **`"production"`**, silently — it is whatever the description listed first, not necessarily production.
- `base_url` overrides the environment's URL entirely when both are passed.
- The token endpoint is derived from the same base URL (`/oauth.access`), so it always follows the environment — you never configure it separately.
- `ServerConfig` is a frozen pydantic model with `extra="forbid"`: a misspelled keyword raises `ValidationError` at construction rather than being ignored.
- `timeout` is validated too — the base client raises `ValueError` for any non-positive value.

## Auth pattern (one scheme)

OAuth 2.0 authorization code, exposed as the client's `slack_auth=` keyword taking `AuthorizationCodeCredentials` **or a plain dict**. The client fetches and caches the bearer token itself, lazily, from `<base_url>/oauth.access`.

```python
from slack_web_api import Client
from slack_web_api.core import AuthorizationCodeCredentials

def prompt(url: str) -> str:
    return input(f"Open {url}, then paste the code: ")

client = Client(slack_auth=AuthorizationCodeCredentials(client_id="…", client_secret="…", redirect_uri="…", prompt_for_authorization_code=prompt))
client = Client(slack_auth={"client_id": "…", "client_secret": "…", "redirect_uri": "…", "prompt_for_authorization_code": prompt})   # equivalent
```

**Every credentials keyword is optional at the type level and that is a trap worth flagging on every sheet.** Omit it and the client is built with `no_auth`: every request goes out unauthenticated. Nothing fails at construction. Most APIs then answer `401`; an API that serves anonymous traffic at all answers `200` and hides the omission entirely — verify the keyword is set rather than waiting for a `401` to tell you.

See `python-authentication` for the full picture, including what a *failed token fetch* raises — it is not what a caller expects, and it is the single most common surprise in this SDK.

## Controllers

Controllers and their operation counts (`client.<attr>`):

| Attribute | Class | Ops | Area |
| --- | --- | --- | --- |
| `client.admin` | `Admin` / `AsyncAdmin` | 56 | `admin_apps_approve` · `admin_apps_approved_list` · `admin_apps_requests_list` · `admin_apps_restrict` · `admin_apps_restricted_list` · `admin_conversations_archive` · … |
| `client.admin_apps` | `AdminApps` / `AsyncAdminApps` | 2 | `admin_apps_approve` · `admin_apps_restrict` |
| `client.admin_apps_approved` | `AdminAppsApproved` / `AsyncAdminAppsApproved` | 1 | `admin_apps_approved_list` |
| `client.admin_apps_requests` | `AdminAppsRequests` / `AsyncAdminAppsRequests` | 1 | `admin_apps_requests_list` |
| `client.admin_apps_restricted` | `AdminAppsRestricted` / `AsyncAdminAppsRestricted` | 1 | `admin_apps_restricted_list` |
| `client.admin_conversations` | `AdminConversations` / `AsyncAdminConversations` | 13 | `admin_conversations_archive` · `admin_conversations_convert_to_private` · `admin_conversations_create` · `admin_conversations_delete` · `admin_conversations_disconnect_shared` · `admin_conversations_get_conversation_prefs` · … |
| `client.admin_conversations_ekm` | `AdminConversationsEkm` / `AsyncAdminConversationsEkm` | 1 | `admin_conversations_ekm_list_original_connected_channel_info` |
| `client.admin_conversations_restrict_access` | `AdminConversationsRestrictAccess` / `AsyncAdminConversationsRestrictAccess` | 3 | `admin_conversations_restrict_access_add_group` · `admin_conversations_restrict_access_list_groups` · `admin_conversations_restrict_access_remove_group` |
| `client.admin_emoji` | `AdminEmoji` / `AsyncAdminEmoji` | 5 | `admin_emoji_add` · `admin_emoji_add_alias` · `admin_emoji_list` · `admin_emoji_remove` · `admin_emoji_rename` |
| `client.admin_invite_requests` | `AdminInviteRequests` / `AsyncAdminInviteRequests` | 3 | `admin_invite_requests_approve` · `admin_invite_requests_deny` · `admin_invite_requests_list` |
| `client.admin_invite_requests_approved` | `AdminInviteRequestsApproved` / `AsyncAdminInviteRequestsApproved` | 1 | `admin_invite_requests_approved_list` |
| `client.admin_invite_requests_denied` | `AdminInviteRequestsDenied` / `AsyncAdminInviteRequestsDenied` | 1 | `admin_invite_requests_denied_list` |
| `client.admin_teams` | `AdminTeams` / `AsyncAdminTeams` | 2 | `admin_teams_create` · `admin_teams_list` |
| `client.admin_teams_admins` | `AdminTeamsAdmins` / `AsyncAdminTeamsAdmins` | 1 | `admin_teams_admins_list` |
| `client.admin_teams_owners` | `AdminTeamsOwners` / `AsyncAdminTeamsOwners` | 1 | `admin_teams_owners_list` |
| `client.admin_teams_settings` | `AdminTeamsSettings` / `AsyncAdminTeamsSettings` | 6 | `admin_teams_settings_info` · `admin_teams_settings_set_default_channels` · `admin_teams_settings_set_description` · `admin_teams_settings_set_discoverability` · `admin_teams_settings_set_icon` · `admin_teams_settings_set_name` |
| `client.admin_usergroups` | `AdminUsergroups` / `AsyncAdminUsergroups` | 4 | `admin_usergroups_add_channels` · `admin_usergroups_add_teams` · `admin_usergroups_list_channels` · `admin_usergroups_remove_channels` |
| `client.admin_users` | `AdminUsers` / `AsyncAdminUsers` | 8 | `admin_users_assign` · `admin_users_invite` · `admin_users_list` · `admin_users_remove` · `admin_users_set_admin` · `admin_users_set_expiration` · … |
| `client.admin_users_session` | `AdminUsersSession` / `AsyncAdminUsersSession` | 2 | `admin_users_session_invalidate` · `admin_users_session_reset` |
| `client.api2` | `Api2` / `AsyncApi2` | 1 | `api_test` |
| `client.apps` | `Apps` / `AsyncApps` | 8 | `apps_event_authorizations_list` · `apps_permissions_info` · `apps_permissions_request` · `apps_permissions_resources_list` · `apps_permissions_scopes_list` · `apps_permissions_users_list` · … |
| `client.apps_event_authorizations` | `AppsEventAuthorizations` / `AsyncAppsEventAuthorizations` | 1 | `apps_event_authorizations_list` |
| `client.apps_permissions` | `AppsPermissions` / `AsyncAppsPermissions` | 2 | `apps_permissions_info` · `apps_permissions_request` |
| `client.apps_permissions_resources` | `AppsPermissionsResources` / `AsyncAppsPermissionsResources` | 1 | `apps_permissions_resources_list` |
| `client.apps_permissions_scopes` | `AppsPermissionsScopes` / `AsyncAppsPermissionsScopes` | 1 | `apps_permissions_scopes_list` |
| `client.apps_permissions_users` | `AppsPermissionsUsers` / `AsyncAppsPermissionsUsers` | 2 | `apps_permissions_users_list` · `apps_permissions_users_request` |
| `client.auth_api` | `AuthApi` / `AsyncAuthApi` | 2 | `auth_revoke` · `auth_test` |
| `client.bots` | `Bots` / `AsyncBots` | 1 | `bots_info` |
| `client.calls` | `Calls` / `AsyncCalls` | 6 | `calls_add` · `calls_end` · `calls_info` · `calls_participants_add` · `calls_participants_remove` · `calls_update` |
| `client.calls_participants` | `CallsParticipants` / `AsyncCallsParticipants` | 2 | `calls_participants_add` · `calls_participants_remove` |
| `client.chat` | `Chat` / `AsyncChat` | 10 | `chat_delete` · `chat_delete_scheduled_message` · `chat_get_permalink` · `chat_me_message` · `chat_post_ephemeral` · `chat_post_message` · … |
| `client.chat_scheduled_messages` | `ChatScheduledMessages` / `AsyncChatScheduledMessages` | 1 | `chat_scheduled_messages_list` |
| `client.conversations` | `Conversations` / `AsyncConversations` | 18 | `conversations_archive` · `conversations_close` · `conversations_create` · `conversations_history` · `conversations_info` · `conversations_invite` · … |
| `client.dialog` | `Dialog` / `AsyncDialog` | 1 | `dialog_open` |
| `client.dnd` | `Dnd` / `AsyncDnd` | 5 | `dnd_end_dnd` · `dnd_end_snooze` · `dnd_info` · `dnd_set_snooze` · `dnd_team_info` |
| `client.emoji` | `Emoji` / `AsyncEmoji` | 1 | `emoji_list` |
| `client.files` | `Files` / `AsyncFiles` | 13 | `files_comments_delete` · `files_delete` · `files_info` · `files_list` · `files_remote_add` · `files_remote_info` · … |
| `client.files_comments` | `FilesComments` / `AsyncFilesComments` | 1 | `files_comments_delete` |
| `client.files_remote` | `FilesRemote` / `AsyncFilesRemote` | 6 | `files_remote_add` · `files_remote_info` · `files_remote_list` · `files_remote_remove` · `files_remote_share` · `files_remote_update` |
| `client.migration` | `Migration` / `AsyncMigration` | 1 | `migration_exchange` |
| `client.oauth` | `Oauth` / `AsyncOauth` | 3 | `oauth_access` · `oauth_token` · `oauth_v2_access` |
| `client.oauth_v2` | `OauthV2` / `AsyncOauthV2` | 1 | `oauth_v2_access` |
| `client.pins` | `Pins` / `AsyncPins` | 3 | `pins_add` · `pins_list` · `pins_remove` |
| `client.reactions` | `Reactions` / `AsyncReactions` | 4 | `reactions_add` · `reactions_get` · `reactions_list` · `reactions_remove` |
| `client.reminders` | `Reminders` / `AsyncReminders` | 5 | `reminders_add` · `reminders_complete` · `reminders_delete` · `reminders_info` · `reminders_list` |
| `client.rtm` | `Rtm` / `AsyncRtm` | 1 | `rtm_connect` |
| `client.search` | `Search` / `AsyncSearch` | 1 | `search_messages` |
| `client.stars` | `Stars` / `AsyncStars` | 3 | `stars_add` · `stars_list` · `stars_remove` |
| `client.team_api` | `TeamApi` / `AsyncTeamApi` | 5 | `team_access_logs` · `team_billable_info` · `team_info` · `team_integration_logs` · `team_profile_get` |
| `client.team_profile` | `TeamProfile` / `AsyncTeamProfile` | 1 | `team_profile_get` |
| `client.usergroups` | `Usergroups` / `AsyncUsergroups` | 7 | `usergroups_create` · `usergroups_disable` · `usergroups_enable` · `usergroups_list` · `usergroups_update` · `usergroups_users_list` · … |
| `client.usergroups_users` | `UsergroupsUsers` / `AsyncUsergroupsUsers` | 2 | `usergroups_users_list` · `usergroups_users_update` |
| `client.users` | `Users` / `AsyncUsers` | 12 | `users_conversations` · `users_delete_photo` · `users_get_presence` · `users_identity` · `users_info` · `users_list` · … |
| `client.users_profile` | `UsersProfile` / `AsyncUsersProfile` | 2 | `users_profile_get` · `users_profile_set` |
| `client.views` | `Views` / `AsyncViews` | 4 | `views_open` · `views_publish` · `views_push` · `views_update` |
| `client.workflows` | `Workflows` / `AsyncWorkflows` | 3 | `workflows_step_completed` · `workflows_step_failed` · `workflows_update_step` |

Every controller has an `Async…` peer whose operations are identical in name and parameters and differ solely by being awaited. Do not emit a separate row for an async operation; state the rule once on the sheet.

The SDK map's controller table carries the same counts and links to a page per controller (`map/operations/<controller>.md`) — go there for the operations themselves.

## SDK map — look up first, open the module second

The SDK ships a generated map at its **root** — the directory holding `pyproject.toml`, the `slack_web_api/` source directory, and these two entries:

- **`sdk-map.md`** — the index: client construction with the full constructor-keyword table, the error-handling model (`ApiError` / `ApiResult` / `RawError`, Case A vs Case B), where models, enums and error aliases live, servers and auth, and the link table into the operations pages.
- **`map/operations/<controller>.md`** — one page per controller, one `###` block per operation: the HTTP verb and route, the sync parsed signature, each parameter's role and wire name, both return types, the error alias with the status each arm maps from, and a **Type sources** table naming the module that declares every type the operation mentions.

**Installing the distribution does not give you the map.** `pyproject.toml` ships the `slack_web_api/` package only, so `sdk-map.md` and `map/operations/` are absent from the installed package — they live in the SDK's own source tree, at the root of its repository, <https://github.com/context-plugins/slack-python-sdk>. One clone therefore brings the map and the code it describes together, in lockstep by construction. Clone it to a temporary directory, outside the project repo:

```bash
git clone --depth 1 --branch main https://github.com/context-plugins/slack-python-sdk
```

Keep the `--branch main`: it is the branch this SDK is released from, and the repository's default branch may carry a different version — a map read from the wrong branch describes code you do not have.

Every `Source` path on the map is relative to that SDK root, so `slack_web_api/models/apimethodusers_get_presence.py` opens as written from there — and the same path resolves inside the installed package, which is where you read a module's body once the map has named it.

**The map is the locator; the source modules are the shapes.** Read the map first — signatures, routes, parameter roles, return types, error unions, and which module declares a type are all answered there without opening a single `.py` file. Then open the one module the map names for what it deliberately does not carry: a model's members, an enum's values, a field's wire alias. The map says so itself — *"Shapes live only in the source … Never grep for a type."*

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted parameter actually selects — the map will not settle it. Open the operation's docstring in `slack_web_api/apis/<controller>.py` (or `client.py` where operations sit on the client) and `api-reference.md` at the SDK root for that operation *before* writing the sheet row, and record what you found there. A value you already "know" for a field the map types as a plain `str` is a lookup, not a recall — the memory ban applies to it.

`sdk-map.md` carries the invariants every operation block assumes, so load it before any `map/operations/` page; the pages are written to be read beside it.

## Contract facts — the map first, then the module

**Six of these are map lookups — don't open the module for them:** an operation's signature, parameters and return type; the client's constructor keywords; the `timeout` default; the members of `ApiError` / `Success` / `Failure` / `RawError`; an operation's error union and the status each arm maps from; base-URL and auth wiring. The table below covers everything else, and the full body behind a map row.

Read the one module that owns the fact **inside the installed package**. Locate it first:

```bash
python -c "import slack_web_api, pathlib; print(pathlib.Path(slack_web_api.__file__).parent)"
```

Failing that, it is under the project's environment (`.venv/Lib/site-packages/slack_web_api` on Windows, `.venv/lib/python3.*/site-packages/slack_web_api` elsewhere). **If the package is not installed, there is no source to read** — mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory. Paths below are relative to that package root:

| Question | Module |
| --- | --- |
| An operation's real signature, parameters and return type | `apis/<controller>.py` |
| Client construction, keywords, controller wiring | `client.py`, `async_client.py`, `base_client.py` |
| Timeout default and validation | `base_client.py` (`DEFAULT_TIMEOUT = 30.0`) |
| The request/response pipeline, 401 handling, 2xx-vs-error split | `core/raw_client.py` |
| Exception shape (`ApiError.error`, `.response`, `.status_code`) | `core/exceptions.py` |
| `Success`/`Failure`/`RawError` | `core/results.py` |
| Per-call overrides | `core/request_options.py` |
| `UNSET`, `Optional`, `OptionalNullable` | `core/optionality.py` |
| Model base config, `to_dict`/`to_json` | `core/models.py` |
| A model's members, required vs `UNSET`, wire aliases | `models/<model_name>.py` |
| An enum's members and wire values | `models/enums/` |
| Open-enum coercion | `core/converters/open_enum.py` |
| Date/time wire formats — `Date`, `RFC3339DateTime`, `RFC1123DateTime`, `UnixSecondsDateTime` (`Annotated` aliases over `datetime.date` / `datetime.datetime`; not in the map's Type sources) | `core/converters/date_time.py` |
| Transport protocols (the test seam) | `core/transport.py` |
| httpx adapter, proxy/TLS knobs | `core/httpx_transport.py` |
| Token fetch, credential placement | `core/auth/`, `core/auth/models.py` |
| Base-URL resolution | `server/server_config.py`, `server/server.py` |

**Read scoped.** These modules carry long design docstrings; `grep -n` for the symbol and read the surrounding lines rather than whole files. Never quote a docstring's design rationale onto a contract sheet — the sheet carries facts an implementer must obey, not the reasoning behind them.

Keep lookups cheap — the rules that keep a session's context small:

- Collect the contracts for **every** in-scope operation in **one** pass — signature, required members with wire aliases, the error union, enum values — into a short **contract sheet** in your plan or working notes, then implement from the sheet. Don't re-open a module per member, and never re-look-up a fact the sheet already carries.
- Recurse into a model's members only where the task actually sets them — a full transitive expansion is hundreds of rows and nobody needs it.
- Trust the interpreter over this page: if a name here ever fails to type-check or import, re-read the module the table above names and report the drift; never patch around it from memory.

## Integration workflow — load the companion skill at each step

Before you write the code for each step, load the named companion skill — even if you have already read the relevant module. Each step calls out the trap the signature hides (in *parens*). A typical integration reaches them in this order:

1. **Client construction & lifetime** — load **python-client-initialization** before you write `Client(...)` or `AsyncClient(...)`. (*The signature won't tell you:* the constructor is keyword-only, so nothing can be passed positionally; the client owns an `httpx` connection pool and you **must** `close()` (sync) or `await aclose()` (async) or use it as a context manager; it must be long-lived and module- or app-scoped, never rebuilt per request; the sync and async clients do not mix; and the transport-override keyword differs by client — `custom_http_client` vs `custom_async_http_client`.)
2. **Authentication** — load **python-authentication** before you set credentials. The one scheme is `slack_auth=`. (*The signature won't tell you:* every credentials keyword is *optional* — omit it and every request goes out unauthenticated, with no failure at construction and not necessarily a `401` to tell you; the token is fetched lazily and cached by the client; and a **failed token fetch** raises something other than what a caller expects and **bypasses the non-raising response mode** entirely. Load secrets from the environment or a secret store, never hardcode.)
3. **Calling an endpoint** — load **python-calling-endpoints** before the first `client.<controller>.<operation>(...)` call. (*The signature won't tell you:* every operation splits positional path params (and sometimes the body) from a keyword-only tail after `*`; every keyword-only parameter has a **real** default, so there is no "must pass `None` explicitly" hazard; and the two response modes — raising vs `ApiResult` — behave differently on failure.)
4. **Models** — load **python-models** the moment a request/response member is not a plain string or number. (*The signature won't tell you:* `Optional[T]` here is `T | UnsetType`, **not** `typing.Optional` — `None` is not a legal value for it; models are frozen pydantic instances with `…Dict` TypedDict companions; enums are **open** (`…OrStr`), so an unknown wire value passes through as a plain `str` rather than raising; wire aliases differ from Python member names; unknown response fields are **preserved**, not dropped; and serialize via `to_dict`/`to_json`.)
5. **Error handling** — load **python-error-handling** before you write any `try/except`. (*The signature won't tell you:* there is a single `ApiError` type whose `.error` is a **per-operation union**, and a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, and bypasses both response modes; `httpx` transport exceptions reach your boundary unwrapped.)
6. **Configuration & resilience** — load **python-configuration-resilience** when you set the base URL, timeouts, proxies, TLS, or logging. (*The signature won't tell you:* **the SDK performs no retries at all** — retry/backoff is entirely yours to build or deliberately omit; `timeout` defaults to `30.0` and is a single float that maps onto `httpx`'s timeout semantics rather than bounding the whole call; and there is no logging hook — you wrap the transport seam.)
7. **Testing** — load **python-testing** before you stub the SDK. (*The signature won't tell you:* the seam is the **transport protocol** (`HttpClient`/`AsyncHttpClient` in `core/transport.py`) passed as `custom_http_client`, or `respx` at the `httpx` layer — not the client class; assert on the request the SDK actually built, and cover all four failure kinds, decode failures included.)

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a Python sheet is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone:

1. **Sync or async** — which client class, and the reminder that the two do not mix. Plus the `close()`/`aclose()` obligation and where the client is held.
2. **The keyword-only boundary** for each operation: what is positional (path params, sometimes the body) and what sits after `*`. Every keyword-only parameter has a real default, so there is no "must pass `None` explicitly" hazard — say so, so nobody writes defensive `None`s.
3. **Every operation returns a payload** — no operation in this SDK returns `None`, so the `with_raw_response` peer is needed only where the status code itself matters.
4. **Required vs `UNSET`** for every model member the task sets, and the fact that `Optional[T]` here is `T | UnsetType` — **not** `typing.Optional`, so `None` is not a legal value for it.
5. **The `ApiError.error` union** for each operation in scope — no operation in this SDK documents a typed error body, so `.error` is always `RawError`.
6. **That a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, in both response modes** — `core/raw_client.py` states this in `_build_result`'s own docstring. **And that the 2xx path declares at least one required member on 72 return types, so a truncated body fails to decode there and passes silently everywhere else.** Any sheet row for a call whose result is used must name the members the implementer has to assert on.
7. **That the SDK performs no retries at all**, so retry/backoff is the caller's to build or deliberately omit.
8. **Which environment the `environment` keyword selects**, because omitting it is silently `"production"` of the 2 declared.
9. A **REQUIRED READING** block naming the `python-*` companions that govern the steps, with `MUST load` pointers.

