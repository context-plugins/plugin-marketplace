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
from ..errors.associate_route_table_error import AssociateRouteTableErrorBody, associate_route_table_error_mapper
from ..errors.create_route_error import CreateRouteErrorBody, create_route_error_mapper
from ..errors.create_route_table_error import CreateRouteTableErrorBody, create_route_table_error_mapper
from ..errors.describe_route_tables_error import DescribeRouteTablesErrorBody, describe_route_tables_error_mapper
from ..server.server import Server


class RouteTables:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RouteTablesWithRawResponse(client, server, auth)

    def associate_route_table(
        self,
        route_table_id: str,
        *,
        subnet_id: str | None = None,
        gateway_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Associates a subnet or gateway with a route table. The subnet and route table must be in the same VPC. This
        association causes traffic from the subnet to be routed according to the routes in the route table.

        Args:
            route_table_id: The ID of the route table
            subnet_id: The ID of the subnet
            gateway_id: The ID of the internet gateway or virtual private gateway
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully associated route table

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.associate_route_table(
                route_table_id, subnet_id=subnet_id, gateway_id=gateway_id, request_options=request_options
            ),
        )

    def create_route(
        self,
        route_table_id: str,
        *,
        destination_cidr_block: str | None = None,
        gateway_id: str | None = None,
        nat_gateway_id: str | None = None,
        network_interface_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a route in a route table within a VPC. You must specify either a destination CIDR block or a prefix
        list ID. You must also specify exactly one of the targets.

        Args:
            route_table_id: The ID of the route table for the route
            destination_cidr_block: The IPv4 CIDR address block used for the destination match
            gateway_id: The ID of an internet gateway or virtual private gateway
            nat_gateway_id: The ID of a NAT gateway
            network_interface_id: The ID of a network interface
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created route

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_route(
                route_table_id,
                destination_cidr_block=destination_cidr_block,
                gateway_id=gateway_id,
                nat_gateway_id=nat_gateway_id,
                network_interface_id=network_interface_id,
                request_options=request_options,
            ),
        )

    def create_route_table(self, vpc_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Creates a route table for the specified VPC. After you create a route table, you can add routes and associate
        the table with a subnet.

        Args:
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created route table

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_route_table(vpc_id, request_options=request_options))

    def describe_route_tables(
        self,
        *,
        route_table_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes one or more of your route tables. Each subnet in your VPC must be associated with a route table,
        which controls the routing for the subnet.

        Args:
            route_table_id: The IDs of the route tables to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully described route tables

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_route_tables(
                route_table_id=route_table_id,
                filter_=filter_,
                max_results=max_results,
                next_token=next_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> RouteTablesWithRawResponse:
        return self._with_raw_response


class AsyncRouteTables:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRouteTablesWithRawResponse(client, server, auth)

    async def associate_route_table(
        self,
        route_table_id: str,
        *,
        subnet_id: str | None = None,
        gateway_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Associates a subnet or gateway with a route table. The subnet and route table must be in the same VPC. This
        association causes traffic from the subnet to be routed according to the routes in the route table.

        Args:
            route_table_id: The ID of the route table
            subnet_id: The ID of the subnet
            gateway_id: The ID of the internet gateway or virtual private gateway
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully associated route table

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.associate_route_table(
                route_table_id, subnet_id=subnet_id, gateway_id=gateway_id, request_options=request_options
            ),
        )

    async def create_route(
        self,
        route_table_id: str,
        *,
        destination_cidr_block: str | None = None,
        gateway_id: str | None = None,
        nat_gateway_id: str | None = None,
        network_interface_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a route in a route table within a VPC. You must specify either a destination CIDR block or a prefix
        list ID. You must also specify exactly one of the targets.

        Args:
            route_table_id: The ID of the route table for the route
            destination_cidr_block: The IPv4 CIDR address block used for the destination match
            gateway_id: The ID of an internet gateway or virtual private gateway
            nat_gateway_id: The ID of a NAT gateway
            network_interface_id: The ID of a network interface
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created route

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_route(
                route_table_id,
                destination_cidr_block=destination_cidr_block,
                gateway_id=gateway_id,
                nat_gateway_id=nat_gateway_id,
                network_interface_id=network_interface_id,
                request_options=request_options,
            ),
        )

    async def create_route_table(
        self, vpc_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a route table for the specified VPC. After you create a route table, you can add routes and associate
        the table with a subnet.

        Args:
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created route table

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_route_table(vpc_id, request_options=request_options))

    async def describe_route_tables(
        self,
        *,
        route_table_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes one or more of your route tables. Each subnet in your VPC must be associated with a route table,
        which controls the routing for the subnet.

        Args:
            route_table_id: The IDs of the route tables to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully described route tables

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_route_tables(
                route_table_id=route_table_id,
                filter_=filter_,
                max_results=max_results,
                next_token=next_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRouteTablesWithRawResponse:
        return self._with_raw_response


class RouteTablesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def associate_route_table(
        self,
        route_table_id: str,
        *,
        subnet_id: str | None = None,
        gateway_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssociateRouteTableErrorBody]:
        """Associates a subnet or gateway with a route table. The subnet and route table must be in the same VPC. This
        association causes traffic from the subnet to be routed according to the routes in the route table.

        Args:
            route_table_id: The ID of the route table
            subnet_id: The ID of the subnet
            gateway_id: The ID of the internet gateway or virtual private gateway
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=AssociateRouteTable"),
            query_params=[
                param[str]("RouteTableId", route_table_id),
                param[str | None]("SubnetId", subnet_id),
                param[str | None]("GatewayId", gateway_id),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=associate_route_table_error_mapper,
            request_options=request_options,
        )

    def create_route(
        self,
        route_table_id: str,
        *,
        destination_cidr_block: str | None = None,
        gateway_id: str | None = None,
        nat_gateway_id: str | None = None,
        network_interface_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateRouteErrorBody]:
        """Creates a route in a route table within a VPC. You must specify either a destination CIDR block or a prefix
        list ID. You must also specify exactly one of the targets.

        Args:
            route_table_id: The ID of the route table for the route
            destination_cidr_block: The IPv4 CIDR address block used for the destination match
            gateway_id: The ID of an internet gateway or virtual private gateway
            nat_gateway_id: The ID of a NAT gateway
            network_interface_id: The ID of a network interface
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateRoute"),
            query_params=[
                param[str]("RouteTableId", route_table_id),
                param[str | None]("DestinationCidrBlock", destination_cidr_block),
                param[str | None]("GatewayId", gateway_id),
                param[str | None]("NatGatewayId", nat_gateway_id),
                param[str | None]("NetworkInterfaceId", network_interface_id),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=create_route_error_mapper,
            request_options=request_options,
        )

    def create_route_table(
        self, vpc_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateRouteTableErrorBody]:
        """Creates a route table for the specified VPC. After you create a route table, you can add routes and associate
        the table with a subnet.

        Args:
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateRouteTable"),
            query_params=[param[str]("VpcId", vpc_id)],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=create_route_table_error_mapper,
            request_options=request_options,
        )

    def describe_route_tables(
        self,
        *,
        route_table_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeRouteTablesErrorBody]:
        """Describes one or more of your route tables. Each subnet in your VPC must be associated with a route table,
        which controls the routing for the subnet.

        Args:
            route_table_id: The IDs of the route tables to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DescribeRouteTables"),
            query_params=[
                param[list[str] | None]("RouteTableId", route_table_id),
                param[list[str] | None]("Filter", filter_),
                param[int | None]("MaxResults", max_results),
                param[str | None]("NextToken", next_token),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=describe_route_tables_error_mapper,
            request_options=request_options,
        )


class AsyncRouteTablesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def associate_route_table(
        self,
        route_table_id: str,
        *,
        subnet_id: str | None = None,
        gateway_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssociateRouteTableErrorBody]:
        """Associates a subnet or gateway with a route table. The subnet and route table must be in the same VPC. This
        association causes traffic from the subnet to be routed according to the routes in the route table.

        Args:
            route_table_id: The ID of the route table
            subnet_id: The ID of the subnet
            gateway_id: The ID of the internet gateway or virtual private gateway
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=AssociateRouteTable"),
            query_params=[
                param[str]("RouteTableId", route_table_id),
                param[str | None]("SubnetId", subnet_id),
                param[str | None]("GatewayId", gateway_id),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=associate_route_table_error_mapper,
            request_options=request_options,
        )

    async def create_route(
        self,
        route_table_id: str,
        *,
        destination_cidr_block: str | None = None,
        gateway_id: str | None = None,
        nat_gateway_id: str | None = None,
        network_interface_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateRouteErrorBody]:
        """Creates a route in a route table within a VPC. You must specify either a destination CIDR block or a prefix
        list ID. You must also specify exactly one of the targets.

        Args:
            route_table_id: The ID of the route table for the route
            destination_cidr_block: The IPv4 CIDR address block used for the destination match
            gateway_id: The ID of an internet gateway or virtual private gateway
            nat_gateway_id: The ID of a NAT gateway
            network_interface_id: The ID of a network interface
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateRoute"),
            query_params=[
                param[str]("RouteTableId", route_table_id),
                param[str | None]("DestinationCidrBlock", destination_cidr_block),
                param[str | None]("GatewayId", gateway_id),
                param[str | None]("NatGatewayId", nat_gateway_id),
                param[str | None]("NetworkInterfaceId", network_interface_id),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=create_route_error_mapper,
            request_options=request_options,
        )

    async def create_route_table(
        self, vpc_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateRouteTableErrorBody]:
        """Creates a route table for the specified VPC. After you create a route table, you can add routes and associate
        the table with a subnet.

        Args:
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateRouteTable"),
            query_params=[param[str]("VpcId", vpc_id)],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=create_route_table_error_mapper,
            request_options=request_options,
        )

    async def describe_route_tables(
        self,
        *,
        route_table_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeRouteTablesErrorBody]:
        """Describes one or more of your route tables. Each subnet in your VPC must be associated with a route table,
        which controls the routing for the subnet.

        Args:
            route_table_id: The IDs of the route tables to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DescribeRouteTables"),
            query_params=[
                param[list[str] | None]("RouteTableId", route_table_id),
                param[list[str] | None]("Filter", filter_),
                param[int | None]("MaxResults", max_results),
                param[str | None]("NextToken", next_token),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=describe_route_tables_error_mapper,
            request_options=request_options,
        )
