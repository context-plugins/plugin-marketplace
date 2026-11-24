from __future__ import annotations

from uuid import UUID

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_file_decoder,
    empty_response,
    file_decoder,
    param,
    unwrap,
)
from ..errors.get_reports_etsi_error import GetReportsEtsiErrorBody, get_reports_etsi_error_mapper
from ..errors.get_skribble_report_error import GetSkribbleReportErrorBody, get_skribble_report_error_mapper
from ..models.enums.lang import Lang, LangOrStr
from ..server.server import Server


class Reports:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ReportsWithRawResponse(client, server, auth)

    def get_reports_etsi(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Get the ETSI TS 119 102-2 signature validation report as a XML

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Not acceptable Too many requests Internal server
                error Service unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(self._with_raw_response.get_reports_etsi(id_, request_options=request_options))

    def get_skribble_report(
        self,
        id_: UUID,
        *,
        lang: LangOrStr | None = Lang.EN,
        attach_etsi_report: bool | None = False,
        time_zone: str | None = "UTC",
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Get the digitally signed Skribble validation report as PDF. The report is generated once per validation ID,
        language, ETSI attachment flag and timezone, then cached — subsequent requests with the same parameters are
        served from cache and not billed. Optionally attach the ETSI TS 119 102-2 XML validation report as an embedded
        file in the PDF.

        Args:
            id_: The 'id' provided by the validate operation
            lang: Language of the validation report
            attach_etsi_report: Attach the ETSI TS 119 102-2 XML validation report as a file attachment to the PDF. When
                enabled, the XML report is embedded in the PDF and a paperclip annotation is added on the last page.
                This registers additional usage for the ETSI report endpoint.
            time_zone: IANA timezone name used to render timestamps in the report — the "Generated at" time and each
                signer's "Time of signature". Defaults to UTC, preserving the previous behaviour when omitted. The
                rendered zone abbreviation (e.g. ``UTC``, ``CET``, ``PST``) reflects the chosen zone. Browser callers
                can pass ``Intl.DateTimeFormat().resolvedOptions().timeZone``. The timezone is part of the report cache
                key, so each distinct timezone (per language and ETSI flag) is rendered, billed and cached once. An
                unknown or malformed value returns ``400``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Signed validation report PDF

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Not acceptable Too many requests Internal server
                error Upstream seal service error Service unavailable ``error`` is
                ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_skribble_report(
                id_,
                lang=lang,
                attach_etsi_report=attach_etsi_report,
                time_zone=time_zone,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ReportsWithRawResponse:
        return self._with_raw_response


class AsyncReports:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncReportsWithRawResponse(client, server, auth)

    async def get_reports_etsi(self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Get the ETSI TS 119 102-2 signature validation report as a XML

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Not acceptable Too many requests Internal server
                error Service unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(await self._with_raw_response.get_reports_etsi(id_, request_options=request_options))

    async def get_skribble_report(
        self,
        id_: UUID,
        *,
        lang: LangOrStr | None = Lang.EN,
        attach_etsi_report: bool | None = False,
        time_zone: str | None = "UTC",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Get the digitally signed Skribble validation report as PDF. The report is generated once per validation ID,
        language, ETSI attachment flag and timezone, then cached — subsequent requests with the same parameters are
        served from cache and not billed. Optionally attach the ETSI TS 119 102-2 XML validation report as an embedded
        file in the PDF.

        Args:
            id_: The 'id' provided by the validate operation
            lang: Language of the validation report
            attach_etsi_report: Attach the ETSI TS 119 102-2 XML validation report as a file attachment to the PDF. When
                enabled, the XML report is embedded in the PDF and a paperclip annotation is added on the last page.
                This registers additional usage for the ETSI report endpoint.
            time_zone: IANA timezone name used to render timestamps in the report — the "Generated at" time and each
                signer's "Time of signature". Defaults to UTC, preserving the previous behaviour when omitted. The
                rendered zone abbreviation (e.g. ``UTC``, ``CET``, ``PST``) reflects the chosen zone. Browser callers
                can pass ``Intl.DateTimeFormat().resolvedOptions().timeZone``. The timezone is part of the report cache
                key, so each distinct timezone (per language and ETSI flag) is rendered, billed and cached once. An
                unknown or malformed value returns ``400``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Signed validation report PDF

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Not acceptable Too many requests Internal server
                error Upstream seal service error Service unavailable ``error`` is
                ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_skribble_report(
                id_,
                lang=lang,
                attach_etsi_report=attach_etsi_report,
                time_zone=time_zone,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncReportsWithRawResponse:
        return self._with_raw_response


class ReportsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_reports_etsi(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetReportsEtsiErrorBody]:
        """Get the ETSI TS 119 102-2 signature validation report as a XML

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/reports/{id}/etsi"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=get_reports_etsi_error_mapper,
            request_options=request_options,
        )

    def get_skribble_report(
        self,
        id_: UUID,
        *,
        lang: LangOrStr | None = Lang.EN,
        attach_etsi_report: bool | None = False,
        time_zone: str | None = "UTC",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, GetSkribbleReportErrorBody]:
        """Get the digitally signed Skribble validation report as PDF. The report is generated once per validation ID,
        language, ETSI attachment flag and timezone, then cached — subsequent requests with the same parameters are
        served from cache and not billed. Optionally attach the ETSI TS 119 102-2 XML validation report as an embedded
        file in the PDF.

        Args:
            id_: The 'id' provided by the validate operation
            lang: Language of the validation report
            attach_etsi_report: Attach the ETSI TS 119 102-2 XML validation report as a file attachment to the PDF. When
                enabled, the XML report is embedded in the PDF and a paperclip annotation is added on the last page.
                This registers additional usage for the ETSI report endpoint.
            time_zone: IANA timezone name used to render timestamps in the report — the "Generated at" time and each
                signer's "Time of signature". Defaults to UTC, preserving the previous behaviour when omitted. The
                rendered zone abbreviation (e.g. ``UTC``, ``CET``, ``PST``) reflects the chosen zone. Browser callers
                can pass ``Intl.DateTimeFormat().resolvedOptions().timeZone``. The timezone is part of the report cache
                key, so each distinct timezone (per language and ETSI flag) is rendered, billed and cached once. An
                unknown or malformed value returns ``400``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/reports/{id}/skribble"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[LangOrStr | None]("lang", lang),
                param[bool | None]("attachETSIReport", attach_etsi_report),
                param[str | None]("timeZone", time_zone),
            ],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=get_skribble_report_error_mapper,
            request_options=request_options,
        )


class AsyncReportsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_reports_etsi(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetReportsEtsiErrorBody]:
        """Get the ETSI TS 119 102-2 signature validation report as a XML

        Args:
            id_: The 'id' provided by the validate operation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/reports/{id}/etsi"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=get_reports_etsi_error_mapper,
            request_options=request_options,
        )

    async def get_skribble_report(
        self,
        id_: UUID,
        *,
        lang: LangOrStr | None = Lang.EN,
        attach_etsi_report: bool | None = False,
        time_zone: str | None = "UTC",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, GetSkribbleReportErrorBody]:
        """Get the digitally signed Skribble validation report as PDF. The report is generated once per validation ID,
        language, ETSI attachment flag and timezone, then cached — subsequent requests with the same parameters are
        served from cache and not billed. Optionally attach the ETSI TS 119 102-2 XML validation report as an embedded
        file in the PDF.

        Args:
            id_: The 'id' provided by the validate operation
            lang: Language of the validation report
            attach_etsi_report: Attach the ETSI TS 119 102-2 XML validation report as a file attachment to the PDF. When
                enabled, the XML report is embedded in the PDF and a paperclip annotation is added on the last page.
                This registers additional usage for the ETSI report endpoint.
            time_zone: IANA timezone name used to render timestamps in the report — the "Generated at" time and each
                signer's "Time of signature". Defaults to UTC, preserving the previous behaviour when omitted. The
                rendered zone abbreviation (e.g. ``UTC``, ``CET``, ``PST``) reflects the chosen zone. Browser callers
                can pass ``Intl.DateTimeFormat().resolvedOptions().timeZone``. The timezone is part of the report cache
                key, so each distinct timezone (per language and ETSI flag) is rendered, billed and cached once. An
                unknown or malformed value returns ``400``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/reports/{id}/skribble"),
            path_params=[param[UUID]("id", id_)],
            query_params=[
                param[LangOrStr | None]("lang", lang),
                param[bool | None]("attachETSIReport", attach_etsi_report),
                param[str | None]("timeZone", time_zone),
            ],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=get_skribble_report_error_mapper,
            request_options=request_options,
        )
