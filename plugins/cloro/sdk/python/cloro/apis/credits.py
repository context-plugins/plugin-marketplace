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
    unwrap,
)
from ..errors.get_credits_error import GetCreditsErrorBody, get_credits_error_mapper
from ..models.credits_response import CreditsResponse
from ..server.server import Server


class Credits:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CreditsWithRawResponse(client, server, auth)

    def get_credits(self, *, request_options: RequestOptionsOrDict | None = None) -> CreditsResponse:
        """Read your organization's current credit balance and billing cycle. Lets you observe your balance
        programmatically — including from async-only workloads — without making a sync /v1/monitor/* request just to
        inspect the X-Credits-Remaining header. The balance is cached and can lag by up to 60 seconds. Queued async
        tasks are re-checked against your live balance when the scheduler picks them up.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current credit balance and billing cycle.

        Raises:
            ApiError: Unauthorized - Authentication error Too Many Requests - API key rate limit exceeded Internal
                Server Error ``error`` is ``AuthenticationErrorCloroDevCreditsApi | RateLimitErrorCloroDevCreditsApi |
                InternalErrorCloroDevCreditsApi | RawError``."""
        return unwrap(self._with_raw_response.get_credits(request_options=request_options))

    @property
    def with_raw_response(self) -> CreditsWithRawResponse:
        return self._with_raw_response


class AsyncCredits:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCreditsWithRawResponse(client, server, auth)

    async def get_credits(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> CreditsResponse:
        """Read your organization's current credit balance and billing cycle. Lets you observe your balance
        programmatically — including from async-only workloads — without making a sync /v1/monitor/* request just to
        inspect the X-Credits-Remaining header. The balance is cached and can lag by up to 60 seconds. Queued async
        tasks are re-checked against your live balance when the scheduler picks them up.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current credit balance and billing cycle.

        Raises:
            ApiError: Unauthorized - Authentication error Too Many Requests - API key rate limit exceeded Internal
                Server Error ``error`` is ``AuthenticationErrorCloroDevCreditsApi | RateLimitErrorCloroDevCreditsApi |
                InternalErrorCloroDevCreditsApi | RawError``."""
        return unwrap(await self._with_raw_response.get_credits(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCreditsWithRawResponse:
        return self._with_raw_response


class CreditsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_credits(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CreditsResponse, GetCreditsErrorBody]:
        """Read your organization's current credit balance and billing cycle. Lets you observe your balance
        programmatically — including from async-only workloads — without making a sync /v1/monitor/* request just to
        inspect the X-Credits-Remaining header. The balance is cached and can lag by up to 60 seconds. Queued async
        tasks are re-checked against your live balance when the scheduler picks them up.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/credits"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreditsResponse],
            error_mapper=get_credits_error_mapper,
            request_options=request_options,
        )


class AsyncCreditsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_credits(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CreditsResponse, GetCreditsErrorBody]:
        """Read your organization's current credit balance and billing cycle. Lets you observe your balance
        programmatically — including from async-only workloads — without making a sync /v1/monitor/* request just to
        inspect the X-Credits-Remaining header. The balance is cached and can lag by up to 60 seconds. Queued async
        tasks are re-checked against your live balance when the scheduler picks them up.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/credits"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreditsResponse],
            error_mapper=get_credits_error_mapper,
            request_options=request_options,
        )
