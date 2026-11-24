from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncFileInput,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    FileInput,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_file_decoder,
    async_json_decoder,
    file_decoder,
    file_part,
    json_body,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.create_datahub_dataset_error import CreateDatahubDatasetErrorBody, create_datahub_dataset_error_mapper
from ..errors.datahub_events_csv_file_error import DatahubEventsCsvFileErrorBody, datahub_events_csv_file_error_mapper
from ..errors.datahub_events_error import DatahubEventsErrorBody, datahub_events_error_mapper
from ..errors.datahub_import_provider_records_error import (
    DatahubImportProviderRecordsErrorBody,
    datahub_import_provider_records_error_mapper,
)
from ..errors.delete_datahub_dataset_error import DeleteDatahubDatasetErrorBody, delete_datahub_dataset_error_mapper
from ..errors.delete_datahub_datasets_error import DeleteDatahubDatasetsErrorBody, delete_datahub_datasets_error_mapper
from ..errors.delete_datahub_events_by_filter_error import (
    DeleteDatahubEventsByFilterErrorBody,
    delete_datahub_events_by_filter_error_mapper,
)
from ..errors.export_datahub_dataset_records_error import (
    ExportDatahubDatasetRecordsErrorBody,
    export_datahub_dataset_records_error_mapper,
)
from ..errors.get_datahub_dataset_error import GetDatahubDatasetErrorBody, get_datahub_dataset_error_mapper
from ..errors.list_datahub_datasets_error import ListDatahubDatasetsErrorBody, list_datahub_datasets_error_mapper
from ..errors.update_datahub_dataset_error import UpdateDatahubDatasetErrorBody, update_datahub_dataset_error_mapper
from ..models.datahub_v1_csv_upload_response import DatahubV1CsvUploadResponse
from ..models.datahub_v1_datasets_request import DatahubV1DatasetsRequest, DatahubV1DatasetsRequestDict
from ..models.datahub_v1_datasets_request1 import DatahubV1DatasetsRequest1, DatahubV1DatasetsRequest1Dict
from ..models.datahub_v1_datasets_request2 import DatahubV1DatasetsRequest2, DatahubV1DatasetsRequest2Dict
from ..models.datahub_v1_datasets_response import DatahubV1DatasetsResponse
from ..models.datahub_v1_datasets_response1 import DatahubV1DatasetsResponse1
from ..models.datahub_v1_datasets_response2 import DatahubV1DatasetsResponse2
from ..models.datahub_v1_datasets_response4 import DatahubV1DatasetsResponse4
from ..models.datahub_v1_events_delete_request import DatahubV1EventsDeleteRequest, DatahubV1EventsDeleteRequestDict
from ..models.datahub_v1_events_delete_response import DatahubV1EventsDeleteResponse
from ..models.datahub_v1_events_request import DatahubV1EventsRequest, DatahubV1EventsRequestDict
from ..models.datahub_v1_events_response import DatahubV1EventsResponse
from ..models.datahub_v1_import_request import DatahubV1ImportRequest, DatahubV1ImportRequestDict
from ..models.datahub_v1_import_response import DatahubV1ImportResponse
from ..models.enums.format import Format, FormatOrStr
from ..server.server import Server


