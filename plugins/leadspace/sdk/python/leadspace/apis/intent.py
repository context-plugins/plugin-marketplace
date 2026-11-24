from __future__ import annotations

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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.score_company_intent_error import ScoreCompanyIntentErrorBody, score_company_intent_error_mapper
from ..models.intent_accepted import IntentAccepted
from ..models.intent_request import IntentRequest, IntentRequestDict
from ..server.server import Server


class Intent:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IntentWithRawResponse(client, server, auth)

    def score_company_intent(
        self, body: IntentRequest | IntentRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> IntentAccepted:
        """Submits a bulk of companies for intent refresh. Company name is required. Returns a polling URI.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The bulk job has successfully been accepted

        Raises:
            ApiError: The request failed due to insufficient basic input, or the JSON format is invalid Unauthorized
                request (wrong credentials or credentials have expired) Insufficient credits or program ID is invalid
                Server error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.score_company_intent(body, request_options=request_options))

    @property
    def with_raw_response(self) -> IntentWithRawResponse:
        return self._with_raw_response


class AsyncIntent:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIntentWithRawResponse(client, server, auth)

    async def score_company_intent(
        self, body: IntentRequest | IntentRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IntentAccepted:
        """Submits a bulk of companies for intent refresh. Company name is required. Returns a polling URI.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The bulk job has successfully been accepted

        Raises:
            ApiError: The request failed due to insufficient basic input, or the JSON format is invalid Unauthorized
                request (wrong credentials or credentials have expired) Insufficient credits or program ID is invalid
                Server error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.score_company_intent(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncIntentWithRawResponse:
        return self._with_raw_response


class IntentWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def score_company_intent(
        self, body: IntentRequest | IntentRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IntentAccepted, ScoreCompanyIntentErrorBody]:
        """Submits a bulk of companies for intent refresh. Company name is required. Returns a polling URI.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/intent/score/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IntentRequest | IntentRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[IntentAccepted],
            error_mapper=score_company_intent_error_mapper,
            request_options=request_options,
        )


class AsyncIntentWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def score_company_intent(
        self, body: IntentRequest | IntentRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IntentAccepted, ScoreCompanyIntentErrorBody]:
        """Submits a bulk of companies for intent refresh. Company name is required. Returns a polling URI.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/intent/score/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IntentRequest | IntentRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[IntentAccepted],
            error_mapper=score_company_intent_error_mapper,
            request_options=request_options,
        )
