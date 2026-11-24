from __future__ import annotations

from uuid import UUID

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
from ..errors.statutes_by_state_error import StatutesByStateErrorBody, statutes_by_state_error_mapper
from ..errors.statutes_search_error import StatutesSearchErrorBody, statutes_search_error_mapper
from ..errors.statutes_section_detail_error import StatutesSectionDetailErrorBody, statutes_section_detail_error_mapper
from ..models.api_v1_statutes_by_state_response import ApiV1StatutesByStateResponse
from ..models.api_v1_statutes_search_response import ApiV1StatutesSearchResponse
from ..models.api_v1_statutes_sections_response import ApiV1StatutesSectionsResponse
from ..server.server import Server


class Statutes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StatutesWithRawResponse(client, server, auth)

    def statutes_by_state(
        self,
        state: str,
        *,
        chapter: str | None = None,
        topic: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1StatutesByStateResponse:
        """Browse/enumerate every statute section on file for a state, grouped by chapter — the companion to
        statutes/search for "show me everything" rather than a keyword match. Filter to one chapter or a tagged topic.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            state: Two-letter state code.
            chapter: Limit to one chapter number.
            topic: Limit to sections tagged with this topic.
            limit: Max results, 1 to 200 (default 100).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.statutes_by_state(
                state, chapter=chapter, topic=topic, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def statutes_search(
        self,
        q: str,
        *,
        state: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1StatutesSearchResponse:
        """Full-text search across the community-association statute corpus, ranked by relevance. The endpoint behind
        the statute search on commonelements.com, available programmatically.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            q: Search text, minimum 2 characters.
            state: Two-letter state code to scope results to one jurisdiction. Omit to search every jurisdiction.
            limit: Max results, 1 to 25 (default 10).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.statutes_search(
                q, state=state, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def statutes_section_detail(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1StatutesSectionsResponse:
        """The full text and metadata for one statute section, including its parent chapter and formatted citation.
        Follow-up call after search or by-state to read the section in full.

        Args:
            id_: Section id from search or by-state.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.statutes_section_detail(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> StatutesWithRawResponse:
        return self._with_raw_response


class AsyncStatutes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStatutesWithRawResponse(client, server, auth)

    async def statutes_by_state(
        self,
        state: str,
        *,
        chapter: str | None = None,
        topic: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1StatutesByStateResponse:
        """Browse/enumerate every statute section on file for a state, grouped by chapter — the companion to
        statutes/search for "show me everything" rather than a keyword match. Filter to one chapter or a tagged topic.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            state: Two-letter state code.
            chapter: Limit to one chapter number.
            topic: Limit to sections tagged with this topic.
            limit: Max results, 1 to 200 (default 100).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.statutes_by_state(
                state, chapter=chapter, topic=topic, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def statutes_search(
        self,
        q: str,
        *,
        state: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1StatutesSearchResponse:
        """Full-text search across the community-association statute corpus, ranked by relevance. The endpoint behind
        the statute search on commonelements.com, available programmatically.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            q: Search text, minimum 2 characters.
            state: Two-letter state code to scope results to one jurisdiction. Omit to search every jurisdiction.
            limit: Max results, 1 to 25 (default 10).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.statutes_search(
                q, state=state, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def statutes_section_detail(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1StatutesSectionsResponse:
        """The full text and metadata for one statute section, including its parent chapter and formatted citation.
        Follow-up call after search or by-state to read the section in full.

        Args:
            id_: Section id from search or by-state.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.statutes_section_detail(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncStatutesWithRawResponse:
        return self._with_raw_response


class StatutesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def statutes_by_state(
        self,
        state: str,
        *,
        chapter: str | None = None,
        topic: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StatutesByStateResponse, StatutesByStateErrorBody]:
        """Browse/enumerate every statute section on file for a state, grouped by chapter — the companion to
        statutes/search for "show me everything" rather than a keyword match. Filter to one chapter or a tagged topic.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            state: Two-letter state code.
            chapter: Limit to one chapter number.
            topic: Limit to sections tagged with this topic.
            limit: Max results, 1 to 200 (default 100).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/statutes/by-state"),
            query_params=[
                param[str]("state", state),
                param[str | None]("chapter", chapter),
                param[str | None]("topic", topic),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1StatutesByStateResponse],
            error_mapper=statutes_by_state_error_mapper,
            request_options=request_options,
        )

    def statutes_search(
        self,
        q: str,
        *,
        state: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StatutesSearchResponse, StatutesSearchErrorBody]:
        """Full-text search across the community-association statute corpus, ranked by relevance. The endpoint behind
        the statute search on commonelements.com, available programmatically.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            q: Search text, minimum 2 characters.
            state: Two-letter state code to scope results to one jurisdiction. Omit to search every jurisdiction.
            limit: Max results, 1 to 25 (default 10).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/statutes/search"),
            query_params=[
                param[str]("q", q),
                param[str | None]("state", state),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1StatutesSearchResponse],
            error_mapper=statutes_search_error_mapper,
            request_options=request_options,
        )

    def statutes_section_detail(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1StatutesSectionsResponse, StatutesSectionDetailErrorBody]:
        """The full text and metadata for one statute section, including its parent chapter and formatted citation.
        Follow-up call after search or by-state to read the section in full.

        Args:
            id_: Section id from search or by-state.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/statutes/sections/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1StatutesSectionsResponse],
            error_mapper=statutes_section_detail_error_mapper,
            request_options=request_options,
        )


class AsyncStatutesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def statutes_by_state(
        self,
        state: str,
        *,
        chapter: str | None = None,
        topic: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StatutesByStateResponse, StatutesByStateErrorBody]:
        """Browse/enumerate every statute section on file for a state, grouped by chapter — the companion to
        statutes/search for "show me everything" rather than a keyword match. Filter to one chapter or a tagged topic.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            state: Two-letter state code.
            chapter: Limit to one chapter number.
            topic: Limit to sections tagged with this topic.
            limit: Max results, 1 to 200 (default 100).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/statutes/by-state"),
            query_params=[
                param[str]("state", state),
                param[str | None]("chapter", chapter),
                param[str | None]("topic", topic),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1StatutesByStateResponse],
            error_mapper=statutes_by_state_error_mapper,
            request_options=request_options,
        )

    async def statutes_search(
        self,
        q: str,
        *,
        state: str | None = None,
        limit: float | None = None,
        offset: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1StatutesSearchResponse, StatutesSearchErrorBody]:
        """Full-text search across the community-association statute corpus, ranked by relevance. The endpoint behind
        the statute search on commonelements.com, available programmatically.

        **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.

        Args:
            q: Search text, minimum 2 characters.
            state: Two-letter state code to scope results to one jurisdiction. Omit to search every jurisdiction.
            limit: Max results, 1 to 25 (default 10).
            offset: Pagination offset (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/statutes/search"),
            query_params=[
                param[str]("q", q),
                param[str | None]("state", state),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1StatutesSearchResponse],
            error_mapper=statutes_search_error_mapper,
            request_options=request_options,
        )

    async def statutes_section_detail(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1StatutesSectionsResponse, StatutesSectionDetailErrorBody]:
        """The full text and metadata for one statute section, including its parent chapter and formatted citation.
        Follow-up call after search or by-state to read the section in full.

        Args:
            id_: Section id from search or by-state.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/statutes/sections/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1StatutesSectionsResponse],
            error_mapper=statutes_section_detail_error_mapper,
            request_options=request_options,
        )
