from __future__ import annotations

from typing import Any
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
from ..errors.create_customer_group_error import CreateCustomerGroupErrorBody, create_customer_group_error_mapper
from ..errors.create_customer_group_members_error import (
    CreateCustomerGroupMembersErrorBody,
    create_customer_group_members_error_mapper,
)
from ..errors.delete_customer_group_error import DeleteCustomerGroupErrorBody, delete_customer_group_error_mapper
from ..errors.delete_customer_group_members_error import (
    DeleteCustomerGroupMembersErrorBody,
    delete_customer_group_members_error_mapper,
)
from ..errors.get_customer_group_error import GetCustomerGroupErrorBody, get_customer_group_error_mapper
from ..errors.list_customer_groups_error import ListCustomerGroupsErrorBody, list_customer_groups_error_mapper
from ..errors.update_customer_group_error import UpdateCustomerGroupErrorBody, update_customer_group_error_mapper
from ..errors.update_customer_group_members_error import (
    UpdateCustomerGroupMembersErrorBody,
    update_customer_group_members_error_mapper,
)
from ..models.add_members_response import AddMembersResponse
from ..models.create_customer_group_request import CreateCustomerGroupRequest, CreateCustomerGroupRequestDict
from ..models.customer_group_delete_response import CustomerGroupDeleteResponse
from ..models.customer_group_detail import CustomerGroupDetail
from ..models.customer_group_list_response import CustomerGroupListResponse
from ..models.member_request import MemberRequest, MemberRequestDict
from ..models.remove_members_response import RemoveMembersResponse
from ..models.set_members_response import SetMembersResponse
from ..models.update_customer_group_request import UpdateCustomerGroupRequest, UpdateCustomerGroupRequestDict
from ..server.server import Server


