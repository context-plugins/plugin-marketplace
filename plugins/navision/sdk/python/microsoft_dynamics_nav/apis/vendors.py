from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_vendor_error import CreateVendorErrorBody, create_vendor_error_mapper
from ..errors.delete_vendor_error import DeleteVendorErrorBody, delete_vendor_error_mapper
from ..errors.get_vendor_error import GetVendorErrorBody, get_vendor_error_mapper
from ..errors.list_vendors_error import ListVendorsErrorBody, list_vendors_error_mapper
from ..errors.update_vendor_error import UpdateVendorErrorBody, update_vendor_error_mapper
from ..models.companies_api_vendors_response import CompaniesApiVendorsResponse
from ..models.vendor import Vendor
from ..models.vendor_create import VendorCreate, VendorCreateDict
from ..models.vendor_update import VendorUpdate, VendorUpdateDict
from ..server.server import Server


class Vendors:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VendorsWithRawResponse(client, server, auth)

    def create_vendor(
        self,
        company_id: UUID,
        body: VendorCreate | VendorCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Vendor:
        """Creates a new vendor object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vendor created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.create_vendor(company_id, body, request_options=request_options))

    def delete_vendor(
        self, company_id: UUID, vendor_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a vendor by ID.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vendor deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.delete_vendor(company_id, vendor_id, request_options=request_options))

    def get_vendor(
        self,
        company_id: UUID,
        vendor_id: UUID,
        *,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Vendor:
        """Retrieves a specific vendor by ID.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved vendor

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_vendor(company_id, vendor_id, select=select, request_options=request_options)
        )

    def list_vendors(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompaniesApiVendorsResponse:
        """Returns a list of vendor objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved vendors

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_vendors(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                request_options=request_options,
            ),
        )

    def update_vendor(
        self,
        company_id: UUID,
        vendor_id: UUID,
        if_match: str,
        body: VendorUpdate | VendorUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Vendor:
        """Updates an existing vendor object.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vendor updated successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required Resource not found ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_vendor(
                company_id, vendor_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> VendorsWithRawResponse:
        return self._with_raw_response


class AsyncVendors:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVendorsWithRawResponse(client, server, auth)

    async def create_vendor(
        self,
        company_id: UUID,
        body: VendorCreate | VendorCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Vendor:
        """Creates a new vendor object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vendor created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.create_vendor(company_id, body, request_options=request_options))

    async def delete_vendor(
        self, company_id: UUID, vendor_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a vendor by ID.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vendor deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_vendor(company_id, vendor_id, request_options=request_options)
        )

    async def get_vendor(
        self,
        company_id: UUID,
        vendor_id: UUID,
        *,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Vendor:
        """Retrieves a specific vendor by ID.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved vendor

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_vendor(
                company_id, vendor_id, select=select, request_options=request_options
            ),
        )

    async def list_vendors(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompaniesApiVendorsResponse:
        """Returns a list of vendor objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved vendors

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_vendors(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                request_options=request_options,
            ),
        )

    async def update_vendor(
        self,
        company_id: UUID,
        vendor_id: UUID,
        if_match: str,
        body: VendorUpdate | VendorUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Vendor:
        """Updates an existing vendor object.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vendor updated successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required Resource not found ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_vendor(
                company_id, vendor_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVendorsWithRawResponse:
        return self._with_raw_response


class VendorsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_vendor(
        self,
        company_id: UUID,
        body: VendorCreate | VendorCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Vendor, CreateVendorErrorBody]:
        """Creates a new vendor object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/vendors"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VendorCreate | VendorCreateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Vendor],
            error_mapper=create_vendor_error_mapper,
            request_options=request_options,
        )

    def delete_vendor(
        self, company_id: UUID, vendor_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteVendorErrorBody]:
        """Deletes a vendor by ID.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/companies({company_id})/vendors({vendor_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("vendor_id", vendor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=delete_vendor_error_mapper,
            request_options=request_options,
        )

    def get_vendor(
        self,
        company_id: UUID,
        vendor_id: UUID,
        *,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Vendor, GetVendorErrorBody]:
        """Retrieves a specific vendor by ID.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/vendors({vendor_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("vendor_id", vendor_id)],
            query_params=[param[str | None]("$select", select)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Vendor],
            error_mapper=get_vendor_error_mapper,
            request_options=request_options,
        )

    def list_vendors(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiVendorsResponse, ListVendorsErrorBody]:
        """Returns a list of vendor objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/vendors"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiVendorsResponse],
            error_mapper=list_vendors_error_mapper,
            request_options=request_options,
        )

    def update_vendor(
        self,
        company_id: UUID,
        vendor_id: UUID,
        if_match: str,
        body: VendorUpdate | VendorUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Vendor, UpdateVendorErrorBody]:
        """Updates an existing vendor object.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/companies({company_id})/vendors({vendor_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("vendor_id", vendor_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VendorUpdate | VendorUpdateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Vendor],
            error_mapper=update_vendor_error_mapper,
            request_options=request_options,
        )


class AsyncVendorsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_vendor(
        self,
        company_id: UUID,
        body: VendorCreate | VendorCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Vendor, CreateVendorErrorBody]:
        """Creates a new vendor object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/vendors"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VendorCreate | VendorCreateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Vendor],
            error_mapper=create_vendor_error_mapper,
            request_options=request_options,
        )

    async def delete_vendor(
        self, company_id: UUID, vendor_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteVendorErrorBody]:
        """Deletes a vendor by ID.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/companies({company_id})/vendors({vendor_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("vendor_id", vendor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=delete_vendor_error_mapper,
            request_options=request_options,
        )

    async def get_vendor(
        self,
        company_id: UUID,
        vendor_id: UUID,
        *,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Vendor, GetVendorErrorBody]:
        """Retrieves a specific vendor by ID.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/vendors({vendor_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("vendor_id", vendor_id)],
            query_params=[param[str | None]("$select", select)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Vendor],
            error_mapper=get_vendor_error_mapper,
            request_options=request_options,
        )

    async def list_vendors(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiVendorsResponse, ListVendorsErrorBody]:
        """Returns a list of vendor objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/vendors"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiVendorsResponse],
            error_mapper=list_vendors_error_mapper,
            request_options=request_options,
        )

    async def update_vendor(
        self,
        company_id: UUID,
        vendor_id: UUID,
        if_match: str,
        body: VendorUpdate | VendorUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Vendor, UpdateVendorErrorBody]:
        """Updates an existing vendor object.

        Args:
            company_id: The unique identifier of the company
            vendor_id: The unique identifier of the vendor
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/companies({company_id})/vendors({vendor_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("vendor_id", vendor_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VendorUpdate | VendorUpdateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Vendor],
            error_mapper=update_vendor_error_mapper,
            request_options=request_options,
        )