class DataHub:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataHubWithRawResponse(client, server, auth)

    def create_datahub_dataset(
        self,
        body: DatahubV1DatasetsRequest | DatahubV1DatasetsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DatahubV1DatasetsResponse1:
        """Creates a new DataHub dataset. A dataset is a logical grouping of events that share the same provider name.
        Creating a dataset allows you to define metadata such as name and description before ingesting events.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Dataset created successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.create_datahub_dataset(body, request_options=request_options))

    def datahub_events(
        self,
        body: DatahubV1EventsRequest | DatahubV1EventsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DatahubV1EventsResponse:
        """Sends a batch of events to DataHub.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Ingestion succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.datahub_events(body, request_options=request_options))

    def datahub_events_csv_file(
        self,
        *,
        provider: str | None = None,
        file: FileInput | None = None,
        schema_template: str | None = None,
        period_start: Date | None = None,
        period_end: Date | None = None,
        replace: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DatahubV1CsvUploadResponse:
        """Sends a batch of events to DataHub using a CSV file, either uncompressed or compressed in ZIP or GZ format.
        It may take up to 15 minutes for the data to become available in the DoiT console.

        Args:
            provider: The identifier of the data provider. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore
                (_), space, dash (-).
            file: The CSV file to upload, either uncompressed or compressed in ZIP or GZ format. The maximum file size
                is 30 MB.
            schema_template: Versioned schema template of the file. Defaults to the dataset's template (``default@1``
                for datasets created without one). Provider-native templates such as ``anthropic-spend-report@1`` and
                ``codex-usage-report@1`` validate the vendor's own columns and normalize them into DataHub events. Must
                match the template stored on the dataset.
            period_start: Inclusive first day of the report period (YYYY-MM-DD). Required for template uploads whose
                filename does not carry the period; when both are present they must agree.
            period_end: Inclusive last day of the report period (YYYY-MM-DD). Events are booked on this day.
            replace: Template uploads only. When ``true``, active batches whose report period overlaps this upload are
                soft-deleted before the new file is ingested, and their ids are returned in ``replacedBatches``. Refused
                with ``409`` when an overlapping batch extends outside the requested period (so a one-day replacement
                can never remove a wider upload) or was ingested less than 90 minutes ago (``Retry-After`` header set).
                Without ``replace``, any overlap is rejected with ``409``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Ingestion succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - the report period overlaps an active batch
                (upload without ``replace``), the request template does not match the dataset, ``replace`` would remove
                data outside the requested period, or an overlapping batch is still being processed (retry after the
                ``Retry-After`` seconds). Internal Server Error - Something went wrong with the DoiT API server.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.datahub_events_csv_file(
                provider=provider,
                file=file,
                schema_template=schema_template,
                period_start=period_start,
                period_end=period_end,
                replace=replace,
                request_options=request_options,
            ),
        )

    def datahub_import_provider_records(
        self,
        body: DatahubV1ImportRequest | DatahubV1ImportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DatahubV1ImportResponse:
        """Sends provider-native records as JSON instead of a CSV file. The records use the same columns as the
        template's CSV (currently ``anthropic-spend-report@1`` only) and are validated, normalized and booked on
        ``periodEnd`` exactly like a CSV upload. It may take up to 15 minutes for the data to become available in the
        DoiT console.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Ingestion succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - see the CSV upload endpoint; identical
                semantics for overlap, template mismatch and ``replace``. Internal Server Error - Something went wrong
                with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.datahub_import_provider_records(body, request_options=request_options))

    def delete_datahub_dataset(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DatahubV1DatasetsResponse2:
        """Deletes a specific DataHub dataset.

        Args:
            name: The name of the dataset to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Dataset deleted successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_datahub_dataset(name, request_options=request_options))

    def delete_datahub_datasets(
        self,
        body: DatahubV1DatasetsRequest1 | DatahubV1DatasetsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DatahubV1DatasetsResponse2:
        """Deletes one or more DataHub datasets and all their associated data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Datasets deleted successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.delete_datahub_datasets(body, request_options=request_options))

    def delete_datahub_events_by_filter(
        self,
        body: DatahubV1EventsDeleteRequest | DatahubV1EventsDeleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DatahubV1EventsDeleteResponse:
        """Deletes specific events using filters. Note that the two filters, ``eventIds`` and ``time ranges``, are
        mutually exclusive.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Events deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.delete_datahub_events_by_filter(body, request_options=request_options))

    def export_datahub_dataset_records(
        self,
        name: str,
        start_time: RFC3339DateTime,
        end_time: RFC3339DateTime,
        *,
        format_: FormatOrStr | None = Format.CSV,
        max_results: int | None = 10000,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Returns one page of the live records of a DataHub dataset, as CSV (default) or as newline-delimited JSON in
        the same shape as the ``/datahub/v1/events`` payload.

        A time window is required: ``startTime`` is inclusive, ``endTime`` is exclusive, and the window must not exceed
        366 days. Rows are ordered by their event time and event id, and pages never overlap: read the
        ``X-Next-Page-Token`` response header and pass it back as ``pageToken`` until the header is absent.
        ``X-Row-Count`` carries the number of rows in the page. Only live rows are returned; rows deleted through the
        console or the delete endpoints are excluded.

        Every row starts with five provenance columns (``event_id``, ``batch``, ``source``, ``export_time``,
        ``updated_by``) followed by the dataset's business columns in the CSV ingest vocabulary (``usage_date``,
        ``fixed.``, ``label.``, ``project_label.``, ``system_label.``, ``metric.``). The business columns are computed
        from the rows of each page, so consecutive pages can have different label and metric columns; union the headers
        when concatenating pages. Datasets created with the FOCUS schema template use the FOCUS column names instead and
        can only be exported as CSV.

        To re-import an export into another dataset, drop the ``batch``, ``source``, ``export_time`` and ``updated_by``
        columns, and either drop ``event_id`` or rename it to ``id``.

        Args:
            name: The name of the dataset to export.
            start_time: Inclusive lower bound on the event time, RFC3339.
            end_time: Exclusive upper bound on the event time, RFC3339. At most 366 days after the start time.
            format_: Output format.
            max_results: Maximum number of rows in the page.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - One page of records. The body is streamed.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Too Many Requests. Internal Server Error - Something went
                wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.export_datahub_dataset_records(
                name,
                start_time,
                end_time,
                format_=format_,
                max_results=max_results,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def get_datahub_dataset(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DatahubV1DatasetsResponse4:
        """Returns a specific DataHub dataset by name.

        Args:
            name: The name of the dataset to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Dataset returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_datahub_dataset(name, request_options=request_options))

    def list_datahub_datasets(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> DatahubV1DatasetsResponse:
        """Returns a list of all DataHub datasets for the customer.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of datasets returned successfully.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.list_datahub_datasets(request_options=request_options))

    def update_datahub_dataset(
        self,
        name: str,
        body: DatahubV1DatasetsRequest2 | DatahubV1DatasetsRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DatahubV1DatasetsResponse1:
        """Updates an existing DataHub dataset's metadata. The ``description``, ``displayName`` and ``logoName`` fields
        can be updated. Only the fields present in the request body are changed; an omitted field keeps its stored
        value, and an empty string clears it. The dataset ``name`` is immutable and serves as the resource identifier
        and the ingest ``provider`` value. To change how a dataset is displayed in the console and in report results,
        set ``displayName``; saved reports, budgets, alerts and filters keep working because they reference ``name``. If
        ``name`` is included in the request body, it must match the dataset name in the URL path. A mismatched name will
        be rejected with a 400 error.

        Args:
            name: The name of the dataset to update (immutable, used for identification only).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Dataset updated successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_datahub_dataset(name, body, request_options=request_options))

    @property
    def with_raw_response(self) -> DataHubWithRawResponse:
        return self._with_raw_response


