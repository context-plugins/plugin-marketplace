from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.ask_get_error import AskGetErrorBody, ask_get_error_mapper
from ..errors.ask_post_error import AskPostErrorBody, ask_post_error_mapper
from ..models.ask_request import AskRequest, AskRequestDict
from ..models.enums.item_type3 import ItemType3OrStr
from ..models.enums.mode import ModeOrStr
from ..models.enums.stream import StreamOrStr
from ..models.unions.ask_response1 import AskResponse1
from ..server.server import Server


class NlWeb:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = NlWebWithRawResponse(client, server)

    def ask_get(
        self,
        query: str,
        *,
        mode: ModeOrStr | None = None,
        item_type: ItemType3OrStr | None = None,
        stream: StreamOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AskResponse1:
        """NLWeb /ask endpoint, conventional GET form: /ask?query=. Natural-language search over Agent Ready's own
        content (methodology, check registry, specs, and the content library — explainers, comparisons, how-to guides,
        glossary). Public — no API key required. Returns NLWeb result objects with a nested Schema.org
        ``schema_object``. Set stream=true for Server-Sent Events. Also served at the root path /ask.

        Args:
            query: Value sent with the request.
            mode: Value sent with the request.
            item_type: Value sent with the request.
            stream: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An NLWeb answer.

        Raises:
            ApiError: Missing or invalid query. Rate limit exceeded. Response carries ``Retry-After`` (seconds) plus
                ``X-RateLimit-Limit`` and ``X-RateLimit-Remaining``. Back off using exponential delay with jitter — see
                the Rate limits & retry section in the docs. Internal server error. Service temporarily unavailable.
                Retry with backoff. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.ask_get(
                query, mode=mode, item_type=item_type, stream=stream, request_options=request_options
            ),
        )

    def ask_post(
        self, body: AskRequest | AskRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> AskResponse1:
        """NLWeb /ask endpoint, JSON-body form: { query: { q }, prefer: { mode, streaming } }. Same response as the GET
        form. Public — no API key required.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An NLWeb answer.

        Raises:
            ApiError: Invalid /ask request body. No results (NLWeb failure envelope). Rate limit exceeded. Response
                carries ``Retry-After`` (seconds) plus ``X-RateLimit-Limit`` and ``X-RateLimit-Remaining``. Back off
                using exponential delay with jitter — see the Rate limits & retry section in the docs. Internal server
                error. Service temporarily unavailable. Retry with backoff. ``error`` is ``Error | AskResponse1 |
                RawError``."""
        return unwrap(self._with_raw_response.ask_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> NlWebWithRawResponse:
        return self._with_raw_response


class AsyncNlWeb:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncNlWebWithRawResponse(client, server)

    async def ask_get(
        self,
        query: str,
        *,
        mode: ModeOrStr | None = None,
        item_type: ItemType3OrStr | None = None,
        stream: StreamOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AskResponse1:
        """NLWeb /ask endpoint, conventional GET form: /ask?query=. Natural-language search over Agent Ready's own
        content (methodology, check registry, specs, and the content library — explainers, comparisons, how-to guides,
        glossary). Public — no API key required. Returns NLWeb result objects with a nested Schema.org
        ``schema_object``. Set stream=true for Server-Sent Events. Also served at the root path /ask.

        Args:
            query: Value sent with the request.
            mode: Value sent with the request.
            item_type: Value sent with the request.
            stream: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An NLWeb answer.

        Raises:
            ApiError: Missing or invalid query. Rate limit exceeded. Response carries ``Retry-After`` (seconds) plus
                ``X-RateLimit-Limit`` and ``X-RateLimit-Remaining``. Back off using exponential delay with jitter — see
                the Rate limits & retry section in the docs. Internal server error. Service temporarily unavailable.
                Retry with backoff. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.ask_get(
                query, mode=mode, item_type=item_type, stream=stream, request_options=request_options
            ),
        )

    async def ask_post(
        self, body: AskRequest | AskRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AskResponse1:
        """NLWeb /ask endpoint, JSON-body form: { query: { q }, prefer: { mode, streaming } }. Same response as the GET
        form. Public — no API key required.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An NLWeb answer.

        Raises:
            ApiError: Invalid /ask request body. No results (NLWeb failure envelope). Rate limit exceeded. Response
                carries ``Retry-After`` (seconds) plus ``X-RateLimit-Limit`` and ``X-RateLimit-Remaining``. Back off
                using exponential delay with jitter — see the Rate limits & retry section in the docs. Internal server
                error. Service temporarily unavailable. Retry with backoff. ``error`` is ``Error | AskResponse1 |
                RawError``."""
        return unwrap(await self._with_raw_response.ask_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncNlWebWithRawResponse:
        return self._with_raw_response


class NlWebWithRawResponse(BaseRawResponse[RawClient, Server]):
    def ask_get(
        self,
        query: str,
        *,
        mode: ModeOrStr | None = None,
        item_type: ItemType3OrStr | None = None,
        stream: StreamOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AskResponse1, AskGetErrorBody]:
        """NLWeb /ask endpoint, conventional GET form: /ask?query=. Natural-language search over Agent Ready's own
        content (methodology, check registry, specs, and the content library — explainers, comparisons, how-to guides,
        glossary). Public — no API key required. Returns NLWeb result objects with a nested Schema.org
        ``schema_object``. Set stream=true for Server-Sent Events. Also served at the root path /ask.

        Args:
            query: Value sent with the request.
            mode: Value sent with the request.
            item_type: Value sent with the request.
            stream: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/ask"),
            query_params=[
                param[str]("query", query),
                param[ModeOrStr | None]("mode", mode),
                param[ItemType3OrStr | None]("itemType", item_type),
                param[StreamOrStr | None]("stream", stream),
            ],
            decoder=json_decoder[AskResponse1],
            error_mapper=ask_get_error_mapper,
            request_options=request_options,
        )

    def ask_post(
        self, body: AskRequest | AskRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AskResponse1, AskPostErrorBody]:
        """NLWeb /ask endpoint, JSON-body form: { query: { q }, prefer: { mode, streaming } }. Same response as the GET
        form. Public — no API key required.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ask"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AskRequest | AskRequestDict](body),
            decoder=json_decoder[AskResponse1],
            error_mapper=ask_post_error_mapper,
            request_options=request_options,
        )


class AsyncNlWebWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def ask_get(
        self,
        query: str,
        *,
        mode: ModeOrStr | None = None,
        item_type: ItemType3OrStr | None = None,
        stream: StreamOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AskResponse1, AskGetErrorBody]:
        """NLWeb /ask endpoint, conventional GET form: /ask?query=. Natural-language search over Agent Ready's own
        content (methodology, check registry, specs, and the content library — explainers, comparisons, how-to guides,
        glossary). Public — no API key required. Returns NLWeb result objects with a nested Schema.org
        ``schema_object``. Set stream=true for Server-Sent Events. Also served at the root path /ask.

        Args:
            query: Value sent with the request.
            mode: Value sent with the request.
            item_type: Value sent with the request.
            stream: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/ask"),
            query_params=[
                param[str]("query", query),
                param[ModeOrStr | None]("mode", mode),
                param[ItemType3OrStr | None]("itemType", item_type),
                param[StreamOrStr | None]("stream", stream),
            ],
            decoder=async_json_decoder[AskResponse1],
            error_mapper=ask_get_error_mapper,
            request_options=request_options,
        )

    async def ask_post(
        self, body: AskRequest | AskRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AskResponse1, AskPostErrorBody]:
        """NLWeb /ask endpoint, JSON-body form: { query: { q }, prefer: { mode, streaming } }. Same response as the GET
        form. Public — no API key required.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/ask"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AskRequest | AskRequestDict](body),
            decoder=async_json_decoder[AskResponse1],
            error_mapper=ask_post_error_mapper,
            request_options=request_options,
        )
