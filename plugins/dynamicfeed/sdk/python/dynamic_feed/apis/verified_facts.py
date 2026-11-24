from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.v1_state_of_mcp_trend_v1_state_of_mcp_trend_get_error import (
    V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody,
    v1_state_of_mcp_trend_v1_state_of_mcp_trend_get_error_mapper,
)
from ..server.server import Server


class VerifiedFacts:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = VerifiedFactsWithRawResponse(client, server)

    def post_v1_answer(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a question, get ONE
        Ed25519-signed answer object carrying the complete evidence chain: the exact calls made, the exact source
        readings (fact/v1), per-premise verdicts computed by the published deterministic rule answer-eval/1, and a
        confidence whose formula ships inside the payload (answer-conf/1) so anyone can recompute it. No model in the
        loop: unroutable input gets a SIGNED refusal that states exactly what IS covered. Signed proves integrity, not
        truth; everything is advisory evidence. Keyless; GET returns usage + coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_v1_answer(request_options=request_options))

    def post_v1_facts(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST verification block.
        Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed reported this exact value at this
        time, unaltered (integrity); 'verified' is reserved for facts independently corroborated by 2+ sources AND still
        fresh. confidence is a transparent composite of the exposed signals, never decorative; a single-source reading
        is honestly verified:false. Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or POST
        {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_v1_facts(request_options=request_options))

    def v1_answer_v1_answer_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a question, get ONE
        Ed25519-signed answer object carrying the complete evidence chain: the exact calls made, the exact source
        readings (fact/v1), per-premise verdicts computed by the published deterministic rule answer-eval/1, and a
        confidence whose formula ships inside the payload (answer-conf/1) so anyone can recompute it. No model in the
        loop: unroutable input gets a SIGNED refusal that states exactly what IS covered. Signed proves integrity, not
        truth; everything is advisory evidence. Keyless; GET returns usage + coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_answer_v1_answer_get(request_options=request_options))

    def v1_facts_v1_facts_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST verification block.
        Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed reported this exact value at this
        time, unaltered (integrity); 'verified' is reserved for facts independently corroborated by 2+ sources AND still
        fresh. confidence is a transparent composite of the exposed signals, never decorative; a single-source reading
        is honestly verified:false. Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or POST
        {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_facts_v1_facts_get(request_options=request_options))

    def v1_state_of_mcp_trend_v1_state_of_mcp_trend_get(
        self, *, days: int | None = 365, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Growth over time: the headline State of MCP numbers, one point per daily snapshot, oldest first. The trend IS
        the value (server count, remote share, keyless share drifting over time).

        Args:
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_state_of_mcp_trend_v1_state_of_mcp_trend_get(
                days=days, request_options=request_options
            ),
        )

    def v1_state_of_mcp_v1_state_of_mcp_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """STATE OF MCP — a signed census of the Model Context Protocol ecosystem, measured from the official registry:
        how many servers exist, how many are remote, and how many are keyless. One Ed25519-signed envelope you can
        verify against /.well-known/keys; a primary-source figure, not a claim. Served from the latest daily snapshot
        (the crawl runs off the request path). Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_state_of_mcp_v1_state_of_mcp_get(request_options=request_options))

    @property
    def with_raw_response(self) -> VerifiedFactsWithRawResponse:
        return self._with_raw_response


class AsyncVerifiedFacts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncVerifiedFactsWithRawResponse(client, server)

    async def post_v1_answer(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a question, get ONE
        Ed25519-signed answer object carrying the complete evidence chain: the exact calls made, the exact source
        readings (fact/v1), per-premise verdicts computed by the published deterministic rule answer-eval/1, and a
        confidence whose formula ships inside the payload (answer-conf/1) so anyone can recompute it. No model in the
        loop: unroutable input gets a SIGNED refusal that states exactly what IS covered. Signed proves integrity, not
        truth; everything is advisory evidence. Keyless; GET returns usage + coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_v1_answer(request_options=request_options))

    async def post_v1_facts(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST verification block.
        Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed reported this exact value at this
        time, unaltered (integrity); 'verified' is reserved for facts independently corroborated by 2+ sources AND still
        fresh. confidence is a transparent composite of the exposed signals, never decorative; a single-source reading
        is honestly verified:false. Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or POST
        {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_v1_facts(request_options=request_options))

    async def v1_answer_v1_answer_get(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a question, get ONE
        Ed25519-signed answer object carrying the complete evidence chain: the exact calls made, the exact source
        readings (fact/v1), per-premise verdicts computed by the published deterministic rule answer-eval/1, and a
        confidence whose formula ships inside the payload (answer-conf/1) so anyone can recompute it. No model in the
        loop: unroutable input gets a SIGNED refusal that states exactly what IS covered. Signed proves integrity, not
        truth; everything is advisory evidence. Keyless; GET returns usage + coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_answer_v1_answer_get(request_options=request_options))

    async def v1_facts_v1_facts_get(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST verification block.
        Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed reported this exact value at this
        time, unaltered (integrity); 'verified' is reserved for facts independently corroborated by 2+ sources AND still
        fresh. confidence is a transparent composite of the exposed signals, never decorative; a single-source reading
        is honestly verified:false. Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or POST
        {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_facts_v1_facts_get(request_options=request_options))

    async def v1_state_of_mcp_trend_v1_state_of_mcp_trend_get(
        self, *, days: int | None = 365, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Growth over time: the headline State of MCP numbers, one point per daily snapshot, oldest first. The trend IS
        the value (server count, remote share, keyless share drifting over time).

        Args:
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_state_of_mcp_trend_v1_state_of_mcp_trend_get(
                days=days, request_options=request_options
            ),
        )

    async def v1_state_of_mcp_v1_state_of_mcp_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """STATE OF MCP — a signed census of the Model Context Protocol ecosystem, measured from the official registry:
        how many servers exist, how many are remote, and how many are keyless. One Ed25519-signed envelope you can
        verify against /.well-known/keys; a primary-source figure, not a claim. Served from the latest daily snapshot
        (the crawl runs off the request path). Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.v1_state_of_mcp_v1_state_of_mcp_get(request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncVerifiedFactsWithRawResponse:
        return self._with_raw_response


class VerifiedFactsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def post_v1_answer(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a question, get ONE
        Ed25519-signed answer object carrying the complete evidence chain: the exact calls made, the exact source
        readings (fact/v1), per-premise verdicts computed by the published deterministic rule answer-eval/1, and a
        confidence whose formula ships inside the payload (answer-conf/1) so anyone can recompute it. No model in the
        loop: unroutable input gets a SIGNED refusal that states exactly what IS covered. Signed proves integrity, not
        truth; everything is advisory evidence. Keyless; GET returns usage + coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/answer"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_v1_facts(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST verification block.
        Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed reported this exact value at this
        time, unaltered (integrity); 'verified' is reserved for facts independently corroborated by 2+ sources AND still
        fresh. confidence is a transparent composite of the exposed signals, never decorative; a single-source reading
        is honestly verified:false. Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or POST
        {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/facts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_answer_v1_answer_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a question, get ONE
        Ed25519-signed answer object carrying the complete evidence chain: the exact calls made, the exact source
        readings (fact/v1), per-premise verdicts computed by the published deterministic rule answer-eval/1, and a
        confidence whose formula ships inside the payload (answer-conf/1) so anyone can recompute it. No model in the
        loop: unroutable input gets a SIGNED refusal that states exactly what IS covered. Signed proves integrity, not
        truth; everything is advisory evidence. Keyless; GET returns usage + coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/answer"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_facts_v1_facts_get(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST verification block.
        Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed reported this exact value at this
        time, unaltered (integrity); 'verified' is reserved for facts independently corroborated by 2+ sources AND still
        fresh. confidence is a transparent composite of the exposed signals, never decorative; a single-source reading
        is honestly verified:false. Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or POST
        {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/facts"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_state_of_mcp_trend_v1_state_of_mcp_trend_get(
        self, *, days: int | None = 365, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody]:
        """Growth over time: the headline State of MCP numbers, one point per daily snapshot, oldest first. The trend IS
        the value (server count, remote share, keyless share drifting over time).

        Args:
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/state-of-mcp/trend"),
            query_params=[param[int | None]("days", days)],
            decoder=json_decoder[Any],
            error_mapper=v1_state_of_mcp_trend_v1_state_of_mcp_trend_get_error_mapper,
            request_options=request_options,
        )

    def v1_state_of_mcp_v1_state_of_mcp_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """STATE OF MCP — a signed census of the Model Context Protocol ecosystem, measured from the official registry:
        how many servers exist, how many are remote, and how many are keyless. One Ed25519-signed envelope you can
        verify against /.well-known/keys; a primary-source figure, not a claim. Served from the latest daily snapshot
        (the crawl runs off the request path). Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/state-of-mcp"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncVerifiedFactsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def post_v1_answer(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a question, get ONE
        Ed25519-signed answer object carrying the complete evidence chain: the exact calls made, the exact source
        readings (fact/v1), per-premise verdicts computed by the published deterministic rule answer-eval/1, and a
        confidence whose formula ships inside the payload (answer-conf/1) so anyone can recompute it. No model in the
        loop: unroutable input gets a SIGNED refusal that states exactly what IS covered. Signed proves integrity, not
        truth; everything is advisory evidence. Keyless; GET returns usage + coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/answer"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_v1_facts(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST verification block.
        Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed reported this exact value at this
        time, unaltered (integrity); 'verified' is reserved for facts independently corroborated by 2+ sources AND still
        fresh. confidence is a transparent composite of the exposed signals, never decorative; a single-source reading
        is honestly verified:false. Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or POST
        {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/facts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_answer_v1_answer_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a question, get ONE
        Ed25519-signed answer object carrying the complete evidence chain: the exact calls made, the exact source
        readings (fact/v1), per-premise verdicts computed by the published deterministic rule answer-eval/1, and a
        confidence whose formula ships inside the payload (answer-conf/1) so anyone can recompute it. No model in the
        loop: unroutable input gets a SIGNED refusal that states exactly what IS covered. Signed proves integrity, not
        truth; everything is advisory evidence. Keyless; GET returns usage + coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/answer"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_facts_v1_facts_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST verification block.
        Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed reported this exact value at this
        time, unaltered (integrity); 'verified' is reserved for facts independently corroborated by 2+ sources AND still
        fresh. confidence is a transparent composite of the exposed signals, never decorative; a single-source reading
        is honestly verified:false. Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or POST
        {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/facts"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_state_of_mcp_trend_v1_state_of_mcp_trend_get(
        self, *, days: int | None = 365, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1StateOfMcpTrendV1StateOfMcpTrendGetErrorBody]:
        """Growth over time: the headline State of MCP numbers, one point per daily snapshot, oldest first. The trend IS
        the value (server count, remote share, keyless share drifting over time).

        Args:
            days: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/state-of-mcp/trend"),
            query_params=[param[int | None]("days", days)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_state_of_mcp_trend_v1_state_of_mcp_trend_get_error_mapper,
            request_options=request_options,
        )

    async def v1_state_of_mcp_v1_state_of_mcp_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """STATE OF MCP — a signed census of the Model Context Protocol ecosystem, measured from the official registry:
        how many servers exist, how many are remote, and how many are keyless. One Ed25519-signed envelope you can
        verify against /.well-known/keys; a primary-source figure, not a claim. Served from the latest daily snapshot
        (the crawl runs off the request path). Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/state-of-mcp"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