class AsyncDataHub:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataHubWithRawResponse(client, server, auth)

    async def create_datahub_dataset(
        self,
        body: DatahubV1DatasetsRequest | DatahubV1DatasetsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DatahubV1DatasetsResponse1:
        """Creates a new DataHub dataset. A dataset is a logical grouping of events that share the same provider name.
        Creating a dataset allows you to define metadata such as name and description before ingesting events.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Dataset created successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.create_datahub_dataset(body, request_options=request_options))

    async def datahub_events(
        self,
        body: DatahubV1EventsRequest | DatahubV1EventsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DatahubV1EventsResponse:
        """Sends a batch of events to DataHub.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Ingestion succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.datahub_events(body, request_options=request_options))

    async def datahub_events_csv_file(
        self,
        *,
        provider: str | None = None,
        file: AsyncFileInput | None = None,
        schema_template: str | None = None,
        period_start: Date | None = None,
        period_end: Date | None = None,
        replace: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DatahubV1CsvUploadResponse:
        """Sends a batch of events to DataHub using a CSV file, either uncompressed or compressed in ZIP or GZ format.
        It may take up to 15 minutes for the data to become available in the DoiT console.

        Args:
            provider: The identifier of the data provider. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore
                (_), space, dash (-).
            file: The CSV file to upload, either uncompressed or compressed in ZIP or GZ format. The maximum file size
                is 30 MB.
            schema_template: Versioned schema template of the file. Defaults to the dataset's template (``default@1``
                for datasets created without one). Provider-native templates such as ``anthropic-spend-report@1`` and
                ``codex-usage-report@1`` validate the vendor's own columns and normalize them into DataHub events. Must
                match the template stored on the dataset.
            period_start: Inclusive first day of the report period (YYYY-MM-DD). Required for template uploads whose
                filename does not carry the period; when both are present they must agree.
            period_end: Inclusive last day of the report period (YYYY-MM-DD). Events are booked on this day.
            replace: Template uploads only. When ``true``, active batches whose report period overlaps this upload are
                soft-deleted before the new file is ingested, and their ids are returned in ``replacedBatches``. Refused
                with ``409`` when an overlapping batch extends outside the requested period (so a one-day replacement
                can never remove a wider upload) or was ingested less than 90 minutes ago (``Retry-After`` header set).
                Without ``replace``, any overlap is rejected with ``409``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Ingestion succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - the report period overlaps an active batch
                (upload without ``replace``), the request template does not match the dataset, ``replace`` would remove
                data outside the requested period, or an overlapping batch is still being processed (retry after the
                ``Retry-After`` seconds). Internal Server Error - Something went wrong with the DoiT API server.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.datahub_events_csv_file(
                provider=provider,
                file=file,
                schema_template=schema_template,
                period_start=period_start,
                period_end=period_end,
                replace=replace,
                request_options=request_options,
            ),
        )

    async def datahub_import_provider_records(
        self,
        body: DatahubV1ImportRequest | DatahubV1ImportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DatahubV1ImportResponse:
        """Sends provider-native records as JSON instead of a CSV file. The records use the same columns as the
        template's CSV (currently ``anthropic-spend-report@1`` only) and are validated, normalized and booked on
        ``periodEnd`` exactly like a CSV upload. It may take up to 15 minutes for the data to become available in the
        DoiT console.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Ingestion succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - see the CSV upload endpoint; identical
                semantics for overlap, template mismatch and ``replace``. Internal Server Error - Something went wrong
                with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.datahub_import_provider_records(body, request_options=request_options)
        )

    async def delete_datahub_dataset(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DatahubV1DatasetsResponse2:
        """Deletes a specific DataHub dataset.

        Args:
            name: The name of the dataset to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Dataset deleted successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_datahub_dataset(name, request_options=request_options))

    async def delete_datahub_datasets(
        self,
        body: DatahubV1DatasetsRequest1 | DatahubV1DatasetsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DatahubV1DatasetsResponse2:
        """Deletes one or more DataHub datasets and all their associated data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Datasets deleted successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_datahub_datasets(body, request_options=request_options))

    async def delete_datahub_events_by_filter(
        self,
        body: DatahubV1EventsDeleteRequest | DatahubV1EventsDeleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DatahubV1EventsDeleteResponse:
        """Deletes specific events using filters. Note that the two filters, ``eventIds`` and ``time ranges``, are
        mutually exclusive.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Events deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_datahub_events_by_filter(body, request_options=request_options)
        )

    async def export_datahub_dataset_records(
        self,
        name: str,
        start_time: RFC3339DateTime,
        end_time: RFC3339DateTime,
        *,
        format_: FormatOrStr | None = Format.CSV,
        max_results: int | None = 10000,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Returns one page of the live records of a DataHub dataset, as CSV (default) or as newline-delimited JSON in
        the same shape as the ``/datahub/v1/events`` payload.

        A time window is required: ``startTime`` is inclusive, ``endTime`` is exclusive, and the window must not exceed
        366 days. Rows are ordered by their event time and event id, and pages never overlap: read the
        ``X-Next-Page-Token`` response header and pass it back as ``pageToken`` until the header is absent.
        ``X-Row-Count`` carries the number of rows in the page. Only live rows are returned; rows deleted through the
        console or the delete endpoints are excluded.

        Every row starts with five provenance columns (``event_id``, ``batch``, ``source``, ``export_time``,
        ``updated_by``) followed by the dataset's business columns in the CSV ingest vocabulary (``usage_date``,
        ``fixed.``, ``label.``, ``project_label.``, ``system_label.``, ``metric.``). The business columns are computed
        from the rows of each page, so consecutive pages can have different label and metric columns; union the headers
        when concatenating pages. Datasets created with the FOCUS schema template use the FOCUS column names instead and
        can only be exported as CSV.

        To re-import an export into another dataset, drop the ``batch``, ``source``, ``export_time`` and ``updated_by``
        columns, and either drop ``event_id`` or rename it to ``id``.

        Args:
            name: The name of the dataset to export.
            start_time: Inclusive lower bound on the event time, RFC3339.
            end_time: Exclusive upper bound on the event time, RFC3339. At most 366 days after the start time.
            format_: Output format.
            max_results: Maximum number of rows in the page.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - One page of records. The body is streamed.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Too Many Requests. Internal Server Error - Something went
                wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.export_datahub_dataset_records(
                name,
                start_time,
                end_time,
                format_=format_,
                max_results=max_results,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def get_datahub_dataset(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DatahubV1DatasetsResponse4:
        """Returns a specific DataHub dataset by name.

        Args:
            name: The name of the dataset to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Dataset returned.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_datahub_dataset(name, request_options=request_options))

    async def list_datahub_datasets(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DatahubV1DatasetsResponse:
        """Returns a list of all DataHub datasets for the customer.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of datasets returned successfully.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.list_datahub_datasets(request_options=request_options))

    async def update_datahub_dataset(
        self,
        name: str,
        body: DatahubV1DatasetsRequest2 | DatahubV1DatasetsRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DatahubV1DatasetsResponse1:
        """Updates an existing DataHub dataset's metadata. The ``description``, ``displayName`` and ``logoName`` fields
        can be updated. Only the fields present in the request body are changed; an omitted field keeps its stored
        value, and an empty string clears it. The dataset ``name`` is immutable and serves as the resource identifier
        and the ingest ``provider`` value. To change how a dataset is displayed in the console and in report results,
        set ``displayName``; saved reports, budgets, alerts and filters keep working because they reference ``name``. If
        ``name`` is included in the request body, it must match the dataset name in the URL path. A mismatched name will
        be rejected with a 400 error.

        Args:
            name: The name of the dataset to update (immutable, used for identification only).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Dataset updated successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_datahub_dataset(name, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDataHubWithRawResponse:
        return self._with_raw_response


class DataHubWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_datahub_dataset(
        self,
        body: DatahubV1DatasetsRequest | DatahubV1DatasetsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1DatasetsResponse1, CreateDatahubDatasetErrorBody]:
        """Creates a new DataHub dataset. A dataset is a logical grouping of events that share the same provider name.
        Creating a dataset allows you to define metadata such as name and description before ingesting events.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/datahub/v1/datasets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1DatasetsRequest | DatahubV1DatasetsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DatahubV1DatasetsResponse1],
            error_mapper=create_datahub_dataset_error_mapper,
            request_options=request_options,
        )

    def datahub_events(
        self,
        body: DatahubV1EventsRequest | DatahubV1EventsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1EventsResponse, DatahubEventsErrorBody]:
        """Sends a batch of events to DataHub.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/datahub/v1/events"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1EventsRequest | DatahubV1EventsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DatahubV1EventsResponse],
            error_mapper=datahub_events_error_mapper,
            request_options=request_options,
        )

    def datahub_events_csv_file(
        self,
        *,
        provider: str | None = None,
        file: FileInput | None = None,
        schema_template: str | None = None,
        period_start: Date | None = None,
        period_end: Date | None = None,
        replace: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1CsvUploadResponse, DatahubEventsCsvFileErrorBody]:
        """Sends a batch of events to DataHub using a CSV file, either uncompressed or compressed in ZIP or GZ format.
        It may take up to 15 minutes for the data to become available in the DoiT console.

        Args:
            provider: The identifier of the data provider. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore
                (_), space, dash (-).
            file: The CSV file to upload, either uncompressed or compressed in ZIP or GZ format. The maximum file size
                is 30 MB.
            schema_template: Versioned schema template of the file. Defaults to the dataset's template (``default@1``
                for datasets created without one). Provider-native templates such as ``anthropic-spend-report@1`` and
                ``codex-usage-report@1`` validate the vendor's own columns and normalize them into DataHub events. Must
                match the template stored on the dataset.
            period_start: Inclusive first day of the report period (YYYY-MM-DD). Required for template uploads whose
                filename does not carry the period; when both are present they must agree.
            period_end: Inclusive last day of the report period (YYYY-MM-DD). Events are booked on this day.
            replace: Template uploads only. When ``true``, active batches whose report period overlaps this upload are
                soft-deleted before the new file is ingested, and their ids are returned in ``replacedBatches``. Refused
                with ``409`` when an overlapping batch extends outside the requested period (so a one-day replacement
                can never remove a wider upload) or was ingested less than 90 minutes ago (``Retry-After`` header set).
                Without ``replace``, any overlap is rejected with ``409``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/datahub/v1/csv/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                param[str | None]("provider", provider),
                file_part("file", file) if file is not None else None,
                param[str | None]("schemaTemplate", schema_template),
                param[Date | None]("periodStart", period_start),
                param[Date | None]("periodEnd", period_end),
                param[bool | None]("replace", replace),
            ),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DatahubV1CsvUploadResponse],
            error_mapper=datahub_events_csv_file_error_mapper,
            request_options=request_options,
        )

    def datahub_import_provider_records(
        self,
        body: DatahubV1ImportRequest | DatahubV1ImportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1ImportResponse, DatahubImportProviderRecordsErrorBody]:
        """Sends provider-native records as JSON instead of a CSV file. The records use the same columns as the
        template's CSV (currently ``anthropic-spend-report@1`` only) and are validated, normalized and booked on
        ``periodEnd`` exactly like a CSV upload. It may take up to 15 minutes for the data to become available in the
        DoiT console.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/datahub/v1/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1ImportRequest | DatahubV1ImportRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DatahubV1ImportResponse],
            error_mapper=datahub_import_provider_records_error_mapper,
            request_options=request_options,
        )

    def delete_datahub_dataset(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DatahubV1DatasetsResponse2, DeleteDatahubDatasetErrorBody]:
        """Deletes a specific DataHub dataset.

        Args:
            name: The name of the dataset to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/datahub/v1/datasets/{name}"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DatahubV1DatasetsResponse2],
            error_mapper=delete_datahub_dataset_error_mapper,
            request_options=request_options,
        )

    def delete_datahub_datasets(
        self,
        body: DatahubV1DatasetsRequest1 | DatahubV1DatasetsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1DatasetsResponse2, DeleteDatahubDatasetsErrorBody]:
        """Deletes one or more DataHub datasets and all their associated data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/datahub/v1/datasets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1DatasetsRequest1 | DatahubV1DatasetsRequest1Dict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DatahubV1DatasetsResponse2],
            error_mapper=delete_datahub_datasets_error_mapper,
            request_options=request_options,
        )

    def delete_datahub_events_by_filter(
        self,
        body: DatahubV1EventsDeleteRequest | DatahubV1EventsDeleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1EventsDeleteResponse, DeleteDatahubEventsByFilterErrorBody]:
        """Deletes specific events using filters. Note that the two filters, ``eventIds`` and ``time ranges``, are
        mutually exclusive.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/datahub/v1/events/delete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1EventsDeleteRequest | DatahubV1EventsDeleteRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DatahubV1EventsDeleteResponse],
            error_mapper=delete_datahub_events_by_filter_error_mapper,
            request_options=request_options,
        )

    def export_datahub_dataset_records(
        self,
        name: str,
        start_time: RFC3339DateTime,
        end_time: RFC3339DateTime,
        *,
        format_: FormatOrStr | None = Format.CSV,
        max_results: int | None = 10000,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, ExportDatahubDatasetRecordsErrorBody]:
        """Returns one page of the live records of a DataHub dataset, as CSV (default) or as newline-delimited JSON in
        the same shape as the ``/datahub/v1/events`` payload.

        A time window is required: ``startTime`` is inclusive, ``endTime`` is exclusive, and the window must not exceed
        366 days. Rows are ordered by their event time and event id, and pages never overlap: read the
        ``X-Next-Page-Token`` response header and pass it back as ``pageToken`` until the header is absent.
        ``X-Row-Count`` carries the number of rows in the page. Only live rows are returned; rows deleted through the
        console or the delete endpoints are excluded.

        Every row starts with five provenance columns (``event_id``, ``batch``, ``source``, ``export_time``,
        ``updated_by``) followed by the dataset's business columns in the CSV ingest vocabulary (``usage_date``,
        ``fixed.``, ``label.``, ``project_label.``, ``system_label.``, ``metric.``). The business columns are computed
        from the rows of each page, so consecutive pages can have different label and metric columns; union the headers
        when concatenating pages. Datasets created with the FOCUS schema template use the FOCUS column names instead and
        can only be exported as CSV.

        To re-import an export into another dataset, drop the ``batch``, ``source``, ``export_time`` and ``updated_by``
        columns, and either drop ``event_id`` or rename it to ``id``.

        Args:
            name: The name of the dataset to export.
            start_time: Inclusive lower bound on the event time, RFC3339.
            end_time: Exclusive upper bound on the event time, RFC3339. At most 366 days after the start time.
            format_: Output format.
            max_results: Maximum number of rows in the page.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/datahub/v1/datasets/{name}/records"),
            path_params=[param[str]("name", name)],
            query_params=[
                param[RFC3339DateTime]("startTime", start_time),
                param[RFC3339DateTime]("endTime", end_time),
                param[FormatOrStr | None]("format", format_),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=file_decoder,
            error_mapper=export_datahub_dataset_records_error_mapper,
            request_options=request_options,
        )

    def get_datahub_dataset(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DatahubV1DatasetsResponse4, GetDatahubDatasetErrorBody]:
        """Returns a specific DataHub dataset by name.

        Args:
            name: The name of the dataset to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/datahub/v1/datasets/{name}"),
            path_params=[param[str]("name", name)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DatahubV1DatasetsResponse4],
            error_mapper=get_datahub_dataset_error_mapper,
            request_options=request_options,
        )

    def list_datahub_datasets(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DatahubV1DatasetsResponse, ListDatahubDatasetsErrorBody]:
        """Returns a list of all DataHub datasets for the customer.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/datahub/v1/datasets"),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DatahubV1DatasetsResponse],
            error_mapper=list_datahub_datasets_error_mapper,
            request_options=request_options,
        )

    def update_datahub_dataset(
        self,
        name: str,
        body: DatahubV1DatasetsRequest2 | DatahubV1DatasetsRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1DatasetsResponse1, UpdateDatahubDatasetErrorBody]:
        """Updates an existing DataHub dataset's metadata. The ``description``, ``displayName`` and ``logoName`` fields
        can be updated. Only the fields present in the request body are changed; an omitted field keeps its stored
        value, and an empty string clears it. The dataset ``name`` is immutable and serves as the resource identifier
        and the ingest ``provider`` value. To change how a dataset is displayed in the console and in report results,
        set ``displayName``; saved reports, budgets, alerts and filters keep working because they reference ``name``. If
        ``name`` is included in the request body, it must match the dataset name in the URL path. A mismatched name will
        be rejected with a 400 error.

        Args:
            name: The name of the dataset to update (immutable, used for identification only).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/datahub/v1/datasets/{name}"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1DatasetsRequest2 | DatahubV1DatasetsRequest2Dict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DatahubV1DatasetsResponse1],
            error_mapper=update_datahub_dataset_error_mapper,
            request_options=request_options,
        )


class AsyncDataHubWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_datahub_dataset(
        self,
        body: DatahubV1DatasetsRequest | DatahubV1DatasetsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1DatasetsResponse1, CreateDatahubDatasetErrorBody]:
        """Creates a new DataHub dataset. A dataset is a logical grouping of events that share the same provider name.
        Creating a dataset allows you to define metadata such as name and description before ingesting events.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/datahub/v1/datasets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1DatasetsRequest | DatahubV1DatasetsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DatahubV1DatasetsResponse1],
            error_mapper=create_datahub_dataset_error_mapper,
            request_options=request_options,
        )

    async def datahub_events(
        self,
        body: DatahubV1EventsRequest | DatahubV1EventsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1EventsResponse, DatahubEventsErrorBody]:
        """Sends a batch of events to DataHub.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/datahub/v1/events"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1EventsRequest | DatahubV1EventsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DatahubV1EventsResponse],
            error_mapper=datahub_events_error_mapper,
            request_options=request_options,
        )

    async def datahub_events_csv_file(
        self,
        *,
        provider: str | None = None,
        file: AsyncFileInput | None = None,
        schema_template: str | None = None,
        period_start: Date | None = None,
        period_end: Date | None = None,
        replace: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1CsvUploadResponse, DatahubEventsCsvFileErrorBody]:
        """Sends a batch of events to DataHub using a CSV file, either uncompressed or compressed in ZIP or GZ format.
        It may take up to 15 minutes for the data to become available in the DoiT console.

        Args:
            provider: The identifier of the data provider. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore
                (_), space, dash (-).
            file: The CSV file to upload, either uncompressed or compressed in ZIP or GZ format. The maximum file size
                is 30 MB.
            schema_template: Versioned schema template of the file. Defaults to the dataset's template (``default@1``
                for datasets created without one). Provider-native templates such as ``anthropic-spend-report@1`` and
                ``codex-usage-report@1`` validate the vendor's own columns and normalize them into DataHub events. Must
                match the template stored on the dataset.
            period_start: Inclusive first day of the report period (YYYY-MM-DD). Required for template uploads whose
                filename does not carry the period; when both are present they must agree.
            period_end: Inclusive last day of the report period (YYYY-MM-DD). Events are booked on this day.
            replace: Template uploads only. When ``true``, active batches whose report period overlaps this upload are
                soft-deleted before the new file is ingested, and their ids are returned in ``replacedBatches``. Refused
                with ``409`` when an overlapping batch extends outside the requested period (so a one-day replacement
                can never remove a wider upload) or was ingested less than 90 minutes ago (``Retry-After`` header set).
                Without ``replace``, any overlap is rejected with ``409``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/datahub/v1/csv/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                param[str | None]("provider", provider),
                file_part("file", file) if file is not None else None,
                param[str | None]("schemaTemplate", schema_template),
                param[Date | None]("periodStart", period_start),
                param[Date | None]("periodEnd", period_end),
                param[bool | None]("replace", replace),
            ),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DatahubV1CsvUploadResponse],
            error_mapper=datahub_events_csv_file_error_mapper,
            request_options=request_options,
        )

    async def datahub_import_provider_records(
        self,
        body: DatahubV1ImportRequest | DatahubV1ImportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1ImportResponse, DatahubImportProviderRecordsErrorBody]:
        """Sends provider-native records as JSON instead of a CSV file. The records use the same columns as the
        template's CSV (currently ``anthropic-spend-report@1`` only) and are validated, normalized and booked on
        ``periodEnd`` exactly like a CSV upload. It may take up to 15 minutes for the data to become available in the
        DoiT console.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/datahub/v1/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1ImportRequest | DatahubV1ImportRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DatahubV1ImportResponse],
            error_mapper=datahub_import_provider_records_error_mapper,
            request_options=request_options,
        )

    async def delete_datahub_dataset(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DatahubV1DatasetsResponse2, DeleteDatahubDatasetErrorBody]:
        """Deletes a specific DataHub dataset.

        Args:
            name: The name of the dataset to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/datahub/v1/datasets/{name}"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DatahubV1DatasetsResponse2],
            error_mapper=delete_datahub_dataset_error_mapper,
            request_options=request_options,
        )

    async def delete_datahub_datasets(
        self,
        body: DatahubV1DatasetsRequest1 | DatahubV1DatasetsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1DatasetsResponse2, DeleteDatahubDatasetsErrorBody]:
        """Deletes one or more DataHub datasets and all their associated data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/datahub/v1/datasets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1DatasetsRequest1 | DatahubV1DatasetsRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DatahubV1DatasetsResponse2],
            error_mapper=delete_datahub_datasets_error_mapper,
            request_options=request_options,
        )

    async def delete_datahub_events_by_filter(
        self,
        body: DatahubV1EventsDeleteRequest | DatahubV1EventsDeleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1EventsDeleteResponse, DeleteDatahubEventsByFilterErrorBody]:
        """Deletes specific events using filters. Note that the two filters, ``eventIds`` and ``time ranges``, are
        mutually exclusive.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/datahub/v1/events/delete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1EventsDeleteRequest | DatahubV1EventsDeleteRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DatahubV1EventsDeleteResponse],
            error_mapper=delete_datahub_events_by_filter_error_mapper,
            request_options=request_options,
        )

    async def export_datahub_dataset_records(
        self,
        name: str,
        start_time: RFC3339DateTime,
        end_time: RFC3339DateTime,
        *,
        format_: FormatOrStr | None = Format.CSV,
        max_results: int | None = 10000,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, ExportDatahubDatasetRecordsErrorBody]:
        """Returns one page of the live records of a DataHub dataset, as CSV (default) or as newline-delimited JSON in
        the same shape as the ``/datahub/v1/events`` payload.

        A time window is required: ``startTime`` is inclusive, ``endTime`` is exclusive, and the window must not exceed
        366 days. Rows are ordered by their event time and event id, and pages never overlap: read the
        ``X-Next-Page-Token`` response header and pass it back as ``pageToken`` until the header is absent.
        ``X-Row-Count`` carries the number of rows in the page. Only live rows are returned; rows deleted through the
        console or the delete endpoints are excluded.

        Every row starts with five provenance columns (``event_id``, ``batch``, ``source``, ``export_time``,
        ``updated_by``) followed by the dataset's business columns in the CSV ingest vocabulary (``usage_date``,
        ``fixed.``, ``label.``, ``project_label.``, ``system_label.``, ``metric.``). The business columns are computed
        from the rows of each page, so consecutive pages can have different label and metric columns; union the headers
        when concatenating pages. Datasets created with the FOCUS schema template use the FOCUS column names instead and
        can only be exported as CSV.

        To re-import an export into another dataset, drop the ``batch``, ``source``, ``export_time`` and ``updated_by``
        columns, and either drop ``event_id`` or rename it to ``id``.

        Args:
            name: The name of the dataset to export.
            start_time: Inclusive lower bound on the event time, RFC3339.
            end_time: Exclusive upper bound on the event time, RFC3339. At most 366 days after the start time.
            format_: Output format.
            max_results: Maximum number of rows in the page.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/datahub/v1/datasets/{name}/records"),
            path_params=[param[str]("name", name)],
            query_params=[
                param[RFC3339DateTime]("startTime", start_time),
                param[RFC3339DateTime]("endTime", end_time),
                param[FormatOrStr | None]("format", format_),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_file_decoder,
            error_mapper=export_datahub_dataset_records_error_mapper,
            request_options=request_options,
        )

    async def get_datahub_dataset(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DatahubV1DatasetsResponse4, GetDatahubDatasetErrorBody]:
        """Returns a specific DataHub dataset by name.

        Args:
            name: The name of the dataset to retrieve.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/datahub/v1/datasets/{name}"),
            path_params=[param[str]("name", name)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DatahubV1DatasetsResponse4],
            error_mapper=get_datahub_dataset_error_mapper,
            request_options=request_options,
        )

    async def list_datahub_datasets(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DatahubV1DatasetsResponse, ListDatahubDatasetsErrorBody]:
        """Returns a list of all DataHub datasets for the customer.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/datahub/v1/datasets"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DatahubV1DatasetsResponse],
            error_mapper=list_datahub_datasets_error_mapper,
            request_options=request_options,
        )

    async def update_datahub_dataset(
        self,
        name: str,
        body: DatahubV1DatasetsRequest2 | DatahubV1DatasetsRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DatahubV1DatasetsResponse1, UpdateDatahubDatasetErrorBody]:
        """Updates an existing DataHub dataset's metadata. The ``description``, ``displayName`` and ``logoName`` fields
        can be updated. Only the fields present in the request body are changed; an omitted field keeps its stored
        value, and an empty string clears it. The dataset ``name`` is immutable and serves as the resource identifier
        and the ingest ``provider`` value. To change how a dataset is displayed in the console and in report results,
        set ``displayName``; saved reports, budgets, alerts and filters keep working because they reference ``name``. If
        ``name`` is included in the request body, it must match the dataset name in the URL path. A mismatched name will
        be rejected with a 400 error.

        Args:
            name: The name of the dataset to update (immutable, used for identification only).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/datahub/v1/datasets/{name}"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DatahubV1DatasetsRequest2 | DatahubV1DatasetsRequest2Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DatahubV1DatasetsResponse1],
            error_mapper=update_datahub_dataset_error_mapper,
            request_options=request_options,
        )
