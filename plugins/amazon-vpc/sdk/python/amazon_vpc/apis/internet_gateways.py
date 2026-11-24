from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.attach_internet_gateway_error import AttachInternetGatewayErrorBody, attach_internet_gateway_error_mapper
from ..errors.create_internet_gateway_error import CreateInternetGatewayErrorBody, create_internet_gateway_error_mapper
from ..server.server import Server


class InternetGateways:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InternetGatewaysWithRawResponse(client, server, auth)

    def attach_internet_gateway(
        self, internet_gateway_id: str, vpc_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the
        internet and the VPC.

        Args:
            internet_gateway_id: The ID of the internet gateway
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully attached internet gateway

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.attach_internet_gateway(
                internet_gateway_id, vpc_id, request_options=request_options
            ),
        )

    def create_internet_gateway(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach it to a VPC
        using AttachInternetGateway.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created internet gateway

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_internet_gateway(request_options=request_options))

    @property
    def with_raw_response(self) -> InternetGatewaysWithRawResponse:
        return self._with_raw_response


class AsyncInternetGateways:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInternetGatewaysWithRawResponse(client, server, auth)

    async def attach_internet_gateway(
        self, internet_gateway_id: str, vpc_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the
        internet and the VPC.

        Args:
            internet_gateway_id: The ID of the internet gateway
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully attached internet gateway

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.attach_internet_gateway(
                internet_gateway_id, vpc_id, request_options=request_options
            ),
        )

    async def create_internet_gateway(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach it to a VPC
        using AttachInternetGateway.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created internet gateway

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_internet_gateway(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncInternetGatewaysWithRawResponse:
        return self._with_raw_response


class InternetGatewaysWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def attach_internet_gateway(
        self, internet_gateway_id: str, vpc_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AttachInternetGatewayErrorBody]:
        """Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the
        internet and the VPC.

        Args:
            internet_gateway_id: The ID of the internet gateway
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=AttachInternetGateway"),
            query_params=[param[str]("InternetGatewayId", internet_gateway_id), param[str]("VpcId", vpc_id)],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=attach_internet_gateway_error_mapper,
            request_options=request_options,
        )

    def create_internet_gateway(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateInternetGatewayErrorBody]:
        """Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach it to a VPC
        using AttachInternetGateway.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateInternetGateway"),
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=create_internet_gateway_error_mapper,
            request_options=request_options,
        )


class AsyncInternetGatewaysWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def attach_internet_gateway(
        self, internet_gateway_id: str, vpc_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, AttachInternetGatewayErrorBody]:
        """Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the
        internet and the VPC.

        Args:
            internet_gateway_id: The ID of the internet gateway
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=AttachInternetGateway"),
            query_params=[param[str]("InternetGatewayId", internet_gateway_id), param[str]("VpcId", vpc_id)],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=attach_internet_gateway_error_mapper,
            request_options=request_options,
        )

    async def create_internet_gateway(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateInternetGatewayErrorBody]:
        """Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach it to a VPC
        using AttachInternetGateway.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateInternetGateway"),
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=create_internet_gateway_error_mapper,
            request_options=request_options,
        )