class CustomerGroups:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CustomerGroupsWithRawResponse(client, server)

    def create_customer_group(
        self,
        authorization: str,
        *,
        body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerGroupDetail:
        """Create a new customer group. Names must be unique per org.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer_group(authorization, body=body, request_options=request_options)
        )

    def create_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AddMembersResponse:
        """Additive. Adds customers to the group without removing existing members.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer_group_members(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def delete_customer_group(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerGroupDeleteResponse:
        """Deletes the group and unbinds all members. Unbound customers fall back to the base value model config.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_customer_group(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def delete_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RemoveMembersResponse:
        """Removes specific customers from the group.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_customer_group_members(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def get_customer_group(
        self, id_: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomerGroupDetail:
        """Returns group details including member list (capped at 500).

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_customer_group(id_, authorization, request_options=request_options))

    def list_customer_groups(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerGroupListResponse:
        """List all customer groups for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_customer_groups(
                authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def update_customer_group(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerGroupDetail:
        """Update a customer group's name or description.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_customer_group(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def update_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SetMembersResponse:
        """Reconcile membership. The provided list is the complete desired membership. Customers not in the list are
        removed. Customers in the list but not currently in the group are added.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_customer_group_members(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CustomerGroupsWithRawResponse:
        return self._with_raw_response


class AsyncCustomerGroups:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCustomerGroupsWithRawResponse(client, server)

    async def create_customer_group(
        self,
        authorization: str,
        *,
        body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerGroupDetail:
        """Create a new customer group. Names must be unique per org.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer_group(
                authorization, body=body, request_options=request_options
            ),
        )

    async def create_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AddMembersResponse:
        """Additive. Adds customers to the group without removing existing members.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer_group_members(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def delete_customer_group(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerGroupDeleteResponse:
        """Deletes the group and unbinds all members. Unbound customers fall back to the base value model config.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_customer_group(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def delete_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RemoveMembersResponse:
        """Removes specific customers from the group.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_customer_group_members(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def get_customer_group(
        self, id_: UUID, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomerGroupDetail:
        """Returns group details including member list (capped at 500).

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_customer_group(id_, authorization, request_options=request_options)
        )

    async def list_customer_groups(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerGroupListResponse:
        """List all customer groups for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_customer_groups(
                authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def update_customer_group(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerGroupDetail:
        """Update a customer group's name or description.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_customer_group(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def update_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SetMembersResponse:
        """Reconcile membership. The provided list is the complete desired membership. Customers not in the list are
        removed. Customers in the list but not currently in the group are added.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_customer_group_members(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomerGroupsWithRawResponse:
        return self._with_raw_response


class CustomerGroupsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_customer_group(
        self,
        authorization: str,
        *,
        body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupDetail, CreateCustomerGroupErrorBody]:
        """Create a new customer group. Names must be unique per org.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomerGroupRequest | CreateCustomerGroupRequestDict | None](body),
            decoder=json_decoder[CustomerGroupDetail],
            error_mapper=create_customer_group_error_mapper,
            request_options=request_options,
        )

    def create_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AddMembersResponse, CreateCustomerGroupMembersErrorBody]:
        """Additive. Adds customers to the group without removing existing members.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}/members"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberRequest | MemberRequestDict | None](body),
            decoder=json_decoder[AddMembersResponse],
            error_mapper=create_customer_group_members_error_mapper,
            request_options=request_options,
        )

    def delete_customer_group(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupDeleteResponse, DeleteCustomerGroupErrorBody]:
        """Deletes the group and unbinds all members. Unbound customers fall back to the base value model config.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=json_decoder[CustomerGroupDeleteResponse],
            error_mapper=delete_customer_group_error_mapper,
            request_options=request_options,
        )

    def delete_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RemoveMembersResponse, DeleteCustomerGroupMembersErrorBody]:
        """Removes specific customers from the group.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}/members"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberRequest | MemberRequestDict | None](body),
            decoder=json_decoder[RemoveMembersResponse],
            error_mapper=delete_customer_group_members_error_mapper,
            request_options=request_options,
        )

    def get_customer_group(
        self, id_: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerGroupDetail, GetCustomerGroupErrorBody]:
        """Returns group details including member list (capped at 500).

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomerGroupDetail],
            error_mapper=get_customer_group_error_mapper,
            request_options=request_options,
        )

    def list_customer_groups(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupListResponse, ListCustomerGroupsErrorBody]:
        """List all customer groups for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CustomerGroupListResponse],
            error_mapper=list_customer_groups_error_mapper,
            request_options=request_options,
        )

    def update_customer_group(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupDetail, UpdateCustomerGroupErrorBody]:
        """Update a customer group's name or description.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict | None](body),
            decoder=json_decoder[CustomerGroupDetail],
            error_mapper=update_customer_group_error_mapper,
            request_options=request_options,
        )

    def update_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SetMembersResponse, UpdateCustomerGroupMembersErrorBody]:
        """Reconcile membership. The provided list is the complete desired membership. Customers not in the list are
        removed. Customers in the list but not currently in the group are added.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}/members"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberRequest | MemberRequestDict | None](body),
            decoder=json_decoder[SetMembersResponse],
            error_mapper=update_customer_group_members_error_mapper,
            request_options=request_options,
        )


class AsyncCustomerGroupsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_customer_group(
        self,
        authorization: str,
        *,
        body: CreateCustomerGroupRequest | CreateCustomerGroupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupDetail, CreateCustomerGroupErrorBody]:
        """Create a new customer group. Names must be unique per org.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomerGroupRequest | CreateCustomerGroupRequestDict | None](body),
            decoder=async_json_decoder[CustomerGroupDetail],
            error_mapper=create_customer_group_error_mapper,
            request_options=request_options,
        )

    async def create_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AddMembersResponse, CreateCustomerGroupMembersErrorBody]:
        """Additive. Adds customers to the group without removing existing members.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}/members"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberRequest | MemberRequestDict | None](body),
            decoder=async_json_decoder[AddMembersResponse],
            error_mapper=create_customer_group_members_error_mapper,
            request_options=request_options,
        )

    async def delete_customer_group(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupDeleteResponse, DeleteCustomerGroupErrorBody]:
        """Deletes the group and unbinds all members. Unbound customers fall back to the base value model config.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=async_json_decoder[CustomerGroupDeleteResponse],
            error_mapper=delete_customer_group_error_mapper,
            request_options=request_options,
        )

    async def delete_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RemoveMembersResponse, DeleteCustomerGroupMembersErrorBody]:
        """Removes specific customers from the group.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}/members"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberRequest | MemberRequestDict | None](body),
            decoder=async_json_decoder[RemoveMembersResponse],
            error_mapper=delete_customer_group_members_error_mapper,
            request_options=request_options,
        )

    async def get_customer_group(
        self, id_: UUID, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomerGroupDetail, GetCustomerGroupErrorBody]:
        """Returns group details including member list (capped at 500).

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomerGroupDetail],
            error_mapper=get_customer_group_error_mapper,
            request_options=request_options,
        )

    async def list_customer_groups(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupListResponse, ListCustomerGroupsErrorBody]:
        """List all customer groups for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CustomerGroupListResponse],
            error_mapper=list_customer_groups_error_mapper,
            request_options=request_options,
        )

    async def update_customer_group(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerGroupDetail, UpdateCustomerGroupErrorBody]:
        """Update a customer group's name or description.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomerGroupRequest | UpdateCustomerGroupRequestDict | None](body),
            decoder=async_json_decoder[CustomerGroupDetail],
            error_mapper=update_customer_group_error_mapper,
            request_options=request_options,
        )

    async def update_customer_group_members(
        self,
        id_: UUID,
        authorization: str,
        *,
        body: MemberRequest | MemberRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SetMembersResponse, UpdateCustomerGroupMembersErrorBody]:
        """Reconcile membership. The provided list is the complete desired membership. Customers not in the list are
        removed. Customers in the list but not currently in the group are added.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-groups/{id}/members"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MemberRequest | MemberRequestDict | None](body),
            decoder=async_json_decoder[SetMembersResponse],
            error_mapper=update_customer_group_members_error_mapper,
            request_options=request_options,
        )
