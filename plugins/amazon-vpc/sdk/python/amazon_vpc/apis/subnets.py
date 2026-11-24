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
from ..errors.create_subnet_error import CreateSubnetErrorBody, create_subnet_error_mapper
from ..errors.delete_subnet_error import DeleteSubnetErrorBody, delete_subnet_error_mapper
from ..errors.describe_subnets_error import DescribeSubnetsErrorBody, describe_subnets_error_mapper
from ..server.server import Server


class Subnets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SubnetsWithRawResponse(client, server, auth)

    def create_subnet(
        self,
        vpc_id: str,
        cidr_block: str,
        *,
        availability_zone: str | None = None,
        ipv6_cidr_block: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a subnet in the specified VPC. The new subnet must have a CIDR block that is within the VPC CIDR
        block. You can optionally specify an Availability Zone in which to create the subnet.

        Args:
            vpc_id: The ID of the VPC
            cidr_block: The IPv4 network range for the subnet in CIDR notation
            availability_zone: The Availability Zone or Local Zone for the subnet
            ipv6_cidr_block: The IPv6 network range for the subnet in CIDR notation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created subnet

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_subnet(
                vpc_id,
                cidr_block,
                availability_zone=availability_zone,
                ipv6_cidr_block=ipv6_cidr_block,
                request_options=request_options,
            ),
        )

    def delete_subnet(self, subnet_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete
        the subnet.

        Args:
            subnet_id: The ID of the subnet to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted subnet

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_subnet(subnet_id, request_options=request_options))

    def describe_subnets(
        self,
        *,
        subnet_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes one or more of your subnets. Returns information about the subnet including the CIDR block,
        Availability Zone, VPC, and state.

        Args:
            subnet_id: The IDs of the subnets to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully described subnets

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_subnets(
                subnet_id=subnet_id,
                filter_=filter_,
                max_results=max_results,
                next_token=next_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SubnetsWithRawResponse:
        return self._with_raw_response


class AsyncSubnets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSubnetsWithRawResponse(client, server, auth)

    async def create_subnet(
        self,
        vpc_id: str,
        cidr_block: str,
        *,
        availability_zone: str | None = None,
        ipv6_cidr_block: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a subnet in the specified VPC. The new subnet must have a CIDR block that is within the VPC CIDR
        block. You can optionally specify an Availability Zone in which to create the subnet.

        Args:
            vpc_id: The ID of the VPC
            cidr_block: The IPv4 network range for the subnet in CIDR notation
            availability_zone: The Availability Zone or Local Zone for the subnet
            ipv6_cidr_block: The IPv6 network range for the subnet in CIDR notation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created subnet

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_subnet(
                vpc_id,
                cidr_block,
                availability_zone=availability_zone,
                ipv6_cidr_block=ipv6_cidr_block,
                request_options=request_options,
            ),
        )

    async def delete_subnet(self, subnet_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete
        the subnet.

        Args:
            subnet_id: The ID of the subnet to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted subnet

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_subnet(subnet_id, request_options=request_options))

    async def describe_subnets(
        self,
        *,
        subnet_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes one or more of your subnets. Returns information about the subnet including the CIDR block,
        Availability Zone, VPC, and state.

        Args:
            subnet_id: The IDs of the subnets to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully described subnets

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_subnets(
                subnet_id=subnet_id,
                filter_=filter_,
                max_results=max_results,
                next_token=next_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSubnetsWithRawResponse:
        return self._with_raw_response


class SubnetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_subnet(
        self,
        vpc_id: str,
        cidr_block: str,
        *,
        availability_zone: str | None = None,
        ipv6_cidr_block: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateSubnetErrorBody]:
        """Creates a subnet in the specified VPC. The new subnet must have a CIDR block that is within the VPC CIDR
        block. You can optionally specify an Availability Zone in which to create the subnet.

        Args:
            vpc_id: The ID of the VPC
            cidr_block: The IPv4 network range for the subnet in CIDR notation
            availability_zone: The Availability Zone or Local Zone for the subnet
            ipv6_cidr_block: The IPv6 network range for the subnet in CIDR notation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateSubnet"),
            query_params=[
                param[str]("VpcId", vpc_id),
                param[str]("CidrBlock", cidr_block),
                param[str | None]("AvailabilityZone", availability_zone),
                param[str | None]("Ipv6CidrBlock", ipv6_cidr_block),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=create_subnet_error_mapper,
            request_options=request_options,
        )

    def delete_subnet(
        self, subnet_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSubnetErrorBody]:
        """Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete
        the subnet.

        Args:
            subnet_id: The ID of the subnet to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DeleteSubnet"),
            query_params=[param[str]("SubnetId", subnet_id)],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=delete_subnet_error_mapper,
            request_options=request_options,
        )

    def describe_subnets(
        self,
        *,
        subnet_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeSubnetsErrorBody]:
        """Describes one or more of your subnets. Returns information about the subnet including the CIDR block,
        Availability Zone, VPC, and state.

        Args:
            subnet_id: The IDs of the subnets to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DescribeSubnets"),
            query_params=[
                param[list[str] | None]("SubnetId", subnet_id),
                param[list[str] | None]("Filter", filter_),
                param[int | None]("MaxResults", max_results),
                param[str | None]("NextToken", next_token),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=describe_subnets_error_mapper,
            request_options=request_options,
        )


class AsyncSubnetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_subnet(
        self,
        vpc_id: str,
        cidr_block: str,
        *,
        availability_zone: str | None = None,
        ipv6_cidr_block: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateSubnetErrorBody]:
        """Creates a subnet in the specified VPC. The new subnet must have a CIDR block that is within the VPC CIDR
        block. You can optionally specify an Availability Zone in which to create the subnet.

        Args:
            vpc_id: The ID of the VPC
            cidr_block: The IPv4 network range for the subnet in CIDR notation
            availability_zone: The Availability Zone or Local Zone for the subnet
            ipv6_cidr_block: The IPv6 network range for the subnet in CIDR notation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateSubnet"),
            query_params=[
                param[str]("VpcId", vpc_id),
                param[str]("CidrBlock", cidr_block),
                param[str | None]("AvailabilityZone", availability_zone),
                param[str | None]("Ipv6CidrBlock", ipv6_cidr_block),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=create_subnet_error_mapper,
            request_options=request_options,
        )

    async def delete_subnet(
        self, subnet_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSubnetErrorBody]:
        """Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete
        the subnet.

        Args:
            subnet_id: The ID of the subnet to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DeleteSubnet"),
            query_params=[param[str]("SubnetId", subnet_id)],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=delete_subnet_error_mapper,
            request_options=request_options,
        )

    async def describe_subnets(
        self,
        *,
        subnet_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeSubnetsErrorBody]:
        """Describes one or more of your subnets. Returns information about the subnet including the CIDR block,
        Availability Zone, VPC, and state.

        Args:
            subnet_id: The IDs of the subnets to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DescribeSubnets"),
            query_params=[
                param[list[str] | None]("SubnetId", subnet_id),
                param[list[str] | None]("Filter", filter_),
                param[int | None]("MaxResults", max_results),
                param[str | None]("NextToken", next_token),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=describe_subnets_error_mapper,
            request_options=request_options,
        )
