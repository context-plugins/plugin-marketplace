from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

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
from ..errors.ask_question_error import AskQuestionErrorBody, ask_question_error_mapper
from ..server.server import Server


class Analyze:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnalyzeWithRawResponse(client, server, auth)

    def ask_question(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Ask a question about the corpus in plain English; the service writes and runs its own SQL and streams the
        answer back as Server-Sent Events. Metered separately from the REST endpoints: three free questions per visitor
        per day, then a paid key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.ask_question(request_options=request_options))

    @property
    def with_raw_response(self) -> AnalyzeWithRawResponse:
        return self._with_raw_response


class AsyncAnalyze:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnalyzeWithRawResponse(client, server, auth)

    async def ask_question(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Ask a question about the corpus in plain English; the service writes and runs its own SQL and streams the
        answer back as Server-Sent Events. Metered separately from the REST endpoints: three free questions per visitor
        per day, then a paid key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The monthly allowance is spent, the account is inactive,
                or the endpoint needs a paid plan. The message says which. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.ask_question(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAnalyzeWithRawResponse:
        return self._with_raw_response


class AnalyzeWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def ask_question(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AskQuestionErrorBody]:
        """Ask a question about the corpus in plain English; the service writes and runs its own SQL and streams the
        answer back as Server-Sent Events. Metered separately from the REST endpoints: three free questions per visitor
        per day, then a paid key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/analyze"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=ask_question_error_mapper,
            request_options=request_options,
        )


class AsyncAnalyzeWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def ask_question(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AskQuestionErrorBody]:
        """Ask a question about the corpus in plain English; the service writes and runs its own SQL and streams the
        answer back as Server-Sent Events. Metered separately from the REST endpoints: three free questions per visitor
        per day, then a paid key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/analyze"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=ask_question_error_mapper,
            request_options=request_options,
        )
