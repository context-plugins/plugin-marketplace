from __future__ import annotations

from typing import Any

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
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_companies_krs_by_krs_financial_documents_error import (
    GetCompaniesKrsByKrsFinancialDocumentsErrorBody,
    get_companies_krs_by_krs_financial_documents_error_mapper,
)
from ..errors.get_companies_krs_by_krs_financial_statements_error import (
    GetCompaniesKrsByKrsFinancialStatementsErrorBody,
    get_companies_krs_by_krs_financial_statements_error_mapper,
)
from ..errors.get_companies_krs_by_krs_statistics_error import (
    GetCompaniesKrsByKrsStatisticsErrorBody,
    get_companies_krs_by_krs_statistics_error_mapper,
)
from ..server.server import Server


class Financials:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FinancialsWithRawResponse(client, server, auth)

    def get_companies_krs_by_krs_financial_documents(
        self,
        krs: str,
        *,
        limit: int | None = 25,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Metadata list of financial documents for the company (periods, types, names). Returns metadata only.
        Structured metrics and ``esf_statement_lines`` are on the profile and financial-statements endpoints.

        Args:
            krs: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document metadata page.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_financial_documents(
                krs, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def get_companies_krs_by_krs_financial_statements(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Returns financial metrics only (without company profile or document files), grouped by statement year. Values
        include PLN/USD/EUR columns from ``entity_financial_metrics`` and structured ``esf_statement_lines`` when
        extracted. XML files are on the documents endpoint.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Financial metrics grouped by year.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_financial_statements(krs, request_options=request_options)
        )

    def get_companies_krs_by_krs_statistics(
        self, krs: str, *, locale: str | None = "en", request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Industry / region / country peer benchmarks and the company's rank positions. Use when ``hasStatistics`` on
        the full profile is ``true``.

        Response shape:
        - ``company`` – latest indexed figures (PLN/EUR/USD) for the company
        - ``scopes`` – rank in each peer group (``pkd_full``, ``pkd_division``, ``pkd_section``, ``region``,
            ``country``)
        - ``benchmarks`` – peer distribution per scope key (``median``, ``p25``/``p75``/``p90``, ``n_companies``, …)

        Args:
            krs: Value sent with the request.
            locale: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rankings (``scopes``) plus peer distributions (``benchmarks`` keyed by ``scope_type::scope_key``). Company
            figures are the latest indexed snapshot.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_krs_by_krs_statistics(
                krs, locale=locale, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> FinancialsWithRawResponse:
        return self._with_raw_response


class AsyncFinancials:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFinancialsWithRawResponse(client, server, auth)

    async def get_companies_krs_by_krs_financial_documents(
        self,
        krs: str,
        *,
        limit: int | None = 25,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Metadata list of financial documents for the company (periods, types, names). Returns metadata only.
        Structured metrics and ``esf_statement_lines`` are on the profile and financial-statements endpoints.

        Args:
            krs: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document metadata page.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_financial_documents(
                krs, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def get_companies_krs_by_krs_financial_statements(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Returns financial metrics only (without company profile or document files), grouped by statement year. Values
        include PLN/USD/EUR columns from ``entity_financial_metrics`` and structured ``esf_statement_lines`` when
        extracted. XML files are on the documents endpoint.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Financial metrics grouped by year.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_financial_statements(
                krs, request_options=request_options
            ),
        )

    async def get_companies_krs_by_krs_statistics(
        self, krs: str, *, locale: str | None = "en", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Industry / region / country peer benchmarks and the company's rank positions. Use when ``hasStatistics`` on
        the full profile is ``true``.

        Response shape:
        - ``company`` – latest indexed figures (PLN/EUR/USD) for the company
        - ``scopes`` – rank in each peer group (``pkd_full``, ``pkd_division``, ``pkd_section``, ``region``,
            ``country``)
        - ``benchmarks`` – peer distribution per scope key (``median``, ``p25``/``p75``/``p90``, ``n_companies``, …)

        Args:
            krs: Value sent with the request.
            locale: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rankings (``scopes``) plus peer distributions (``benchmarks`` keyed by ``scope_type::scope_key``). Company
            figures are the latest indexed snapshot.

        Raises:
            ApiError: Resource not found. Invalid request parameters. Missing, invalid, or revoked API key. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_krs_by_krs_statistics(
                krs, locale=locale, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFinancialsWithRawResponse:
        return self._with_raw_response


class FinancialsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_companies_krs_by_krs_financial_documents(
        self,
        krs: str,
        *,
        limit: int | None = 25,
        offset: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetCompaniesKrsByKrsFinancialDocumentsErrorBody]:
        """Metadata list of financial documents for the company (periods, types, names). Returns metadata only.
        Structured metrics and ``esf_statement_lines`` are on the profile and financial-statements endpoints.

        Args:
            krs: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/financial-documents"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_financial_documents_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_financial_statements(
        self, krs: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsFinancialStatementsErrorBody]:
        """Returns financial metrics only (without company profile or document files), grouped by statement year. Values
        include PLN/USD/EUR columns from ``entity_financial_metrics`` and structured ``esf_statement_lines`` when
        extracted. XML files are on the documents endpoint.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/financial-statements"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_financial_statements_error_mapper,
            request_options=request_options,
        )

    def get_companies_krs_by_krs_statistics(
        self, krs: str, *, locale: str | None = "en", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsStatisticsErrorBody]:
        """Industry / region / country peer benchmarks and the company's rank positions. Use when ``hasStatistics`` on
        the full profile is ``true``.

        Response shape:
        - ``company`` – latest indexed figures (PLN/EUR/USD) for the company
        - ``scopes`` – rank in each peer group (``pkd_full``, ``pkd_division``, ``pkd_section``, ``region``,
            ``country``)
        - ``benchmarks`` – peer distribution per scope key (``median``, ``p25``/``p75``/``p90``, ``n_companies``, …)

        Args:
            krs: Value sent with the request.
            locale: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/statistics"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[str | None]("locale", locale)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_statistics_error_mapper,
            request_options=request_options,
        )


class AsyncFinancialsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_companies_krs_by_krs_financial_documents(
        self,
        krs: str,
        *,
        limit: int | None = 25,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetCompaniesKrsByKrsFinancialDocumentsErrorBody]:
        """Metadata list of financial documents for the company (periods, types, names). Returns metadata only.
        Structured metrics and ``esf_statement_lines`` are on the profile and financial-statements endpoints.

        Args:
            krs: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/financial-documents"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_financial_documents_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_financial_statements(
        self, krs: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsFinancialStatementsErrorBody]:
        """Returns financial metrics only (without company profile or document files), grouped by statement year. Values
        include PLN/USD/EUR columns from ``entity_financial_metrics`` and structured ``esf_statement_lines`` when
        extracted. XML files are on the documents endpoint.

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/financial-statements"),
            path_params=[param[str]("krs", krs)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_financial_statements_error_mapper,
            request_options=request_options,
        )

    async def get_companies_krs_by_krs_statistics(
        self, krs: str, *, locale: str | None = "en", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetCompaniesKrsByKrsStatisticsErrorBody]:
        """Industry / region / country peer benchmarks and the company's rank positions. Use when ``hasStatistics`` on
        the full profile is ``true``.

        Response shape:
        - ``company`` – latest indexed figures (PLN/EUR/USD) for the company
        - ``scopes`` – rank in each peer group (``pkd_full``, ``pkd_division``, ``pkd_section``, ``region``,
            ``country``)
        - ``benchmarks`` – peer distribution per scope key (``median``, ``p25``/``p75``/``p90``, ``n_companies``, …)

        Args:
            krs: Value sent with the request.
            locale: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies/krs/{krs}/statistics"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[str | None]("locale", locale)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_companies_krs_by_krs_statistics_error_mapper,
            request_options=request_options,
        )
