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
from ..errors.post_app_center_api_v2_jwt_token_error import (
    PostAppCenterApiV2JwtTokenErrorBody,
    post_app_center_api_v2_jwt_token_error_mapper,
)
from ..models.issuer_jwt_request import IssuerJwtRequest, IssuerJwtRequestDict
from ..models.issuer_jwt_response import IssuerJwtResponse
from ..server.server import Server


class JwtIssuer:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = JwtIssuerWithRawResponse(client, server)

    def post_app_center_api_v2_jwt_token(
        self,
        *,
        body: IssuerJwtRequest | IssuerJwtRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IssuerJwtResponse:
        """Retrieves JWT for accessing Semrush API. Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature Access denied ``error`` is ``str | RawError``."""
        return unwrap(
            self._with_raw_response.post_app_center_api_v2_jwt_token(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> JwtIssuerWithRawResponse:
        return self._with_raw_response


class AsyncJwtIssuer:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncJwtIssuerWithRawResponse(client, server)

    async def post_app_center_api_v2_jwt_token(
        self,
        *,
        body: IssuerJwtRequest | IssuerJwtRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IssuerJwtResponse:
        """Retrieves JWT for accessing Semrush API. Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature Access denied ``error`` is ``str | RawError``."""
        return unwrap(
            await self._with_raw_response.post_app_center_api_v2_jwt_token(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncJwtIssuerWithRawResponse:
        return self._with_raw_response


class JwtIssuerWithRawResponse(BaseRawResponse[RawClient, Server]):
    def post_app_center_api_v2_jwt_token(
        self,
        *,
        body: IssuerJwtRequest | IssuerJwtRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IssuerJwtResponse, PostAppCenterApiV2JwtTokenErrorBody]:
        """Retrieves JWT for accessing Semrush API. Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/app-center-api/v2/jwt-token/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IssuerJwtRequest | IssuerJwtRequestDict | None](body),
            decoder=json_decoder[IssuerJwtResponse],
            error_mapper=post_app_center_api_v2_jwt_token_error_mapper,
            request_options=request_options,
        )


class AsyncJwtIssuerWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def post_app_center_api_v2_jwt_token(
        self,
        *,
        body: IssuerJwtRequest | IssuerJwtRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IssuerJwtResponse, PostAppCenterApiV2JwtTokenErrorBody]:
        """Retrieves JWT for accessing Semrush API. Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/app-center-api/v2/jwt-token/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IssuerJwtRequest | IssuerJwtRequestDict | None](body),
            decoder=async_json_decoder[IssuerJwtResponse],
            error_mapper=post_app_center_api_v2_jwt_token_error_mapper,
            request_options=request_options,
        )
