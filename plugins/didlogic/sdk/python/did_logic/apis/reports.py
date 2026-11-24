from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_text_decoder,
    param,
    text_decoder,
    unwrap,
)
from ..errors.asr_report_show_error import AsrReportShowErrorBody, asr_report_show_error_mapper
from ..errors.transactions_index_error import TransactionsIndexErrorBody, transactions_index_error_mapper
from ..server.server import Server


class Reports:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ReportsWithRawResponse(client, server, auth)

    def asr_report_show(
        self, start_date: str, end_date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> str:
        """Retrieve the Answer-Seizure Ratio (ASR) report in CSV format for specified date range.

        **ASR Metrics:**
        - Number of calls
        - Talk time in minutes
        - ASR: Percentage of calls successfully connected
        - Average call duration (ACD)

        **Requirements:**
        - Date range is required (start_date and end_date)
        - Dates must be in YYYY-MM-DD format
        - On success returns CSV; 400 and 403 errors return JSON

        Args:
            start_date: Report start date (YYYY-MM-DD format)
            end_date: Report end date (YYYY-MM-DD format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns ASR metrics report in CSV format

        Raises:
            ApiError: Returns 400 error when end_date or start_date parameter is missing Returns 403 error when the API
                token is incorrect or the account is not permitted to export the ASR report ``error`` is ``Error |
                ApiV1AsrReportResponse1 | RawError``."""
        return unwrap(self._with_raw_response.asr_report_show(start_date, end_date, request_options=request_options))

    def transactions_index(
        self, start_date: Date, end_date: Date, type_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> str:
        """Export account transaction history as a CSV file for a date range and transaction type(s).

        **Requirements:**
        - start_date, end_date and type are all required
        - Dates must be in YYYY-MM-DD format
        - ``type`` accepts one or more comma-separated values from the list below

        **Transaction types:** adjustments, paypal_in, paypal_out, cc_in, stripe_in, google_pay_in, apple_pay_in,
        wire_transfer, call, call_fix_fee, connection, sip, webcall, sms, inbound_sms, activation, month, subscription,
        porting, surcharge, risk_check, call_recording, hlr_lookup, amd, paid_overstamping, service_charge, x_transfer,
        refund, channel

        ``service_charge``, ``x_transfer`` and ``refund`` are manual withdrawals booked by our accounting team: a fee
        for a service we provided, a transfer of funds to another account, and a refund of funds to you.

        **Response:** The caller receives the generated CSV payload. The internal redirect used to fetch that file is an
        implementation detail and is not part of the public contract.

        Args:
            start_date: Start of the reporting period (YYYY-MM-DD)
            end_date: End of the reporting period (YYYY-MM-DD)
            type_: Comma-separated transaction type(s); see the operation description for the full list of accepted
                values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the generated transactions CSV file

        Raises:
            ApiError: Returns 400 with the JSON error envelope when required params are missing or malformed Returns 403
                error when the API token is incorrect ``error`` is ``Error | ApiV1Transactions403Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.transactions_index(start_date, end_date, type_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ReportsWithRawResponse:
        return self._with_raw_response


class AsyncReports:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncReportsWithRawResponse(client, server, auth)

    async def asr_report_show(
        self, start_date: str, end_date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        """Retrieve the Answer-Seizure Ratio (ASR) report in CSV format for specified date range.

        **ASR Metrics:**
        - Number of calls
        - Talk time in minutes
        - ASR: Percentage of calls successfully connected
        - Average call duration (ACD)

        **Requirements:**
        - Date range is required (start_date and end_date)
        - Dates must be in YYYY-MM-DD format
        - On success returns CSV; 400 and 403 errors return JSON

        Args:
            start_date: Report start date (YYYY-MM-DD format)
            end_date: Report end date (YYYY-MM-DD format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns ASR metrics report in CSV format

        Raises:
            ApiError: Returns 400 error when end_date or start_date parameter is missing Returns 403 error when the API
                token is incorrect or the account is not permitted to export the ASR report ``error`` is ``Error |
                ApiV1AsrReportResponse1 | RawError``."""
        return unwrap(
            await self._with_raw_response.asr_report_show(start_date, end_date, request_options=request_options)
        )

    async def transactions_index(
        self, start_date: Date, end_date: Date, type_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        """Export account transaction history as a CSV file for a date range and transaction type(s).

        **Requirements:**
        - start_date, end_date and type are all required
        - Dates must be in YYYY-MM-DD format
        - ``type`` accepts one or more comma-separated values from the list below

        **Transaction types:** adjustments, paypal_in, paypal_out, cc_in, stripe_in, google_pay_in, apple_pay_in,
        wire_transfer, call, call_fix_fee, connection, sip, webcall, sms, inbound_sms, activation, month, subscription,
        porting, surcharge, risk_check, call_recording, hlr_lookup, amd, paid_overstamping, service_charge, x_transfer,
        refund, channel

        ``service_charge``, ``x_transfer`` and ``refund`` are manual withdrawals booked by our accounting team: a fee
        for a service we provided, a transfer of funds to another account, and a refund of funds to you.

        **Response:** The caller receives the generated CSV payload. The internal redirect used to fetch that file is an
        implementation detail and is not part of the public contract.

        Args:
            start_date: Start of the reporting period (YYYY-MM-DD)
            end_date: End of the reporting period (YYYY-MM-DD)
            type_: Comma-separated transaction type(s); see the operation description for the full list of accepted
                values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns the generated transactions CSV file

        Raises:
            ApiError: Returns 400 with the JSON error envelope when required params are missing or malformed Returns 403
                error when the API token is incorrect ``error`` is ``Error | ApiV1Transactions403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.transactions_index(
                start_date, end_date, type_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncReportsWithRawResponse:
        return self._with_raw_response


class ReportsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def asr_report_show(
        self, start_date: str, end_date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, AsrReportShowErrorBody]:
        """Retrieve the Answer-Seizure Ratio (ASR) report in CSV format for specified date range.

        **ASR Metrics:**
        - Number of calls
        - Talk time in minutes
        - ASR: Percentage of calls successfully connected
        - Average call duration (ACD)

        **Requirements:**
        - Date range is required (start_date and end_date)
        - Dates must be in YYYY-MM-DD format
        - On success returns CSV; 400 and 403 errors return JSON

        Args:
            start_date: Report start date (YYYY-MM-DD format)
            end_date: Report end date (YYYY-MM-DD format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/asr_report"),
            query_params=[param[str]("start_date", start_date), param[str]("end_date", end_date)],
            auth_scheme=self._auth.bearer_auth,
            decoder=text_decoder[str],
            error_mapper=asr_report_show_error_mapper,
            request_options=request_options,
        )

    def transactions_index(
        self, start_date: Date, end_date: Date, type_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, TransactionsIndexErrorBody]:
        """Export account transaction history as a CSV file for a date range and transaction type(s).

        **Requirements:**
        - start_date, end_date and type are all required
        - Dates must be in YYYY-MM-DD format
        - ``type`` accepts one or more comma-separated values from the list below

        **Transaction types:** adjustments, paypal_in, paypal_out, cc_in, stripe_in, google_pay_in, apple_pay_in,
        wire_transfer, call, call_fix_fee, connection, sip, webcall, sms, inbound_sms, activation, month, subscription,
        porting, surcharge, risk_check, call_recording, hlr_lookup, amd, paid_overstamping, service_charge, x_transfer,
        refund, channel

        ``service_charge``, ``x_transfer`` and ``refund`` are manual withdrawals booked by our accounting team: a fee
        for a service we provided, a transfer of funds to another account, and a refund of funds to you.

        **Response:** The caller receives the generated CSV payload. The internal redirect used to fetch that file is an
        implementation detail and is not part of the public contract.

        Args:
            start_date: Start of the reporting period (YYYY-MM-DD)
            end_date: End of the reporting period (YYYY-MM-DD)
            type_: Comma-separated transaction type(s); see the operation description for the full list of accepted
                values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/transactions"),
            query_params=[
                param[Date]("start_date", start_date), param[Date]("end_date", end_date), param[str]("type", type_)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=text_decoder[str],
            error_mapper=transactions_index_error_mapper,
            request_options=request_options,
        )


class AsyncReportsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def asr_report_show(
        self, start_date: str, end_date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, AsrReportShowErrorBody]:
        """Retrieve the Answer-Seizure Ratio (ASR) report in CSV format for specified date range.

        **ASR Metrics:**
        - Number of calls
        - Talk time in minutes
        - ASR: Percentage of calls successfully connected
        - Average call duration (ACD)

        **Requirements:**
        - Date range is required (start_date and end_date)
        - Dates must be in YYYY-MM-DD format
        - On success returns CSV; 400 and 403 errors return JSON

        Args:
            start_date: Report start date (YYYY-MM-DD format)
            end_date: Report end date (YYYY-MM-DD format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/asr_report"),
            query_params=[param[str]("start_date", start_date), param[str]("end_date", end_date)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_text_decoder[str],
            error_mapper=asr_report_show_error_mapper,
            request_options=request_options,
        )

    async def transactions_index(
        self, start_date: Date, end_date: Date, type_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, TransactionsIndexErrorBody]:
        """Export account transaction history as a CSV file for a date range and transaction type(s).

        **Requirements:**
        - start_date, end_date and type are all required
        - Dates must be in YYYY-MM-DD format
        - ``type`` accepts one or more comma-separated values from the list below

        **Transaction types:** adjustments, paypal_in, paypal_out, cc_in, stripe_in, google_pay_in, apple_pay_in,
        wire_transfer, call, call_fix_fee, connection, sip, webcall, sms, inbound_sms, activation, month, subscription,
        porting, surcharge, risk_check, call_recording, hlr_lookup, amd, paid_overstamping, service_charge, x_transfer,
        refund, channel

        ``service_charge``, ``x_transfer`` and ``refund`` are manual withdrawals booked by our accounting team: a fee
        for a service we provided, a transfer of funds to another account, and a refund of funds to you.

        **Response:** The caller receives the generated CSV payload. The internal redirect used to fetch that file is an
        implementation detail and is not part of the public contract.

        Args:
            start_date: Start of the reporting period (YYYY-MM-DD)
            end_date: End of the reporting period (YYYY-MM-DD)
            type_: Comma-separated transaction type(s); see the operation description for the full list of accepted
                values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/transactions"),
            query_params=[
                param[Date]("start_date", start_date), param[Date]("end_date", end_date), param[str]("type", type_)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_text_decoder[str],
            error_mapper=transactions_index_error_mapper,
            request_options=request_options,
        )
