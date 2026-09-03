---
name: "python-getting-started"
description: "Spotify Web API Python SDK identity and lookup layer (Python only) — install, import root, base URL/environments, the auth pattern, the SDK map that ships at the SDK root (`sdk-map.md` + `map/operations/`) and how to traverse it, and the module table naming the one file owning each fact the map leaves to the source. Load this before answering any Spotify Web API Python SDK contract question or writing any SDK code."
---

# Getting started with the Spotify Web API Python SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing Spotify Web API Python SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source modules it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `python-integrate-spotify-web-api` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated Python SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `python-client-initialization`, `python-authentication`, `python-calling-endpoints`, `python-models`, `python-error-handling`, `python-configuration-resilience` and `python-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the controllers, which module owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a module in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `spotify_web_api/` and `pyproject.toml` of the generated package at version `2024.3.3`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Spotify Web API |
| Distribution name (what you install) | `spotify-web-api` — **not on any package index**; installed from source (see *Install*) |
| Import root (what you import) | `spotify_web_api` — not the string you install |
| Source repository | https://github.com/context-plugins/spotify-python-sdk |
| Source branch | `main` |
| Version | `2024.3.3` |
| Sync client class | `SpotifyWebApiClient` (alias `Client`) |
| Async client class | `AsyncSpotifyWebApiClient` (alias `AsyncClient`) |
| Client construction | **keyword-only**: `environment` · `base_url` · `timeout` (default `30.0`) · `oauth_2_0` · `oauth_2_0_token_source` · `oauth_2_0_client_credentials` · `oauth_2_0_client_credentials_token_source`, and the transport override — `custom_http_client` on the sync client, `custom_async_http_client` on the async one (the names differ; see step 1) |
| Auth | **OAuth 2.0** authorization code — set `oauth_2_0` · **OAuth 2.0** client credentials — set `oauth_2_0_client_credentials` |
| Environments | 2 environments selected by `environment` (default `"production"`), overridable with `base_url` |
| Base-URL config | `ServerConfig` (`spotify_web_api/server/server_config.py`), frozen, `extra="forbid"` |
| Python floor | **`>=3.10`** (classifiers list `3.10–3.14`) |
| Runtime dependencies | `httpx (>=0.28.1,<1.0.0)` · `pydantic[email] (>=2.11.0,<3.0.0)` · `typing-extensions (>=4.13.0,<5.0.0)` |
| Typing | ships `py.typed`; the package is checked under `mypy --strict` with `warn_unreachable`. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Line length / lint | `ruff`, 120 cols (only relevant when editing the SDK itself) |
| Surface | 138 operations across 15 controllers · 129 models · 4 unions · 18 enums · 89 per-operation error unions |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import roots, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install — from source

This SDK is not published to a package index, so there is no `pip install` from PyPI for it. Install it from its repository — <https://github.com/context-plugins/spotify-python-sdk> — into the same environment your project runs in:

```bash
pip install "spotify-web-api @ git+https://github.com/context-plugins/spotify-python-sdk.git@main"
```

The generated distribution carries its own `pyproject.toml`, so `pip` builds and installs it exactly like a released package. Do not vendor its source into your project, add its directory to `sys.path`, or install it editable (`-e`) from a throwaway clone — an editable install points at the clone's path, so deleting the clone breaks every import. Once installed, write the imports from the table above: the distribution name you install and the package name you import are not the same string. Requires Python 3.10 or newer.

## Imports — the package splits its surface across four modules

Python does not re-export child modules transitively, so `from spotify_web_api import models` alone does **not** make enums, error unions, or runtime types reachable. Import each kind of type from the module that owns it.

`spotify_web_api/__init__.py` exports exactly 6 names beside the `spotify_web_api.models` subpackage it re-exports:

```python
from spotify_web_api import (
    AsyncClient,
    AsyncSpotifyWebApiClient,
    Client,
    Environment,
    ServerConfig,
    SpotifyWebApiClient,
)
```

Everything else comes from its own subpackage, and the split matters because each kind of type a caller reaches for lives in a different module:

| What you need | Where it lives |
| --- | --- |
| Domain models, their `…Dict` companions | `spotify_web_api.models` |
| Enums (and their open `…OrStr`/`…OrInt` aliases) | `spotify_web_api.models.enums` |
| `ApiError` · `RawError` · `ApiResult` · `RequestOptions` · `AuthorizationCodeCredentials` · `ClientCredentials` · `HttpClient` · `SdkBaseModel` · `UNSET` · `Optional` | `spotify_web_api.core` |
| Per-operation error *unions* | `spotify_web_api.errors` (`AddToQueueErrorBody`, …) |

