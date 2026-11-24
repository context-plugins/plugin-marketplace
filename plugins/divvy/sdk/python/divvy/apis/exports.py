from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_download_link_error import GetDownloadLinkErrorBody, get_download_link_error_mapper
from ..errors.list_exports_error import ListExportsErrorBody, list_exports_error_mapper
from ..models.export_download_link_response_dto import ExportDownloadLinkResponseDto
from ..models.list_response_dto_export_response_dto import ListResponseDtoExportResponseDto
from ..server.server import Server


class Exports:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ExportsWithRawResponse(client, server)

    def get_download_link(
        self,
        export_id: int,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExportDownloadLinkResponseDto:
        """Get the download URL for an exported record file.

        From the response, use ``downloadLink`` in a GET request to download the file.

        ```
        curl '{downloadLink}' --output {file_name}
        ```
        See Export BILL records in the Guides section for more information, sample requests, and responses.

        Args:
            export_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get exported record download URL response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_download_link(
                export_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_exports(
        self,
        *,
        max_: int | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoExportResponseDto:
        """Get a list of exported BILL records available for you to download. By default, you get 20 results on one page
        of results. Set ``max`` in your request to get up to 100 results on one page.

        From the response, use ``exportId`` to get the download URL for an exported record file with ``GET
        /v3/exports/{exportId}/download-link``.

        You can export records, such as vendors, customers, bills, and invoices. In addition, you can export AP payments
        and AR payments. The **Import and export** section in the BILL web app (**Settings > Import & export > Custom
        File Integration**) provides the complete list of entities that you can export.

        See Export BILL records in the Guides section for more information, sample requests, and responses.

        Args:
            max_: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of exported BILL records response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_exports(
                max_=max_,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ExportsWithRawResponse:
        return self._with_raw_response


class AsyncExports:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncExportsWithRawResponse(client, server)

    async def get_download_link(
        self,
        export_id: int,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExportDownloadLinkResponseDto:
        """Get the download URL for an exported record file.

        From the response, use ``downloadLink`` in a GET request to download the file.

        ```
        curl '{downloadLink}' --output {file_name}
        ```
        See Export BILL records in the Guides section for more information, sample requests, and responses.

        Args:
            export_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get exported record download URL response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_download_link(
                export_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_exports(
        self,
        *,
        max_: int | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoExportResponseDto:
        """Get a list of exported BILL records available for you to download. By default, you get 20 results on one page
        of results. Set ``max`` in your request to get up to 100 results on one page.

        From the response, use ``exportId`` to get the download URL for an exported record file with ``GET
        /v3/exports/{exportId}/download-link``.

        You can export records, such as vendors, customers, bills, and invoices. In addition, you can export AP payments
        and AR payments. The **Import and export** section in the BILL web app (**Settings > Import & export > Custom
        File Integration**) provides the complete list of entities that you can export.

        See Export BILL records in the Guides section for more information, sample requests, and responses.

        Args:
            max_: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of exported BILL records response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_exports(
                max_=max_,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncExportsWithRawResponse:
        return self._with_raw_response


class ExportsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_download_link(
        self,
        export_id: int,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExportDownloadLinkResponseDto, GetDownloadLinkErrorBody]:
        """Get the download URL for an exported record file.

        From the response, use ``downloadLink`` in a GET request to download the file.

        ```
        curl '{downloadLink}' --output {file_name}
        ```
        See Export BILL records in the Guides section for more information, sample requests, and responses.

        Args:
            export_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/exports/{exportId}/download-link"),
            path_params=[param[int]("exportId", export_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ExportDownloadLinkResponseDto],
            error_mapper=get_download_link_error_mapper,
            request_options=request_options,
        )

    def list_exports(
        self,
        *,
        max_: int | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoExportResponseDto, ListExportsErrorBody]:
        """Get a list of exported BILL records available for you to download. By default, you get 20 results on one page
        of results. Set ``max`` in your request to get up to 100 results on one page.

        From the response, use ``exportId`` to get the download URL for an exported record file with ``GET
        /v3/exports/{exportId}/download-link``.

        You can export records, such as vendors, customers, bills, and invoices. In addition, you can export AP payments
        and AR payments. The **Import and export** section in the BILL web app (**Settings > Import & export > Custom
        File Integration**) provides the complete list of entities that you can export.

        See Export BILL records in the Guides section for more information, sample requests, and responses.

        Args:
            max_: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/exports"),
            query_params=[
                param[int | None]("max", max_), param[str | None]("filters", filters), param[str | None]("page", page)
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoExportResponseDto],
            error_mapper=list_exports_error_mapper,
            request_options=request_options,
        )


class AsyncExportsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_download_link(
        self,
        export_id: int,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExportDownloadLinkResponseDto, GetDownloadLinkErrorBody]:
        """Get the download URL for an exported record file.

        From the response, use ``downloadLink`` in a GET request to download the file.

        ```
        curl '{downloadLink}' --output {file_name}
        ```
        See Export BILL records in the Guides section for more information, sample requests, and responses.

        Args:
            export_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/exports/{exportId}/download-link"),
            path_params=[param[int]("exportId", export_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ExportDownloadLinkResponseDto],
            error_mapper=get_download_link_error_mapper,
            request_options=request_options,
        )

    async def list_exports(
        self,
        *,
        max_: int | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoExportResponseDto, ListExportsErrorBody]:
        """Get a list of exported BILL records available for you to download. By default, you get 20 results on one page
        of results. Set ``max`` in your request to get up to 100 results on one page.

        From the response, use ``exportId`` to get the download URL for an exported record file with ``GET
        /v3/exports/{exportId}/download-link``.

        You can export records, such as vendors, customers, bills, and invoices. In addition, you can export AP payments
        and AR payments. The **Import and export** section in the BILL web app (**Settings > Import & export > Custom
        File Integration**) provides the complete list of entities that you can export.

        See Export BILL records in the Guides section for more information, sample requests, and responses.

        Args:
            max_: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/exports"),
            query_params=[
                param[int | None]("max", max_), param[str | None]("filters", filters), param[str | None]("page", page)
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoExportResponseDto],
            error_mapper=list_exports_error_mapper,
            request_options=request_options,
        )
