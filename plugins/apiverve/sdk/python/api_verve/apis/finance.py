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
from ..errors.balancesheet_error import BalancesheetErrorBody, balancesheet_error_mapper
from ..errors.benchmarkrate_error import BenchmarkrateErrorBody, benchmarkrate_error_mapper
from ..errors.binlookup_error import BinlookupErrorBody, binlookup_error_mapper
from ..errors.bitcoin_error import BitcoinErrorBody, bitcoin_error_mapper
from ..errors.cashflow_error import CashflowErrorBody, cashflow_error_mapper
from ..errors.companylookup_error import CompanylookupErrorBody, companylookup_error_mapper
from ..errors.costliving_error import CostlivingErrorBody, costliving_error_mapper
from ..errors.cpiinflation_error import CpiinflationErrorBody, cpiinflation_error_mapper
from ..errors.currencyconverter_error import CurrencyconverterErrorBody, currencyconverter_error_mapper
from ..errors.currencysymbols_error import CurrencysymbolsErrorBody, currencysymbols_error_mapper
from ..errors.dividends_error import DividendsErrorBody, dividends_error_mapper
from ..errors.earnings_error import EarningsErrorBody, earnings_error_mapper
from ..errors.ethereum_error import EthereumErrorBody, ethereum_error_mapper
from ..errors.exchangerate_error import ExchangerateErrorBody, exchangerate_error_mapper
from ..errors.financialratios_error import FinancialratiosErrorBody, financialratios_error_mapper
from ..errors.gdp_error import GdpErrorBody, gdp_error_mapper
from ..errors.globalstockmarket_error import GlobalstockmarketErrorBody, globalstockmarket_error_mapper
from ..errors.goldprice_error import GoldpriceErrorBody, goldprice_error_mapper
from ..errors.ifsclookup_error import IfsclookupErrorBody, ifsclookup_error_mapper
from ..errors.incomestatement_error import IncomestatementErrorBody, incomestatement_error_mapper
from ..errors.incometax_error import IncometaxErrorBody, incometax_error_mapper
from ..errors.incometaxcalculator_error import IncometaxcalculatorErrorBody, incometaxcalculator_error_mapper
from ..errors.inflation_error import InflationErrorBody, inflation_error_mapper
from ..errors.insidertrading_error import InsidertradingErrorBody, insidertrading_error_mapper
from ..errors.interestrate_error import InterestrateErrorBody, interestrate_error_mapper
from ..errors.jobsreport_error import JobsreportErrorBody, jobsreport_error_mapper
from ..errors.loanpaymentcalculator_error import LoanpaymentcalculatorErrorBody, loanpaymentcalculator_error_mapper
from ..errors.minimumwage_error import MinimumwageErrorBody, minimumwage_error_mapper
from ..errors.mortgagecalculator_error import MortgagecalculatorErrorBody, mortgagecalculator_error_mapper
from ..errors.mortgagerate_error import MortgagerateErrorBody, mortgagerate_error_mapper
from ..errors.nationaldebt_error import NationaldebtErrorBody, nationaldebt_error_mapper
from ..errors.palladiumprice_error import PalladiumpriceErrorBody, palladiumprice_error_mapper
from ..errors.platinumprice_error import PlatinumpriceErrorBody, platinumprice_error_mapper
from ..errors.population_error import PopulationErrorBody, population_error_mapper
from ..errors.purchasingpower_error import PurchasingpowerErrorBody, purchasingpower_error_mapper
from ..errors.routinglookup_error import RoutinglookupErrorBody, routinglookup_error_mapper
from ..errors.salestax_error import SalestaxErrorBody, salestax_error_mapper
from ..errors.salestaxcalculator_error import SalestaxcalculatorErrorBody, salestaxcalculator_error_mapper
from ..errors.sanctionscreening_error import SanctionscreeningErrorBody, sanctionscreening_error_mapper
from ..errors.savingsbonds_error import SavingsbondsErrorBody, savingsbonds_error_mapper
from ..errors.secfilings_error import SecfilingsErrorBody, secfilings_error_mapper
from ..errors.silverprice_error import SilverpriceErrorBody, silverprice_error_mapper
from ..errors.stockexchange_error import StockexchangeErrorBody, stockexchange_error_mapper
from ..errors.stockmarketopentimes_error import StockmarketopentimesErrorBody, stockmarketopentimes_error_mapper
from ..errors.swiftlookup_error import SwiftlookupErrorBody, swiftlookup_error_mapper
from ..errors.tradebalance_error import TradebalanceErrorBody, tradebalance_error_mapper
from ..errors.treasuryyields_error import TreasuryyieldsErrorBody, treasuryyields_error_mapper
from ..errors.unemployment_error import UnemploymentErrorBody, unemployment_error_mapper
from ..errors.vatrates_error import VatratesErrorBody, vatrates_error_mapper
from ..models.v1_balancesheet_response import V1BalancesheetResponse
from ..models.v1_benchmarkrate_response import V1BenchmarkrateResponse
from ..models.v1_binlookup_response import V1BinlookupResponse
from ..models.v1_bitcoin_response import V1BitcoinResponse
from ..models.v1_cashflow_response import V1CashflowResponse
from ..models.v1_companylookup_response import V1CompanylookupResponse
from ..models.v1_costliving_response import V1CostlivingResponse
from ..models.v1_cpiinflation_response import V1CpiinflationResponse
from ..models.v1_currencyconverter_response import V1CurrencyconverterResponse
from ..models.v1_currencysymbols_response import V1CurrencysymbolsResponse
from ..models.v1_dividends_response import V1DividendsResponse
from ..models.v1_earnings_response import V1EarningsResponse
from ..models.v1_ethereum_response import V1EthereumResponse
from ..models.v1_exchangerate_response import V1ExchangerateResponse
from ..models.v1_financialratios_response import V1FinancialratiosResponse
from ..models.v1_gdp_response import V1GdpResponse
from ..models.v1_globalstockmarket_response import V1GlobalstockmarketResponse
from ..models.v1_goldprice_response import V1GoldpriceResponse
from ..models.v1_ifsclookup_response import V1IfsclookupResponse
from ..models.v1_incomestatement_response import V1IncomestatementResponse
from ..models.v1_incometax_response import V1IncometaxResponse
from ..models.v1_incometaxcalculator_response import V1IncometaxcalculatorResponse
from ..models.v1_inflation_response import V1InflationResponse
from ..models.v1_insidertrading_response import V1InsidertradingResponse
from ..models.v1_interestrate_response import V1InterestrateResponse
from ..models.v1_jobsreport_response import V1JobsreportResponse
from ..models.v1_loanpaymentcalculator_request import V1LoanpaymentcalculatorRequest, V1LoanpaymentcalculatorRequestDict
from ..models.v1_loanpaymentcalculator_response import V1LoanpaymentcalculatorResponse
from ..models.v1_minimumwage_response import V1MinimumwageResponse
from ..models.v1_mortgagecalculator_request import V1MortgagecalculatorRequest, V1MortgagecalculatorRequestDict
from ..models.v1_mortgagecalculator_response import V1MortgagecalculatorResponse
from ..models.v1_mortgagerate_response import V1MortgagerateResponse
from ..models.v1_nationaldebt_response import V1NationaldebtResponse
from ..models.v1_palladiumprice_response import V1PalladiumpriceResponse
from ..models.v1_platinumprice_response import V1PlatinumpriceResponse
from ..models.v1_population_response import V1PopulationResponse
from ..models.v1_purchasingpower_response import V1PurchasingpowerResponse
from ..models.v1_routinglookup_response import V1RoutinglookupResponse
from ..models.v1_salestax_response import V1SalestaxResponse
from ..models.v1_salestaxcalculator_response import V1SalestaxcalculatorResponse
from ..models.v1_sanctionscreening_response import V1SanctionscreeningResponse
from ..models.v1_savingsbonds_response import V1SavingsbondsResponse
from ..models.v1_secfilings_response import V1SecfilingsResponse
from ..models.v1_silverprice_response import V1SilverpriceResponse
from ..models.v1_stockexchange_response import V1StockexchangeResponse
from ..models.v1_stockmarketopentimes_response import V1StockmarketopentimesResponse
from ..models.v1_swiftlookup_response import V1SwiftlookupResponse
from ..models.v1_tradebalance_response import V1TradebalanceResponse
from ..models.v1_treasuryyields_response import V1TreasuryyieldsResponse
from ..models.v1_unemployment_response import V1UnemploymentResponse
from ..models.v1_vatrates_response import V1VatratesResponse
from ..server.server import Server