`spotify_web_api.core` re-exports its whole public surface (a curated `__all__`), so import from `…core` rather than from the private modules beneath it (`…core.results`, `…core.exceptions`, `…core.auth.schemes`).

## Environments

The constructor takes an `environment` keyword — a **string literal alias**, not an enum — followed by `base_url`. The declared environments and the base URL each resolves to:

| `environment=` | Base URL | Hosting |
| --- | --- | --- |
| `"production"` *(default)* | `https://api.spotify.com/v1` | — |
| `"environment2"` | `https://accounts.spotify.com` | — |

Consequences to state on every contract sheet that touches configuration:

- Omitting `environment` gives you **`"production"`**, silently — it is whatever the description listed first, not necessarily production.
- `base_url` overrides the environment's URL entirely when both are passed.
- The token endpoint is derived from the same base URL (`/api/token`), so it always follows the environment — you never configure it separately.
- `ServerConfig` is a frozen pydantic model with `extra="forbid"`: a misspelled keyword raises `ValidationError` at construction rather than being ignored.
- `timeout` is validated too — the base client raises `ValueError` for any non-positive value.

## Auth pattern (two schemes)

OAuth 2.0 authorization code, exposed as the client's `oauth_2_0=` keyword taking `AuthorizationCodeCredentials` **or a plain dict**. The client fetches and caches the bearer token itself, lazily, from `<base_url>/api/token`.

```python
from spotify_web_api import Client
from spotify_web_api.core import AuthorizationCodeCredentials

def prompt(url: str) -> str:
    return input(f"Open {url}, then paste the code: ")

client = Client(oauth_2_0=AuthorizationCodeCredentials(client_id="…", client_secret="…", redirect_uri="…", prompt_for_authorization_code=prompt))
client = Client(oauth_2_0={"client_id": "…", "client_secret": "…", "redirect_uri": "…", "prompt_for_authorization_code": prompt})   # equivalent
```

OAuth 2.0 client credentials, exposed as the client's `oauth_2_0_client_credentials=` keyword taking `ClientCredentials` **or a plain dict**. The client fetches and caches the bearer token itself, lazily, from `<base_url>/api/token`.

```python
from spotify_web_api import Client
from spotify_web_api.core import ClientCredentials

client = Client(oauth_2_0_client_credentials=ClientCredentials(client_id="…", client_secret="…"))
client = Client(oauth_2_0_client_credentials={"client_id": "…", "client_secret": "…"})   # equivalent
```

**Every credentials keyword is optional at the type level and that is a trap worth flagging on every sheet.** Omit it and the client is built with `no_auth`: every request goes out unauthenticated. Nothing fails at construction. Most APIs then answer `401`; an API that serves anonymous traffic at all answers `200` and hides the omission entirely — verify the keyword is set rather than waiting for a `401` to tell you.

See `python-authentication` for the full picture, including what a *failed token fetch* raises — it is not what a caller expects, and it is the single most common surprise in this SDK.

## Controllers

Controllers and their operation counts (`client.<attr>`):

| Attribute | Class | Ops | Area |
| --- | --- | --- | --- |
| `client.albums` | `Albums` / `AsyncAlbums` | 9 | `check_users_saved_albums` · `get_an_album` · `get_an_albums_tracks` · `get_an_artists_albums` · `get_multiple_albums` · `get_new_releases` · … |
| `client.artists` | `Artists` / `AsyncArtists` | 10 | `check_current_user_follows` · `follow_artists_users` · `get_an_artist` · `get_an_artists_albums` · `get_an_artists_related_artists` · `get_an_artists_top_tracks` · … |
| `client.audiobooks` | `Audiobooks` / `AsyncAudiobooks` | 7 | `check_users_saved_audiobooks` · `get_an_audiobook` · `get_audiobook_chapters` · `get_multiple_audiobooks` · `get_users_saved_audiobooks` · `remove_audiobooks_user` · … |
| `client.categories_api` | `CategoriesApi` / `AsyncCategoriesApi` | 3 | `get_a_categories_playlists` · `get_a_category` · `get_categories` |
| `client.chapters` | `Chapters` / `AsyncChapters` | 3 | `get_a_chapter` · `get_audiobook_chapters` · `get_several_chapters` |
| `client.episodes` | `Episodes` / `AsyncEpisodes` | 7 | `check_users_saved_episodes` · `get_a_shows_episodes` · `get_an_episode` · `get_multiple_episodes` · `get_users_saved_episodes` · `remove_episodes_user` · … |
| `client.genres` | `Genres` / `AsyncGenres` | 1 | `get_recommendation_genres` |
| `client.library` | `Library` / `AsyncLibrary` | 29 | `change_playlist_details` · `check_current_user_follows` · `check_users_saved_albums` · `check_users_saved_audiobooks` · `check_users_saved_episodes` · `check_users_saved_shows` · … |
| `client.markets_api` | `MarketsApi` / `AsyncMarketsApi` | 1 | `get_available_markets` |
| `client.player` | `Player` / `AsyncPlayer` | 15 | `add_to_queue` · `get_a_users_available_devices` · `get_information_about_the_users_current_playback` · `get_queue` · `get_recently_played` · `get_the_users_currently_playing_track` · … |
| `client.playlists` | `Playlists` / `AsyncPlaylists` | 16 | `add_tracks_to_playlist` · `change_playlist_details` · `check_if_user_follows_playlist` · `create_playlist` · `follow_playlist` · `get_a_categories_playlists` · … |
| `client.search` | `Search` / `AsyncSearch` | 1 | `search` |
| `client.shows` | `Shows` / `AsyncShows` | 7 | `check_users_saved_shows` · `get_a_show` · `get_a_shows_episodes` · `get_multiple_shows` · `get_users_saved_shows` · `remove_shows_user` · … |
| `client.tracks` | `Tracks` / `AsyncTracks` | 17 | `add_tracks_to_playlist` · `check_users_saved_tracks` · `get_an_albums_tracks` · `get_an_artists_top_tracks` · `get_audio_analysis` · `get_audio_features` · … |
| `client.users` | `Users` / `AsyncUsers` | 12 | `check_current_user_follows` · `check_if_user_follows_playlist` · `follow_artists_users` · `follow_playlist` · `get_current_users_profile` · `get_followed` · … |

