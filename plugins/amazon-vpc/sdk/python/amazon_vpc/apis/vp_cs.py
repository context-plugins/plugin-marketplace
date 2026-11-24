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
from ..errors.create_vpc_error import CreateVpcErrorBody, create_vpc_error_mapper
from ..errors.delete_vpc_error import DeleteVpcErrorBody, delete_vpc_error_mapper
from ..errors.describe_vpcs_error import DescribeVpcsErrorBody, describe_vpcs_error_mapper
from ..errors.modify_vpc_attribute_error import ModifyVpcAttributeErrorBody, modify_vpc_attribute_error_mapper
from ..models.enums.instance_tenancy1 import InstanceTenancy1OrStr
from ..server.server import Server


class VpCs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VpCsWithRawResponse(client, server, auth)

    def create_vpc(
        self,
        cidr_block: str,
        *,
        amazon_provided_ipv6_cidr_block: bool | None = None,
        instance_tenancy: InstanceTenancy1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create uses a /28 netmask (16 IPv4
        addresses), and the largest uses a /16 netmask (65,536 IPv4 addresses). After creating the VPC, you can add one
        or more subnets.

        Args:
            cidr_block: The IPv4 network range for the VPC in CIDR notation (e.g., 10.0.0.0/16)
            amazon_provided_ipv6_cidr_block: Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length
            instance_tenancy: The tenancy options for instances launched into the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created VPC

        Raises:
            ApiError: Invalid request parameters Authentication failure Authorization failure ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_vpc(
                cidr_block,
                amazon_provided_ipv6_cidr_block=amazon_provided_ipv6_cidr_block,
                instance_tenancy=instance_tenancy,
                request_options=request_options,
            ),
        )

    def delete_vpc(self, vpc_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the
        VPC before you can delete it. You must also delete all subnets associated with the VPC.

        Args:
            vpc_id: The ID of the VPC to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted VPC

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_vpc(vpc_id, request_options=request_options))

    def describe_vpcs(
        self,
        *,
        vpc_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes one or more of your VPCs. Returns information about the VPC including the CIDR block, DHCP options
        set, state, and tags.

        Args:
            vpc_id: The IDs of the VPCs to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully described VPCs

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_vpcs(
                vpc_id=vpc_id,
                filter_=filter_,
                max_results=max_results,
                next_token=next_token,
                request_options=request_options,
            ),
        )

    def modify_vpc_attribute(
        self,
        vpc_id: str,
        *,
        enable_dns_support_value: bool | None = None,
        enable_dns_hostnames_value: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Modifies the specified attribute of the specified VPC. You can modify the DNS resolution and DNS hostname
        attributes.

        Args:
            vpc_id: The ID of the VPC
            enable_dns_support_value: Indicates whether DNS resolution is supported for the VPC
            enable_dns_hostnames_value: Indicates whether instances launched in the VPC get DNS hostnames
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully modified VPC attribute

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.modify_vpc_attribute(
                vpc_id,
                enable_dns_support_value=enable_dns_support_value,
                enable_dns_hostnames_value=enable_dns_hostnames_value,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> VpCsWithRawResponse:
        return self._with_raw_response


class AsyncVpCs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVpCsWithRawResponse(client, server, auth)

    async def create_vpc(
        self,
        cidr_block: str,
        *,
        amazon_provided_ipv6_cidr_block: bool | None = None,
        instance_tenancy: InstanceTenancy1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create uses a /28 netmask (16 IPv4
        addresses), and the largest uses a /16 netmask (65,536 IPv4 addresses). After creating the VPC, you can add one
        or more subnets.

        Args:
            cidr_block: The IPv4 network range for the VPC in CIDR notation (e.g., 10.0.0.0/16)
            amazon_provided_ipv6_cidr_block: Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length
            instance_tenancy: The tenancy options for instances launched into the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created VPC

        Raises:
            ApiError: Invalid request parameters Authentication failure Authorization failure ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_vpc(
                cidr_block,
                amazon_provided_ipv6_cidr_block=amazon_provided_ipv6_cidr_block,
                instance_tenancy=instance_tenancy,
                request_options=request_options,
            ),
        )

    async def delete_vpc(self, vpc_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the
        VPC before you can delete it. You must also delete all subnets associated with the VPC.

        Args:
            vpc_id: The ID of the VPC to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deleted VPC

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_vpc(vpc_id, request_options=request_options))

    async def describe_vpcs(
        self,
        *,
        vpc_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes one or more of your VPCs. Returns information about the VPC including the CIDR block, DHCP options
        set, state, and tags.

        Args:
            vpc_id: The IDs of the VPCs to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully described VPCs

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_vpcs(
                vpc_id=vpc_id,
                filter_=filter_,
                max_results=max_results,
                next_token=next_token,
                request_options=request_options,
            ),
        )

    async def modify_vpc_attribute(
        self,
        vpc_id: str,
        *,
        enable_dns_support_value: bool | None = None,
        enable_dns_hostnames_value: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Modifies the specified attribute of the specified VPC. You can modify the DNS resolution and DNS hostname
        attributes.

        Args:
            vpc_id: The ID of the VPC
            enable_dns_support_value: Indicates whether DNS resolution is supported for the VPC
            enable_dns_hostnames_value: Indicates whether instances launched in the VPC get DNS hostnames
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully modified VPC attribute

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.modify_vpc_attribute(
                vpc_id,
                enable_dns_support_value=enable_dns_support_value,
                enable_dns_hostnames_value=enable_dns_hostnames_value,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVpCsWithRawResponse:
        return self._with_raw_response


class VpCsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_vpc(
        self,
        cidr_block: str,
        *,
        amazon_provided_ipv6_cidr_block: bool | None = None,
        instance_tenancy: InstanceTenancy1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateVpcErrorBody]:
        """Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create uses a /28 netmask (16 IPv4
        addresses), and the largest uses a /16 netmask (65,536 IPv4 addresses). After creating the VPC, you can add one
        or more subnets.

        Args:
            cidr_block: The IPv4 network range for the VPC in CIDR notation (e.g., 10.0.0.0/16)
            amazon_provided_ipv6_cidr_block: Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length
            instance_tenancy: The tenancy options for instances launched into the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateVpc"),
            query_params=[
                param[str]("CidrBlock", cidr_block),
                param[bool | None]("AmazonProvidedIpv6CidrBlock", amazon_provided_ipv6_cidr_block),
                param[InstanceTenancy1OrStr | None]("InstanceTenancy", instance_tenancy),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=create_vpc_error_mapper,
            request_options=request_options,
        )

    def delete_vpc(
        self, vpc_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteVpcErrorBody]:
        """Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the
        VPC before you can delete it. You must also delete all subnets associated with the VPC.

        Args:
            vpc_id: The ID of the VPC to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DeleteVpc"),
            query_params=[param[str]("VpcId", vpc_id)],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=delete_vpc_error_mapper,
            request_options=request_options,
        )

    def describe_vpcs(
        self,
        *,
        vpc_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeVpcsErrorBody]:
        """Describes one or more of your VPCs. Returns information about the VPC including the CIDR block, DHCP options
        set, state, and tags.

        Args:
            vpc_id: The IDs of the VPCs to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DescribeVpcs"),
            query_params=[
                param[list[str] | None]("VpcId", vpc_id),
                param[list[str] | None]("Filter", filter_),
                param[int | None]("MaxResults", max_results),
                param[str | None]("NextToken", next_token),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=describe_vpcs_error_mapper,
            request_options=request_options,
        )

    def modify_vpc_attribute(
        self,
        vpc_id: str,
        *,
        enable_dns_support_value: bool | None = None,
        enable_dns_hostnames_value: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ModifyVpcAttributeErrorBody]:
        """Modifies the specified attribute of the specified VPC. You can modify the DNS resolution and DNS hostname
        attributes.

        Args:
            vpc_id: The ID of the VPC
            enable_dns_support_value: Indicates whether DNS resolution is supported for the VPC
            enable_dns_hostnames_value: Indicates whether instances launched in the VPC get DNS hostnames
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=ModifyVpcAttribute"),
            query_params=[
                param[str]("VpcId", vpc_id),
                param[bool | None]("EnableDnsSupport.Value", enable_dns_support_value),
                param[bool | None]("EnableDnsHostnames.Value", enable_dns_hostnames_value),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=modify_vpc_attribute_error_mapper,
            request_options=request_options,
        )


class AsyncVpCsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_vpc(
        self,
        cidr_block: str,
        *,
        amazon_provided_ipv6_cidr_block: bool | None = None,
        instance_tenancy: InstanceTenancy1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateVpcErrorBody]:
        """Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create uses a /28 netmask (16 IPv4
        addresses), and the largest uses a /16 netmask (65,536 IPv4 addresses). After creating the VPC, you can add one
        or more subnets.

        Args:
            cidr_block: The IPv4 network range for the VPC in CIDR notation (e.g., 10.0.0.0/16)
            amazon_provided_ipv6_cidr_block: Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length
            instance_tenancy: The tenancy options for instances launched into the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateVpc"),
            query_params=[
                param[str]("CidrBlock", cidr_block),
                param[bool | None]("AmazonProvidedIpv6CidrBlock", amazon_provided_ipv6_cidr_block),
                param[InstanceTenancy1OrStr | None]("InstanceTenancy", instance_tenancy),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=create_vpc_error_mapper,
            request_options=request_options,
        )

    async def delete_vpc(
        self, vpc_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteVpcErrorBody]:
        """Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the
        VPC before you can delete it. You must also delete all subnets associated with the VPC.

        Args:
            vpc_id: The ID of the VPC to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DeleteVpc"),
            query_params=[param[str]("VpcId", vpc_id)],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=delete_vpc_error_mapper,
            request_options=request_options,
        )

    async def describe_vpcs(
        self,
        *,
        vpc_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeVpcsErrorBody]:
        """Describes one or more of your VPCs. Returns information about the VPC including the CIDR block, DHCP options
        set, state, and tags.

        Args:
            vpc_id: The IDs of the VPCs to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DescribeVpcs"),
            query_params=[
                param[list[str] | None]("VpcId", vpc_id),
                param[list[str] | None]("Filter", filter_),
                param[int | None]("MaxResults", max_results),
                param[str | None]("NextToken", next_token),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=describe_vpcs_error_mapper,
            request_options=request_options,
        )

    async def modify_vpc_attribute(
        self,
        vpc_id: str,
        *,
        enable_dns_support_value: bool | None = None,
        enable_dns_hostnames_value: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ModifyVpcAttributeErrorBody]:
        """Modifies the specified attribute of the specified VPC. You can modify the DNS resolution and DNS hostname
        attributes.

        Args:
            vpc_id: The ID of the VPC
            enable_dns_support_value: Indicates whether DNS resolution is supported for the VPC
            enable_dns_hostnames_value: Indicates whether instances launched in the VPC get DNS hostnames
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=ModifyVpcAttribute"),
            query_params=[
                param[str]("VpcId", vpc_id),
                param[bool | None]("EnableDnsSupport.Value", enable_dns_support_value),
                param[bool | None]("EnableDnsHostnames.Value", enable_dns_hostnames_value),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=modify_vpc_attribute_error_mapper,
            request_options=request_options,
        )
