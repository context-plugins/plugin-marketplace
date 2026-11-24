from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_api_stories_by_story_id_error import (
    GetApiStoriesByStoryIdErrorBody,
    get_api_stories_by_story_id_error_mapper,
)
from ..errors.get_api_stories_by_story_id_materials_error import (
    GetApiStoriesByStoryIdMaterialsErrorBody,
    get_api_stories_by_story_id_materials_error_mapper,
)
from ..errors.get_api_stories_error import GetApiStoriesErrorBody, get_api_stories_error_mapper
from ..errors.get_api_stories_top_error import GetApiStoriesTopErrorBody, get_api_stories_top_error_mapper
from ..models.stories_page import StoriesPage
from ..models.story_lookup import StoryLookup
from ..models.story_materials import StoryMaterials
from ..models.top_stories import TopStories
from ..server.server import Server


class Stories:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StoriesWithRawResponse(client, server, auth)

    def get_api_stories(
        self,
        *,
        cursor: str | None = None,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StoriesPage:
        """Stories newest-first by the time of their latest article (``last_material_at``): stories with a published
        summary and ``importance >= 7``. Keyset pagination: omit ``cursor`` for the newest page, pass ``next_cursor``
        back for the next (older) one; ``null`` means the end. Cursors are opaque; an invalid one is a 400. Archive
        depth is tiered as on the feeds — paging back past your plan's horizon (Free 30 days, Basic 90, Pro 180) returns
        403 ``archive_horizon``.

        A story keeps moving up this list while articles keep joining it (``last_material_at`` is the keyset), and its
        summary is rewritten as materials arrive, so re-reading a ``story_id`` later can return a different summary —
        ``updated_at`` says when the facts last changed.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            page_size: Stories per page, 1 to 50 on every tier (default 20). ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of stories.

        Raises:
            ApiError: Invalid cursor (opaque; reuse ``next_cursor``) Missing or invalid API key. The request reaches
                past your plan's news-archive horizon (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points
                beyond it, or ``from_date`` does. The body's ``extra`` carries ``reason: archive_horizon``, your
                ``tier``, the plan's ``archive_days``, and (below Pro) an ``upgrade`` block with the higher tiers' caps
                and the pricing URL. The window is checked on the FIRST page, unlike the cursor: a ``from_date`` older
                than the horizon is refused immediately rather than after paging down to it. A window with only
                ``to_date`` is refused when that bound itself is past the horizon (the window is open-ended into the
                past). Windows and cursors inside the horizon are unaffected, and the request is refused rather than
                trimmed to the horizon, so a given URL always returns the same body. The Stories section is switched
                off. Rate limit exceeded — either the per-minute burst cap or the per-day volume cap. The
                ``Retry-After`` header is the earliest second a retry can succeed, not a guess (a burst block is short,
                ≤60s; a day-cap block is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The
                ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra`` names your tier, its
                ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro — an ``upgrade``
                block with the higher tiers' caps and the pricing URL. A rejected request does not itself consume quota,
                so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_stories(cursor=cursor, page_size=page_size, request_options=request_options)
        )

    def get_api_stories_by_story_id(
        self, story_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoryLookup:
        """One story — the summary AlphAI wrote from its articles, the key facts each with the publisher it was read
        from and the ``source_uid`` of that article, the per-ticker read, the open questions — wrapped in a lookup
        ``status``, because a ``story_id`` taken from an article row does not always name a current story:

        * ``found`` — ``story`` is filled.
        * ``merged`` — this story was folded into another one; ``redirect_to``
        is the surviving story's id. Fetch that one (a web page would 308).
        * ``not_a_story`` — the id belongs to an article that only one
        publisher carried, so there is no story to summarise; ``article`` names it (``/api/news/{uid}/``). An article's
        ``story_id`` resolves here for every row, so this is the normal answer for most of the feed: most events are
        carried by a single outlet.
        * An unknown id is a 404.

        ``summary_state`` tells you how to read the text: ``published`` (the summary covers every article the story had
        when it was written), ``stale`` (``new_materials`` articles joined since; the rewrite is queued — the summaries
        are debounced, so a fast-moving story is rewritten minutes, not seconds, after each new article), or
        ``preparing`` (no summary yet: ``title`` is the lead article's headline and ``summary`` its collector summary;
        ``key_facts``, ``why_it_matters``, ``ticker_takes`` and ``uncertainties`` are empty). A story older than your
        plan's archive horizon (by ``last_material_at``) is a 403 ``archive_horizon``, like a deep feed cursor.

        The summary is the model's own text, checked against the articles before publishing: every figure in it appears
        in a source, and no passage of more than a dozen words is copied from one. It is AI-generated financial
        information for research, not investment advice. Article bodies are never served; ``materials`` link to the
        publishers.

        Args:
            story_id: A story id — the ``story_id`` of any article row, or an id from ``/api/stories/``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The lookup — ``found``, ``merged`` or ``not_a_story``.

        Raises:
            ApiError: Missing or invalid API key. The request reaches past your plan's news-archive horizon (Free 30
                days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date`` does. The body's
                ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's ``archive_days``, and (below
                Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL. The window is checked on the
                FIRST page, unlike the cursor: a ``from_date`` older than the horizon is refused immediately rather than
                after paging down to it. A window with only ``to_date`` is refused when that bound itself is past the
                horizon (the window is open-ended into the past). Windows and cursors inside the horizon are unaffected,
                and the request is refused rather than trimmed to the horizon, so a given URL always returns the same
                body. No story or article with that id Rate limit exceeded — either the per-minute burst cap or the
                per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess
                (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_api_stories_by_story_id(story_id, request_options=request_options))

    def get_api_stories_by_story_id_materials(
        self,
        story_id: str,
        *,
        cursor: str | None = None,
        page_size: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StoryMaterials:
        """Every article behind a story, oldest first — the materials the summary was written from and the ones that
        joined after it. Same visibility as the feed (``relevance_score >= 4``); each row carries its ``uid`` (open it
        with ``/api/news/{uid}/``), publisher, publication time, the publisher's URL and its relevance score. A story's
        ``key_facts`` point into this list by ``source_uid``. Keyset pagination with ``cursor`` / ``next_cursor`` as on
        ``/api/stories/``; most stories fit one page. Only a current story (``status: found``) has materials: a merged
        or not-a-story id is a 404 here — resolve it through ``/api/stories/{story_id}/`` first.

        Args:
            story_id: Value sent with the request.
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the first (oldest) page.
            page_size: Articles per page, 1 to 50 on every tier (default 50). ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of the story's articles, oldest first.

        Raises:
            ApiError: Invalid cursor Missing or invalid API key. No current story with that id (merged and
                single-publisher ids included) Rate limit exceeded — either the per-minute burst cap or the per-day
                volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess (a burst
                block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The
                ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra`` names your tier, its
                ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro — an ``upgrade``
                block with the higher tiers' caps and the pricing URL. A rejected request does not itself consume quota,
                so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_stories_by_story_id_materials(
                story_id, cursor=cursor, page_size=page_size, request_options=request_options
            ),
        )

    def get_api_stories_top(self, *, request_options: RequestOptionsOrDict | None = None) -> TopStories:
        """The strongest stories of the trailing 48 hours, ranked: a story's ``importance`` plus a coverage bonus of
        ``min(3, log2(publishers))``, minus one point per 12 hours since its key facts last changed (``updated_at``).
        One slot per ticker and two per no-ticker macro category, so one event cannot fill the list. Only stories with a
        published summary and ``importance >= 7`` qualify. Fixed size of up to 50, no pagination; ``ranking_version``
        names the formula so a change is visible, ``as_of`` is when the list was ranked.

        Compared with ``/api/news/trending/``: trending ranks single articles and collapses reprints; this ranks the
        stories themselves (two or more publishers), each with an AlphAI-written summary. A story's ``story_id`` is the
        same key an article row carries, so a trending item's ``story_id`` opens the story here.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ranked stories, strongest first.

        Raises:
            ApiError: Missing or invalid API key. The Stories section is switched off. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_api_stories_top(request_options=request_options))

    @property
    def with_raw_response(self) -> StoriesWithRawResponse:
        return self._with_raw_response


class AsyncStories:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStoriesWithRawResponse(client, server, auth)

    async def get_api_stories(
        self,
        *,
        cursor: str | None = None,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StoriesPage:
        """Stories newest-first by the time of their latest article (``last_material_at``): stories with a published
        summary and ``importance >= 7``. Keyset pagination: omit ``cursor`` for the newest page, pass ``next_cursor``
        back for the next (older) one; ``null`` means the end. Cursors are opaque; an invalid one is a 400. Archive
        depth is tiered as on the feeds — paging back past your plan's horizon (Free 30 days, Basic 90, Pro 180) returns
        403 ``archive_horizon``.

        A story keeps moving up this list while articles keep joining it (``last_material_at`` is the keyset), and its
        summary is rewritten as materials arrive, so re-reading a ``story_id`` later can return a different summary —
        ``updated_at`` says when the facts last changed.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            page_size: Stories per page, 1 to 50 on every tier (default 20). ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of stories.

        Raises:
            ApiError: Invalid cursor (opaque; reuse ``next_cursor``) Missing or invalid API key. The request reaches
                past your plan's news-archive horizon (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points
                beyond it, or ``from_date`` does. The body's ``extra`` carries ``reason: archive_horizon``, your
                ``tier``, the plan's ``archive_days``, and (below Pro) an ``upgrade`` block with the higher tiers' caps
                and the pricing URL. The window is checked on the FIRST page, unlike the cursor: a ``from_date`` older
                than the horizon is refused immediately rather than after paging down to it. A window with only
                ``to_date`` is refused when that bound itself is past the horizon (the window is open-ended into the
                past). Windows and cursors inside the horizon are unaffected, and the request is refused rather than
                trimmed to the horizon, so a given URL always returns the same body. The Stories section is switched
                off. Rate limit exceeded — either the per-minute burst cap or the per-day volume cap. The
                ``Retry-After`` header is the earliest second a retry can succeed, not a guess (a burst block is short,
                ≤60s; a day-cap block is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The
                ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra`` names your tier, its
                ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro — an ``upgrade``
                block with the higher tiers' caps and the pricing URL. A rejected request does not itself consume quota,
                so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_stories(
                cursor=cursor, page_size=page_size, request_options=request_options
            ),
        )

    async def get_api_stories_by_story_id(
        self, story_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StoryLookup:
        """One story — the summary AlphAI wrote from its articles, the key facts each with the publisher it was read
        from and the ``source_uid`` of that article, the per-ticker read, the open questions — wrapped in a lookup
        ``status``, because a ``story_id`` taken from an article row does not always name a current story:

        * ``found`` — ``story`` is filled.
        * ``merged`` — this story was folded into another one; ``redirect_to``
        is the surviving story's id. Fetch that one (a web page would 308).
        * ``not_a_story`` — the id belongs to an article that only one
        publisher carried, so there is no story to summarise; ``article`` names it (``/api/news/{uid}/``). An article's
        ``story_id`` resolves here for every row, so this is the normal answer for most of the feed: most events are
        carried by a single outlet.
        * An unknown id is a 404.

        ``summary_state`` tells you how to read the text: ``published`` (the summary covers every article the story had
        when it was written), ``stale`` (``new_materials`` articles joined since; the rewrite is queued — the summaries
        are debounced, so a fast-moving story is rewritten minutes, not seconds, after each new article), or
        ``preparing`` (no summary yet: ``title`` is the lead article's headline and ``summary`` its collector summary;
        ``key_facts``, ``why_it_matters``, ``ticker_takes`` and ``uncertainties`` are empty). A story older than your
        plan's archive horizon (by ``last_material_at``) is a 403 ``archive_horizon``, like a deep feed cursor.

        The summary is the model's own text, checked against the articles before publishing: every figure in it appears
        in a source, and no passage of more than a dozen words is copied from one. It is AI-generated financial
        information for research, not investment advice. Article bodies are never served; ``materials`` link to the
        publishers.

        Args:
            story_id: A story id — the ``story_id`` of any article row, or an id from ``/api/stories/``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The lookup — ``found``, ``merged`` or ``not_a_story``.

        Raises:
            ApiError: Missing or invalid API key. The request reaches past your plan's news-archive horizon (Free 30
                days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date`` does. The body's
                ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's ``archive_days``, and (below
                Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL. The window is checked on the
                FIRST page, unlike the cursor: a ``from_date`` older than the horizon is refused immediately rather than
                after paging down to it. A window with only ``to_date`` is refused when that bound itself is past the
                horizon (the window is open-ended into the past). Windows and cursors inside the horizon are unaffected,
                and the request is refused rather than trimmed to the horizon, so a given URL always returns the same
                body. No story or article with that id Rate limit exceeded — either the per-minute burst cap or the
                per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess
                (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_stories_by_story_id(story_id, request_options=request_options)
        )

    async def get_api_stories_by_story_id_materials(
        self,
        story_id: str,
        *,
        cursor: str | None = None,
        page_size: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StoryMaterials:
        """Every article behind a story, oldest first — the materials the summary was written from and the ones that
        joined after it. Same visibility as the feed (``relevance_score >= 4``); each row carries its ``uid`` (open it
        with ``/api/news/{uid}/``), publisher, publication time, the publisher's URL and its relevance score. A story's
        ``key_facts`` point into this list by ``source_uid``. Keyset pagination with ``cursor`` / ``next_cursor`` as on
        ``/api/stories/``; most stories fit one page. Only a current story (``status: found``) has materials: a merged
        or not-a-story id is a 404 here — resolve it through ``/api/stories/{story_id}/`` first.

        Args:
            story_id: Value sent with the request.
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the first (oldest) page.
            page_size: Articles per page, 1 to 50 on every tier (default 50). ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of the story's articles, oldest first.

        Raises:
            ApiError: Invalid cursor Missing or invalid API key. No current story with that id (merged and
                single-publisher ids included) Rate limit exceeded — either the per-minute burst cap or the per-day
                volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess (a burst
                block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The
                ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra`` names your tier, its
                ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro — an ``upgrade``
                block with the higher tiers' caps and the pricing URL. A rejected request does not itself consume quota,
                so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_stories_by_story_id_materials(
                story_id, cursor=cursor, page_size=page_size, request_options=request_options
            ),
        )

    async def get_api_stories_top(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> TopStories:
        """The strongest stories of the trailing 48 hours, ranked: a story's ``importance`` plus a coverage bonus of
        ``min(3, log2(publishers))``, minus one point per 12 hours since its key facts last changed (``updated_at``).
        One slot per ticker and two per no-ticker macro category, so one event cannot fill the list. Only stories with a
        published summary and ``importance >= 7`` qualify. Fixed size of up to 50, no pagination; ``ranking_version``
        names the formula so a change is visible, ``as_of`` is when the list was ranked.

        Compared with ``/api/news/trending/``: trending ranks single articles and collapses reprints; this ranks the
        stories themselves (two or more publishers), each with an AlphAI-written summary. A story's ``story_id`` is the
        same key an article row carries, so a trending item's ``story_id`` opens the story here.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ranked stories, strongest first.

        Raises:
            ApiError: Missing or invalid API key. The Stories section is switched off. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_api_stories_top(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncStoriesWithRawResponse:
        return self._with_raw_response


class StoriesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_stories(
        self,
        *,
        cursor: str | None = None,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StoriesPage, GetApiStoriesErrorBody]:
        """Stories newest-first by the time of their latest article (``last_material_at``): stories with a published
        summary and ``importance >= 7``. Keyset pagination: omit ``cursor`` for the newest page, pass ``next_cursor``
        back for the next (older) one; ``null`` means the end. Cursors are opaque; an invalid one is a 400. Archive
        depth is tiered as on the feeds — paging back past your plan's horizon (Free 30 days, Basic 90, Pro 180) returns
        403 ``archive_horizon``.

        A story keeps moving up this list while articles keep joining it (``last_material_at`` is the keyset), and its
        summary is rewritten as materials arrive, so re-reading a ``story_id`` later can return a different summary —
        ``updated_at`` says when the facts last changed.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            page_size: Stories per page, 1 to 50 on every tier (default 20). ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/stories/"),
            query_params=[param[str | None]("cursor", cursor), param[int | None]("page_size", page_size)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[StoriesPage],
            error_mapper=get_api_stories_error_mapper,
            request_options=request_options,
        )

    def get_api_stories_by_story_id(
        self, story_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoryLookup, GetApiStoriesByStoryIdErrorBody]:
        """One story — the summary AlphAI wrote from its articles, the key facts each with the publisher it was read
        from and the ``source_uid`` of that article, the per-ticker read, the open questions — wrapped in a lookup
        ``status``, because a ``story_id`` taken from an article row does not always name a current story:

        * ``found`` — ``story`` is filled.
        * ``merged`` — this story was folded into another one; ``redirect_to``
        is the surviving story's id. Fetch that one (a web page would 308).
        * ``not_a_story`` — the id belongs to an article that only one
        publisher carried, so there is no story to summarise; ``article`` names it (``/api/news/{uid}/``). An article's
        ``story_id`` resolves here for every row, so this is the normal answer for most of the feed: most events are
        carried by a single outlet.
        * An unknown id is a 404.

        ``summary_state`` tells you how to read the text: ``published`` (the summary covers every article the story had
        when it was written), ``stale`` (``new_materials`` articles joined since; the rewrite is queued — the summaries
        are debounced, so a fast-moving story is rewritten minutes, not seconds, after each new article), or
        ``preparing`` (no summary yet: ``title`` is the lead article's headline and ``summary`` its collector summary;
        ``key_facts``, ``why_it_matters``, ``ticker_takes`` and ``uncertainties`` are empty). A story older than your
        plan's archive horizon (by ``last_material_at``) is a 403 ``archive_horizon``, like a deep feed cursor.

        The summary is the model's own text, checked against the articles before publishing: every figure in it appears
        in a source, and no passage of more than a dozen words is copied from one. It is AI-generated financial
        information for research, not investment advice. Article bodies are never served; ``materials`` link to the
        publishers.

        Args:
            story_id: A story id — the ``story_id`` of any article row, or an id from ``/api/stories/``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/stories/{story_id}/"),
            path_params=[param[str]("story_id", story_id)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[StoryLookup],
            error_mapper=get_api_stories_by_story_id_error_mapper,
            request_options=request_options,
        )

    def get_api_stories_by_story_id_materials(
        self,
        story_id: str,
        *,
        cursor: str | None = None,
        page_size: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StoryMaterials, GetApiStoriesByStoryIdMaterialsErrorBody]:
        """Every article behind a story, oldest first — the materials the summary was written from and the ones that
        joined after it. Same visibility as the feed (``relevance_score >= 4``); each row carries its ``uid`` (open it
        with ``/api/news/{uid}/``), publisher, publication time, the publisher's URL and its relevance score. A story's
        ``key_facts`` point into this list by ``source_uid``. Keyset pagination with ``cursor`` / ``next_cursor`` as on
        ``/api/stories/``; most stories fit one page. Only a current story (``status: found``) has materials: a merged
        or not-a-story id is a 404 here — resolve it through ``/api/stories/{story_id}/`` first.

        Args:
            story_id: Value sent with the request.
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the first (oldest) page.
            page_size: Articles per page, 1 to 50 on every tier (default 50). ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/stories/{story_id}/materials/"),
            path_params=[param[str]("story_id", story_id)],
            query_params=[param[str | None]("cursor", cursor), param[int | None]("page_size", page_size)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[StoryMaterials],
            error_mapper=get_api_stories_by_story_id_materials_error_mapper,
            request_options=request_options,
        )

    def get_api_stories_top(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TopStories, GetApiStoriesTopErrorBody]:
        """The strongest stories of the trailing 48 hours, ranked: a story's ``importance`` plus a coverage bonus of
        ``min(3, log2(publishers))``, minus one point per 12 hours since its key facts last changed (``updated_at``).
        One slot per ticker and two per no-ticker macro category, so one event cannot fill the list. Only stories with a
        published summary and ``importance >= 7`` qualify. Fixed size of up to 50, no pagination; ``ranking_version``
        names the formula so a change is visible, ``as_of`` is when the list was ranked.

        Compared with ``/api/news/trending/``: trending ranks single articles and collapses reprints; this ranks the
        stories themselves (two or more publishers), each with an AlphAI-written summary. A story's ``story_id`` is the
        same key an article row carries, so a trending item's ``story_id`` opens the story here.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/stories/top/"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[TopStories],
            error_mapper=get_api_stories_top_error_mapper,
            request_options=request_options,
        )


class AsyncStoriesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_stories(
        self,
        *,
        cursor: str | None = None,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StoriesPage, GetApiStoriesErrorBody]:
        """Stories newest-first by the time of their latest article (``last_material_at``): stories with a published
        summary and ``importance >= 7``. Keyset pagination: omit ``cursor`` for the newest page, pass ``next_cursor``
        back for the next (older) one; ``null`` means the end. Cursors are opaque; an invalid one is a 400. Archive
        depth is tiered as on the feeds — paging back past your plan's horizon (Free 30 days, Basic 90, Pro 180) returns
        403 ``archive_horizon``.

        A story keeps moving up this list while articles keep joining it (``last_material_at`` is the keyset), and its
        summary is rewritten as materials arrive, so re-reading a ``story_id`` later can return a different summary —
        ``updated_at`` says when the facts last changed.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            page_size: Stories per page, 1 to 50 on every tier (default 20). ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/stories/"),
            query_params=[param[str | None]("cursor", cursor), param[int | None]("page_size", page_size)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[StoriesPage],
            error_mapper=get_api_stories_error_mapper,
            request_options=request_options,
        )

    async def get_api_stories_by_story_id(
        self, story_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StoryLookup, GetApiStoriesByStoryIdErrorBody]:
        """One story — the summary AlphAI wrote from its articles, the key facts each with the publisher it was read
        from and the ``source_uid`` of that article, the per-ticker read, the open questions — wrapped in a lookup
        ``status``, because a ``story_id`` taken from an article row does not always name a current story:

        * ``found`` — ``story`` is filled.
        * ``merged`` — this story was folded into another one; ``redirect_to``
        is the surviving story's id. Fetch that one (a web page would 308).
        * ``not_a_story`` — the id belongs to an article that only one
        publisher carried, so there is no story to summarise; ``article`` names it (``/api/news/{uid}/``). An article's
        ``story_id`` resolves here for every row, so this is the normal answer for most of the feed: most events are
        carried by a single outlet.
        * An unknown id is a 404.

        ``summary_state`` tells you how to read the text: ``published`` (the summary covers every article the story had
        when it was written), ``stale`` (``new_materials`` articles joined since; the rewrite is queued — the summaries
        are debounced, so a fast-moving story is rewritten minutes, not seconds, after each new article), or
        ``preparing`` (no summary yet: ``title`` is the lead article's headline and ``summary`` its collector summary;
        ``key_facts``, ``why_it_matters``, ``ticker_takes`` and ``uncertainties`` are empty). A story older than your
        plan's archive horizon (by ``last_material_at``) is a 403 ``archive_horizon``, like a deep feed cursor.

        The summary is the model's own text, checked against the articles before publishing: every figure in it appears
        in a source, and no passage of more than a dozen words is copied from one. It is AI-generated financial
        information for research, not investment advice. Article bodies are never served; ``materials`` link to the
        publishers.

        Args:
            story_id: A story id — the ``story_id`` of any article row, or an id from ``/api/stories/``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/stories/{story_id}/"),
            path_params=[param[str]("story_id", story_id)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[StoryLookup],
            error_mapper=get_api_stories_by_story_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_stories_by_story_id_materials(
        self,
        story_id: str,
        *,
        cursor: str | None = None,
        page_size: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StoryMaterials, GetApiStoriesByStoryIdMaterialsErrorBody]:
        """Every article behind a story, oldest first — the materials the summary was written from and the ones that
        joined after it. Same visibility as the feed (``relevance_score >= 4``); each row carries its ``uid`` (open it
        with ``/api/news/{uid}/``), publisher, publication time, the publisher's URL and its relevance score. A story's
        ``key_facts`` point into this list by ``source_uid``. Keyset pagination with ``cursor`` / ``next_cursor`` as on
        ``/api/stories/``; most stories fit one page. Only a current story (``status: found``) has materials: a merged
        or not-a-story id is a 404 here — resolve it through ``/api/stories/{story_id}/`` first.

        Args:
            story_id: Value sent with the request.
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the first (oldest) page.
            page_size: Articles per page, 1 to 50 on every tier (default 50). ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/stories/{story_id}/materials/"),
            path_params=[param[str]("story_id", story_id)],
            query_params=[param[str | None]("cursor", cursor), param[int | None]("page_size", page_size)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[StoryMaterials],
            error_mapper=get_api_stories_by_story_id_materials_error_mapper,
            request_options=request_options,
        )

    async def get_api_stories_top(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TopStories, GetApiStoriesTopErrorBody]:
        """The strongest stories of the trailing 48 hours, ranked: a story's ``importance`` plus a coverage bonus of
        ``min(3, log2(publishers))``, minus one point per 12 hours since its key facts last changed (``updated_at``).
        One slot per ticker and two per no-ticker macro category, so one event cannot fill the list. Only stories with a
        published summary and ``importance >= 7`` qualify. Fixed size of up to 50, no pagination; ``ranking_version``
        names the formula so a change is visible, ``as_of`` is when the list was ranked.

        Compared with ``/api/news/trending/``: trending ranks single articles and collapses reprints; this ranks the
        stories themselves (two or more publishers), each with an AlphAI-written summary. A story's ``story_id`` is the
        same key an article row carries, so a trending item's ``story_id`` opens the story here.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/stories/top/"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[TopStories],
            error_mapper=get_api_stories_top_error_mapper,
            request_options=request_options,
        )