Every controller has an `Async…` peer whose operations are identical in name and parameters and differ solely by being awaited. Do not emit a separate row for an async operation; state the rule once on the sheet.

The SDK map's controller table carries the same counts and links to a page per controller (`map/operations/<controller>.md`) — go there for the operations themselves.

## SDK map — look up first, open the module second

The SDK ships a generated map at its **root** — the directory holding `pyproject.toml`, the `spotify_web_api/` source directory, and these two entries:

- **`sdk-map.md`** — the index: client construction with the full constructor-keyword table, the error-handling model (`ApiError` / `ApiResult` / `RawError`, Case A vs Case B), where models, enums and error aliases live, servers and auth, and the link table into the operations pages.
- **`map/operations/<controller>.md`** — one page per controller, one `###` block per operation: the HTTP verb and route, the sync parsed signature, each parameter's role and wire name, both return types, the error alias with the status each arm maps from, and a **Type sources** table naming the module that declares every type the operation mentions.

**Installing the distribution does not give you the map.** `pyproject.toml` ships the `spotify_web_api/` package only, so `sdk-map.md` and `map/operations/` are absent from the installed package — they live in the SDK's own source tree, at the root of its repository, <https://github.com/context-plugins/spotify-python-sdk>. One clone therefore brings the map and the code it describes together, in lockstep by construction. Clone it to a temporary directory, outside the project repo:

```bash
git clone --depth 1 --branch main https://github.com/context-plugins/spotify-python-sdk
```

Keep the `--branch main`: it is the branch this SDK is released from, and the repository's default branch may carry a different version — a map read from the wrong branch describes code you do not have.

Every `Source` path on the map is relative to that SDK root, so `spotify_web_api/models/album_base.py` opens as written from there — and the same path resolves inside the installed package, which is where you read a module's body once the map has named it.

**The map is the locator; the source modules are the shapes.** Read the map first — signatures, routes, parameter roles, return types, error unions, and which module declares a type are all answered there without opening a single `.py` file. Then open the one module the map names for what it deliberately does not carry: a model's members, an enum's values, a field's wire alias. The map says so itself — *"Shapes live only in the source … Never grep for a type."*

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted parameter actually selects — the map will not settle it. Open the operation's docstring in `spotify_web_api/apis/<controller>.py` (or `client.py` where operations sit on the client) and `api-reference.md` at the SDK root for that operation *before* writing the sheet row, and record what you found there. A value you already "know" for a field the map types as a plain `str` is a lookup, not a recall — the memory ban applies to it.

`sdk-map.md` carries the invariants every operation block assumes, so load it before any `map/operations/` page; the pages are written to be read beside it.

## Contract facts — the map first, then the module

**Six of these are map lookups — don't open the module for them:** an operation's signature, parameters and return type; the client's constructor keywords; the `timeout` default; the members of `ApiError` / `Success` / `Failure` / `RawError`; an operation's error union and the status each arm maps from; base-URL and auth wiring. The table below covers everything else, and the full body behind a map row.

Read the one module that owns the fact **inside the installed package**. Locate it first:

```bash
python -c "import spotify_web_api, pathlib; print(pathlib.Path(spotify_web_api.__file__).parent)"
```

