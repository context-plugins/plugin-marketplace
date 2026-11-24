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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.bulk_upsert_app_inventory_error import (
    BulkUpsertAppInventoryErrorBody,
    bulk_upsert_app_inventory_error_mapper,
)
from ..errors.delete_application_error import DeleteApplicationErrorBody, delete_application_error_mapper
from ..errors.list_app_inventory_error import ListAppInventoryErrorBody, list_app_inventory_error_mapper
from ..models.app_inventory_list_response import AppInventoryListResponse
from ..models.appinventory_request import AppinventoryRequest, AppinventoryRequestDict
from ..server.server import Server


class AppInventory:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AppInventoryWithRawResponse(client, server, auth)

    def bulk_upsert_app_inventory(
        self,
        body: AppinventoryRequest | AppinventoryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AppInventoryListResponse:
        """Adds or updates application entries in bulk. If an application with the same name already exists, it will be
        updated; otherwise, a new entry is created. This endpoint is designed for bulk synchronization of the
        application inventory from an external CMDB or asset register.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Applications upserted successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(self._with_raw_response.bulk_upsert_app_inventory(body, request_options=request_options))

    def delete_application(self, application_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Permanently removes an application entry from the application inventory by its unique identifier. Automations
        that reference this application will lose the association.

        Args:
            application_id: Unique identifier of the application to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Application deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(self._with_raw_response.delete_application(application_id, request_options=request_options))

    def list_app_inventory(
        self, *, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> AppInventoryListResponse:
        """Retrieves the application inventory used for automation assessments. Each entry represents a business
        application that may be involved in automations. Inventory data is used in the assessment process to calculate
        automation complexity and effort.

        Args:
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of application inventory entries

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_app_inventory(page=page, page_size=page_size, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AppInventoryWithRawResponse:
        return self._with_raw_response


class AsyncAppInventory:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAppInventoryWithRawResponse(client, server, auth)

    async def bulk_upsert_app_inventory(
        self,
        body: AppinventoryRequest | AppinventoryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AppInventoryListResponse:
        """Adds or updates application entries in bulk. If an application with the same name already exists, it will be
        updated; otherwise, a new entry is created. This endpoint is designed for bulk synchronization of the
        application inventory from an external CMDB or asset register.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Applications upserted successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(await self._with_raw_response.bulk_upsert_app_inventory(body, request_options=request_options))

    async def delete_application(
        self, application_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently removes an application entry from the application inventory by its unique identifier. Automations
        that reference this application will lose the association.

        Args:
            application_id: Unique identifier of the application to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Application deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(await self._with_raw_response.delete_application(application_id, request_options=request_options))

    async def list_app_inventory(
        self,
        *,
        page: int | None = 1,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AppInventoryListResponse:
        """Retrieves the application inventory used for automation assessments. Each entry represents a business
        application that may be involved in automations. Inventory data is used in the assessment process to calculate
        automation complexity and effort.

        Args:
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of application inventory entries

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_app_inventory(
                page=page, page_size=page_size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAppInventoryWithRawResponse:
        return self._with_raw_response


class AppInventoryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_upsert_app_inventory(
        self,
        body: AppinventoryRequest | AppinventoryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AppInventoryListResponse, BulkUpsertAppInventoryErrorBody]:
        """Adds or updates application entries in bulk. If an application with the same name already exists, it will be
        updated; otherwise, a new entry is created. This endpoint is designed for bulk synchronization of the
        application inventory from an external CMDB or asset register.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/appinventory"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AppinventoryRequest | AppinventoryRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AppInventoryListResponse],
            error_mapper=bulk_upsert_app_inventory_error_mapper,
            request_options=request_options,
        )

    def delete_application(
        self, application_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApplicationErrorBody]:
        """Permanently removes an application entry from the application inventory by its unique identifier. Automations
        that reference this application will lose the association.

        Args:
            application_id: Unique identifier of the application to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/appinventory/{applicationId}"),
            path_params=[param[int]("applicationId", application_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=delete_application_error_mapper,
            request_options=request_options,
        )

    def list_app_inventory(
        self, *, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AppInventoryListResponse, ListAppInventoryErrorBody]:
        """Retrieves the application inventory used for automation assessments. Each entry represents a business
        application that may be involved in automations. Inventory data is used in the assessment process to calculate
        automation complexity and effort.

        Args:
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/appinventory"),
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AppInventoryListResponse],
            error_mapper=list_app_inventory_error_mapper,
            request_options=request_options,
        )


class AsyncAppInventoryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_upsert_app_inventory(
        self,
        body: AppinventoryRequest | AppinventoryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AppInventoryListResponse, BulkUpsertAppInventoryErrorBody]:
        """Adds or updates application entries in bulk. If an application with the same name already exists, it will be
        updated; otherwise, a new entry is created. This endpoint is designed for bulk synchronization of the
        application inventory from an external CMDB or asset register.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/appinventory"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AppinventoryRequest | AppinventoryRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AppInventoryListResponse],
            error_mapper=bulk_upsert_app_inventory_error_mapper,
            request_options=request_options,
        )

    async def delete_application(
        self, application_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApplicationErrorBody]:
        """Permanently removes an application entry from the application inventory by its unique identifier. Automations
        that reference this application will lose the association.

        Args:
            application_id: Unique identifier of the application to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/appinventory/{applicationId}"),
            path_params=[param[int]("applicationId", application_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=delete_application_error_mapper,
            request_options=request_options,
        )

    async def list_app_inventory(
        self,
        *,
        page: int | None = 1,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AppInventoryListResponse, ListAppInventoryErrorBody]:
        """Retrieves the application inventory used for automation assessments. Each entry represents a business
        application that may be involved in automations. Inventory data is used in the assessment process to calculate
        automation complexity and effort.

        Args:
            page: Page number for pagination (1-based)
            page_size: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/appinventory"),
            query_params=[param[int | None]("page", page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AppInventoryListResponse],
            error_mapper=list_app_inventory_error_mapper,
            request_options=request_options,
        )
