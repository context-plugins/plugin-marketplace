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
from ..errors.credit_get_credit_balance_error import (
    CreditGetCreditBalanceErrorBody,
    credit_get_credit_balance_error_mapper,
)
from ..errors.credit_quote_billable_usage_error import (
    CreditQuoteBillableUsageErrorBody,
    credit_quote_billable_usage_error_mapper,
)
from ..models.api_v1_billing_billable_usage_quote_request import (
    ApiV1BillingBillableUsageQuoteRequest,
    ApiV1BillingBillableUsageQuoteRequestDict,
)
from ..models.api_v1_billing_billable_usage_quote_response import ApiV1BillingBillableUsageQuoteResponse
from ..models.api_v1_billing_credits_balance_response import ApiV1BillingCreditsBalanceResponse
from ..server.server import Server


class Credit:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CreditWithRawResponse(client, server, auth)

    def credit_get_credit_balance(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1BillingCreditsBalanceResponse:
        """Retrieve your organization's prepaid credit balance: settled funds, in-flight holds, and the available amount
        metered X actions draw from.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1BillingCreditsBalance400Error1 |
                ApiV1BillingCreditsBalance401Error1 | ApiV1BillingCreditsBalance403Error1 |
                ApiV1BillingCreditsBalance404Error1 | ApiV1BillingCreditsBalance429Error1 |
                ApiV1BillingCreditsBalance500Error1 | ApiV1BillingCreditsBalance502Error1 |
                ApiV1BillingCreditsBalance503Error1 | ApiV1BillingCreditsBalance504Error1 | RawError``."""
        return unwrap(self._with_raw_response.credit_get_credit_balance(request_options=request_options))

    def credit_quote_billable_usage(
        self,
        *,
        body: ApiV1BillingBillableUsageQuoteRequest | ApiV1BillingBillableUsageQuoteRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1BillingBillableUsageQuoteResponse:
        """Estimate the credit cost of a metered X action (post publishing, analytics reads, imports) before running it,
        and see whether your current balance covers it.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1BillingBillableUsageQuote400Error1 |
                ApiV1BillingBillableUsageQuote401Error1 | ApiV1BillingBillableUsageQuote403Error1 |
                ApiV1BillingBillableUsageQuote404Error1 | ApiV1BillingBillableUsageQuote429Error1 |
                ApiV1BillingBillableUsageQuote500Error1 | ApiV1BillingBillableUsageQuote502Error1 |
                ApiV1BillingBillableUsageQuote503Error1 | ApiV1BillingBillableUsageQuote504Error1 | RawError``."""
        return unwrap(self._with_raw_response.credit_quote_billable_usage(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> CreditWithRawResponse:
        return self._with_raw_response


class AsyncCredit:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCreditWithRawResponse(client, server, auth)

    async def credit_get_credit_balance(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1BillingCreditsBalanceResponse:
        """Retrieve your organization's prepaid credit balance: settled funds, in-flight holds, and the available amount
        metered X actions draw from.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1BillingCreditsBalance400Error1 |
                ApiV1BillingCreditsBalance401Error1 | ApiV1BillingCreditsBalance403Error1 |
                ApiV1BillingCreditsBalance404Error1 | ApiV1BillingCreditsBalance429Error1 |
                ApiV1BillingCreditsBalance500Error1 | ApiV1BillingCreditsBalance502Error1 |
                ApiV1BillingCreditsBalance503Error1 | ApiV1BillingCreditsBalance504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.credit_get_credit_balance(request_options=request_options))

    async def credit_quote_billable_usage(
        self,
        *,
        body: ApiV1BillingBillableUsageQuoteRequest | ApiV1BillingBillableUsageQuoteRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1BillingBillableUsageQuoteResponse:
        """Estimate the credit cost of a metered X action (post publishing, analytics reads, imports) before running it,
        and see whether your current balance covers it.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1BillingBillableUsageQuote400Error1 |
                ApiV1BillingBillableUsageQuote401Error1 | ApiV1BillingBillableUsageQuote403Error1 |
                ApiV1BillingBillableUsageQuote404Error1 | ApiV1BillingBillableUsageQuote429Error1 |
                ApiV1BillingBillableUsageQuote500Error1 | ApiV1BillingBillableUsageQuote502Error1 |
                ApiV1BillingBillableUsageQuote503Error1 | ApiV1BillingBillableUsageQuote504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.credit_quote_billable_usage(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCreditWithRawResponse:
        return self._with_raw_response


class CreditWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def credit_get_credit_balance(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1BillingCreditsBalanceResponse, CreditGetCreditBalanceErrorBody]:
        """Retrieve your organization's prepaid credit balance: settled funds, in-flight holds, and the available amount
        metered X actions draw from.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/billing/credits/balance"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1BillingCreditsBalanceResponse],
            error_mapper=credit_get_credit_balance_error_mapper,
            request_options=request_options,
        )

    def credit_quote_billable_usage(
        self,
        *,
        body: ApiV1BillingBillableUsageQuoteRequest | ApiV1BillingBillableUsageQuoteRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1BillingBillableUsageQuoteResponse, CreditQuoteBillableUsageErrorBody]:
        """Estimate the credit cost of a metered X action (post publishing, analytics reads, imports) before running it,
        and see whether your current balance covers it.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/billing/billable-usage/quote"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1BillingBillableUsageQuoteRequest | ApiV1BillingBillableUsageQuoteRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1BillingBillableUsageQuoteResponse],
            error_mapper=credit_quote_billable_usage_error_mapper,
            request_options=request_options,
        )


class AsyncCreditWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def credit_get_credit_balance(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1BillingCreditsBalanceResponse, CreditGetCreditBalanceErrorBody]:
        """Retrieve your organization's prepaid credit balance: settled funds, in-flight holds, and the available amount
        metered X actions draw from.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/billing/credits/balance"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1BillingCreditsBalanceResponse],
            error_mapper=credit_get_credit_balance_error_mapper,
            request_options=request_options,
        )

    async def credit_quote_billable_usage(
        self,
        *,
        body: ApiV1BillingBillableUsageQuoteRequest | ApiV1BillingBillableUsageQuoteRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1BillingBillableUsageQuoteResponse, CreditQuoteBillableUsageErrorBody]:
        """Estimate the credit cost of a metered X action (post publishing, analytics reads, imports) before running it,
        and see whether your current balance covers it.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/billing/billable-usage/quote"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1BillingBillableUsageQuoteRequest | ApiV1BillingBillableUsageQuoteRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1BillingBillableUsageQuoteResponse],
            error_mapper=credit_quote_billable_usage_error_mapper,
            request_options=request_options,
        )