Failing that, it is under the project's environment (`.venv/Lib/site-packages/spotify_web_api` on Windows, `.venv/lib/python3.*/site-packages/spotify_web_api` elsewhere). **If the package is not installed, there is no source to read** — mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory. Paths below are relative to that package root:

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
| An operation's error mapper (status → schema) | `errors/<operation>_error.py` |

**Read scoped.** These modules carry long design docstrings; `grep -n` for the symbol and read the surrounding lines rather than whole files. Never quote a docstring's design rationale onto a contract sheet — the sheet carries facts an implementer must obey, not the reasoning behind them.

Keep lookups cheap — the rules that keep a session's context small:

- Collect the contracts for **every** in-scope operation in **one** pass — signature, required members with wire aliases, the error union, enum values — into a short **contract sheet** in your plan or working notes, then implement from the sheet. Don't re-open a module per member, and never re-look-up a fact the sheet already carries.
- Recurse into a model's members only where the task actually sets them — a full transitive expansion is hundreds of rows and nobody needs it.
- Trust the interpreter over this page: if a name here ever fails to type-check or import, re-read the module the table above names and report the drift; never patch around it from memory.

## Integration workflow — load the companion skill at each step

Before you write the code for each step, load the named companion skill — even if you have already read the relevant module. Each step calls out the trap the signature hides (in *parens*). A typical integration reaches them in this order:

1. **Client construction & lifetime** — load **python-client-initialization** before you write `Client(...)` or `AsyncClient(...)`. (*The signature won't tell you:* the constructor is keyword-only, so nothing can be passed positionally; the client owns an `httpx` connection pool and you **must** `close()` (sync) or `await aclose()` (async) or use it as a context manager; it must be long-lived and module- or app-scoped, never rebuilt per request; the sync and async clients do not mix; and the transport-override keyword differs by client — `custom_http_client` vs `custom_async_http_client`.)
2. **Authentication** — load **python-authentication** before you set credentials. The two schemes are `oauth_2_0=` and `oauth_2_0_client_credentials=`. (*The signature won't tell you:* every credentials keyword is *optional* — omit it and every request goes out unauthenticated, with no failure at construction and not necessarily a `401` to tell you; the token is fetched lazily and cached by the client; and a **failed token fetch** raises something other than what a caller expects and **bypasses the non-raising response mode** entirely. Load secrets from the environment or a secret store, never hardcode.)
3. **Calling an endpoint** — load **python-calling-endpoints** before the first `client.<controller>.<operation>(...)` call. (*The signature won't tell you:* every operation splits positional path params (and sometimes the body) from a keyword-only tail after `*`; every keyword-only parameter has a **real** default, so there is no "must pass `None` explicitly" hazard; **43 operations return `None`**, so `with_raw_response` is the only way to observe their status code; and the two response modes — raising vs `ApiResult` — behave differently on failure.)
4. **Models** — load **python-models** the moment a request/response member is not a plain string or number. (*The signature won't tell you:* `Optional[T]` here is `T | UnsetType`, **not** `typing.Optional` — `None` is not a legal value for it; models are frozen pydantic instances with `…Dict` TypedDict companions; enums are **open** (`…OrStr`/`…OrInt`), so an unknown wire value passes through as a plain `str`/`int` rather than raising; wire aliases differ from Python member names; unknown response fields are **preserved**, not dropped; and serialize via `to_dict`/`to_json`.)
5. **Error handling** — load **python-error-handling** before you write any `try/except`. (*The signature won't tell you:* there is a single `ApiError` type whose `.error` is a **per-operation union**, and a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, and bypasses both response modes; `httpx` transport exceptions reach your boundary unwrapped.)
6. **Configuration & resilience** — load **python-configuration-resilience** when you set the base URL, timeouts, proxies, TLS, or logging. (*The signature won't tell you:* **the SDK performs no retries at all** — retry/backoff is entirely yours to build or deliberately omit; `timeout` defaults to `30.0` and is a single float that maps onto `httpx`'s timeout semantics rather than bounding the whole call; and there is no logging hook — you wrap the transport seam.)
7. **Testing** — load **python-testing** before you stub the SDK. (*The signature won't tell you:* the seam is the **transport protocol** (`HttpClient`/`AsyncHttpClient` in `core/transport.py`) passed as `custom_http_client`, or `respx` at the `httpx` layer — not the client class; assert on the request the SDK actually built, and cover all four failure kinds, decode failures included.)

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a Python sheet is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone:

1. **Sync or async** — which client class, and the reminder that the two do not mix. Plus the `close()`/`aclose()` obligation and where the client is held.
2. **The keyword-only boundary** for each operation: what is positional (path params, sometimes the body) and what sits after `*`. Every keyword-only parameter has a real default, so there is no "must pass `None` explicitly" hazard — say so, so nobody writes defensive `None`s.
3. **The 43 operations that return `None`** — `albums.remove_albums_user` · `albums.save_albums_user` · `artists.follow_artists_users` · `artists.unfollow_artists_users` · `audiobooks.remove_audiobooks_user` · `audiobooks.save_audiobooks_user` · `episodes.remove_episodes_user` · `episodes.save_episodes_user` · `library.change_playlist_details` · `library.follow_artists_users` · `library.remove_albums_user` · `library.remove_audiobooks_user` · `library.remove_episodes_user` · `library.remove_shows_user` · `library.remove_tracks_user` · `library.save_albums_user` · `library.save_audiobooks_user` · `library.save_episodes_user` · `library.save_shows_user` · `library.save_tracks_user` · `library.unfollow_artists_users` · `player.add_to_queue` · `player.pause_a_users_playback` · `player.seek_to_position_in_currently_playing_track` · `player.set_repeat_mode_on_users_playback` · `player.set_volume_for_users_playback` · `player.skip_users_playback_to_next_track` · `player.skip_users_playback_to_previous_track` · `player.start_a_users_playback` · `player.toggle_shuffle_for_users_playback` · `player.transfer_a_users_playback` · `playlists.change_playlist_details` · `playlists.follow_playlist` · `playlists.unfollow_playlist` · `playlists.upload_custom_playlist_cover` · `shows.remove_shows_user` · `shows.save_shows_user` · `tracks.remove_tracks_user` · `tracks.save_tracks_user` · `users.follow_artists_users` · `users.follow_playlist` · `users.unfollow_artists_users` · `users.unfollow_playlist`. Their raw peers are `ApiResult[None, …]`, so `with_raw_response` is the only way to observe the status code.
4. **Required vs `UNSET`** for every model member the task sets, and the fact that `Optional[T]` here is `T | UnsetType` — **not** `typing.Optional`, so `None` is not a legal value for it.
5. **The `ApiError.error` union** for each operation in scope — there are **five** typed error bodies in this SDK, so the union is never uniform. Every union is `<Typed> | RawError`:
   1. `Forbidden1` — 138 operations (`albums.check_users_saved_albums` · `albums.get_an_album` · `albums.get_an_albums_tracks` · `albums.get_an_artists_albums` · `albums.get_multiple_albums` · `albums.get_new_releases` · `albums.get_users_saved_albums` · `albums.remove_albums_user` · `albums.save_albums_user` · `artists.check_current_user_follows` · `artists.follow_artists_users` · `artists.get_an_artist` · `artists.get_an_artists_albums` · `artists.get_an_artists_related_artists` · `artists.get_an_artists_top_tracks` · `artists.get_followed` · `artists.get_multiple_artists` · `artists.get_users_top_artists` · `artists.unfollow_artists_users` · `audiobooks.check_users_saved_audiobooks` · `audiobooks.get_an_audiobook` · `audiobooks.get_audiobook_chapters` · `audiobooks.get_multiple_audiobooks` · `audiobooks.get_users_saved_audiobooks` · `audiobooks.remove_audiobooks_user` · `audiobooks.save_audiobooks_user` · `categories_api.get_a_categories_playlists` · `categories_api.get_a_category` · `categories_api.get_categories` · `chapters.get_a_chapter` · `chapters.get_audiobook_chapters` · `chapters.get_several_chapters` · `episodes.check_users_saved_episodes` · `episodes.get_a_shows_episodes` · `episodes.get_an_episode` · `episodes.get_multiple_episodes` · `episodes.get_users_saved_episodes` · `episodes.remove_episodes_user` · `episodes.save_episodes_user` · `genres.get_recommendation_genres` · `library.change_playlist_details` · `library.check_current_user_follows` · `library.check_users_saved_albums` · `library.check_users_saved_audiobooks` · `library.check_users_saved_episodes` · `library.check_users_saved_shows` · `library.check_users_saved_tracks` · `library.create_playlist` · `library.follow_artists_users` · `library.get_a_list_of_current_users_playlists` · `library.get_followed` · `library.get_users_saved_albums` · `library.get_users_saved_audiobooks` · `library.get_users_saved_episodes` · `library.get_users_saved_shows` · `library.get_users_saved_tracks` · `library.get_users_top_artists` · `library.get_users_top_tracks` · `library.remove_albums_user` · `library.remove_audiobooks_user` · `library.remove_episodes_user` · `library.remove_shows_user` · `library.remove_tracks_user` · `library.save_albums_user` · `library.save_audiobooks_user` · `library.save_episodes_user` · `library.save_shows_user` · `library.save_tracks_user` · `library.unfollow_artists_users` · `markets_api.get_available_markets` · `player.add_to_queue` · `player.get_a_users_available_devices` · `player.get_information_about_the_users_current_playback` · `player.get_queue` · `player.get_recently_played` · `player.get_the_users_currently_playing_track` · `player.pause_a_users_playback` · `player.seek_to_position_in_currently_playing_track` · `player.set_repeat_mode_on_users_playback` · `player.set_volume_for_users_playback` · `player.skip_users_playback_to_next_track` · `player.skip_users_playback_to_previous_track` · `player.start_a_users_playback` · `player.toggle_shuffle_for_users_playback` · `player.transfer_a_users_playback` · `playlists.add_tracks_to_playlist` · `playlists.change_playlist_details` · `playlists.check_if_user_follows_playlist` · `playlists.create_playlist` · `playlists.follow_playlist` · `playlists.get_a_categories_playlists` · `playlists.get_a_list_of_current_users_playlists` · `playlists.get_featured_playlists` · `playlists.get_list_users_playlists` · `playlists.get_playlist` · `playlists.get_playlist_cover` · `playlists.get_playlists_tracks` · `playlists.remove_tracks_playlist` · `playlists.reorder_or_replace_playlists_tracks` · `playlists.unfollow_playlist` · `playlists.upload_custom_playlist_cover` · `search.search` · `shows.check_users_saved_shows` · `shows.get_a_show` · `shows.get_a_shows_episodes` · `shows.get_multiple_shows` · `shows.get_users_saved_shows` · `shows.remove_shows_user` · `shows.save_shows_user` · `tracks.add_tracks_to_playlist` · `tracks.check_users_saved_tracks` · `tracks.get_an_albums_tracks` · `tracks.get_an_artists_top_tracks` · `tracks.get_audio_analysis` · `tracks.get_audio_features` · `tracks.get_playlists_tracks` · `tracks.get_recommendations` · `tracks.get_several_audio_features` · `tracks.get_several_tracks` · `tracks.get_track` · `tracks.get_users_saved_tracks` · `tracks.get_users_top_tracks` · `tracks.remove_tracks_playlist` · `tracks.remove_tracks_user` · `tracks.reorder_or_replace_playlists_tracks` · `tracks.save_tracks_user` · `users.check_current_user_follows` · `users.check_if_user_follows_playlist` · `users.follow_artists_users` · `users.follow_playlist` · `users.get_current_users_profile` · `users.get_followed` · `users.get_list_users_playlists` · `users.get_users_profile` · `users.get_users_top_artists` · `users.get_users_top_tracks` · `users.unfollow_artists_users` · `users.unfollow_playlist`); distinguishing members `error`
   2. `TooManyRequests1` — 138 operations (`albums.check_users_saved_albums` · `albums.get_an_album` · `albums.get_an_albums_tracks` · `albums.get_an_artists_albums` · `albums.get_multiple_albums` · `albums.get_new_releases` · `albums.get_users_saved_albums` · `albums.remove_albums_user` · `albums.save_albums_user` · `artists.check_current_user_follows` · `artists.follow_artists_users` · `artists.get_an_artist` · `artists.get_an_artists_albums` · `artists.get_an_artists_related_artists` · `artists.get_an_artists_top_tracks` · `artists.get_followed` · `artists.get_multiple_artists` · `artists.get_users_top_artists` · `artists.unfollow_artists_users` · `audiobooks.check_users_saved_audiobooks` · `audiobooks.get_an_audiobook` · `audiobooks.get_audiobook_chapters` · `audiobooks.get_multiple_audiobooks` · `audiobooks.get_users_saved_audiobooks` · `audiobooks.remove_audiobooks_user` · `audiobooks.save_audiobooks_user` · `categories_api.get_a_categories_playlists` · `categories_api.get_a_category` · `categories_api.get_categories` · `chapters.get_a_chapter` · `chapters.get_audiobook_chapters` · `chapters.get_several_chapters` · `episodes.check_users_saved_episodes` · `episodes.get_a_shows_episodes` · `episodes.get_an_episode` · `episodes.get_multiple_episodes` · `episodes.get_users_saved_episodes` · `episodes.remove_episodes_user` · `episodes.save_episodes_user` · `genres.get_recommendation_genres` · `library.change_playlist_details` · `library.check_current_user_follows` · `library.check_users_saved_albums` · `library.check_users_saved_audiobooks` · `library.check_users_saved_episodes` · `library.check_users_saved_shows` · `library.check_users_saved_tracks` · `library.create_playlist` · `library.follow_artists_users` · `library.get_a_list_of_current_users_playlists` · `library.get_followed` · `library.get_users_saved_albums` · `library.get_users_saved_audiobooks` · `library.get_users_saved_episodes` · `library.get_users_saved_shows` · `library.get_users_saved_tracks` · `library.get_users_top_artists` · `library.get_users_top_tracks` · `library.remove_albums_user` · `library.remove_audiobooks_user` · `library.remove_episodes_user` · `library.remove_shows_user` · `library.remove_tracks_user` · `library.save_albums_user` · `library.save_audiobooks_user` · `library.save_episodes_user` · `library.save_shows_user` · `library.save_tracks_user` · `library.unfollow_artists_users` · `markets_api.get_available_markets` · `player.add_to_queue` · `player.get_a_users_available_devices` · `player.get_information_about_the_users_current_playback` · `player.get_queue` · `player.get_recently_played` · `player.get_the_users_currently_playing_track` · `player.pause_a_users_playback` · `player.seek_to_position_in_currently_playing_track` · `player.set_repeat_mode_on_users_playback` · `player.set_volume_for_users_playback` · `player.skip_users_playback_to_next_track` · `player.skip_users_playback_to_previous_track` · `player.start_a_users_playback` · `player.toggle_shuffle_for_users_playback` · `player.transfer_a_users_playback` · `playlists.add_tracks_to_playlist` · `playlists.change_playlist_details` · `playlists.check_if_user_follows_playlist` · `playlists.create_playlist` · `playlists.follow_playlist` · `playlists.get_a_categories_playlists` · `playlists.get_a_list_of_current_users_playlists` · `playlists.get_featured_playlists` · `playlists.get_list_users_playlists` · `playlists.get_playlist` · `playlists.get_playlist_cover` · `playlists.get_playlists_tracks` · `playlists.remove_tracks_playlist` · `playlists.reorder_or_replace_playlists_tracks` · `playlists.unfollow_playlist` · `playlists.upload_custom_playlist_cover` · `search.search` · `shows.check_users_saved_shows` · `shows.get_a_show` · `shows.get_a_shows_episodes` · `shows.get_multiple_shows` · `shows.get_users_saved_shows` · `shows.remove_shows_user` · `shows.save_shows_user` · `tracks.add_tracks_to_playlist` · `tracks.check_users_saved_tracks` · `tracks.get_an_albums_tracks` · `tracks.get_an_artists_top_tracks` · `tracks.get_audio_analysis` · `tracks.get_audio_features` · `tracks.get_playlists_tracks` · `tracks.get_recommendations` · `tracks.get_several_audio_features` · `tracks.get_several_tracks` · `tracks.get_track` · `tracks.get_users_saved_tracks` · `tracks.get_users_top_tracks` · `tracks.remove_tracks_playlist` · `tracks.remove_tracks_user` · `tracks.reorder_or_replace_playlists_tracks` · `tracks.save_tracks_user` · `users.check_current_user_follows` · `users.check_if_user_follows_playlist` · `users.follow_artists_users` · `users.follow_playlist` · `users.get_current_users_profile` · `users.get_followed` · `users.get_list_users_playlists` · `users.get_users_profile` · `users.get_users_top_artists` · `users.get_users_top_tracks` · `users.unfollow_artists_users` · `users.unfollow_playlist`); distinguishing members `error`
   3. `Unauthorized1` — 138 operations (`albums.check_users_saved_albums` · `albums.get_an_album` · `albums.get_an_albums_tracks` · `albums.get_an_artists_albums` · `albums.get_multiple_albums` · `albums.get_new_releases` · `albums.get_users_saved_albums` · `albums.remove_albums_user` · `albums.save_albums_user` · `artists.check_current_user_follows` · `artists.follow_artists_users` · `artists.get_an_artist` · `artists.get_an_artists_albums` · `artists.get_an_artists_related_artists` · `artists.get_an_artists_top_tracks` · `artists.get_followed` · `artists.get_multiple_artists` · `artists.get_users_top_artists` · `artists.unfollow_artists_users` · `audiobooks.check_users_saved_audiobooks` · `audiobooks.get_an_audiobook` · `audiobooks.get_audiobook_chapters` · `audiobooks.get_multiple_audiobooks` · `audiobooks.get_users_saved_audiobooks` · `audiobooks.remove_audiobooks_user` · `audiobooks.save_audiobooks_user` · `categories_api.get_a_categories_playlists` · `categories_api.get_a_category` · `categories_api.get_categories` · `chapters.get_a_chapter` · `chapters.get_audiobook_chapters` · `chapters.get_several_chapters` · `episodes.check_users_saved_episodes` · `episodes.get_a_shows_episodes` · `episodes.get_an_episode` · `episodes.get_multiple_episodes` · `episodes.get_users_saved_episodes` · `episodes.remove_episodes_user` · `episodes.save_episodes_user` · `genres.get_recommendation_genres` · `library.change_playlist_details` · `library.check_current_user_follows` · `library.check_users_saved_albums` · `library.check_users_saved_audiobooks` · `library.check_users_saved_episodes` · `library.check_users_saved_shows` · `library.check_users_saved_tracks` · `library.create_playlist` · `library.follow_artists_users` · `library.get_a_list_of_current_users_playlists` · `library.get_followed` · `library.get_users_saved_albums` · `library.get_users_saved_audiobooks` · `library.get_users_saved_episodes` · `library.get_users_saved_shows` · `library.get_users_saved_tracks` · `library.get_users_top_artists` · `library.get_users_top_tracks` · `library.remove_albums_user` · `library.remove_audiobooks_user` · `library.remove_episodes_user` · `library.remove_shows_user` · `library.remove_tracks_user` · `library.save_albums_user` · `library.save_audiobooks_user` · `library.save_episodes_user` · `library.save_shows_user` · `library.save_tracks_user` · `library.unfollow_artists_users` · `markets_api.get_available_markets` · `player.add_to_queue` · `player.get_a_users_available_devices` · `player.get_information_about_the_users_current_playback` · `player.get_queue` · `player.get_recently_played` · `player.get_the_users_currently_playing_track` · `player.pause_a_users_playback` · `player.seek_to_position_in_currently_playing_track` · `player.set_repeat_mode_on_users_playback` · `player.set_volume_for_users_playback` · `player.skip_users_playback_to_next_track` · `player.skip_users_playback_to_previous_track` · `player.start_a_users_playback` · `player.toggle_shuffle_for_users_playback` · `player.transfer_a_users_playback` · `playlists.add_tracks_to_playlist` · `playlists.change_playlist_details` · `playlists.check_if_user_follows_playlist` · `playlists.create_playlist` · `playlists.follow_playlist` · `playlists.get_a_categories_playlists` · `playlists.get_a_list_of_current_users_playlists` · `playlists.get_featured_playlists` · `playlists.get_list_users_playlists` · `playlists.get_playlist` · `playlists.get_playlist_cover` · `playlists.get_playlists_tracks` · `playlists.remove_tracks_playlist` · `playlists.reorder_or_replace_playlists_tracks` · `playlists.unfollow_playlist` · `playlists.upload_custom_playlist_cover` · `search.search` · `shows.check_users_saved_shows` · `shows.get_a_show` · `shows.get_a_shows_episodes` · `shows.get_multiple_shows` · `shows.get_users_saved_shows` · `shows.remove_shows_user` · `shows.save_shows_user` · `tracks.add_tracks_to_playlist` · `tracks.check_users_saved_tracks` · `tracks.get_an_albums_tracks` · `tracks.get_an_artists_top_tracks` · `tracks.get_audio_analysis` · `tracks.get_audio_features` · `tracks.get_playlists_tracks` · `tracks.get_recommendations` · `tracks.get_several_audio_features` · `tracks.get_several_tracks` · `tracks.get_track` · `tracks.get_users_saved_tracks` · `tracks.get_users_top_tracks` · `tracks.remove_tracks_playlist` · `tracks.remove_tracks_user` · `tracks.reorder_or_replace_playlists_tracks` · `tracks.save_tracks_user` · `users.check_current_user_follows` · `users.check_if_user_follows_playlist` · `users.follow_artists_users` · `users.follow_playlist` · `users.get_current_users_profile` · `users.get_followed` · `users.get_list_users_playlists` · `users.get_users_profile` · `users.get_users_top_artists` · `users.get_users_top_tracks` · `users.unfollow_artists_users` · `users.unfollow_playlist`); distinguishing members `error`
   4. `BadRequest1` — 1 operation (`audiobooks.get_an_audiobook`); distinguishing members `error`
   5. `NotFound1` — 1 operation (`audiobooks.get_an_audiobook`); distinguishing members `error`
   6. So `isinstance(e.error, Forbidden1)` matches only 138 of 138 operations.
6. **That a decode failure raises `ValidationError`/`ValueError`, not `ApiError`, in both response modes** — `core/raw_client.py` states this in `_build_result`'s own docstring. **And that the 2xx path declares at least one required member on 56 return types, so a truncated body fails to decode there and passes silently everywhere else.** Any sheet row for a call whose result is used must name the members the implementer has to assert on.
7. **That the SDK performs no retries at all**, so retry/backoff is the caller's to build or deliberately omit.
8. **Which environment the `environment` keyword selects**, because omitting it is silently `"production"` of the 2 declared.
9. A **REQUIRED READING** block naming the `python-*` companions that govern the steps, with `MUST load` pointers.

