from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.bundle import Bundle
from ..models.diagnostic_report import DiagnosticReport
from ..server.server import Server


class DiagnosticReportApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DiagnosticReportApiWithRawResponse(client, server, auth)

    def read_diagnostic_report(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DiagnosticReport:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.read_diagnostic_report(id_, request_options=request_options))

    def search_diagnostic_reports(
        self,
        *,
        patient: str | None = None,
        category: str | None = None,
        date: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            category: Value sent with the request.
            date: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of DiagnosticReport resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.search_diagnostic_reports(
                patient=patient, category=category, date=date, count=count, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DiagnosticReportApiWithRawResponse:
        return self._with_raw_response


class AsyncDiagnosticReportApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDiagnosticReportApiWithRawResponse(client, server, auth)

    async def read_diagnostic_report(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DiagnosticReport:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.read_diagnostic_report(id_, request_options=request_options))

    async def search_diagnostic_reports(
        self,
        *,
        patient: str | None = None,
        category: str | None = None,
        date: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            category: Value sent with the request.
            date: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of DiagnosticReport resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_diagnostic_reports(
                patient=patient, category=category, date=date, count=count, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDiagnosticReportApiWithRawResponse:
        return self._with_raw_response


class DiagnosticReportApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def read_diagnostic_report(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DiagnosticReport, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/DiagnosticReport/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DiagnosticReport],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def search_diagnostic_reports(
        self,
        *,
        patient: str | None = None,
        category: str | None = None,
        date: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            category: Value sent with the request.
            date: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/DiagnosticReport"),
            query_params=[
                param[str | None]("patient", patient),
                param[str | None]("category", category),
                param[str | None]("date", date),
                param[int | None]("_count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncDiagnosticReportApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def read_diagnostic_report(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DiagnosticReport, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/DiagnosticReport/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DiagnosticReport],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def search_diagnostic_reports(
        self,
        *,
        patient: str | None = None,
        category: str | None = None,
        date: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            category: Value sent with the request.
            date: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/DiagnosticReport"),
            query_params=[
                param[str | None]("patient", patient),
                param[str | None]("category", category),
                param[str | None]("date", date),
                param[int | None]("_count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
