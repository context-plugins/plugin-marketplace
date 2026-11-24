from __future__ import annotations

from typing import Any
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
from ..errors.create_entity_record_error import CreateEntityRecordErrorBody, create_entity_record_error_mapper
from ..errors.delete_entity_record_error import DeleteEntityRecordErrorBody, delete_entity_record_error_mapper
from ..errors.get_entity_record_error import GetEntityRecordErrorBody, get_entity_record_error_mapper
from ..errors.list_entity_records_error import ListEntityRecordsErrorBody, list_entity_records_error_mapper
from ..errors.query_entity_records_error import QueryEntityRecordsErrorBody, query_entity_records_error_mapper
from ..errors.update_entity_record_error import UpdateEntityRecordErrorBody, update_entity_record_error_mapper
from ..models.entity_query_request import EntityQueryRequest, EntityQueryRequestDict
from ..models.entity_record import EntityRecord
from ..models.entity_record_collection import EntityRecordCollection
from ..server.server import Server


class Entities:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EntitiesWithRawResponse(client, server, auth)

    def create_entity_record(
        self, entity_name: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> EntityRecord:
        """Creates a new record for the specified custom entity type. The request body must conform to the entity's
        schema definition. System-generated fields such as Id, CreatedOn, and CreatedBy are populated automatically and
        should not be included in the request body. Requires the DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entity record created successfully

        Raises:
            ApiError: The request was malformed or the entity schema was violated The request lacks valid authentication
                credentials The authenticated user does not have permission to perform this action ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(self._with_raw_response.create_entity_record(entity_name, body, request_options=request_options))

    def delete_entity_record(
        self, entity_name: str, record_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes an entity record by its unique identifier. This action cannot be undone. Requires the
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entity record deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The authenticated user does not have permission
                to perform this action The requested entity type or record was not found ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.delete_entity_record(entity_name, record_id, request_options=request_options)
        )

    def get_entity_record(
        self,
        entity_name: str,
        record_id: str,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntityRecord:
        """Retrieves a single entity record by its unique identifier. Returns all fields of the record including system
        fields. Supports the $select parameter to limit the fields returned. Requires the DataService.Data.Read or
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            select: Comma-separated list of field names to include in the response
            expand: Related entity references to expand inline in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested entity record

        Raises:
            ApiError: The request lacks valid authentication credentials The authenticated user does not have permission
                to perform this action The requested entity type or record was not found ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_entity_record(
                entity_name, record_id, select=select, expand=expand, request_options=request_options
            ),
        )

    def list_entity_records(
        self,
        entity_name: str,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntityRecordCollection:
        """Retrieves a list of records for the specified custom entity type. Supports filtering with query expressions,
        ordering, pagination via skip and top, and field selection. The available entity names and their fields depend
        on the schema configured within the tenant's Data Service instance. Requires the DataService.Data.Read or
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            filter_: Filter expression to narrow results by field values
            orderby: Field name and direction to sort results (e.g., CreatedOn desc)
            top: Maximum number of records to return
            skip: Number of records to skip for pagination
            select: Comma-separated list of field names to include in the response
            expand: Related entity references to expand inline in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of entity records matching the query criteria

        Raises:
            ApiError: The request was malformed or the entity schema was violated The request lacks valid authentication
                credentials The authenticated user does not have permission to perform this action The requested entity
                type or record was not found ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_entity_records(
                entity_name,
                filter_=filter_,
                orderby=orderby,
                top=top,
                skip=skip,
                select=select,
                expand=expand,
                request_options=request_options,
            ),
        )

    def query_entity_records(
        self,
        entity_name: str,
        body: EntityQueryRequest | EntityQueryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntityRecordCollection:
        """Performs an advanced query against the entity using a structured filter expression in the request body.
        Supports complex conditions, nested field filtering, and joining conditions with AND and OR operators. Returns a
        paginated list of matching records. Requires the DataService.Data.Read or DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Records matching the query criteria

        Raises:
            ApiError: The request was malformed or the entity schema was violated The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(self._with_raw_response.query_entity_records(entity_name, body, request_options=request_options))

    def update_entity_record(
        self, entity_name: str, record_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> EntityRecord:
        """Updates an existing entity record by its unique identifier. The request body should include only the fields
        to update. System-managed fields such as Id, CreatedOn, and CreatedBy cannot be modified. ModifiedOn and
        ModifiedBy are updated automatically. Requires the DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entity record updated successfully

        Raises:
            ApiError: The request was malformed or the entity schema was violated The request lacks valid authentication
                credentials The authenticated user does not have permission to perform this action The requested entity
                type or record was not found ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi |
                RawError``."""
        return unwrap(
            self._with_raw_response.update_entity_record(entity_name, record_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> EntitiesWithRawResponse:
        return self._with_raw_response


class AsyncEntities:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEntitiesWithRawResponse(client, server, auth)

    async def create_entity_record(
        self, entity_name: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EntityRecord:
        """Creates a new record for the specified custom entity type. The request body must conform to the entity's
        schema definition. System-generated fields such as Id, CreatedOn, and CreatedBy are populated automatically and
        should not be included in the request body. Requires the DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entity record created successfully

        Raises:
            ApiError: The request was malformed or the entity schema was violated The request lacks valid authentication
                credentials The authenticated user does not have permission to perform this action ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.create_entity_record(entity_name, body, request_options=request_options)
        )

    async def delete_entity_record(
        self, entity_name: str, record_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes an entity record by its unique identifier. This action cannot be undone. Requires the
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entity record deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The authenticated user does not have permission
                to perform this action The requested entity type or record was not found ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_entity_record(entity_name, record_id, request_options=request_options)
        )

    async def get_entity_record(
        self,
        entity_name: str,
        record_id: str,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntityRecord:
        """Retrieves a single entity record by its unique identifier. Returns all fields of the record including system
        fields. Supports the $select parameter to limit the fields returned. Requires the DataService.Data.Read or
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            select: Comma-separated list of field names to include in the response
            expand: Related entity references to expand inline in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested entity record

        Raises:
            ApiError: The request lacks valid authentication credentials The authenticated user does not have permission
                to perform this action The requested entity type or record was not found ``error`` is
                ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_entity_record(
                entity_name, record_id, select=select, expand=expand, request_options=request_options
            ),
        )

    async def list_entity_records(
        self,
        entity_name: str,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntityRecordCollection:
        """Retrieves a list of records for the specified custom entity type. Supports filtering with query expressions,
        ordering, pagination via skip and top, and field selection. The available entity names and their fields depend
        on the schema configured within the tenant's Data Service instance. Requires the DataService.Data.Read or
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            filter_: Filter expression to narrow results by field values
            orderby: Field name and direction to sort results (e.g., CreatedOn desc)
            top: Maximum number of records to return
            skip: Number of records to skip for pagination
            select: Comma-separated list of field names to include in the response
            expand: Related entity references to expand inline in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of entity records matching the query criteria

        Raises:
            ApiError: The request was malformed or the entity schema was violated The request lacks valid authentication
                credentials The authenticated user does not have permission to perform this action The requested entity
                type or record was not found ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_entity_records(
                entity_name,
                filter_=filter_,
                orderby=orderby,
                top=top,
                skip=skip,
                select=select,
                expand=expand,
                request_options=request_options,
            ),
        )

    async def query_entity_records(
        self,
        entity_name: str,
        body: EntityQueryRequest | EntityQueryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntityRecordCollection:
        """Performs an advanced query against the entity using a structured filter expression in the request body.
        Supports complex conditions, nested field filtering, and joining conditions with AND and OR operators. Returns a
        paginated list of matching records. Requires the DataService.Data.Read or DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Records matching the query criteria

        Raises:
            ApiError: The request was malformed or the entity schema was violated The request lacks valid authentication
                credentials ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.query_entity_records(entity_name, body, request_options=request_options)
        )

    async def update_entity_record(
        self, entity_name: str, record_id: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EntityRecord:
        """Updates an existing entity record by its unique identifier. The request body should include only the fields
        to update. System-managed fields such as Id, CreatedOn, and CreatedBy cannot be modified. ModifiedOn and
        ModifiedBy are updated automatically. Requires the DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entity record updated successfully

        Raises:
            ApiError: The request was malformed or the entity schema was violated The request lacks valid authentication
                credentials The authenticated user does not have permission to perform this action The requested entity
                type or record was not found ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_entity_record(
                entity_name, record_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEntitiesWithRawResponse:
        return self._with_raw_response


class EntitiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_entity_record(
        self, entity_name: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EntityRecord, CreateEntityRecordErrorBody]:
        """Creates a new record for the specified custom entity type. The request body must conform to the entity's
        schema definition. System-generated fields such as Id, CreatedOn, and CreatedBy are populated automatically and
        should not be included in the request body. Requires the DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}"),
            path_params=[param[str]("entityName", entity_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EntityRecord],
            error_mapper=create_entity_record_error_mapper,
            request_options=request_options,
        )

    def delete_entity_record(
        self, entity_name: str, record_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEntityRecordErrorBody]:
        """Permanently deletes an entity record by its unique identifier. This action cannot be undone. Requires the
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}/{recordId}"),
            path_params=[param[str]("entityName", entity_name), param[str]("recordId", record_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_entity_record_error_mapper,
            request_options=request_options,
        )

    def get_entity_record(
        self,
        entity_name: str,
        record_id: str,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityRecord, GetEntityRecordErrorBody]:
        """Retrieves a single entity record by its unique identifier. Returns all fields of the record including system
        fields. Supports the $select parameter to limit the fields returned. Requires the DataService.Data.Read or
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            select: Comma-separated list of field names to include in the response
            expand: Related entity references to expand inline in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}/{recordId}"),
            path_params=[param[str]("entityName", entity_name), param[str]("recordId", record_id)],
            query_params=[param[str | None]("$select", select), param[str | None]("$expand", expand)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EntityRecord],
            error_mapper=get_entity_record_error_mapper,
            request_options=request_options,
        )

    def list_entity_records(
        self,
        entity_name: str,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityRecordCollection, ListEntityRecordsErrorBody]:
        """Retrieves a list of records for the specified custom entity type. Supports filtering with query expressions,
        ordering, pagination via skip and top, and field selection. The available entity names and their fields depend
        on the schema configured within the tenant's Data Service instance. Requires the DataService.Data.Read or
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            filter_: Filter expression to narrow results by field values
            orderby: Field name and direction to sort results (e.g., CreatedOn desc)
            top: Maximum number of records to return
            skip: Number of records to skip for pagination
            select: Comma-separated list of field names to include in the response
            expand: Related entity references to expand inline in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}"),
            path_params=[param[str]("entityName", entity_name)],
            query_params=[
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$select", select),
                param[str | None]("$expand", expand),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EntityRecordCollection],
            error_mapper=list_entity_records_error_mapper,
            request_options=request_options,
        )

    def query_entity_records(
        self,
        entity_name: str,
        body: EntityQueryRequest | EntityQueryRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityRecordCollection, QueryEntityRecordsErrorBody]:
        """Performs an advanced query against the entity using a structured filter expression in the request body.
        Supports complex conditions, nested field filtering, and joining conditions with AND and OR operators. Returns a
        paginated list of matching records. Requires the DataService.Data.Read or DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}/query"),
            path_params=[param[str]("entityName", entity_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntityQueryRequest | EntityQueryRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EntityRecordCollection],
            error_mapper=query_entity_records_error_mapper,
            request_options=request_options,
        )

    def update_entity_record(
        self, entity_name: str, record_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EntityRecord, UpdateEntityRecordErrorBody]:
        """Updates an existing entity record by its unique identifier. The request body should include only the fields
        to update. System-managed fields such as Id, CreatedOn, and CreatedBy cannot be modified. ModifiedOn and
        ModifiedBy are updated automatically. Requires the DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}/{recordId}"),
            path_params=[param[str]("entityName", entity_name), param[str]("recordId", record_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EntityRecord],
            error_mapper=update_entity_record_error_mapper,
            request_options=request_options,
        )


class AsyncEntitiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_entity_record(
        self, entity_name: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EntityRecord, CreateEntityRecordErrorBody]:
        """Creates a new record for the specified custom entity type. The request body must conform to the entity's
        schema definition. System-generated fields such as Id, CreatedOn, and CreatedBy are populated automatically and
        should not be included in the request body. Requires the DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}"),
            path_params=[param[str]("entityName", entity_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EntityRecord],
            error_mapper=create_entity_record_error_mapper,
            request_options=request_options,
        )

    async def delete_entity_record(
        self, entity_name: str, record_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEntityRecordErrorBody]:
        """Permanently deletes an entity record by its unique identifier. This action cannot be undone. Requires the
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}/{recordId}"),
            path_params=[param[str]("entityName", entity_name), param[str]("recordId", record_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_entity_record_error_mapper,
            request_options=request_options,
        )

    async def get_entity_record(
        self,
        entity_name: str,
        record_id: str,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityRecord, GetEntityRecordErrorBody]:
        """Retrieves a single entity record by its unique identifier. Returns all fields of the record including system
        fields. Supports the $select parameter to limit the fields returned. Requires the DataService.Data.Read or
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            select: Comma-separated list of field names to include in the response
            expand: Related entity references to expand inline in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}/{recordId}"),
            path_params=[param[str]("entityName", entity_name), param[str]("recordId", record_id)],
            query_params=[param[str | None]("$select", select), param[str | None]("$expand", expand)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EntityRecord],
            error_mapper=get_entity_record_error_mapper,
            request_options=request_options,
        )

    async def list_entity_records(
        self,
        entity_name: str,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityRecordCollection, ListEntityRecordsErrorBody]:
        """Retrieves a list of records for the specified custom entity type. Supports filtering with query expressions,
        ordering, pagination via skip and top, and field selection. The available entity names and their fields depend
        on the schema configured within the tenant's Data Service instance. Requires the DataService.Data.Read or
        DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            filter_: Filter expression to narrow results by field values
            orderby: Field name and direction to sort results (e.g., CreatedOn desc)
            top: Maximum number of records to return
            skip: Number of records to skip for pagination
            select: Comma-separated list of field names to include in the response
            expand: Related entity references to expand inline in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}"),
            path_params=[param[str]("entityName", entity_name)],
            query_params=[
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$select", select),
                param[str | None]("$expand", expand),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EntityRecordCollection],
            error_mapper=list_entity_records_error_mapper,
            request_options=request_options,
        )

    async def query_entity_records(
        self,
        entity_name: str,
        body: EntityQueryRequest | EntityQueryRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntityRecordCollection, QueryEntityRecordsErrorBody]:
        """Performs an advanced query against the entity using a structured filter expression in the request body.
        Supports complex conditions, nested field filtering, and joining conditions with AND and OR operators. Returns a
        paginated list of matching records. Requires the DataService.Data.Read or DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}/query"),
            path_params=[param[str]("entityName", entity_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntityQueryRequest | EntityQueryRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EntityRecordCollection],
            error_mapper=query_entity_records_error_mapper,
            request_options=request_options,
        )

    async def update_entity_record(
        self, entity_name: str, record_id: str, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EntityRecord, UpdateEntityRecordErrorBody]:
        """Updates an existing entity record by its unique identifier. The request body should include only the fields
        to update. System-managed fields such as Id, CreatedOn, and CreatedBy cannot be modified. ModifiedOn and
        ModifiedBy are updated automatically. Requires the DataService.Data scope.

        Args:
            entity_name: Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are
                case-sensitive.
            record_id: Unique identifier of the entity record
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_ui_path_data_service_entities_api("/{entityName}/{recordId}"),
            path_params=[param[str]("entityName", entity_name), param[str]("recordId", record_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EntityRecord],
            error_mapper=update_entity_record_error_mapper,
            request_options=request_options,
        )
