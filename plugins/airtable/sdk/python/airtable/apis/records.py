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
from ..errors.create_records_error import CreateRecordsErrorBody, create_records_error_mapper
from ..errors.delete_record_error import DeleteRecordErrorBody, delete_record_error_mapper
from ..errors.get_record_error import GetRecordErrorBody, get_record_error_mapper
from ..errors.list_records_error import ListRecordsErrorBody, list_records_error_mapper
from ..errors.replace_record_error import ReplaceRecordErrorBody, replace_record_error_mapper
from ..errors.update_record_error import UpdateRecordErrorBody, update_record_error_mapper
from ..models.enums.cell_format import CellFormatOrStr
from ..models.record import Record
from ..models.record_deleted import RecordDeleted
from ..models.record_id_request import RecordIdRequest, RecordIdRequestDict
from ..models.record_id_request1 import RecordIdRequest1, RecordIdRequest1Dict
from ..models.record_list import RecordList
from ..models.request import Request, RequestDict
from ..models.response import Response
from ..models.sort import Sort, SortDict
from ..server.server import Server


class Records:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RecordsWithRawResponse(client, server, auth)

    def create_records(
        self,
        base_id: str,
        table_id_or_name: str,
        body: Request | RequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Response:
        """Creates up to 10 records in the specified table. Each record must include a fields object mapping field names
        (or IDs) to values. If typecast is enabled, the API will attempt to convert string values to the appropriate
        cell value.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created records.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.create_records(base_id, table_id_or_name, body, request_options=request_options)
        )

    def delete_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecordDeleted:
        """Deletes a single record from the specified table. The record is permanently removed and cannot be recovered
        through the API.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Confirmation of deletion.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_record(base_id, table_id_or_name, record_id, request_options=request_options)
        )

    def get_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        return_fields_by_field_id: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Record:
        """Retrieves a single record by its ID from the specified table. Returns the record's fields, creation time, and
        ID.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            return_fields_by_field_id: If true, the response will use field IDs as keys instead of field names.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested record.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_record(
                base_id,
                table_id_or_name,
                record_id,
                return_fields_by_field_id=return_fields_by_field_id,
                request_options=request_options,
            ),
        )

    def list_records(
        self,
        base_id: str,
        table_id_or_name: str,
        *,
        fields: list[str] | None = None,
        filter_by_formula: str | None = None,
        max_records: int | None = None,
        page_size: int | None = 100,
        sort: list[Sort | SortDict] | None = None,
        view: str | None = None,
        cell_format: CellFormatOrStr | None = None,
        time_zone: str | None = None,
        user_locale: str | None = None,
        return_fields_by_field_id: bool | None = None,
        offset: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecordList:
        """Returns a paginated list of records in the specified table. Records can be filtered using an Airtable
        formula, sorted by specific fields, and limited to specific fields. The maximum page size is 100 records. Use
        the offset parameter from the response to fetch the next page.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            fields: Only return data for the specified field names or IDs.
            filter_by_formula: An Airtable formula used to filter records. The formula is evaluated for each record, and
                if the result is not 0, false, "", NaN, [], or #Error!, the record will be included in the response.
            max_records: The maximum total number of records that will be returned.
            page_size: The number of records returned in each request. Must be less than or equal to 100. Default is
                100.
            sort: A list of sort objects that specifies how the records will be ordered. Each sort object must have a
                field key and an optional direction key (asc or desc).
            view: The name or ID of a view in the table. If set, only the records in that view will be returned.
            cell_format: The format that should be used for cell values. Supported values are json (default) and string.
            time_zone: The time zone to use for formatting dates when using string cell format.
            user_locale: The user locale to use for formatting dates when using string cell format.
            return_fields_by_field_id: If true, the response will use field IDs as object keys instead of field names.
            offset: A pagination cursor returned from a previous request. Pass this value to fetch the next page of
                results.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of records.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_records(
                base_id,
                table_id_or_name,
                fields=fields,
                filter_by_formula=filter_by_formula,
                max_records=max_records,
                page_size=page_size,
                sort=sort,
                view=view,
                cell_format=cell_format,
                time_zone=time_zone,
                user_locale=user_locale,
                return_fields_by_field_id=return_fields_by_field_id,
                offset=offset,
                request_options=request_options,
            ),
        )

    def replace_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdRequest1 | RecordIdRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Record:
        """Replaces all fields of an existing record. Fields that are not included in the request body will be cleared.
        This is a destructive update that overwrites the entire record.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The replaced record.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.replace_record(
                base_id, table_id_or_name, record_id, body, request_options=request_options
            ),
        )

    def update_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdRequest | RecordIdRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Record:
        """Updates specific fields of an existing record. Only the fields included in the request body will be updated;
        all other fields will remain unchanged. Up to 10 records can be updated in a single request when using the batch
        endpoint.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated record.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.update_record(
                base_id, table_id_or_name, record_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RecordsWithRawResponse:
        return self._with_raw_response


class AsyncRecords:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRecordsWithRawResponse(client, server, auth)

    async def create_records(
        self,
        base_id: str,
        table_id_or_name: str,
        body: Request | RequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Response:
        """Creates up to 10 records in the specified table. Each record must include a fields object mapping field names
        (or IDs) to values. If typecast is enabled, the API will attempt to convert string values to the appropriate
        cell value.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created records.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_records(
                base_id, table_id_or_name, body, request_options=request_options
            ),
        )

    async def delete_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecordDeleted:
        """Deletes a single record from the specified table. The record is permanently removed and cannot be recovered
        through the API.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Confirmation of deletion.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_record(
                base_id, table_id_or_name, record_id, request_options=request_options
            ),
        )

    async def get_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        return_fields_by_field_id: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Record:
        """Retrieves a single record by its ID from the specified table. Returns the record's fields, creation time, and
        ID.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            return_fields_by_field_id: If true, the response will use field IDs as keys instead of field names.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested record.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_record(
                base_id,
                table_id_or_name,
                record_id,
                return_fields_by_field_id=return_fields_by_field_id,
                request_options=request_options,
            ),
        )

    async def list_records(
        self,
        base_id: str,
        table_id_or_name: str,
        *,
        fields: list[str] | None = None,
        filter_by_formula: str | None = None,
        max_records: int | None = None,
        page_size: int | None = 100,
        sort: list[Sort | SortDict] | None = None,
        view: str | None = None,
        cell_format: CellFormatOrStr | None = None,
        time_zone: str | None = None,
        user_locale: str | None = None,
        return_fields_by_field_id: bool | None = None,
        offset: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecordList:
        """Returns a paginated list of records in the specified table. Records can be filtered using an Airtable
        formula, sorted by specific fields, and limited to specific fields. The maximum page size is 100 records. Use
        the offset parameter from the response to fetch the next page.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            fields: Only return data for the specified field names or IDs.
            filter_by_formula: An Airtable formula used to filter records. The formula is evaluated for each record, and
                if the result is not 0, false, "", NaN, [], or #Error!, the record will be included in the response.
            max_records: The maximum total number of records that will be returned.
            page_size: The number of records returned in each request. Must be less than or equal to 100. Default is
                100.
            sort: A list of sort objects that specifies how the records will be ordered. Each sort object must have a
                field key and an optional direction key (asc or desc).
            view: The name or ID of a view in the table. If set, only the records in that view will be returned.
            cell_format: The format that should be used for cell values. Supported values are json (default) and string.
            time_zone: The time zone to use for formatting dates when using string cell format.
            user_locale: The user locale to use for formatting dates when using string cell format.
            return_fields_by_field_id: If true, the response will use field IDs as object keys instead of field names.
            offset: A pagination cursor returned from a previous request. Pass this value to fetch the next page of
                results.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of records.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_records(
                base_id,
                table_id_or_name,
                fields=fields,
                filter_by_formula=filter_by_formula,
                max_records=max_records,
                page_size=page_size,
                sort=sort,
                view=view,
                cell_format=cell_format,
                time_zone=time_zone,
                user_locale=user_locale,
                return_fields_by_field_id=return_fields_by_field_id,
                offset=offset,
                request_options=request_options,
            ),
        )

    async def replace_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdRequest1 | RecordIdRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Record:
        """Replaces all fields of an existing record. Fields that are not included in the request body will be cleared.
        This is a destructive update that overwrites the entire record.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The replaced record.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.replace_record(
                base_id, table_id_or_name, record_id, body, request_options=request_options
            ),
        )

    async def update_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdRequest | RecordIdRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Record:
        """Updates specific fields of an existing record. Only the fields included in the request body will be updated;
        all other fields will remain unchanged. Up to 10 records can be updated in a single request when using the batch
        endpoint.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated record.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_record(
                base_id, table_id_or_name, record_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRecordsWithRawResponse:
        return self._with_raw_response


class RecordsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_records(
        self,
        base_id: str,
        table_id_or_name: str,
        body: Request | RequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Response, CreateRecordsErrorBody]:
        """Creates up to 10 records in the specified table. Each record must include a fields object mapping field names
        (or IDs) to values. If typecast is enabled, the API will attempt to convert string values to the appropriate
        cell value.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{baseId}/{tableIdOrName}"),
            path_params=[param[str]("baseId", base_id), param[str]("tableIdOrName", table_id_or_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Request | RequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Response],
            error_mapper=create_records_error_mapper,
            request_options=request_options,
        )

    def delete_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordDeleted, DeleteRecordErrorBody]:
        """Deletes a single record from the specified table. The record is permanently removed and cannot be recovered
        through the API.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[RecordDeleted],
            error_mapper=delete_record_error_mapper,
            request_options=request_options,
        )

    def get_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        return_fields_by_field_id: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Record, GetRecordErrorBody]:
        """Retrieves a single record by its ID from the specified table. Returns the record's fields, creation time, and
        ID.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            return_fields_by_field_id: If true, the response will use field IDs as keys instead of field names.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            query_params=[param[bool | None]("returnFieldsByFieldId", return_fields_by_field_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Record],
            error_mapper=get_record_error_mapper,
            request_options=request_options,
        )

    def list_records(
        self,
        base_id: str,
        table_id_or_name: str,
        *,
        fields: list[str] | None = None,
        filter_by_formula: str | None = None,
        max_records: int | None = None,
        page_size: int | None = 100,
        sort: list[Sort | SortDict] | None = None,
        view: str | None = None,
        cell_format: CellFormatOrStr | None = None,
        time_zone: str | None = None,
        user_locale: str | None = None,
        return_fields_by_field_id: bool | None = None,
        offset: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordList, ListRecordsErrorBody]:
        """Returns a paginated list of records in the specified table. Records can be filtered using an Airtable
        formula, sorted by specific fields, and limited to specific fields. The maximum page size is 100 records. Use
        the offset parameter from the response to fetch the next page.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            fields: Only return data for the specified field names or IDs.
            filter_by_formula: An Airtable formula used to filter records. The formula is evaluated for each record, and
                if the result is not 0, false, "", NaN, [], or #Error!, the record will be included in the response.
            max_records: The maximum total number of records that will be returned.
            page_size: The number of records returned in each request. Must be less than or equal to 100. Default is
                100.
            sort: A list of sort objects that specifies how the records will be ordered. Each sort object must have a
                field key and an optional direction key (asc or desc).
            view: The name or ID of a view in the table. If set, only the records in that view will be returned.
            cell_format: The format that should be used for cell values. Supported values are json (default) and string.
            time_zone: The time zone to use for formatting dates when using string cell format.
            user_locale: The user locale to use for formatting dates when using string cell format.
            return_fields_by_field_id: If true, the response will use field IDs as object keys instead of field names.
            offset: A pagination cursor returned from a previous request. Pass this value to fetch the next page of
                results.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{baseId}/{tableIdOrName}"),
            path_params=[param[str]("baseId", base_id), param[str]("tableIdOrName", table_id_or_name)],
            query_params=[
                param[list[str] | None]("fields[]", fields),
                param[str | None]("filterByFormula", filter_by_formula),
                param[int | None]("maxRecords", max_records),
                param[int | None]("pageSize", page_size),
                param[list[Sort | SortDict] | None]("sort", sort),
                param[str | None]("view", view),
                param[CellFormatOrStr | None]("cellFormat", cell_format),
                param[str | None]("timeZone", time_zone),
                param[str | None]("userLocale", user_locale),
                param[bool | None]("returnFieldsByFieldId", return_fields_by_field_id),
                param[str | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[RecordList],
            error_mapper=list_records_error_mapper,
            request_options=request_options,
        )

    def replace_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdRequest1 | RecordIdRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Record, ReplaceRecordErrorBody]:
        """Replaces all fields of an existing record. Fields that are not included in the request body will be cleared.
        This is a destructive update that overwrites the entire record.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecordIdRequest1 | RecordIdRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Record],
            error_mapper=replace_record_error_mapper,
            request_options=request_options,
        )

    def update_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdRequest | RecordIdRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Record, UpdateRecordErrorBody]:
        """Updates specific fields of an existing record. Only the fields included in the request body will be updated;
        all other fields will remain unchanged. Up to 10 records can be updated in a single request when using the batch
        endpoint.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecordIdRequest | RecordIdRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Record],
            error_mapper=update_record_error_mapper,
            request_options=request_options,
        )


class AsyncRecordsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_records(
        self,
        base_id: str,
        table_id_or_name: str,
        body: Request | RequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Response, CreateRecordsErrorBody]:
        """Creates up to 10 records in the specified table. Each record must include a fields object mapping field names
        (or IDs) to values. If typecast is enabled, the API will attempt to convert string values to the appropriate
        cell value.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{baseId}/{tableIdOrName}"),
            path_params=[param[str]("baseId", base_id), param[str]("tableIdOrName", table_id_or_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Request | RequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Response],
            error_mapper=create_records_error_mapper,
            request_options=request_options,
        )

    async def delete_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordDeleted, DeleteRecordErrorBody]:
        """Deletes a single record from the specified table. The record is permanently removed and cannot be recovered
        through the API.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[RecordDeleted],
            error_mapper=delete_record_error_mapper,
            request_options=request_options,
        )

    async def get_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        *,
        return_fields_by_field_id: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Record, GetRecordErrorBody]:
        """Retrieves a single record by its ID from the specified table. Returns the record's fields, creation time, and
        ID.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            return_fields_by_field_id: If true, the response will use field IDs as keys instead of field names.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            query_params=[param[bool | None]("returnFieldsByFieldId", return_fields_by_field_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Record],
            error_mapper=get_record_error_mapper,
            request_options=request_options,
        )

    async def list_records(
        self,
        base_id: str,
        table_id_or_name: str,
        *,
        fields: list[str] | None = None,
        filter_by_formula: str | None = None,
        max_records: int | None = None,
        page_size: int | None = 100,
        sort: list[Sort | SortDict] | None = None,
        view: str | None = None,
        cell_format: CellFormatOrStr | None = None,
        time_zone: str | None = None,
        user_locale: str | None = None,
        return_fields_by_field_id: bool | None = None,
        offset: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordList, ListRecordsErrorBody]:
        """Returns a paginated list of records in the specified table. Records can be filtered using an Airtable
        formula, sorted by specific fields, and limited to specific fields. The maximum page size is 100 records. Use
        the offset parameter from the response to fetch the next page.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            fields: Only return data for the specified field names or IDs.
            filter_by_formula: An Airtable formula used to filter records. The formula is evaluated for each record, and
                if the result is not 0, false, "", NaN, [], or #Error!, the record will be included in the response.
            max_records: The maximum total number of records that will be returned.
            page_size: The number of records returned in each request. Must be less than or equal to 100. Default is
                100.
            sort: A list of sort objects that specifies how the records will be ordered. Each sort object must have a
                field key and an optional direction key (asc or desc).
            view: The name or ID of a view in the table. If set, only the records in that view will be returned.
            cell_format: The format that should be used for cell values. Supported values are json (default) and string.
            time_zone: The time zone to use for formatting dates when using string cell format.
            user_locale: The user locale to use for formatting dates when using string cell format.
            return_fields_by_field_id: If true, the response will use field IDs as object keys instead of field names.
            offset: A pagination cursor returned from a previous request. Pass this value to fetch the next page of
                results.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{baseId}/{tableIdOrName}"),
            path_params=[param[str]("baseId", base_id), param[str]("tableIdOrName", table_id_or_name)],
            query_params=[
                param[list[str] | None]("fields[]", fields),
                param[str | None]("filterByFormula", filter_by_formula),
                param[int | None]("maxRecords", max_records),
                param[int | None]("pageSize", page_size),
                param[list[Sort | SortDict] | None]("sort", sort),
                param[str | None]("view", view),
                param[CellFormatOrStr | None]("cellFormat", cell_format),
                param[str | None]("timeZone", time_zone),
                param[str | None]("userLocale", user_locale),
                param[bool | None]("returnFieldsByFieldId", return_fields_by_field_id),
                param[str | None]("offset", offset),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[RecordList],
            error_mapper=list_records_error_mapper,
            request_options=request_options,
        )

    async def replace_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdRequest1 | RecordIdRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Record, ReplaceRecordErrorBody]:
        """Replaces all fields of an existing record. Fields that are not included in the request body will be cleared.
        This is a destructive update that overwrites the entire record.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecordIdRequest1 | RecordIdRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Record],
            error_mapper=replace_record_error_mapper,
            request_options=request_options,
        )

    async def update_record(
        self,
        base_id: str,
        table_id_or_name: str,
        record_id: str,
        body: RecordIdRequest | RecordIdRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Record, UpdateRecordErrorBody]:
        """Updates specific fields of an existing record. Only the fields included in the request body will be updated;
        all other fields will remain unchanged. Up to 10 records can be updated in a single request when using the batch
        endpoint.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            table_id_or_name: The name or unique identifier (starts with 'tbl') of the table.
            record_id: The unique identifier of the record (starts with 'rec').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/{baseId}/{tableIdOrName}/{recordId}"),
            path_params=[
                param[str]("baseId", base_id),
                param[str]("tableIdOrName", table_id_or_name),
                param[str]("recordId", record_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecordIdRequest | RecordIdRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Record],
            error_mapper=update_record_error_mapper,
            request_options=request_options,
        )
