from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.get_billing_credits_infos_error import (
    GetBillingCreditsInfosErrorBody,
    get_billing_credits_infos_error_mapper,
)
from ..errors.get_billing_credits_invoiced_error import (
    GetBillingCreditsInvoicedErrorBody,
    get_billing_credits_invoiced_error_mapper,
)
from ..errors.get_billing_credits_usage_error import (
    GetBillingCreditsUsageErrorBody,
    get_billing_credits_usage_error_mapper,
)
from ..models.billing_credit_infos import BillingCreditInfos
from ..models.billing_credit_usage import BillingCreditUsage
from ..server.server import Server


class BillingAndCredits:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BillingAndCreditsWithRawResponse(client, server, auth)

    def get_billing_credits_infos(self, *, request_options: RequestOptionsOrDict | None = None) -> BillingCreditInfos:
        """Get the list of credit usage information associated with specific endpoints

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Not found Too many requests Internal server error Service unavailable ``error`` is
                ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(self._with_raw_response.get_billing_credits_infos(request_options=request_options))

    def get_billing_credits_invoiced(
        self, *, period: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> BillingCreditUsage:
        """Get invoiced credit details for the most recent billing period or a specified time period

        Args:
            period: Format YYYY, YYYYMM, YYYYMMDD is supported. If not specified the last invoiced period is used by
                default
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_billing_credits_invoiced(period=period, request_options=request_options)
        )

    def get_billing_credits_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> BillingCreditUsage:
        """Get credit usage list and details for current billing period

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(self._with_raw_response.get_billing_credits_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> BillingAndCreditsWithRawResponse:
        return self._with_raw_response


class AsyncBillingAndCredits:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBillingAndCreditsWithRawResponse(client, server, auth)

    async def get_billing_credits_infos(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BillingCreditInfos:
        """Get the list of credit usage information associated with specific endpoints

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Not found Too many requests Internal server error Service unavailable ``error`` is
                ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(await self._with_raw_response.get_billing_credits_infos(request_options=request_options))

    async def get_billing_credits_invoiced(
        self, *, period: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BillingCreditUsage:
        """Get invoiced credit details for the most recent billing period or a specified time period

        Args:
            period: Format YYYY, YYYYMM, YYYYMMDD is supported. If not specified the last invoiced period is used by
                default
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_billing_credits_invoiced(period=period, request_options=request_options)
        )

    async def get_billing_credits_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BillingCreditUsage:
        """Get credit usage list and details for current billing period

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error Service
                unavailable ``error`` is ``ProblemSkribbleAdditionalInformationApi | RawError``."""
        return unwrap(await self._with_raw_response.get_billing_credits_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBillingAndCreditsWithRawResponse:
        return self._with_raw_response


class BillingAndCreditsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_billing_credits_infos(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BillingCreditInfos, GetBillingCreditsInfosErrorBody]:
        """Get the list of credit usage information associated with specific endpoints

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/billing/credits/infos"),
            decoder=json_decoder[BillingCreditInfos],
            error_mapper=get_billing_credits_infos_error_mapper,
            request_options=request_options,
        )

    def get_billing_credits_invoiced(
        self, *, period: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BillingCreditUsage, GetBillingCreditsInvoicedErrorBody]:
        """Get invoiced credit details for the most recent billing period or a specified time period

        Args:
            period: Format YYYY, YYYYMM, YYYYMMDD is supported. If not specified the last invoiced period is used by
                default
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/billing/credits/invoiced"),
            query_params=[param[str | None]("period", period)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[BillingCreditUsage],
            error_mapper=get_billing_credits_invoiced_error_mapper,
            request_options=request_options,
        )

    def get_billing_credits_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BillingCreditUsage, GetBillingCreditsUsageErrorBody]:
        """Get credit usage list and details for current billing period

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/billing/credits/usage"),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[BillingCreditUsage],
            error_mapper=get_billing_credits_usage_error_mapper,
            request_options=request_options,
        )


class AsyncBillingAndCreditsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_billing_credits_infos(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BillingCreditInfos, GetBillingCreditsInfosErrorBody]:
        """Get the list of credit usage information associated with specific endpoints

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/billing/credits/infos"),
            decoder=async_json_decoder[BillingCreditInfos],
            error_mapper=get_billing_credits_infos_error_mapper,
            request_options=request_options,
        )

    async def get_billing_credits_invoiced(
        self, *, period: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BillingCreditUsage, GetBillingCreditsInvoicedErrorBody]:
        """Get invoiced credit details for the most recent billing period or a specified time period

        Args:
            period: Format YYYY, YYYYMM, YYYYMMDD is supported. If not specified the last invoiced period is used by
                default
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/billing/credits/invoiced"),
            query_params=[param[str | None]("period", period)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[BillingCreditUsage],
            error_mapper=get_billing_credits_invoiced_error_mapper,
            request_options=request_options,
        )

    async def get_billing_credits_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BillingCreditUsage, GetBillingCreditsUsageErrorBody]:
        """Get credit usage list and details for current billing period

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_additional_information_api("/billing/credits/usage"),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[BillingCreditUsage],
            error_mapper=get_billing_credits_usage_error_mapper,
            request_options=request_options,
        )