class Finance:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FinanceWithRawResponse(client, server, auth)

    def balancesheet(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1BalancesheetResponse:
        """Get the balance sheet for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.balancesheet(ticker, year=year, quarter=quarter, request_options=request_options)
        )

    def benchmarkrate(
        self, rate: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1BenchmarkrateResponse:
        """Get the current value for a specific benchmark rate.

        Args:
            rate: The benchmark rate to retrieve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.benchmarkrate(rate, request_options=request_options))

    def binlookup(self, bin_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1BinlookupResponse:
        """Lookup credit card information based on the BIN

        Args:
            bin_: The first six digits of the credit card number (BIN)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.binlookup(bin_, request_options=request_options))

    def bitcoin(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1BitcoinResponse:
        """Get the current price of Bitcoin. You can optionally specify a currency, e.g. USD

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.bitcoin(currency=currency, hourly=hourly, request_options=request_options)
        )

    def cashflow(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CashflowResponse:
        """Get the cash flow statement for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.cashflow(ticker, year=year, quarter=quarter, request_options=request_options)
        )

    def companylookup(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CompanylookupResponse:
        """Get company information by stock ticker symbol.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, GOOGL)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.companylookup(ticker, request_options=request_options))

    def costliving(self, location: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CostlivingResponse:
        """Get the cost of living index for a specific location. Accepts state names, state codes, or major city names.

        Args:
            location: State name, state code (e.g., CA, NY), or major city name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.costliving(location, request_options=request_options))

    def cpiinflation(
        self,
        *,
        date: str | None = None,
        category: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CpiinflationResponse:
        """Get current or historical CPI inflation data by category

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            category: Optional category filter: all, food, housing, apparel, transportation, medical, recreation,
                education, gasoline, electricity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.cpiinflation(date=date, category=category, request_options=request_options)
        )

    def currencyconverter(
        self, value: float, from_: str, to: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CurrencyconverterResponse:
        """Convert currency rates based on the amount and currency

        Args:
            value: The amount to convert
            from_: The ISO 4217 currency code to convert from
            to: The ISO 4217 currency code to convert to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.currencyconverter(value, from_, to, request_options=request_options))

    def currencysymbols(
        self, currency: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CurrencysymbolsResponse:
        """Get the currency symbol and name of a currency

        Args:
            currency: The currency code for which you want to get the symbol
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.currencysymbols(currency, request_options=request_options))

    def dividends(
        self,
        ticker: str,
        *,
        period: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1DividendsResponse:
        """Get the dividend-per-share history for a company by ticker symbol. Optionally choose the annual or quarterly
        series and limit how many periods are returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, KO)
            period: Which series to return in the history list: quarterly (default) or annual.
            limit: Number of periods to return in the history list (1-25). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.dividends(ticker, period=period, limit=limit, request_options=request_options)
        )

    def earnings(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1EarningsResponse:
        """Get earnings and financial data for a company by ticker symbol. Optionally filter by year and quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.earnings(ticker, year=year, quarter=quarter, request_options=request_options)
        )

    def ethereum(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        hourly_hour: float | None = None,
        hourly_price: float | None = None,
        hourly_timestamp: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1EthereumResponse:
        """Get the current price of Ethereum. You can optionally specify a currency, e.g. USD

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            hourly_hour: UTC hour-of-day slot (0-23) the price was captured in
            hourly_price: Price at that hour, in the requested currency
            hourly_timestamp: ISO 8601 time the hourly price was captured
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.ethereum(
                currency=currency,
                hourly=hourly,
                hourly_hour=hourly_hour,
                hourly_price=hourly_price,
                hourly_timestamp=hourly_timestamp,
                request_options=request_options,
            ),
        )

    def exchangerate(
        self, currency1: str, currency2: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ExchangerateResponse:
        """Exchange Rate is a simple tool for getting the current exchange rate between two currencies. It returns the
        current exchange rate.

        Args:
            currency1: The first currency you want to get the exchange rate for
            currency2: The second currency you want to get the exchange rate for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.exchangerate(currency1, currency2, request_options=request_options))

    def financialratios(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1FinancialratiosResponse:
        """Get the key financial ratios for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.financialratios(ticker, year=year, quarter=quarter, request_options=request_options)
        )

    def gdp(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1GdpResponse:
        """Get GDP data for a specific country. Returns latest data by default, or data for a specific year if
        specified.

        Args:
            country: ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR)
            year: Specific year to retrieve data for (1960-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.gdp(country, year=year, request_options=request_options))

    def globalstockmarket(
        self,
        country: str,
        *,
        year: int | None = None,
        month: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1GlobalstockmarketResponse:
        """Get the current or historical share price index for a specific country.

        Args:
            country: ISO 2-letter country code
            year: Year to retrieve data for (2000-present). Requires month parameter.
            month: Month to retrieve data for (1-12). Required when year is specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.globalstockmarket(country, year=year, month=month, request_options=request_options)
        )

    def goldprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        hourly_hour: float | None = None,
        hourly_price: float | None = None,
        hourly_timestamp: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1GoldpriceResponse:
        """Get the current price of gold. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            hourly_hour: UTC hour-of-day slot (0-23) the price was captured in
            hourly_price: Price at that hour, in the requested currency
            hourly_timestamp: ISO 8601 time the hourly price was captured
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.goldprice(
                currency=currency,
                hourly=hourly,
                hourly_hour=hourly_hour,
                hourly_price=hourly_price,
                hourly_timestamp=hourly_timestamp,
                request_options=request_options,
            ),
        )

    def ifsclookup(self, ifsc: str, *, request_options: RequestOptionsOrDict | None = None) -> V1IfsclookupResponse:
        """IFSC Lookup is a simple tool for getting information on IFSC codes. It returns information on various IFSC
        codes.

        Args:
            ifsc: The IFSC code to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.ifsclookup(ifsc, request_options=request_options))

    def incomestatement(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1IncomestatementResponse:
        """Get the income statement for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.incomestatement(ticker, year=year, quarter=quarter, request_options=request_options)
        )

    def incometax(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1IncometaxResponse:
        """Get federal income tax brackets for a specific country and year.

        Args:
            country: The country code (currently only 'US' is supported)
            year: The tax year to retrieve brackets for. Defaults to the previous year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.incometax(country, year=year, request_options=request_options))

    def incometaxcalculator(
        self,
        income: float,
        rate: float,
        *,
        deduction: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1IncometaxcalculatorResponse:
        """Calculate income tax using a custom tax rate. Useful for simple flat-rate tax calculations or estimations.

        Args:
            income: Gross annual income in USD
            rate: Tax rate as a percentage (e.g., 22 for 22%)
            deduction: Optional deduction amount to subtract from income before calculating tax
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.incometaxcalculator(
                income, rate, deduction=deduction, request_options=request_options
            ),
        )

    def inflation(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1InflationResponse:
        """Get the annual inflation rate and CPI data for a specific country and year.

        Args:
            country: ISO 2-letter country code (e.g., US, GB, JP, DE, BR)
            year: The year to retrieve data for. Defaults to the previous year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.inflation(country, year=year, request_options=request_options))

    def insidertrading(
        self,
        ticker: str,
        *,
        type_: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1InsidertradingResponse:
        """Get recent SEC Form 4 insider transactions for a company by ticker symbol. Optionally filter to buys or sells
        and limit the number of transactions returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            type_: Filter to open-market buys or sells (buy or sell).
            limit: Number of transactions to return (1-25). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.insidertrading(ticker, type_=type_, limit=limit, request_options=request_options)
        )

    def interestrate(
        self, country: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1InterestrateResponse:
        """Get the central bank policy interest rate for a specific country. Omit ``date`` for the current rate, or pass
        a YYYY-MM month for a historical rate (available from 2000 onwards).

        Args:
            country: 2-letter country code
            date: Optional month in YYYY-MM format for a historical lookup. Omit for the current rate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.interestrate(country, date=date, request_options=request_options))

    def jobsreport(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1JobsreportResponse:
        """Get current or historical employment statistics

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.jobsreport(date=date, request_options=request_options))

    def loanpaymentcalculator(
        self,
        body: V1LoanpaymentcalculatorRequest | V1LoanpaymentcalculatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1LoanpaymentcalculatorResponse:
        """Calculate loan payments based on the loan amount, interest rate, and loan term

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.loanpaymentcalculator(body, request_options=request_options))

    def minimumwage(
        self, state: str, *, year: float | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1MinimumwageResponse:
        """Get minimum wage rates for all states or a specific state

        Args:
            state: 2-letter state code (e.g., CA, NY)
            year: Year to get minimum wage for (e.g., 2020). Defaults to current year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.minimumwage(state, year=year, request_options=request_options))

    def mortgagecalculator(
        self,
        body: V1MortgagecalculatorRequest | V1MortgagecalculatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MortgagecalculatorResponse:
        """Calculate mortgage payments based on the loan amount, interest rate, and loan term

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.mortgagecalculator(body, request_options=request_options))

    def mortgagerate(
        self,
        type_: str,
        *,
        year: int | None = None,
        month: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MortgagerateResponse:
        """Get the current or historical mortgage rate for a specific type.

        Args:
            type_: The mortgage type
            year: Year to retrieve rates for (1971-present). Requires month parameter.
            month: Month to retrieve rates for (1-12). Required when year is specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.mortgagerate(type_, year=year, month=month, request_options=request_options)
        )

    def nationaldebt(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1NationaldebtResponse:
        """Get current or historical US national debt data

        Args:
            date: Optional date in YYYY-MM-DD format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.nationaldebt(date=date, request_options=request_options))

    def palladiumprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PalladiumpriceResponse:
        """Get the current price of palladium. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.palladiumprice(currency=currency, hourly=hourly, request_options=request_options)
        )

    def platinumprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PlatinumpriceResponse:
        """Get the current price of platinum. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.platinumprice(currency=currency, hourly=hourly, request_options=request_options)
        )

    def population(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1PopulationResponse:
        """Get population data for a specific country. Returns latest data by default, or data for a specific year if
        specified.

        Args:
            country: ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR)
            year: Specific year to retrieve data for (1960-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.population(country, year=year, request_options=request_options))

    def purchasingpower(
        self, amount: float, from_: str, *, to: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1PurchasingpowerResponse:
        """Calculate the inflation-adjusted value of money between two periods

        Args:
            amount: The dollar amount to convert
            from_: Starting year (YYYY format, data available from 1947)
            to: Ending year (YYYY format). Omit for current.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.purchasingpower(amount, from_, to=to, request_options=request_options))

    def routinglookup(
        self, routing: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1RoutinglookupResponse:
        """Lookup routing number information based on the routing number

        Args:
            routing: The routing number to lookup information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.routinglookup(routing, request_options=request_options))

    def salestax(self, zip_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1SalestaxResponse:
        """Lookup the sales tax rate of a location based on the zip code

        Args:
            zip_: The zip code for which you want to get the sales tax rate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.salestax(zip_, request_options=request_options))

    def salestaxcalculator(
        self,
        amount: float,
        *,
        zip_: str | None = None,
        state: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SalestaxcalculatorResponse:
        """Calculate sales tax for a purchase amount at a specific US location

        Args:
            amount: Purchase amount to calculate tax on
            zip_: Valid US 5-digit ZIP code (required unless state is given)
            state: 2-letter US state code (e.g., CA, NY, TX); used when zip is not given, state rate only
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.salestaxcalculator(amount, zip_=zip_, state=state, request_options=request_options)
        )

    def sanctionscreening(
        self,
        name: str,
        *,
        threshold: float | None = None,
        limit: float | None = None,
        type_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SanctionscreeningResponse:
        """Screen a person or company name against the OFAC Specially Designated Nationals list. Returns scored matches,
        or an empty result set when the name is clear.

        Args:
            name: The person or company name to screen (minimum 3 characters)
            threshold: Minimum match score to return, between 0.5 and 1. Lower catches more names but returns more false
                positives
            limit: Maximum number of matches to return (1-50)
            type_: Restrict screening to one entry type
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.sanctionscreening(
                name, threshold=threshold, limit=limit, type_=type_, request_options=request_options
            ),
        )

    def savingsbonds(
        self, *, period: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1SavingsbondsResponse:
        """Get current I-Bond rates and historical rate data

        Args:
            period: Specific issue period to lookup (YYYY-MM format, e.g., 2024-11). Omit for current rates.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.savingsbonds(period=period, request_options=request_options))

    def secfilings(
        self,
        ticker: str,
        *,
        form: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SecfilingsResponse:
        """Get the recent SEC EDGAR filing history for a company by ticker symbol. Optionally filter to a specific form
        type and limit the number of filings returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            form: Filter to a single form type (e.g. 10-K, 10-Q, 8-K, 4).
            limit: Number of filings to return (1-50). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.secfilings(ticker, form=form, limit=limit, request_options=request_options)
        )

    def silverprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SilverpriceResponse:
        """Get the current price of silver. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.silverprice(currency=currency, hourly=hourly, request_options=request_options)
        )

    def stockexchange(
        self, mic: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1StockexchangeResponse:
        """Get stock exchange details by its Market Identifier Code (MIC).

        Args:
            mic: The 4-character Market Identifier Code (e.g., XNYS for NYSE, XNAS for NASDAQ)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.stockexchange(mic, request_options=request_options))

    def stockmarketopentimes(
        self, exchange: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1StockmarketopentimesResponse:
        """Get the open times of the stock market on the current date of the request

        Args:
            exchange: The stock exchange code
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.stockmarketopentimes(exchange, request_options=request_options))

    def swiftlookup(self, swift: str, *, request_options: RequestOptionsOrDict | None = None) -> V1SwiftlookupResponse:
        """Lookup SWIFT code information based on the SWIFT code

        Args:
            swift: The SWIFT code to lookup information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.swiftlookup(swift, request_options=request_options))

    def tradebalance(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1TradebalanceResponse:
        """Get trade balance data

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.tradebalance(date=date, request_options=request_options))

    def treasuryyields(
        self, *, date: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1TreasuryyieldsResponse:
        """Get current or historical Treasury securities interest rates

        Args:
            date: Optional month in YYYY-MM format for a recent-month lookup (recent months only). Omit for current
                data.
            type_: Optional filter for a single point. Legacy security types: bills, notes, bonds, tips, frn. Or a
                maturity: 1mo, 3mo, 6mo, 1yr, 2yr, 3yr, 5yr, 7yr, 10yr, 20yr, 30yr
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.treasuryyields(date=date, type_=type_, request_options=request_options))

    def unemployment(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1UnemploymentResponse:
        """Get the current or historical unemployment rate for a specific country.

        Args:
            country: ISO country code (2 or 3 letter). Examples: US, USA, DE, DEU, GB, GBR
            year: Specific year to retrieve data for (1991-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.unemployment(country, year=year, request_options=request_options))

    def vatrates(
        self,
        country: str,
        *,
        date: str | None = None,
        postcode: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1VatratesResponse:
        """Returns VAT rates for a country. Optionally specify a date for historical rates or a postcode for regional
        exceptions.

        Args:
            country: ISO 2-letter country code (e.g., DE, FR, ES)
            date: Look up rate effective on this date (YYYY-MM-DD). Defaults to today.
            postcode: Check for regional exceptions (e.g., Canary Islands, Ceuta)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.vatrates(country, date=date, postcode=postcode, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> FinanceWithRawResponse:
        return self._with_raw_response


class AsyncFinance:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFinanceWithRawResponse(client, server, auth)

    async def balancesheet(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1BalancesheetResponse:
        """Get the balance sheet for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.balancesheet(
                ticker, year=year, quarter=quarter, request_options=request_options
            ),
        )

    async def benchmarkrate(
        self, rate: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1BenchmarkrateResponse:
        """Get the current value for a specific benchmark rate.

        Args:
            rate: The benchmark rate to retrieve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.benchmarkrate(rate, request_options=request_options))

    async def binlookup(
        self, bin_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1BinlookupResponse:
        """Lookup credit card information based on the BIN

        Args:
            bin_: The first six digits of the credit card number (BIN)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.binlookup(bin_, request_options=request_options))

    async def bitcoin(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1BitcoinResponse:
        """Get the current price of Bitcoin. You can optionally specify a currency, e.g. USD

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.bitcoin(currency=currency, hourly=hourly, request_options=request_options)
        )

    async def cashflow(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CashflowResponse:
        """Get the cash flow statement for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.cashflow(ticker, year=year, quarter=quarter, request_options=request_options)
        )

    async def companylookup(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CompanylookupResponse:
        """Get company information by stock ticker symbol.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, GOOGL)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.companylookup(ticker, request_options=request_options))

    async def costliving(
        self, location: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CostlivingResponse:
        """Get the cost of living index for a specific location. Accepts state names, state codes, or major city names.

        Args:
            location: State name, state code (e.g., CA, NY), or major city name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.costliving(location, request_options=request_options))

    async def cpiinflation(
        self,
        *,
        date: str | None = None,
        category: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CpiinflationResponse:
        """Get current or historical CPI inflation data by category

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            category: Optional category filter: all, food, housing, apparel, transportation, medical, recreation,
                education, gasoline, electricity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.cpiinflation(date=date, category=category, request_options=request_options)
        )

    async def currencyconverter(
        self, value: float, from_: str, to: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CurrencyconverterResponse:
        """Convert currency rates based on the amount and currency

        Args:
            value: The amount to convert
            from_: The ISO 4217 currency code to convert from
            to: The ISO 4217 currency code to convert to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.currencyconverter(value, from_, to, request_options=request_options)
        )

    async def currencysymbols(
        self, currency: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CurrencysymbolsResponse:
        """Get the currency symbol and name of a currency

        Args:
            currency: The currency code for which you want to get the symbol
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.currencysymbols(currency, request_options=request_options))

    async def dividends(
        self,
        ticker: str,
        *,
        period: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1DividendsResponse:
        """Get the dividend-per-share history for a company by ticker symbol. Optionally choose the annual or quarterly
        series and limit how many periods are returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, KO)
            period: Which series to return in the history list: quarterly (default) or annual.
            limit: Number of periods to return in the history list (1-25). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dividends(ticker, period=period, limit=limit, request_options=request_options)
        )

    async def earnings(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1EarningsResponse:
        """Get earnings and financial data for a company by ticker symbol. Optionally filter by year and quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.earnings(ticker, year=year, quarter=quarter, request_options=request_options)
        )

    async def ethereum(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        hourly_hour: float | None = None,
        hourly_price: float | None = None,
        hourly_timestamp: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1EthereumResponse:
        """Get the current price of Ethereum. You can optionally specify a currency, e.g. USD

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            hourly_hour: UTC hour-of-day slot (0-23) the price was captured in
            hourly_price: Price at that hour, in the requested currency
            hourly_timestamp: ISO 8601 time the hourly price was captured
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.ethereum(
                currency=currency,
                hourly=hourly,
                hourly_hour=hourly_hour,
                hourly_price=hourly_price,
                hourly_timestamp=hourly_timestamp,
                request_options=request_options,
            ),
        )

    async def exchangerate(
        self, currency1: str, currency2: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ExchangerateResponse:
        """Exchange Rate is a simple tool for getting the current exchange rate between two currencies. It returns the
        current exchange rate.

        Args:
            currency1: The first currency you want to get the exchange rate for
            currency2: The second currency you want to get the exchange rate for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.exchangerate(currency1, currency2, request_options=request_options))

    async def financialratios(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1FinancialratiosResponse:
        """Get the key financial ratios for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.financialratios(
                ticker, year=year, quarter=quarter, request_options=request_options
            ),
        )

    async def gdp(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1GdpResponse:
        """Get GDP data for a specific country. Returns latest data by default, or data for a specific year if
        specified.

        Args:
            country: ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR)
            year: Specific year to retrieve data for (1960-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.gdp(country, year=year, request_options=request_options))

    async def globalstockmarket(
        self,
        country: str,
        *,
        year: int | None = None,
        month: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1GlobalstockmarketResponse:
        """Get the current or historical share price index for a specific country.

        Args:
            country: ISO 2-letter country code
            year: Year to retrieve data for (2000-present). Requires month parameter.
            month: Month to retrieve data for (1-12). Required when year is specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.globalstockmarket(
                country, year=year, month=month, request_options=request_options
            ),
        )

    async def goldprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        hourly_hour: float | None = None,
        hourly_price: float | None = None,
        hourly_timestamp: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1GoldpriceResponse:
        """Get the current price of gold. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            hourly_hour: UTC hour-of-day slot (0-23) the price was captured in
            hourly_price: Price at that hour, in the requested currency
            hourly_timestamp: ISO 8601 time the hourly price was captured
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.goldprice(
                currency=currency,
                hourly=hourly,
                hourly_hour=hourly_hour,
                hourly_price=hourly_price,
                hourly_timestamp=hourly_timestamp,
                request_options=request_options,
            ),
        )

    async def ifsclookup(
        self, ifsc: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1IfsclookupResponse:
        """IFSC Lookup is a simple tool for getting information on IFSC codes. It returns information on various IFSC
        codes.

        Args:
            ifsc: The IFSC code to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.ifsclookup(ifsc, request_options=request_options))

    async def incomestatement(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1IncomestatementResponse:
        """Get the income statement for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.incomestatement(
                ticker, year=year, quarter=quarter, request_options=request_options
            ),
        )

    async def incometax(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1IncometaxResponse:
        """Get federal income tax brackets for a specific country and year.

        Args:
            country: The country code (currently only 'US' is supported)
            year: The tax year to retrieve brackets for. Defaults to the previous year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.incometax(country, year=year, request_options=request_options))

    async def incometaxcalculator(
        self,
        income: float,
        rate: float,
        *,
        deduction: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1IncometaxcalculatorResponse:
        """Calculate income tax using a custom tax rate. Useful for simple flat-rate tax calculations or estimations.

        Args:
            income: Gross annual income in USD
            rate: Tax rate as a percentage (e.g., 22 for 22%)
            deduction: Optional deduction amount to subtract from income before calculating tax
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.incometaxcalculator(
                income, rate, deduction=deduction, request_options=request_options
            ),
        )

    async def inflation(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1InflationResponse:
        """Get the annual inflation rate and CPI data for a specific country and year.

        Args:
            country: ISO 2-letter country code (e.g., US, GB, JP, DE, BR)
            year: The year to retrieve data for. Defaults to the previous year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.inflation(country, year=year, request_options=request_options))

    async def insidertrading(
        self,
        ticker: str,
        *,
        type_: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1InsidertradingResponse:
        """Get recent SEC Form 4 insider transactions for a company by ticker symbol. Optionally filter to buys or sells
        and limit the number of transactions returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            type_: Filter to open-market buys or sells (buy or sell).
            limit: Number of transactions to return (1-25). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.insidertrading(
                ticker, type_=type_, limit=limit, request_options=request_options
            ),
        )

    async def interestrate(
        self, country: str, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1InterestrateResponse:
        """Get the central bank policy interest rate for a specific country. Omit ``date`` for the current rate, or pass
        a YYYY-MM month for a historical rate (available from 2000 onwards).

        Args:
            country: 2-letter country code
            date: Optional month in YYYY-MM format for a historical lookup. Omit for the current rate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.interestrate(country, date=date, request_options=request_options))

    async def jobsreport(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1JobsreportResponse:
        """Get current or historical employment statistics

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.jobsreport(date=date, request_options=request_options))

    async def loanpaymentcalculator(
        self,
        body: V1LoanpaymentcalculatorRequest | V1LoanpaymentcalculatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1LoanpaymentcalculatorResponse:
        """Calculate loan payments based on the loan amount, interest rate, and loan term

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.loanpaymentcalculator(body, request_options=request_options))

    async def minimumwage(
        self, state: str, *, year: float | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1MinimumwageResponse:
        """Get minimum wage rates for all states or a specific state

        Args:
            state: 2-letter state code (e.g., CA, NY)
            year: Year to get minimum wage for (e.g., 2020). Defaults to current year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.minimumwage(state, year=year, request_options=request_options))

    async def mortgagecalculator(
        self,
        body: V1MortgagecalculatorRequest | V1MortgagecalculatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MortgagecalculatorResponse:
        """Calculate mortgage payments based on the loan amount, interest rate, and loan term

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.mortgagecalculator(body, request_options=request_options))

    async def mortgagerate(
        self,
        type_: str,
        *,
        year: int | None = None,
        month: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MortgagerateResponse:
        """Get the current or historical mortgage rate for a specific type.

        Args:
            type_: The mortgage type
            year: Year to retrieve rates for (1971-present). Requires month parameter.
            month: Month to retrieve rates for (1-12). Required when year is specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.mortgagerate(type_, year=year, month=month, request_options=request_options)
        )

    async def nationaldebt(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1NationaldebtResponse:
        """Get current or historical US national debt data

        Args:
            date: Optional date in YYYY-MM-DD format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.nationaldebt(date=date, request_options=request_options))

    async def palladiumprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PalladiumpriceResponse:
        """Get the current price of palladium. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.palladiumprice(
                currency=currency, hourly=hourly, request_options=request_options
            ),
        )

    async def platinumprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PlatinumpriceResponse:
        """Get the current price of platinum. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.platinumprice(
                currency=currency, hourly=hourly, request_options=request_options
            ),
        )

    async def population(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1PopulationResponse:
        """Get population data for a specific country. Returns latest data by default, or data for a specific year if
        specified.

        Args:
            country: ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR)
            year: Specific year to retrieve data for (1960-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.population(country, year=year, request_options=request_options))

    async def purchasingpower(
        self,
        amount: float,
        from_: str,
        *,
        to: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PurchasingpowerResponse:
        """Calculate the inflation-adjusted value of money between two periods

        Args:
            amount: The dollar amount to convert
            from_: Starting year (YYYY format, data available from 1947)
            to: Ending year (YYYY format). Omit for current.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.purchasingpower(amount, from_, to=to, request_options=request_options)
        )

    async def routinglookup(
        self, routing: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1RoutinglookupResponse:
        """Lookup routing number information based on the routing number

        Args:
            routing: The routing number to lookup information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.routinglookup(routing, request_options=request_options))

    async def salestax(
        self, zip_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1SalestaxResponse:
        """Lookup the sales tax rate of a location based on the zip code

        Args:
            zip_: The zip code for which you want to get the sales tax rate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.salestax(zip_, request_options=request_options))

    async def salestaxcalculator(
        self,
        amount: float,
        *,
        zip_: str | None = None,
        state: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SalestaxcalculatorResponse:
        """Calculate sales tax for a purchase amount at a specific US location

        Args:
            amount: Purchase amount to calculate tax on
            zip_: Valid US 5-digit ZIP code (required unless state is given)
            state: 2-letter US state code (e.g., CA, NY, TX); used when zip is not given, state rate only
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.salestaxcalculator(
                amount, zip_=zip_, state=state, request_options=request_options
            ),
        )

    async def sanctionscreening(
        self,
        name: str,
        *,
        threshold: float | None = None,
        limit: float | None = None,
        type_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SanctionscreeningResponse:
        """Screen a person or company name against the OFAC Specially Designated Nationals list. Returns scored matches,
        or an empty result set when the name is clear.

        Args:
            name: The person or company name to screen (minimum 3 characters)
            threshold: Minimum match score to return, between 0.5 and 1. Lower catches more names but returns more false
                positives
            limit: Maximum number of matches to return (1-50)
            type_: Restrict screening to one entry type
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.sanctionscreening(
                name, threshold=threshold, limit=limit, type_=type_, request_options=request_options
            ),
        )

    async def savingsbonds(
        self, *, period: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1SavingsbondsResponse:
        """Get current I-Bond rates and historical rate data

        Args:
            period: Specific issue period to lookup (YYYY-MM format, e.g., 2024-11). Omit for current rates.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.savingsbonds(period=period, request_options=request_options))

    async def secfilings(
        self,
        ticker: str,
        *,
        form: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SecfilingsResponse:
        """Get the recent SEC EDGAR filing history for a company by ticker symbol. Optionally filter to a specific form
        type and limit the number of filings returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            form: Filter to a single form type (e.g. 10-K, 10-Q, 8-K, 4).
            limit: Number of filings to return (1-50). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.secfilings(ticker, form=form, limit=limit, request_options=request_options)
        )

    async def silverprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SilverpriceResponse:
        """Get the current price of silver. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.silverprice(currency=currency, hourly=hourly, request_options=request_options)
        )

    async def stockexchange(
        self, mic: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1StockexchangeResponse:
        """Get stock exchange details by its Market Identifier Code (MIC).

        Args:
            mic: The 4-character Market Identifier Code (e.g., XNYS for NYSE, XNAS for NASDAQ)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.stockexchange(mic, request_options=request_options))

    async def stockmarketopentimes(
        self, exchange: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1StockmarketopentimesResponse:
        """Get the open times of the stock market on the current date of the request

        Args:
            exchange: The stock exchange code
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.stockmarketopentimes(exchange, request_options=request_options))

    async def swiftlookup(
        self, swift: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1SwiftlookupResponse:
        """Lookup SWIFT code information based on the SWIFT code

        Args:
            swift: The SWIFT code to lookup information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.swiftlookup(swift, request_options=request_options))

    async def tradebalance(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1TradebalanceResponse:
        """Get trade balance data

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.tradebalance(date=date, request_options=request_options))

    async def treasuryyields(
        self,
        *,
        date: str | None = None,
        type_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TreasuryyieldsResponse:
        """Get current or historical Treasury securities interest rates

        Args:
            date: Optional month in YYYY-MM format for a recent-month lookup (recent months only). Omit for current
                data.
            type_: Optional filter for a single point. Legacy security types: bills, notes, bonds, tips, frn. Or a
                maturity: 1mo, 3mo, 6mo, 1yr, 2yr, 3yr, 5yr, 7yr, 10yr, 20yr, 30yr
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.treasuryyields(date=date, type_=type_, request_options=request_options)
        )

    async def unemployment(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1UnemploymentResponse:
        """Get the current or historical unemployment rate for a specific country.

        Args:
            country: ISO country code (2 or 3 letter). Examples: US, USA, DE, DEU, GB, GBR
            year: Specific year to retrieve data for (1991-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.unemployment(country, year=year, request_options=request_options))

    async def vatrates(
        self,
        country: str,
        *,
        date: str | None = None,
        postcode: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1VatratesResponse:
        """Returns VAT rates for a country. Optionally specify a date for historical rates or a postcode for regional
        exceptions.

        Args:
            country: ISO 2-letter country code (e.g., DE, FR, ES)
            date: Look up rate effective on this date (YYYY-MM-DD). Defaults to today.
            postcode: Check for regional exceptions (e.g., Canary Islands, Ceuta)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.vatrates(
                country, date=date, postcode=postcode, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFinanceWithRawResponse:
        return self._with_raw_response


class FinanceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def balancesheet(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BalancesheetResponse, BalancesheetErrorBody]:
        """Get the balance sheet for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/balancesheet"),
            query_params=[
                param[str]("ticker", ticker), param[int | None]("year", year), param[int | None]("quarter", quarter)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BalancesheetResponse],
            error_mapper=balancesheet_error_mapper,
            request_options=request_options,
        )

    def benchmarkrate(
        self, rate: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1BenchmarkrateResponse, BenchmarkrateErrorBody]:
        """Get the current value for a specific benchmark rate.

        Args:
            rate: The benchmark rate to retrieve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/benchmarkrate"),
            query_params=[param[str]("rate", rate)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BenchmarkrateResponse],
            error_mapper=benchmarkrate_error_mapper,
            request_options=request_options,
        )

    def binlookup(
        self, bin_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1BinlookupResponse, BinlookupErrorBody]:
        """Lookup credit card information based on the BIN

        Args:
            bin_: The first six digits of the credit card number (BIN)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/binlookup"),
            query_params=[param[str]("bin", bin_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BinlookupResponse],
            error_mapper=binlookup_error_mapper,
            request_options=request_options,
        )

    def bitcoin(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BitcoinResponse, BitcoinErrorBody]:
        """Get the current price of Bitcoin. You can optionally specify a currency, e.g. USD

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bitcoin"),
            query_params=[param[str | None]("currency", currency), param[bool | None]("hourly", hourly)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BitcoinResponse],
            error_mapper=bitcoin_error_mapper,
            request_options=request_options,
        )

    def cashflow(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CashflowResponse, CashflowErrorBody]:
        """Get the cash flow statement for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cashflow"),
            query_params=[
                param[str]("ticker", ticker), param[int | None]("year", year), param[int | None]("quarter", quarter)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CashflowResponse],
            error_mapper=cashflow_error_mapper,
            request_options=request_options,
        )

    def companylookup(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CompanylookupResponse, CompanylookupErrorBody]:
        """Get company information by stock ticker symbol.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, GOOGL)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/companylookup"),
            query_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CompanylookupResponse],
            error_mapper=companylookup_error_mapper,
            request_options=request_options,
        )

    def costliving(
        self, location: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CostlivingResponse, CostlivingErrorBody]:
        """Get the cost of living index for a specific location. Accepts state names, state codes, or major city names.

        Args:
            location: State name, state code (e.g., CA, NY), or major city name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/costliving"),
            query_params=[param[str]("location", location)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CostlivingResponse],
            error_mapper=costliving_error_mapper,
            request_options=request_options,
        )

    def cpiinflation(
        self,
        *,
        date: str | None = None,
        category: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CpiinflationResponse, CpiinflationErrorBody]:
        """Get current or historical CPI inflation data by category

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            category: Optional category filter: all, food, housing, apparel, transportation, medical, recreation,
                education, gasoline, electricity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cpiinflation"),
            query_params=[param[str | None]("date", date), param[str | None]("category", category)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CpiinflationResponse],
            error_mapper=cpiinflation_error_mapper,
            request_options=request_options,
        )

    def currencyconverter(
        self, value: float, from_: str, to: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CurrencyconverterResponse, CurrencyconverterErrorBody]:
        """Convert currency rates based on the amount and currency

        Args:
            value: The amount to convert
            from_: The ISO 4217 currency code to convert from
            to: The ISO 4217 currency code to convert to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/currencyconverter"),
            query_params=[param[float]("value", value), param[str]("from", from_), param[str]("to", to)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CurrencyconverterResponse],
            error_mapper=currencyconverter_error_mapper,
            request_options=request_options,
        )

    def currencysymbols(
        self, currency: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CurrencysymbolsResponse, CurrencysymbolsErrorBody]:
        """Get the currency symbol and name of a currency

        Args:
            currency: The currency code for which you want to get the symbol
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/currencysymbols"),
            query_params=[param[str]("currency", currency)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CurrencysymbolsResponse],
            error_mapper=currencysymbols_error_mapper,
            request_options=request_options,
        )

    def dividends(
        self,
        ticker: str,
        *,
        period: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DividendsResponse, DividendsErrorBody]:
        """Get the dividend-per-share history for a company by ticker symbol. Optionally choose the annual or quarterly
        series and limit how many periods are returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, KO)
            period: Which series to return in the history list: quarterly (default) or annual.
            limit: Number of periods to return in the history list (1-25). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dividends"),
            query_params=[
                param[str]("ticker", ticker), param[str | None]("period", period), param[int | None]("limit", limit)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DividendsResponse],
            error_mapper=dividends_error_mapper,
            request_options=request_options,
        )

    def earnings(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1EarningsResponse, EarningsErrorBody]:
        """Get earnings and financial data for a company by ticker symbol. Optionally filter by year and quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/earnings"),
            query_params=[
                param[str]("ticker", ticker), param[int | None]("year", year), param[int | None]("quarter", quarter)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1EarningsResponse],
            error_mapper=earnings_error_mapper,
            request_options=request_options,
        )

    def ethereum(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        hourly_hour: float | None = None,
        hourly_price: float | None = None,
        hourly_timestamp: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1EthereumResponse, EthereumErrorBody]:
        """Get the current price of Ethereum. You can optionally specify a currency, e.g. USD

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            hourly_hour: UTC hour-of-day slot (0-23) the price was captured in
            hourly_price: Price at that hour, in the requested currency
            hourly_timestamp: ISO 8601 time the hourly price was captured
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ethereum"),
            query_params=[
                param[str | None]("currency", currency),
                param[bool | None]("hourly", hourly),
                param[float | None]("hourly[].hour", hourly_hour),
                param[float | None]("hourly[].price", hourly_price),
                param[str | None]("hourly[].timestamp", hourly_timestamp),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1EthereumResponse],
            error_mapper=ethereum_error_mapper,
            request_options=request_options,
        )

    def exchangerate(
        self, currency1: str, currency2: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ExchangerateResponse, ExchangerateErrorBody]:
        """Exchange Rate is a simple tool for getting the current exchange rate between two currencies. It returns the
        current exchange rate.

        Args:
            currency1: The first currency you want to get the exchange rate for
            currency2: The second currency you want to get the exchange rate for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/exchangerate"),
            query_params=[param[str]("currency1", currency1), param[str]("currency2", currency2)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ExchangerateResponse],
            error_mapper=exchangerate_error_mapper,
            request_options=request_options,
        )

    def financialratios(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1FinancialratiosResponse, FinancialratiosErrorBody]:
        """Get the key financial ratios for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/financialratios"),
            query_params=[
                param[str]("ticker", ticker), param[int | None]("year", year), param[int | None]("quarter", quarter)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1FinancialratiosResponse],
            error_mapper=financialratios_error_mapper,
            request_options=request_options,
        )

    def gdp(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1GdpResponse, GdpErrorBody]:
        """Get GDP data for a specific country. Returns latest data by default, or data for a specific year if
        specified.

        Args:
            country: ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR)
            year: Specific year to retrieve data for (1960-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/gdp"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1GdpResponse],
            error_mapper=gdp_error_mapper,
            request_options=request_options,
        )

    def globalstockmarket(
        self,
        country: str,
        *,
        year: int | None = None,
        month: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GlobalstockmarketResponse, GlobalstockmarketErrorBody]:
        """Get the current or historical share price index for a specific country.

        Args:
            country: ISO 2-letter country code
            year: Year to retrieve data for (2000-present). Requires month parameter.
            month: Month to retrieve data for (1-12). Required when year is specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/globalstockmarket"),
            query_params=[
                param[str]("country", country), param[int | None]("year", year), param[int | None]("month", month)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1GlobalstockmarketResponse],
            error_mapper=globalstockmarket_error_mapper,
            request_options=request_options,
        )

    def goldprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        hourly_hour: float | None = None,
        hourly_price: float | None = None,
        hourly_timestamp: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GoldpriceResponse, GoldpriceErrorBody]:
        """Get the current price of gold. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            hourly_hour: UTC hour-of-day slot (0-23) the price was captured in
            hourly_price: Price at that hour, in the requested currency
            hourly_timestamp: ISO 8601 time the hourly price was captured
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/goldprice"),
            query_params=[
                param[str | None]("currency", currency),
                param[bool | None]("hourly", hourly),
                param[float | None]("hourly[].hour", hourly_hour),
                param[float | None]("hourly[].price", hourly_price),
                param[str | None]("hourly[].timestamp", hourly_timestamp),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1GoldpriceResponse],
            error_mapper=goldprice_error_mapper,
            request_options=request_options,
        )

    def ifsclookup(
        self, ifsc: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1IfsclookupResponse, IfsclookupErrorBody]:
        """IFSC Lookup is a simple tool for getting information on IFSC codes. It returns information on various IFSC
        codes.

        Args:
            ifsc: The IFSC code to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ifsclookup"),
            query_params=[param[str]("ifsc", ifsc)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1IfsclookupResponse],
            error_mapper=ifsclookup_error_mapper,
            request_options=request_options,
        )

    def incomestatement(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1IncomestatementResponse, IncomestatementErrorBody]:
        """Get the income statement for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/incomestatement"),
            query_params=[
                param[str]("ticker", ticker), param[int | None]("year", year), param[int | None]("quarter", quarter)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1IncomestatementResponse],
            error_mapper=incomestatement_error_mapper,
            request_options=request_options,
        )

    def incometax(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1IncometaxResponse, IncometaxErrorBody]:
        """Get federal income tax brackets for a specific country and year.

        Args:
            country: The country code (currently only 'US' is supported)
            year: The tax year to retrieve brackets for. Defaults to the previous year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/incometax"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1IncometaxResponse],
            error_mapper=incometax_error_mapper,
            request_options=request_options,
        )

    def incometaxcalculator(
        self,
        income: float,
        rate: float,
        *,
        deduction: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1IncometaxcalculatorResponse, IncometaxcalculatorErrorBody]:
        """Calculate income tax using a custom tax rate. Useful for simple flat-rate tax calculations or estimations.

        Args:
            income: Gross annual income in USD
            rate: Tax rate as a percentage (e.g., 22 for 22%)
            deduction: Optional deduction amount to subtract from income before calculating tax
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/incometaxcalculator"),
            query_params=[
                param[float]("income", income), param[float]("rate", rate), param[float | None]("deduction", deduction)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1IncometaxcalculatorResponse],
            error_mapper=incometaxcalculator_error_mapper,
            request_options=request_options,
        )

    def inflation(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1InflationResponse, InflationErrorBody]:
        """Get the annual inflation rate and CPI data for a specific country and year.

        Args:
            country: ISO 2-letter country code (e.g., US, GB, JP, DE, BR)
            year: The year to retrieve data for. Defaults to the previous year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/inflation"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1InflationResponse],
            error_mapper=inflation_error_mapper,
            request_options=request_options,
        )

    def insidertrading(
        self,
        ticker: str,
        *,
        type_: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1InsidertradingResponse, InsidertradingErrorBody]:
        """Get recent SEC Form 4 insider transactions for a company by ticker symbol. Optionally filter to buys or sells
        and limit the number of transactions returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            type_: Filter to open-market buys or sells (buy or sell).
            limit: Number of transactions to return (1-25). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/insidertrading"),
            query_params=[
                param[str]("ticker", ticker), param[str | None]("type", type_), param[int | None]("limit", limit)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1InsidertradingResponse],
            error_mapper=insidertrading_error_mapper,
            request_options=request_options,
        )

    def interestrate(
        self, country: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1InterestrateResponse, InterestrateErrorBody]:
        """Get the central bank policy interest rate for a specific country. Omit ``date`` for the current rate, or pass
        a YYYY-MM month for a historical rate (available from 2000 onwards).

        Args:
            country: 2-letter country code
            date: Optional month in YYYY-MM format for a historical lookup. Omit for the current rate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/interestrate"),
            query_params=[param[str]("country", country), param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1InterestrateResponse],
            error_mapper=interestrate_error_mapper,
            request_options=request_options,
        )

    def jobsreport(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1JobsreportResponse, JobsreportErrorBody]:
        """Get current or historical employment statistics

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/jobsreport"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1JobsreportResponse],
            error_mapper=jobsreport_error_mapper,
            request_options=request_options,
        )

    def loanpaymentcalculator(
        self,
        body: V1LoanpaymentcalculatorRequest | V1LoanpaymentcalculatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LoanpaymentcalculatorResponse, LoanpaymentcalculatorErrorBody]:
        """Calculate loan payments based on the loan amount, interest rate, and loan term

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/loanpaymentcalculator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LoanpaymentcalculatorRequest | V1LoanpaymentcalculatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LoanpaymentcalculatorResponse],
            error_mapper=loanpaymentcalculator_error_mapper,
            request_options=request_options,
        )

    def minimumwage(
        self, state: str, *, year: float | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1MinimumwageResponse, MinimumwageErrorBody]:
        """Get minimum wage rates for all states or a specific state

        Args:
            state: 2-letter state code (e.g., CA, NY)
            year: Year to get minimum wage for (e.g., 2020). Defaults to current year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/minimumwage"),
            query_params=[param[str]("state", state), param[float | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MinimumwageResponse],
            error_mapper=minimumwage_error_mapper,
            request_options=request_options,
        )

    def mortgagecalculator(
        self,
        body: V1MortgagecalculatorRequest | V1MortgagecalculatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MortgagecalculatorResponse, MortgagecalculatorErrorBody]:
        """Calculate mortgage payments based on the loan amount, interest rate, and loan term

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/mortgagecalculator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MortgagecalculatorRequest | V1MortgagecalculatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MortgagecalculatorResponse],
            error_mapper=mortgagecalculator_error_mapper,
            request_options=request_options,
        )

    def mortgagerate(
        self,
        type_: str,
        *,
        year: int | None = None,
        month: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MortgagerateResponse, MortgagerateErrorBody]:
        """Get the current or historical mortgage rate for a specific type.

        Args:
            type_: The mortgage type
            year: Year to retrieve rates for (1971-present). Requires month parameter.
            month: Month to retrieve rates for (1-12). Required when year is specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/mortgagerate"),
            query_params=[
                param[str]("type", type_), param[int | None]("year", year), param[int | None]("month", month)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MortgagerateResponse],
            error_mapper=mortgagerate_error_mapper,
            request_options=request_options,
        )

    def nationaldebt(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1NationaldebtResponse, NationaldebtErrorBody]:
        """Get current or historical US national debt data

        Args:
            date: Optional date in YYYY-MM-DD format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/nationaldebt"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1NationaldebtResponse],
            error_mapper=nationaldebt_error_mapper,
            request_options=request_options,
        )

    def palladiumprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PalladiumpriceResponse, PalladiumpriceErrorBody]:
        """Get the current price of palladium. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/palladiumprice"),
            query_params=[param[str | None]("currency", currency), param[bool | None]("hourly", hourly)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PalladiumpriceResponse],
            error_mapper=palladiumprice_error_mapper,
            request_options=request_options,
        )

    def platinumprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PlatinumpriceResponse, PlatinumpriceErrorBody]:
        """Get the current price of platinum. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/platinumprice"),
            query_params=[param[str | None]("currency", currency), param[bool | None]("hourly", hourly)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PlatinumpriceResponse],
            error_mapper=platinumprice_error_mapper,
            request_options=request_options,
        )

    def population(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PopulationResponse, PopulationErrorBody]:
        """Get population data for a specific country. Returns latest data by default, or data for a specific year if
        specified.

        Args:
            country: ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR)
            year: Specific year to retrieve data for (1960-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/population"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PopulationResponse],
            error_mapper=population_error_mapper,
            request_options=request_options,
        )

    def purchasingpower(
        self, amount: float, from_: str, *, to: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PurchasingpowerResponse, PurchasingpowerErrorBody]:
        """Calculate the inflation-adjusted value of money between two periods

        Args:
            amount: The dollar amount to convert
            from_: Starting year (YYYY format, data available from 1947)
            to: Ending year (YYYY format). Omit for current.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/purchasingpower"),
            query_params=[param[float]("amount", amount), param[str]("from", from_), param[str | None]("to", to)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PurchasingpowerResponse],
            error_mapper=purchasingpower_error_mapper,
            request_options=request_options,
        )

    def routinglookup(
        self, routing: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RoutinglookupResponse, RoutinglookupErrorBody]:
        """Lookup routing number information based on the routing number

        Args:
            routing: The routing number to lookup information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/routinglookup"),
            query_params=[param[str]("routing", routing)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RoutinglookupResponse],
            error_mapper=routinglookup_error_mapper,
            request_options=request_options,
        )

    def salestax(
        self, zip_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SalestaxResponse, SalestaxErrorBody]:
        """Lookup the sales tax rate of a location based on the zip code

        Args:
            zip_: The zip code for which you want to get the sales tax rate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/salestax"),
            query_params=[param[str]("zip", zip_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SalestaxResponse],
            error_mapper=salestax_error_mapper,
            request_options=request_options,
        )

    def salestaxcalculator(
        self,
        amount: float,
        *,
        zip_: str | None = None,
        state: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SalestaxcalculatorResponse, SalestaxcalculatorErrorBody]:
        """Calculate sales tax for a purchase amount at a specific US location

        Args:
            amount: Purchase amount to calculate tax on
            zip_: Valid US 5-digit ZIP code (required unless state is given)
            state: 2-letter US state code (e.g., CA, NY, TX); used when zip is not given, state rate only
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/salestaxcalculator"),
            query_params=[
                param[float]("amount", amount), param[str | None]("zip", zip_), param[str | None]("state", state)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SalestaxcalculatorResponse],
            error_mapper=salestaxcalculator_error_mapper,
            request_options=request_options,
        )

    def sanctionscreening(
        self,
        name: str,
        *,
        threshold: float | None = None,
        limit: float | None = None,
        type_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SanctionscreeningResponse, SanctionscreeningErrorBody]:
        """Screen a person or company name against the OFAC Specially Designated Nationals list. Returns scored matches,
        or an empty result set when the name is clear.

        Args:
            name: The person or company name to screen (minimum 3 characters)
            threshold: Minimum match score to return, between 0.5 and 1. Lower catches more names but returns more false
                positives
            limit: Maximum number of matches to return (1-50)
            type_: Restrict screening to one entry type
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sanctionscreening"),
            query_params=[
                param[str]("name", name),
                param[float | None]("threshold", threshold),
                param[float | None]("limit", limit),
                param[str | None]("type", type_),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SanctionscreeningResponse],
            error_mapper=sanctionscreening_error_mapper,
            request_options=request_options,
        )

    def savingsbonds(
        self, *, period: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SavingsbondsResponse, SavingsbondsErrorBody]:
        """Get current I-Bond rates and historical rate data

        Args:
            period: Specific issue period to lookup (YYYY-MM format, e.g., 2024-11). Omit for current rates.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/savingsbonds"),
            query_params=[param[str | None]("period", period)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SavingsbondsResponse],
            error_mapper=savingsbonds_error_mapper,
            request_options=request_options,
        )

    def secfilings(
        self,
        ticker: str,
        *,
        form: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SecfilingsResponse, SecfilingsErrorBody]:
        """Get the recent SEC EDGAR filing history for a company by ticker symbol. Optionally filter to a specific form
        type and limit the number of filings returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            form: Filter to a single form type (e.g. 10-K, 10-Q, 8-K, 4).
            limit: Number of filings to return (1-50). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/secfilings"),
            query_params=[
                param[str]("ticker", ticker), param[str | None]("form", form), param[int | None]("limit", limit)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SecfilingsResponse],
            error_mapper=secfilings_error_mapper,
            request_options=request_options,
        )

    def silverprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SilverpriceResponse, SilverpriceErrorBody]:
        """Get the current price of silver. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/silverprice"),
            query_params=[param[str | None]("currency", currency), param[bool | None]("hourly", hourly)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SilverpriceResponse],
            error_mapper=silverprice_error_mapper,
            request_options=request_options,
        )

    def stockexchange(
        self, mic: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1StockexchangeResponse, StockexchangeErrorBody]:
        """Get stock exchange details by its Market Identifier Code (MIC).

        Args:
            mic: The 4-character Market Identifier Code (e.g., XNYS for NYSE, XNAS for NASDAQ)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stockexchange"),
            query_params=[param[str]("mic", mic)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1StockexchangeResponse],
            error_mapper=stockexchange_error_mapper,
            request_options=request_options,
        )

    def stockmarketopentimes(
        self, exchange: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1StockmarketopentimesResponse, StockmarketopentimesErrorBody]:
        """Get the open times of the stock market on the current date of the request

        Args:
            exchange: The stock exchange code
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stockmarketopentimes"),
            query_params=[param[str]("exchange", exchange)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1StockmarketopentimesResponse],
            error_mapper=stockmarketopentimes_error_mapper,
            request_options=request_options,
        )

    def swiftlookup(
        self, swift: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SwiftlookupResponse, SwiftlookupErrorBody]:
        """Lookup SWIFT code information based on the SWIFT code

        Args:
            swift: The SWIFT code to lookup information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/swiftlookup"),
            query_params=[param[str]("swift", swift)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SwiftlookupResponse],
            error_mapper=swiftlookup_error_mapper,
            request_options=request_options,
        )

    def tradebalance(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1TradebalanceResponse, TradebalanceErrorBody]:
        """Get trade balance data

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tradebalance"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TradebalanceResponse],
            error_mapper=tradebalance_error_mapper,
            request_options=request_options,
        )

    def treasuryyields(
        self, *, date: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1TreasuryyieldsResponse, TreasuryyieldsErrorBody]:
        """Get current or historical Treasury securities interest rates

        Args:
            date: Optional month in YYYY-MM format for a recent-month lookup (recent months only). Omit for current
                data.
            type_: Optional filter for a single point. Legacy security types: bills, notes, bonds, tips, frn. Or a
                maturity: 1mo, 3mo, 6mo, 1yr, 2yr, 3yr, 5yr, 7yr, 10yr, 20yr, 30yr
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/treasuryyields"),
            query_params=[param[str | None]("date", date), param[str | None]("type", type_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TreasuryyieldsResponse],
            error_mapper=treasuryyields_error_mapper,
            request_options=request_options,
        )

    def unemployment(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1UnemploymentResponse, UnemploymentErrorBody]:
        """Get the current or historical unemployment rate for a specific country.

        Args:
            country: ISO country code (2 or 3 letter). Examples: US, USA, DE, DEU, GB, GBR
            year: Specific year to retrieve data for (1991-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/unemployment"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UnemploymentResponse],
            error_mapper=unemployment_error_mapper,
            request_options=request_options,
        )

    def vatrates(
        self,
        country: str,
        *,
        date: str | None = None,
        postcode: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1VatratesResponse, VatratesErrorBody]:
        """Returns VAT rates for a country. Optionally specify a date for historical rates or a postcode for regional
        exceptions.

        Args:
            country: ISO 2-letter country code (e.g., DE, FR, ES)
            date: Look up rate effective on this date (YYYY-MM-DD). Defaults to today.
            postcode: Check for regional exceptions (e.g., Canary Islands, Ceuta)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/vatrates"),
            query_params=[
                param[str]("country", country), param[str | None]("date", date), param[str | None]("postcode", postcode)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1VatratesResponse],
            error_mapper=vatrates_error_mapper,
            request_options=request_options,
        )


class AsyncFinanceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def balancesheet(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BalancesheetResponse, BalancesheetErrorBody]:
        """Get the balance sheet for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/balancesheet"),
            query_params=[
                param[str]("ticker", ticker), param[int | None]("year", year), param[int | None]("quarter", quarter)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BalancesheetResponse],
            error_mapper=balancesheet_error_mapper,
            request_options=request_options,
        )

    async def benchmarkrate(
        self, rate: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1BenchmarkrateResponse, BenchmarkrateErrorBody]:
        """Get the current value for a specific benchmark rate.

        Args:
            rate: The benchmark rate to retrieve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/benchmarkrate"),
            query_params=[param[str]("rate", rate)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BenchmarkrateResponse],
            error_mapper=benchmarkrate_error_mapper,
            request_options=request_options,
        )

    async def binlookup(
        self, bin_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1BinlookupResponse, BinlookupErrorBody]:
        """Lookup credit card information based on the BIN

        Args:
            bin_: The first six digits of the credit card number (BIN)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/binlookup"),
            query_params=[param[str]("bin", bin_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BinlookupResponse],
            error_mapper=binlookup_error_mapper,
            request_options=request_options,
        )

    async def bitcoin(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BitcoinResponse, BitcoinErrorBody]:
        """Get the current price of Bitcoin. You can optionally specify a currency, e.g. USD

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bitcoin"),
            query_params=[param[str | None]("currency", currency), param[bool | None]("hourly", hourly)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BitcoinResponse],
            error_mapper=bitcoin_error_mapper,
            request_options=request_options,
        )

    async def cashflow(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CashflowResponse, CashflowErrorBody]:
        """Get the cash flow statement for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cashflow"),
            query_params=[
                param[str]("ticker", ticker), param[int | None]("year", year), param[int | None]("quarter", quarter)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CashflowResponse],
            error_mapper=cashflow_error_mapper,
            request_options=request_options,
        )

    async def companylookup(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CompanylookupResponse, CompanylookupErrorBody]:
        """Get company information by stock ticker symbol.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, GOOGL)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/companylookup"),
            query_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CompanylookupResponse],
            error_mapper=companylookup_error_mapper,
            request_options=request_options,
        )

    async def costliving(
        self, location: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CostlivingResponse, CostlivingErrorBody]:
        """Get the cost of living index for a specific location. Accepts state names, state codes, or major city names.

        Args:
            location: State name, state code (e.g., CA, NY), or major city name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/costliving"),
            query_params=[param[str]("location", location)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CostlivingResponse],
            error_mapper=costliving_error_mapper,
            request_options=request_options,
        )

    async def cpiinflation(
        self,
        *,
        date: str | None = None,
        category: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CpiinflationResponse, CpiinflationErrorBody]:
        """Get current or historical CPI inflation data by category

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            category: Optional category filter: all, food, housing, apparel, transportation, medical, recreation,
                education, gasoline, electricity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cpiinflation"),
            query_params=[param[str | None]("date", date), param[str | None]("category", category)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CpiinflationResponse],
            error_mapper=cpiinflation_error_mapper,
            request_options=request_options,
        )

    async def currencyconverter(
        self, value: float, from_: str, to: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CurrencyconverterResponse, CurrencyconverterErrorBody]:
        """Convert currency rates based on the amount and currency

        Args:
            value: The amount to convert
            from_: The ISO 4217 currency code to convert from
            to: The ISO 4217 currency code to convert to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/currencyconverter"),
            query_params=[param[float]("value", value), param[str]("from", from_), param[str]("to", to)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CurrencyconverterResponse],
            error_mapper=currencyconverter_error_mapper,
            request_options=request_options,
        )

    async def currencysymbols(
        self, currency: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CurrencysymbolsResponse, CurrencysymbolsErrorBody]:
        """Get the currency symbol and name of a currency

        Args:
            currency: The currency code for which you want to get the symbol
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/currencysymbols"),
            query_params=[param[str]("currency", currency)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CurrencysymbolsResponse],
            error_mapper=currencysymbols_error_mapper,
            request_options=request_options,
        )

    async def dividends(
        self,
        ticker: str,
        *,
        period: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DividendsResponse, DividendsErrorBody]:
        """Get the dividend-per-share history for a company by ticker symbol. Optionally choose the annual or quarterly
        series and limit how many periods are returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, KO)
            period: Which series to return in the history list: quarterly (default) or annual.
            limit: Number of periods to return in the history list (1-25). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dividends"),
            query_params=[
                param[str]("ticker", ticker), param[str | None]("period", period), param[int | None]("limit", limit)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DividendsResponse],
            error_mapper=dividends_error_mapper,
            request_options=request_options,
        )

    async def earnings(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1EarningsResponse, EarningsErrorBody]:
        """Get earnings and financial data for a company by ticker symbol. Optionally filter by year and quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/earnings"),
            query_params=[
                param[str]("ticker", ticker), param[int | None]("year", year), param[int | None]("quarter", quarter)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1EarningsResponse],
            error_mapper=earnings_error_mapper,
            request_options=request_options,
        )

    async def ethereum(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        hourly_hour: float | None = None,
        hourly_price: float | None = None,
        hourly_timestamp: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1EthereumResponse, EthereumErrorBody]:
        """Get the current price of Ethereum. You can optionally specify a currency, e.g. USD

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            hourly_hour: UTC hour-of-day slot (0-23) the price was captured in
            hourly_price: Price at that hour, in the requested currency
            hourly_timestamp: ISO 8601 time the hourly price was captured
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ethereum"),
            query_params=[
                param[str | None]("currency", currency),
                param[bool | None]("hourly", hourly),
                param[float | None]("hourly[].hour", hourly_hour),
                param[float | None]("hourly[].price", hourly_price),
                param[str | None]("hourly[].timestamp", hourly_timestamp),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1EthereumResponse],
            error_mapper=ethereum_error_mapper,
            request_options=request_options,
        )

    async def exchangerate(
        self, currency1: str, currency2: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ExchangerateResponse, ExchangerateErrorBody]:
        """Exchange Rate is a simple tool for getting the current exchange rate between two currencies. It returns the
        current exchange rate.

        Args:
            currency1: The first currency you want to get the exchange rate for
            currency2: The second currency you want to get the exchange rate for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/exchangerate"),
            query_params=[param[str]("currency1", currency1), param[str]("currency2", currency2)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ExchangerateResponse],
            error_mapper=exchangerate_error_mapper,
            request_options=request_options,
        )

    async def financialratios(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1FinancialratiosResponse, FinancialratiosErrorBody]:
        """Get the key financial ratios for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/financialratios"),
            query_params=[
                param[str]("ticker", ticker), param[int | None]("year", year), param[int | None]("quarter", quarter)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1FinancialratiosResponse],
            error_mapper=financialratios_error_mapper,
            request_options=request_options,
        )

    async def gdp(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1GdpResponse, GdpErrorBody]:
        """Get GDP data for a specific country. Returns latest data by default, or data for a specific year if
        specified.

        Args:
            country: ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR)
            year: Specific year to retrieve data for (1960-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/gdp"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1GdpResponse],
            error_mapper=gdp_error_mapper,
            request_options=request_options,
        )

    async def globalstockmarket(
        self,
        country: str,
        *,
        year: int | None = None,
        month: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GlobalstockmarketResponse, GlobalstockmarketErrorBody]:
        """Get the current or historical share price index for a specific country.

        Args:
            country: ISO 2-letter country code
            year: Year to retrieve data for (2000-present). Requires month parameter.
            month: Month to retrieve data for (1-12). Required when year is specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/globalstockmarket"),
            query_params=[
                param[str]("country", country), param[int | None]("year", year), param[int | None]("month", month)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1GlobalstockmarketResponse],
            error_mapper=globalstockmarket_error_mapper,
            request_options=request_options,
        )

    async def goldprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        hourly_hour: float | None = None,
        hourly_price: float | None = None,
        hourly_timestamp: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GoldpriceResponse, GoldpriceErrorBody]:
        """Get the current price of gold. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            hourly_hour: UTC hour-of-day slot (0-23) the price was captured in
            hourly_price: Price at that hour, in the requested currency
            hourly_timestamp: ISO 8601 time the hourly price was captured
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/goldprice"),
            query_params=[
                param[str | None]("currency", currency),
                param[bool | None]("hourly", hourly),
                param[float | None]("hourly[].hour", hourly_hour),
                param[float | None]("hourly[].price", hourly_price),
                param[str | None]("hourly[].timestamp", hourly_timestamp),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1GoldpriceResponse],
            error_mapper=goldprice_error_mapper,
            request_options=request_options,
        )

    async def ifsclookup(
        self, ifsc: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1IfsclookupResponse, IfsclookupErrorBody]:
        """IFSC Lookup is a simple tool for getting information on IFSC codes. It returns information on various IFSC
        codes.

        Args:
            ifsc: The IFSC code to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ifsclookup"),
            query_params=[param[str]("ifsc", ifsc)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1IfsclookupResponse],
            error_mapper=ifsclookup_error_mapper,
            request_options=request_options,
        )

    async def incomestatement(
        self,
        ticker: str,
        *,
        year: int | None = None,
        quarter: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1IncomestatementResponse, IncomestatementErrorBody]:
        """Get the income statement for a company by ticker symbol. Optionally filter to a specific fiscal year and
        quarter.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            year: Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so
                far; a missing period answers 404 listing the available ones.
            quarter: Fiscal quarter to retrieve. Defaults to latest available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/incomestatement"),
            query_params=[
                param[str]("ticker", ticker), param[int | None]("year", year), param[int | None]("quarter", quarter)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1IncomestatementResponse],
            error_mapper=incomestatement_error_mapper,
            request_options=request_options,
        )

    async def incometax(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1IncometaxResponse, IncometaxErrorBody]:
        """Get federal income tax brackets for a specific country and year.

        Args:
            country: The country code (currently only 'US' is supported)
            year: The tax year to retrieve brackets for. Defaults to the previous year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/incometax"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1IncometaxResponse],
            error_mapper=incometax_error_mapper,
            request_options=request_options,
        )

    async def incometaxcalculator(
        self,
        income: float,
        rate: float,
        *,
        deduction: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1IncometaxcalculatorResponse, IncometaxcalculatorErrorBody]:
        """Calculate income tax using a custom tax rate. Useful for simple flat-rate tax calculations or estimations.

        Args:
            income: Gross annual income in USD
            rate: Tax rate as a percentage (e.g., 22 for 22%)
            deduction: Optional deduction amount to subtract from income before calculating tax
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/incometaxcalculator"),
            query_params=[
                param[float]("income", income), param[float]("rate", rate), param[float | None]("deduction", deduction)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1IncometaxcalculatorResponse],
            error_mapper=incometaxcalculator_error_mapper,
            request_options=request_options,
        )

    async def inflation(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1InflationResponse, InflationErrorBody]:
        """Get the annual inflation rate and CPI data for a specific country and year.

        Args:
            country: ISO 2-letter country code (e.g., US, GB, JP, DE, BR)
            year: The year to retrieve data for. Defaults to the previous year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/inflation"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1InflationResponse],
            error_mapper=inflation_error_mapper,
            request_options=request_options,
        )

    async def insidertrading(
        self,
        ticker: str,
        *,
        type_: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1InsidertradingResponse, InsidertradingErrorBody]:
        """Get recent SEC Form 4 insider transactions for a company by ticker symbol. Optionally filter to buys or sells
        and limit the number of transactions returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            type_: Filter to open-market buys or sells (buy or sell).
            limit: Number of transactions to return (1-25). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/insidertrading"),
            query_params=[
                param[str]("ticker", ticker), param[str | None]("type", type_), param[int | None]("limit", limit)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1InsidertradingResponse],
            error_mapper=insidertrading_error_mapper,
            request_options=request_options,
        )

    async def interestrate(
        self, country: str, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1InterestrateResponse, InterestrateErrorBody]:
        """Get the central bank policy interest rate for a specific country. Omit ``date`` for the current rate, or pass
        a YYYY-MM month for a historical rate (available from 2000 onwards).

        Args:
            country: 2-letter country code
            date: Optional month in YYYY-MM format for a historical lookup. Omit for the current rate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/interestrate"),
            query_params=[param[str]("country", country), param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1InterestrateResponse],
            error_mapper=interestrate_error_mapper,
            request_options=request_options,
        )

    async def jobsreport(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1JobsreportResponse, JobsreportErrorBody]:
        """Get current or historical employment statistics

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/jobsreport"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1JobsreportResponse],
            error_mapper=jobsreport_error_mapper,
            request_options=request_options,
        )

    async def loanpaymentcalculator(
        self,
        body: V1LoanpaymentcalculatorRequest | V1LoanpaymentcalculatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LoanpaymentcalculatorResponse, LoanpaymentcalculatorErrorBody]:
        """Calculate loan payments based on the loan amount, interest rate, and loan term

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/loanpaymentcalculator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LoanpaymentcalculatorRequest | V1LoanpaymentcalculatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LoanpaymentcalculatorResponse],
            error_mapper=loanpaymentcalculator_error_mapper,
            request_options=request_options,
        )

    async def minimumwage(
        self, state: str, *, year: float | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1MinimumwageResponse, MinimumwageErrorBody]:
        """Get minimum wage rates for all states or a specific state

        Args:
            state: 2-letter state code (e.g., CA, NY)
            year: Year to get minimum wage for (e.g., 2020). Defaults to current year.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/minimumwage"),
            query_params=[param[str]("state", state), param[float | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MinimumwageResponse],
            error_mapper=minimumwage_error_mapper,
            request_options=request_options,
        )

    async def mortgagecalculator(
        self,
        body: V1MortgagecalculatorRequest | V1MortgagecalculatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MortgagecalculatorResponse, MortgagecalculatorErrorBody]:
        """Calculate mortgage payments based on the loan amount, interest rate, and loan term

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/mortgagecalculator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MortgagecalculatorRequest | V1MortgagecalculatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MortgagecalculatorResponse],
            error_mapper=mortgagecalculator_error_mapper,
            request_options=request_options,
        )

    async def mortgagerate(
        self,
        type_: str,
        *,
        year: int | None = None,
        month: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MortgagerateResponse, MortgagerateErrorBody]:
        """Get the current or historical mortgage rate for a specific type.

        Args:
            type_: The mortgage type
            year: Year to retrieve rates for (1971-present). Requires month parameter.
            month: Month to retrieve rates for (1-12). Required when year is specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/mortgagerate"),
            query_params=[
                param[str]("type", type_), param[int | None]("year", year), param[int | None]("month", month)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MortgagerateResponse],
            error_mapper=mortgagerate_error_mapper,
            request_options=request_options,
        )

    async def nationaldebt(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1NationaldebtResponse, NationaldebtErrorBody]:
        """Get current or historical US national debt data

        Args:
            date: Optional date in YYYY-MM-DD format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/nationaldebt"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1NationaldebtResponse],
            error_mapper=nationaldebt_error_mapper,
            request_options=request_options,
        )

    async def palladiumprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PalladiumpriceResponse, PalladiumpriceErrorBody]:
        """Get the current price of palladium. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/palladiumprice"),
            query_params=[param[str | None]("currency", currency), param[bool | None]("hourly", hourly)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PalladiumpriceResponse],
            error_mapper=palladiumprice_error_mapper,
            request_options=request_options,
        )

    async def platinumprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PlatinumpriceResponse, PlatinumpriceErrorBody]:
        """Get the current price of platinum. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/platinumprice"),
            query_params=[param[str | None]("currency", currency), param[bool | None]("hourly", hourly)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PlatinumpriceResponse],
            error_mapper=platinumprice_error_mapper,
            request_options=request_options,
        )

    async def population(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PopulationResponse, PopulationErrorBody]:
        """Get population data for a specific country. Returns latest data by default, or data for a specific year if
        specified.

        Args:
            country: ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR)
            year: Specific year to retrieve data for (1960-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/population"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PopulationResponse],
            error_mapper=population_error_mapper,
            request_options=request_options,
        )

    async def purchasingpower(
        self,
        amount: float,
        from_: str,
        *,
        to: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PurchasingpowerResponse, PurchasingpowerErrorBody]:
        """Calculate the inflation-adjusted value of money between two periods

        Args:
            amount: The dollar amount to convert
            from_: Starting year (YYYY format, data available from 1947)
            to: Ending year (YYYY format). Omit for current.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/purchasingpower"),
            query_params=[param[float]("amount", amount), param[str]("from", from_), param[str | None]("to", to)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PurchasingpowerResponse],
            error_mapper=purchasingpower_error_mapper,
            request_options=request_options,
        )

    async def routinglookup(
        self, routing: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1RoutinglookupResponse, RoutinglookupErrorBody]:
        """Lookup routing number information based on the routing number

        Args:
            routing: The routing number to lookup information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/routinglookup"),
            query_params=[param[str]("routing", routing)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RoutinglookupResponse],
            error_mapper=routinglookup_error_mapper,
            request_options=request_options,
        )

    async def salestax(
        self, zip_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1SalestaxResponse, SalestaxErrorBody]:
        """Lookup the sales tax rate of a location based on the zip code

        Args:
            zip_: The zip code for which you want to get the sales tax rate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/salestax"),
            query_params=[param[str]("zip", zip_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SalestaxResponse],
            error_mapper=salestax_error_mapper,
            request_options=request_options,
        )

    async def salestaxcalculator(
        self,
        amount: float,
        *,
        zip_: str | None = None,
        state: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SalestaxcalculatorResponse, SalestaxcalculatorErrorBody]:
        """Calculate sales tax for a purchase amount at a specific US location

        Args:
            amount: Purchase amount to calculate tax on
            zip_: Valid US 5-digit ZIP code (required unless state is given)
            state: 2-letter US state code (e.g., CA, NY, TX); used when zip is not given, state rate only
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/salestaxcalculator"),
            query_params=[
                param[float]("amount", amount), param[str | None]("zip", zip_), param[str | None]("state", state)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SalestaxcalculatorResponse],
            error_mapper=salestaxcalculator_error_mapper,
            request_options=request_options,
        )

    async def sanctionscreening(
        self,
        name: str,
        *,
        threshold: float | None = None,
        limit: float | None = None,
        type_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SanctionscreeningResponse, SanctionscreeningErrorBody]:
        """Screen a person or company name against the OFAC Specially Designated Nationals list. Returns scored matches,
        or an empty result set when the name is clear.

        Args:
            name: The person or company name to screen (minimum 3 characters)
            threshold: Minimum match score to return, between 0.5 and 1. Lower catches more names but returns more false
                positives
            limit: Maximum number of matches to return (1-50)
            type_: Restrict screening to one entry type
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sanctionscreening"),
            query_params=[
                param[str]("name", name),
                param[float | None]("threshold", threshold),
                param[float | None]("limit", limit),
                param[str | None]("type", type_),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SanctionscreeningResponse],
            error_mapper=sanctionscreening_error_mapper,
            request_options=request_options,
        )

    async def savingsbonds(
        self, *, period: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1SavingsbondsResponse, SavingsbondsErrorBody]:
        """Get current I-Bond rates and historical rate data

        Args:
            period: Specific issue period to lookup (YYYY-MM format, e.g., 2024-11). Omit for current rates.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/savingsbonds"),
            query_params=[param[str | None]("period", period)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SavingsbondsResponse],
            error_mapper=savingsbonds_error_mapper,
            request_options=request_options,
        )

    async def secfilings(
        self,
        ticker: str,
        *,
        form: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SecfilingsResponse, SecfilingsErrorBody]:
        """Get the recent SEC EDGAR filing history for a company by ticker symbol. Optionally filter to a specific form
        type and limit the number of filings returned.

        Args:
            ticker: Stock ticker symbol (e.g. AAPL, MSFT, ADBE)
            form: Filter to a single form type (e.g. 10-K, 10-Q, 8-K, 4).
            limit: Number of filings to return (1-50). Defaults to 5.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/secfilings"),
            query_params=[
                param[str]("ticker", ticker), param[str | None]("form", form), param[int | None]("limit", limit)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SecfilingsResponse],
            error_mapper=secfilings_error_mapper,
            request_options=request_options,
        )

    async def silverprice(
        self,
        *,
        currency: str | None = None,
        hourly: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SilverpriceResponse, SilverpriceErrorBody]:
        """Get the current price of silver. You can optionally specify a currency (defaults to USD).

        Args:
            currency: The currency to get the price in
            hourly: Include hourly price data for the past 24 hours
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/silverprice"),
            query_params=[param[str | None]("currency", currency), param[bool | None]("hourly", hourly)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SilverpriceResponse],
            error_mapper=silverprice_error_mapper,
            request_options=request_options,
        )

    async def stockexchange(
        self, mic: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1StockexchangeResponse, StockexchangeErrorBody]:
        """Get stock exchange details by its Market Identifier Code (MIC).

        Args:
            mic: The 4-character Market Identifier Code (e.g., XNYS for NYSE, XNAS for NASDAQ)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stockexchange"),
            query_params=[param[str]("mic", mic)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1StockexchangeResponse],
            error_mapper=stockexchange_error_mapper,
            request_options=request_options,
        )

    async def stockmarketopentimes(
        self, exchange: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1StockmarketopentimesResponse, StockmarketopentimesErrorBody]:
        """Get the open times of the stock market on the current date of the request

        Args:
            exchange: The stock exchange code
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stockmarketopentimes"),
            query_params=[param[str]("exchange", exchange)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1StockmarketopentimesResponse],
            error_mapper=stockmarketopentimes_error_mapper,
            request_options=request_options,
        )

    async def swiftlookup(
        self, swift: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1SwiftlookupResponse, SwiftlookupErrorBody]:
        """Lookup SWIFT code information based on the SWIFT code

        Args:
            swift: The SWIFT code to lookup information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/swiftlookup"),
            query_params=[param[str]("swift", swift)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SwiftlookupResponse],
            error_mapper=swiftlookup_error_mapper,
            request_options=request_options,
        )

    async def tradebalance(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1TradebalanceResponse, TradebalanceErrorBody]:
        """Get trade balance data

        Args:
            date: Optional date in YYYY-MM format for historical lookup. Omit for current data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tradebalance"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TradebalanceResponse],
            error_mapper=tradebalance_error_mapper,
            request_options=request_options,
        )

    async def treasuryyields(
        self,
        *,
        date: str | None = None,
        type_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TreasuryyieldsResponse, TreasuryyieldsErrorBody]:
        """Get current or historical Treasury securities interest rates

        Args:
            date: Optional month in YYYY-MM format for a recent-month lookup (recent months only). Omit for current
                data.
            type_: Optional filter for a single point. Legacy security types: bills, notes, bonds, tips, frn. Or a
                maturity: 1mo, 3mo, 6mo, 1yr, 2yr, 3yr, 5yr, 7yr, 10yr, 20yr, 30yr
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/treasuryyields"),
            query_params=[param[str | None]("date", date), param[str | None]("type", type_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TreasuryyieldsResponse],
            error_mapper=treasuryyields_error_mapper,
            request_options=request_options,
        )

    async def unemployment(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1UnemploymentResponse, UnemploymentErrorBody]:
        """Get the current or historical unemployment rate for a specific country.

        Args:
            country: ISO country code (2 or 3 letter). Examples: US, USA, DE, DEU, GB, GBR
            year: Specific year to retrieve data for (1991-present). Returns latest if not specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/unemployment"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UnemploymentResponse],
            error_mapper=unemployment_error_mapper,
            request_options=request_options,
        )

    async def vatrates(
        self,
        country: str,
        *,
        date: str | None = None,
        postcode: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1VatratesResponse, VatratesErrorBody]:
        """Returns VAT rates for a country. Optionally specify a date for historical rates or a postcode for regional
        exceptions.

        Args:
            country: ISO 2-letter country code (e.g., DE, FR, ES)
            date: Look up rate effective on this date (YYYY-MM-DD). Defaults to today.
            postcode: Check for regional exceptions (e.g., Canary Islands, Ceuta)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/vatrates"),
            query_params=[
                param[str]("country", country), param[str | None]("date", date), param[str | None]("postcode", postcode)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1VatratesResponse],
            error_mapper=vatrates_error_mapper,
            request_options=request_options,
        )
