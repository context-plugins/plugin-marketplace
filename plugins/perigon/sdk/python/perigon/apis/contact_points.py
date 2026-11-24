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
from ..errors.create_contact_point_error import CreateContactPointErrorBody, create_contact_point_error_mapper
from ..errors.delete_contact_point_error import DeleteContactPointErrorBody, delete_contact_point_error_mapper
from ..errors.get_contact_point_error import GetContactPointErrorBody, get_contact_point_error_mapper
from ..errors.list_contact_points_error import ListContactPointsErrorBody, list_contact_points_error_mapper
from ..errors.update_contact_point_error import UpdateContactPointErrorBody, update_contact_point_error_mapper
from ..models.contact_point_list_result import ContactPointListResult
from ..models.contact_point_request_body import ContactPointRequestBody, ContactPointRequestBodyDict
from ..models.contact_point_result import ContactPointResult
from ..models.contact_point_update_body import ContactPointUpdateBody, ContactPointUpdateBodyDict
from ..models.enums.contact_point_sort_by import ContactPointSortByOrStr
from ..models.enums.nulls import NullsOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..models.enums.status1 import Status1OrStr
from ..models.enums.type1 import Type1OrStr
from ..server.server import Server


class ContactPoints:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContactPointsWithRawResponse(client, server, auth)

    def create_contact_point(
        self,
        body: ContactPointRequestBody | ContactPointRequestBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactPointResult:
        """Create a new contact point under the organization associated with the API key. Only WEBHOOK contact points
        can be created via the API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_contact_point(body, request_options=request_options))

    def delete_contact_point(
        self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ContactPointResult:
        """Delete a contact point owned by the organization associated with the API key. Contact points with historical
        notifications are archived rather than hard-deleted.

        Args:
            uuid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_contact_point(uuid, request_options=request_options))

    def get_contact_point(
        self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ContactPointResult:
        """Retrieve a contact point by UUID. Only returns contact points owned by the organization associated with the
        API key. FASTN contact points are not accessible via this endpoint.

        Args:
            uuid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_contact_point(uuid, request_options=request_options))

    def list_contact_points(
        self,
        sort_by: ContactPointSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        status: list[Status1OrStr] | None = None,
        type_: list[Type1OrStr] | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactPointListResult:
        """List contact points owned by the organization associated with the API key. Supports filtering by status and
        type. FASTN contact points are excluded from results.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            status: Value sent with the request.
            type_: Value sent with the request.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_contact_points(
                sort_by,
                sort_order,
                status=status,
                type_=type_,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    def update_contact_point(
        self,
        uuid: UUID,
        body: ContactPointUpdateBody | ContactPointUpdateBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactPointResult:
        """Partially update a contact point owned by the organization associated with the API key. Only provided fields
        will be updated.

        Args:
            uuid: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_contact_point(uuid, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ContactPointsWithRawResponse:
        return self._with_raw_response


class AsyncContactPoints:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContactPointsWithRawResponse(client, server, auth)

    async def create_contact_point(
        self,
        body: ContactPointRequestBody | ContactPointRequestBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactPointResult:
        """Create a new contact point under the organization associated with the API key. Only WEBHOOK contact points
        can be created via the API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_contact_point(body, request_options=request_options))

    async def delete_contact_point(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ContactPointResult:
        """Delete a contact point owned by the organization associated with the API key. Contact points with historical
        notifications are archived rather than hard-deleted.

        Args:
            uuid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_contact_point(uuid, request_options=request_options))

    async def get_contact_point(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ContactPointResult:
        """Retrieve a contact point by UUID. Only returns contact points owned by the organization associated with the
        API key. FASTN contact points are not accessible via this endpoint.

        Args:
            uuid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_contact_point(uuid, request_options=request_options))

    async def list_contact_points(
        self,
        sort_by: ContactPointSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        status: list[Status1OrStr] | None = None,
        type_: list[Type1OrStr] | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactPointListResult:
        """List contact points owned by the organization associated with the API key. Supports filtering by status and
        type. FASTN contact points are excluded from results.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            status: Value sent with the request.
            type_: Value sent with the request.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_contact_points(
                sort_by,
                sort_order,
                status=status,
                type_=type_,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    async def update_contact_point(
        self,
        uuid: UUID,
        body: ContactPointUpdateBody | ContactPointUpdateBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactPointResult:
        """Partially update a contact point owned by the organization associated with the API key. Only provided fields
        will be updated.

        Args:
            uuid: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_contact_point(uuid, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncContactPointsWithRawResponse:
        return self._with_raw_response


class ContactPointsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_contact_point(
        self,
        body: ContactPointRequestBody | ContactPointRequestBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactPointResult, CreateContactPointErrorBody]:
        """Create a new contact point under the organization associated with the API key. Only WEBHOOK contact points
        can be created via the API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/contactPoints"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactPointRequestBody | ContactPointRequestBodyDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactPointResult],
            error_mapper=create_contact_point_error_mapper,
            request_options=request_options,
        )

    def delete_contact_point(
        self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ContactPointResult, DeleteContactPointErrorBody]:
        """Delete a contact point owned by the organization associated with the API key. Contact points with historical
        notifications are archived rather than hard-deleted.

        Args:
            uuid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/api/contactPoints/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactPointResult],
            error_mapper=delete_contact_point_error_mapper,
            request_options=request_options,
        )

    def get_contact_point(
        self, uuid: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ContactPointResult, GetContactPointErrorBody]:
        """Retrieve a contact point by UUID. Only returns contact points owned by the organization associated with the
        API key. FASTN contact points are not accessible via this endpoint.

        Args:
            uuid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/contactPoints/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactPointResult],
            error_mapper=get_contact_point_error_mapper,
            request_options=request_options,
        )

    def list_contact_points(
        self,
        sort_by: ContactPointSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        status: list[Status1OrStr] | None = None,
        type_: list[Type1OrStr] | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactPointListResult, ListContactPointsErrorBody]:
        """List contact points owned by the organization associated with the API key. Supports filtering by status and
        type. FASTN contact points are excluded from results.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            status: Value sent with the request.
            type_: Value sent with the request.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/contactPoints"),
            query_params=[
                param[ContactPointSortByOrStr]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[list[Status1OrStr] | None]("status", status),
                param[list[Type1OrStr] | None]("type", type_),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactPointListResult],
            error_mapper=list_contact_points_error_mapper,
            request_options=request_options,
        )

    def update_contact_point(
        self,
        uuid: UUID,
        body: ContactPointUpdateBody | ContactPointUpdateBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactPointResult, UpdateContactPointErrorBody]:
        """Partially update a contact point owned by the organization associated with the API key. Only provided fields
        will be updated.

        Args:
            uuid: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/api/contactPoints/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactPointUpdateBody | ContactPointUpdateBodyDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactPointResult],
            error_mapper=update_contact_point_error_mapper,
            request_options=request_options,
        )


class AsyncContactPointsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_contact_point(
        self,
        body: ContactPointRequestBody | ContactPointRequestBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactPointResult, CreateContactPointErrorBody]:
        """Create a new contact point under the organization associated with the API key. Only WEBHOOK contact points
        can be created via the API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/contactPoints"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactPointRequestBody | ContactPointRequestBodyDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactPointResult],
            error_mapper=create_contact_point_error_mapper,
            request_options=request_options,
        )

    async def delete_contact_point(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ContactPointResult, DeleteContactPointErrorBody]:
        """Delete a contact point owned by the organization associated with the API key. Contact points with historical
        notifications are archived rather than hard-deleted.

        Args:
            uuid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/api/contactPoints/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactPointResult],
            error_mapper=delete_contact_point_error_mapper,
            request_options=request_options,
        )

    async def get_contact_point(
        self, uuid: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ContactPointResult, GetContactPointErrorBody]:
        """Retrieve a contact point by UUID. Only returns contact points owned by the organization associated with the
        API key. FASTN contact points are not accessible via this endpoint.

        Args:
            uuid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/contactPoints/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactPointResult],
            error_mapper=get_contact_point_error_mapper,
            request_options=request_options,
        )

    async def list_contact_points(
        self,
        sort_by: ContactPointSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        status: list[Status1OrStr] | None = None,
        type_: list[Type1OrStr] | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactPointListResult, ListContactPointsErrorBody]:
        """List contact points owned by the organization associated with the API key. Supports filtering by status and
        type. FASTN contact points are excluded from results.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            status: Value sent with the request.
            type_: Value sent with the request.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/contactPoints"),
            query_params=[
                param[ContactPointSortByOrStr]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[list[Status1OrStr] | None]("status", status),
                param[list[Type1OrStr] | None]("type", type_),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactPointListResult],
            error_mapper=list_contact_points_error_mapper,
            request_options=request_options,
        )

    async def update_contact_point(
        self,
        uuid: UUID,
        body: ContactPointUpdateBody | ContactPointUpdateBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactPointResult, UpdateContactPointErrorBody]:
        """Partially update a contact point owned by the organization associated with the API key. Only provided fields
        will be updated.

        Args:
            uuid: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/api/contactPoints/{uuid}"),
            path_params=[param[UUID]("uuid", uuid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactPointUpdateBody | ContactPointUpdateBodyDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactPointResult],
            error_mapper=update_contact_point_error_mapper,
            request_options=request_options,
        )
