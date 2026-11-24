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
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_api_v1_scans_scan_id_error import (
    DeleteApiV1ScansScanIdErrorBody,
    delete_api_v1_scans_scan_id_error_mapper,
)
from ..errors.get_api_v1_scans_scan_id_error import GetApiV1ScansScanIdErrorBody, get_api_v1_scans_scan_id_error_mapper
from ..errors.get_api_v1_scans_scan_id_logs_error import (
    GetApiV1ScansScanIdLogsErrorBody,
    get_api_v1_scans_scan_id_logs_error_mapper,
)
from ..models.public_api_scan_logs_response import PublicApiScanLogsResponse
from ..models.public_api_scan_status_response import PublicApiScanStatusResponse
from ..server.server import Server


class Scans:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ScansWithRawResponse(client, server, auth)

    def delete_api_v1_scans_scan_id(self, scan_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """This endpoint enables you to cancel a scan.

        Depending on the state of the scan when you call this endpoint, the response returns one of the following:

        - Where the state is ``pending``, Soda immediately changes the state to ``canceled``.

        - Where the state is ``submitted``, Soda immediately changes the state to ``cancelationRequested``. - Where the
            scan is in any other state, the endpoint returns a ``400`` (Bad request) response.

        This DELETE uses the following parameters to provide specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_api_v1_scans_scan_id(scan_id, request_options=request_options))

    def get_api_v1_scans_scan_id(
        self, scan_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiScanStatusResponse:
        """This endpoint enables you to check on the state of a scan that you executed using the **Trigger a scan**
        endpoint. Call this endpoint to monitor the status of a scan during its execution.

        If you wish to access the logs of a completed scan, use the **Get scan logs** endpoint.

        This POST uses the following parameter to provide specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        As a scan executes, you can call this endpoint to progressively collect values based on the state of the scan.
        Refer to the list below for the states that calls to this endpoint return.

        - ``queuing``: The scan is in the queue for execution, awaiting a pick-up from a Soda Runner.

        - ``executing``: A Soda Runner has picked up the scan and is executing.

        - ``cancelationRequested``: An entity requested cancelation of this scan and the request is awaiting pick-up
            from the Soda Runner responsible for the scan.

        - ``timeOutRequested``: A time out has been detected, and an automatic request to stop the scan execution is
            awaiting pick-up from the Soda Runner responsible for the scan.

        - ``canceled``: A Soda Runner confirmed that the scan has been cancelled. This is the final state of the scan.

        - ``timedOut``: A Soda Runner confirmed that the scan has timed-out. This is the final state of the scan.

        - ``failed``: The scan did not start, or it did not successfully complete because of an unexpected cause. This
            is the final state of the scan.

        - ``completedWithErrors``: The scan completed successfully, but there were errors involving some of the checks
            in the scan. This is the final state of the scan.

        - ``completedWithFailures``: The scan completed successfully and reveals failed results for some checks. This is
            the final state of the scan.

        - ``completedWithWarnings``: The scan completed successfully and reveals warning results for some checks. This
            is the final state of the scan.

        - ``completed``: The scan completed successfully and reveals passing results for all checks. This is a final
            state of a scan

        To get the logs of the completed scan, please use API ``/api/v1/scans/{scanId}/logs``.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_scans_scan_id(scan_id, request_options=request_options))

    def get_api_v1_scans_scan_id_logs(
        self,
        scan_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiScanLogsResponse:
        """This endpoint enables you to gather log details about the final state of a scan you executed using the
        **Trigger a scan** endpoint. Use this endpoint to study scan logs to investigate issues with its execution.

        If you wish to access the state of a scan in progress, use the **Get scan status** endpoint.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        - ``size``: Supply an integer value between 100 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        The response sorts the the log information by creation timestamp in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_scans_scan_id_logs(
                scan_id, page=page, size=size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ScansWithRawResponse:
        return self._with_raw_response


class AsyncScans:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncScansWithRawResponse(client, server, auth)

    async def delete_api_v1_scans_scan_id(
        self, scan_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This endpoint enables you to cancel a scan.

        Depending on the state of the scan when you call this endpoint, the response returns one of the following:

        - Where the state is ``pending``, Soda immediately changes the state to ``canceled``.

        - Where the state is ``submitted``, Soda immediately changes the state to ``cancelationRequested``. - Where the
            scan is in any other state, the endpoint returns a ``400`` (Bad request) response.

        This DELETE uses the following parameters to provide specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_scans_scan_id(scan_id, request_options=request_options)
        )

    async def get_api_v1_scans_scan_id(
        self, scan_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiScanStatusResponse:
        """This endpoint enables you to check on the state of a scan that you executed using the **Trigger a scan**
        endpoint. Call this endpoint to monitor the status of a scan during its execution.

        If you wish to access the logs of a completed scan, use the **Get scan logs** endpoint.

        This POST uses the following parameter to provide specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        As a scan executes, you can call this endpoint to progressively collect values based on the state of the scan.
        Refer to the list below for the states that calls to this endpoint return.

        - ``queuing``: The scan is in the queue for execution, awaiting a pick-up from a Soda Runner.

        - ``executing``: A Soda Runner has picked up the scan and is executing.

        - ``cancelationRequested``: An entity requested cancelation of this scan and the request is awaiting pick-up
            from the Soda Runner responsible for the scan.

        - ``timeOutRequested``: A time out has been detected, and an automatic request to stop the scan execution is
            awaiting pick-up from the Soda Runner responsible for the scan.

        - ``canceled``: A Soda Runner confirmed that the scan has been cancelled. This is the final state of the scan.

        - ``timedOut``: A Soda Runner confirmed that the scan has timed-out. This is the final state of the scan.

        - ``failed``: The scan did not start, or it did not successfully complete because of an unexpected cause. This
            is the final state of the scan.

        - ``completedWithErrors``: The scan completed successfully, but there were errors involving some of the checks
            in the scan. This is the final state of the scan.

        - ``completedWithFailures``: The scan completed successfully and reveals failed results for some checks. This is
            the final state of the scan.

        - ``completedWithWarnings``: The scan completed successfully and reveals warning results for some checks. This
            is the final state of the scan.

        - ``completed``: The scan completed successfully and reveals passing results for all checks. This is a final
            state of a scan

        To get the logs of the completed scan, please use API ``/api/v1/scans/{scanId}/logs``.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_scans_scan_id(scan_id, request_options=request_options))

    async def get_api_v1_scans_scan_id_logs(
        self,
        scan_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiScanLogsResponse:
        """This endpoint enables you to gather log details about the final state of a scan you executed using the
        **Trigger a scan** endpoint. Use this endpoint to study scan logs to investigate issues with its execution.

        If you wish to access the state of a scan in progress, use the **Get scan status** endpoint.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        - ``size``: Supply an integer value between 100 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        The response sorts the the log information by creation timestamp in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_scans_scan_id_logs(
                scan_id, page=page, size=size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncScansWithRawResponse:
        return self._with_raw_response


class ScansWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_scans_scan_id(
        self, scan_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApiV1ScansScanIdErrorBody]:
        """This endpoint enables you to cancel a scan.

        Depending on the state of the scan when you call this endpoint, the response returns one of the following:

        - Where the state is ``pending``, Soda immediately changes the state to ``canceled``.

        - Where the state is ``submitted``, Soda immediately changes the state to ``cancelationRequested``. - Where the
            scan is in any other state, the endpoint returns a ``400`` (Bad request) response.

        This DELETE uses the following parameters to provide specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/scans/{scanId}"),
            path_params=[param[str]("scanId", scan_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=delete_api_v1_scans_scan_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_scans_scan_id(
        self, scan_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiScanStatusResponse, GetApiV1ScansScanIdErrorBody]:
        """This endpoint enables you to check on the state of a scan that you executed using the **Trigger a scan**
        endpoint. Call this endpoint to monitor the status of a scan during its execution.

        If you wish to access the logs of a completed scan, use the **Get scan logs** endpoint.

        This POST uses the following parameter to provide specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        As a scan executes, you can call this endpoint to progressively collect values based on the state of the scan.
        Refer to the list below for the states that calls to this endpoint return.

        - ``queuing``: The scan is in the queue for execution, awaiting a pick-up from a Soda Runner.

        - ``executing``: A Soda Runner has picked up the scan and is executing.

        - ``cancelationRequested``: An entity requested cancelation of this scan and the request is awaiting pick-up
            from the Soda Runner responsible for the scan.

        - ``timeOutRequested``: A time out has been detected, and an automatic request to stop the scan execution is
            awaiting pick-up from the Soda Runner responsible for the scan.

        - ``canceled``: A Soda Runner confirmed that the scan has been cancelled. This is the final state of the scan.

        - ``timedOut``: A Soda Runner confirmed that the scan has timed-out. This is the final state of the scan.

        - ``failed``: The scan did not start, or it did not successfully complete because of an unexpected cause. This
            is the final state of the scan.

        - ``completedWithErrors``: The scan completed successfully, but there were errors involving some of the checks
            in the scan. This is the final state of the scan.

        - ``completedWithFailures``: The scan completed successfully and reveals failed results for some checks. This is
            the final state of the scan.

        - ``completedWithWarnings``: The scan completed successfully and reveals warning results for some checks. This
            is the final state of the scan.

        - ``completed``: The scan completed successfully and reveals passing results for all checks. This is a final
            state of a scan

        To get the logs of the completed scan, please use API ``/api/v1/scans/{scanId}/logs``.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/scans/{scanId}"),
            path_params=[param[str]("scanId", scan_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiScanStatusResponse],
            error_mapper=get_api_v1_scans_scan_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_scans_scan_id_logs(
        self,
        scan_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiScanLogsResponse, GetApiV1ScansScanIdLogsErrorBody]:
        """This endpoint enables you to gather log details about the final state of a scan you executed using the
        **Trigger a scan** endpoint. Use this endpoint to study scan logs to investigate issues with its execution.

        If you wish to access the state of a scan in progress, use the **Get scan status** endpoint.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        - ``size``: Supply an integer value between 100 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        The response sorts the the log information by creation timestamp in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/scans/{scanId}/logs"),
            path_params=[param[str]("scanId", scan_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiScanLogsResponse],
            error_mapper=get_api_v1_scans_scan_id_logs_error_mapper,
            request_options=request_options,
        )


class AsyncScansWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_scans_scan_id(
        self, scan_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApiV1ScansScanIdErrorBody]:
        """This endpoint enables you to cancel a scan.

        Depending on the state of the scan when you call this endpoint, the response returns one of the following:

        - Where the state is ``pending``, Soda immediately changes the state to ``canceled``.

        - Where the state is ``submitted``, Soda immediately changes the state to ``cancelationRequested``. - Where the
            scan is in any other state, the endpoint returns a ``400`` (Bad request) response.

        This DELETE uses the following parameters to provide specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/scans/{scanId}"),
            path_params=[param[str]("scanId", scan_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=delete_api_v1_scans_scan_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_scans_scan_id(
        self, scan_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiScanStatusResponse, GetApiV1ScansScanIdErrorBody]:
        """This endpoint enables you to check on the state of a scan that you executed using the **Trigger a scan**
        endpoint. Call this endpoint to monitor the status of a scan during its execution.

        If you wish to access the logs of a completed scan, use the **Get scan logs** endpoint.

        This POST uses the following parameter to provide specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        As a scan executes, you can call this endpoint to progressively collect values based on the state of the scan.
        Refer to the list below for the states that calls to this endpoint return.

        - ``queuing``: The scan is in the queue for execution, awaiting a pick-up from a Soda Runner.

        - ``executing``: A Soda Runner has picked up the scan and is executing.

        - ``cancelationRequested``: An entity requested cancelation of this scan and the request is awaiting pick-up
            from the Soda Runner responsible for the scan.

        - ``timeOutRequested``: A time out has been detected, and an automatic request to stop the scan execution is
            awaiting pick-up from the Soda Runner responsible for the scan.

        - ``canceled``: A Soda Runner confirmed that the scan has been cancelled. This is the final state of the scan.

        - ``timedOut``: A Soda Runner confirmed that the scan has timed-out. This is the final state of the scan.

        - ``failed``: The scan did not start, or it did not successfully complete because of an unexpected cause. This
            is the final state of the scan.

        - ``completedWithErrors``: The scan completed successfully, but there were errors involving some of the checks
            in the scan. This is the final state of the scan.

        - ``completedWithFailures``: The scan completed successfully and reveals failed results for some checks. This is
            the final state of the scan.

        - ``completedWithWarnings``: The scan completed successfully and reveals warning results for some checks. This
            is the final state of the scan.

        - ``completed``: The scan completed successfully and reveals passing results for all checks. This is a final
            state of a scan

        To get the logs of the completed scan, please use API ``/api/v1/scans/{scanId}/logs``.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/scans/{scanId}"),
            path_params=[param[str]("scanId", scan_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiScanStatusResponse],
            error_mapper=get_api_v1_scans_scan_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_scans_scan_id_logs(
        self,
        scan_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiScanLogsResponse, GetApiV1ScansScanIdLogsErrorBody]:
        """This endpoint enables you to gather log details about the final state of a scan you executed using the
        **Trigger a scan** endpoint. Use this endpoint to study scan logs to investigate issues with its execution.

        If you wish to access the state of a scan in progress, use the **Get scan status** endpoint.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``scanId``: Use the value of ``X-Soda-Scan-Id`` returned as part of the ``201`` response when you called the
            **Trigger a scan** endpoint.

        - ``size``: Supply an integer value between 100 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply an integer value. The default value is 0.

        The response sorts the the log information by creation timestamp in ascending order.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Scans``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            scan_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/scans/{scanId}/logs"),
            path_params=[param[str]("scanId", scan_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiScanLogsResponse],
            error_mapper=get_api_v1_scans_scan_id_logs_error_mapper,
            request_options=request_options,
        )
