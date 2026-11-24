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
from ..errors.create_nat_gateway_error import CreateNatGatewayErrorBody, create_nat_gateway_error_mapper
from ..errors.describe_nat_gateways_error import DescribeNatGatewaysErrorBody, describe_nat_gateways_error_mapper
from ..models.enums.connectivity_type1 import ConnectivityType1OrStr
from ..server.server import Server


class NatGateways:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NatGatewaysWithRawResponse(client, server, auth)

    def create_nat_gateway(
        self,
        subnet_id: str,
        *,
        allocation_id: str | None = None,
        connectivity_type: ConnectivityType1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a NAT gateway in the specified subnet. A NAT gateway enables instances in a private subnet to connect
        to the internet or other AWS services, but prevents the internet from initiating a connection with those
        instances.

        Args:
            subnet_id: The ID of the subnet in which to create the NAT gateway
            allocation_id: The allocation ID of an Elastic IP address to associate with the NAT gateway
            connectivity_type: Indicates whether the NAT gateway supports public or private connectivity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created NAT gateway

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_nat_gateway(
                subnet_id,
                allocation_id=allocation_id,
                connectivity_type=connectivity_type,
                request_options=request_options,
            ),
        )

    def describe_nat_gateways(
        self,
        *,
        nat_gateway_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes one or more of your NAT gateways. Returns information about the NAT gateway including its state,
        subnet, and associated Elastic IP address.

        Args:
            nat_gateway_id: The IDs of the NAT gateways to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully described NAT gateways

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_nat_gateways(
                nat_gateway_id=nat_gateway_id,
                filter_=filter_,
                max_results=max_results,
                next_token=next_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> NatGatewaysWithRawResponse:
        return self._with_raw_response


class AsyncNatGateways:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNatGatewaysWithRawResponse(client, server, auth)

    async def create_nat_gateway(
        self,
        subnet_id: str,
        *,
        allocation_id: str | None = None,
        connectivity_type: ConnectivityType1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a NAT gateway in the specified subnet. A NAT gateway enables instances in a private subnet to connect
        to the internet or other AWS services, but prevents the internet from initiating a connection with those
        instances.

        Args:
            subnet_id: The ID of the subnet in which to create the NAT gateway
            allocation_id: The allocation ID of an Elastic IP address to associate with the NAT gateway
            connectivity_type: Indicates whether the NAT gateway supports public or private connectivity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created NAT gateway

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_nat_gateway(
                subnet_id,
                allocation_id=allocation_id,
                connectivity_type=connectivity_type,
                request_options=request_options,
            ),
        )

    async def describe_nat_gateways(
        self,
        *,
        nat_gateway_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes one or more of your NAT gateways. Returns information about the NAT gateway including its state,
        subnet, and associated Elastic IP address.

        Args:
            nat_gateway_id: The IDs of the NAT gateways to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully described NAT gateways

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_nat_gateways(
                nat_gateway_id=nat_gateway_id,
                filter_=filter_,
                max_results=max_results,
                next_token=next_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNatGatewaysWithRawResponse:
        return self._with_raw_response


class NatGatewaysWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_nat_gateway(
        self,
        subnet_id: str,
        *,
        allocation_id: str | None = None,
        connectivity_type: ConnectivityType1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateNatGatewayErrorBody]:
        """Creates a NAT gateway in the specified subnet. A NAT gateway enables instances in a private subnet to connect
        to the internet or other AWS services, but prevents the internet from initiating a connection with those
        instances.

        Args:
            subnet_id: The ID of the subnet in which to create the NAT gateway
            allocation_id: The allocation ID of an Elastic IP address to associate with the NAT gateway
            connectivity_type: Indicates whether the NAT gateway supports public or private connectivity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateNatGateway"),
            query_params=[
                param[str]("SubnetId", subnet_id),
                param[str | None]("AllocationId", allocation_id),
                param[ConnectivityType1OrStr | None]("ConnectivityType", connectivity_type),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=create_nat_gateway_error_mapper,
            request_options=request_options,
        )

    def describe_nat_gateways(
        self,
        *,
        nat_gateway_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeNatGatewaysErrorBody]:
        """Describes one or more of your NAT gateways. Returns information about the NAT gateway including its state,
        subnet, and associated Elastic IP address.

        Args:
            nat_gateway_id: The IDs of the NAT gateways to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DescribeNatGateways"),
            query_params=[
                param[list[str] | None]("NatGatewayId", nat_gateway_id),
                param[list[str] | None]("Filter", filter_),
                param[int | None]("MaxResults", max_results),
                param[str | None]("NextToken", next_token),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=describe_nat_gateways_error_mapper,
            request_options=request_options,
        )


class AsyncNatGatewaysWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_nat_gateway(
        self,
        subnet_id: str,
        *,
        allocation_id: str | None = None,
        connectivity_type: ConnectivityType1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateNatGatewayErrorBody]:
        """Creates a NAT gateway in the specified subnet. A NAT gateway enables instances in a private subnet to connect
        to the internet or other AWS services, but prevents the internet from initiating a connection with those
        instances.

        Args:
            subnet_id: The ID of the subnet in which to create the NAT gateway
            allocation_id: The allocation ID of an Elastic IP address to associate with the NAT gateway
            connectivity_type: Indicates whether the NAT gateway supports public or private connectivity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateNatGateway"),
            query_params=[
                param[str]("SubnetId", subnet_id),
                param[str | None]("AllocationId", allocation_id),
                param[ConnectivityType1OrStr | None]("ConnectivityType", connectivity_type),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=create_nat_gateway_error_mapper,
            request_options=request_options,
        )

    async def describe_nat_gateways(
        self,
        *,
        nat_gateway_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeNatGatewaysErrorBody]:
        """Describes one or more of your NAT gateways. Returns information about the NAT gateway including its state,
        subnet, and associated Elastic IP address.

        Args:
            nat_gateway_id: The IDs of the NAT gateways to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DescribeNatGateways"),
            query_params=[
                param[list[str] | None]("NatGatewayId", nat_gateway_id),
                param[list[str] | None]("Filter", filter_),
                param[int | None]("MaxResults", max_results),
                param[str | None]("NextToken", next_token),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=describe_nat_gateways_error_mapper,
            request_options=request_options,
        )
