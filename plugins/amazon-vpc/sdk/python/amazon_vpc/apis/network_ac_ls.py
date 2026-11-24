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
from ..errors.create_network_acl_error import CreateNetworkAclErrorBody, create_network_acl_error_mapper
from ..errors.describe_network_acls_error import DescribeNetworkAclsErrorBody, describe_network_acls_error_mapper
from ..server.server import Server


class NetworkAcLs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NetworkAcLsWithRawResponse(client, server, auth)

    def create_network_acl(self, vpc_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Creates a network ACL in a VPC. Network ACLs provide an optional layer of security for your VPC that acts as
        a firewall for controlling traffic in and out of one or more subnets.

        Args:
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created network ACL

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_network_acl(vpc_id, request_options=request_options))

    def describe_network_acls(
        self,
        *,
        network_acl_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Describes one or more of your network ACLs. A network ACL is an optional layer of security for your VPC that
        acts as a firewall for controlling traffic in and out of one or more subnets.

        Args:
            network_acl_id: The IDs of the network ACLs to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully described network ACLs

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_network_acls(
                network_acl_id=network_acl_id,
                filter_=filter_,
                max_results=max_results,
                next_token=next_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> NetworkAcLsWithRawResponse:
        return self._with_raw_response


class AsyncNetworkAcLs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNetworkAcLsWithRawResponse(client, server, auth)

    async def create_network_acl(
        self, vpc_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a network ACL in a VPC. Network ACLs provide an optional layer of security for your VPC that acts as
        a firewall for controlling traffic in and out of one or more subnets.

        Args:
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created network ACL

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_network_acl(vpc_id, request_options=request_options))

    async def describe_network_acls(
        self,
        *,
        network_acl_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Describes one or more of your network ACLs. A network ACL is an optional layer of security for your VPC that
        acts as a firewall for controlling traffic in and out of one or more subnets.

        Args:
            network_acl_id: The IDs of the network ACLs to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully described network ACLs

        Raises:
            ApiError: Invalid request parameters Authentication failure ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_network_acls(
                network_acl_id=network_acl_id,
                filter_=filter_,
                max_results=max_results,
                next_token=next_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNetworkAcLsWithRawResponse:
        return self._with_raw_response


class NetworkAcLsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_network_acl(
        self, vpc_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateNetworkAclErrorBody]:
        """Creates a network ACL in a VPC. Network ACLs provide an optional layer of security for your VPC that acts as
        a firewall for controlling traffic in and out of one or more subnets.

        Args:
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateNetworkAcl"),
            query_params=[param[str]("VpcId", vpc_id)],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=create_network_acl_error_mapper,
            request_options=request_options,
        )

    def describe_network_acls(
        self,
        *,
        network_acl_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeNetworkAclsErrorBody]:
        """Describes one or more of your network ACLs. A network ACL is an optional layer of security for your VPC that
        acts as a firewall for controlling traffic in and out of one or more subnets.

        Args:
            network_acl_id: The IDs of the network ACLs to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DescribeNetworkAcls"),
            query_params=[
                param[list[str] | None]("NetworkAclId", network_acl_id),
                param[list[str] | None]("Filter", filter_),
                param[int | None]("MaxResults", max_results),
                param[str | None]("NextToken", next_token),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=empty_response,
            error_mapper=describe_network_acls_error_mapper,
            request_options=request_options,
        )


class AsyncNetworkAcLsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_network_acl(
        self, vpc_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateNetworkAclErrorBody]:
        """Creates a network ACL in a VPC. Network ACLs provide an optional layer of security for your VPC that acts as
        a firewall for controlling traffic in and out of one or more subnets.

        Args:
            vpc_id: The ID of the VPC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=CreateNetworkAcl"),
            query_params=[param[str]("VpcId", vpc_id)],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=create_network_acl_error_mapper,
            request_options=request_options,
        )

    async def describe_network_acls(
        self,
        *,
        network_acl_id: list[str] | None = None,
        filter_: list[str] | None = None,
        max_results: int | None = None,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeNetworkAclsErrorBody]:
        """Describes one or more of your network ACLs. A network ACL is an optional layer of security for your VPC that
        acts as a firewall for controlling traffic in and out of one or more subnets.

        Args:
            network_acl_id: The IDs of the network ACLs to describe
            filter_: Filters to apply to the results
            max_results: Maximum number of results to return
            next_token: Token for the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/?Action=DescribeNetworkAcls"),
            query_params=[
                param[list[str] | None]("NetworkAclId", network_acl_id),
                param[list[str] | None]("Filter", filter_),
                param[int | None]("MaxResults", max_results),
                param[str | None]("NextToken", next_token),
            ],
            auth_scheme=self._auth.sigv4_auth,
            decoder=async_empty_response,
            error_mapper=describe_network_acls_error_mapper,
            request_options=request_options,
        )
