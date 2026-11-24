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
from ..errors.create_signup_error import CreateSignupErrorBody, create_signup_error_mapper
from ..models.create_signup_request import CreateSignupRequest, CreateSignupRequestDict
from ..models.unions.signups_response import SignupsResponse
from ..server.server import Server


class Signups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SignupsWithRawResponse(client, server, auth)

    def create_signup(
        self,
        body: CreateSignupRequest | CreateSignupRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignupsResponse:
        """Record a signup: consent for a delivery handle, plus the fields the form collected.

        Whether consent settles immediately or waits for a double opt-in confirmation is the channel's configuration, so
        one call covers both and the response says which happened.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Conflict Unprocessable Something went wrong
                Confirmation could not be sent ``error`` is ``SignupErrorResponse | SignupsResponse1 |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.create_signup(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SignupsWithRawResponse:
        return self._with_raw_response


class AsyncSignups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSignupsWithRawResponse(client, server, auth)

    async def create_signup(
        self,
        body: CreateSignupRequest | CreateSignupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignupsResponse:
        """Record a signup: consent for a delivery handle, plus the fields the form collected.

        Whether consent settles immediately or waits for a double opt-in confirmation is the channel's configuration, so
        one call covers both and the response says which happened.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Conflict Unprocessable Something went wrong
                Confirmation could not be sent ``error`` is ``SignupErrorResponse | SignupsResponse1 |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.create_signup(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSignupsWithRawResponse:
        return self._with_raw_response


class SignupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_signup(
        self,
        body: CreateSignupRequest | CreateSignupRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignupsResponse, CreateSignupErrorBody]:
        """Record a signup: consent for a delivery handle, plus the fields the form collected.

        Whether consent settles immediately or waits for a double opt-in confirmation is the channel's configuration, so
        one call covers both and the response says which happened.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSignupRequest | CreateSignupRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SignupsResponse],
            error_mapper=create_signup_error_mapper,
            request_options=request_options,
        )


class AsyncSignupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_signup(
        self,
        body: CreateSignupRequest | CreateSignupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignupsResponse, CreateSignupErrorBody]:
        """Record a signup: consent for a delivery handle, plus the fields the form collected.

        Whether consent settles immediately or waits for a double opt-in confirmation is the channel's configuration, so
        one call covers both and the response says which happened.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/signups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSignupRequest | CreateSignupRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SignupsResponse],
            error_mapper=create_signup_error_mapper,
            request_options=request_options,
        )
