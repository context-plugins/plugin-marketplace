from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_credit_currency_error import CreateCreditCurrencyErrorBody, create_credit_currency_error_mapper
from ..errors.list_credit_currencies_error import ListCreditCurrenciesErrorBody, list_credit_currencies_error_mapper
from ..errors.update_credit_currency_by_id_error import (
    UpdateCreditCurrencyByIdErrorBody,
    update_credit_currency_by_id_error_mapper,
)
from ..models.create_credit_currency_request import CreateCreditCurrencyRequest, CreateCreditCurrencyRequestDict
from ..models.credit_currency import CreditCurrency
from ..models.credit_currency_list_response import CreditCurrencyListResponse
from ..models.enums.credits_currencies_get_parameters_status import (
    CreditsCurrenciesGetParametersStatus,
    CreditsCurrenciesGetParametersStatusOrStr,
)
from ..models.update_credit_currency_request import UpdateCreditCurrencyRequest, UpdateCreditCurrencyRequestDict
from ..server.server import Server


class Credits:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CreditsWithRawResponse(client, server)

    def create_credit_currency(
        self,
        authorization: str,
        *,
        body: CreateCreditCurrencyRequest | CreateCreditCurrencyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditCurrency:
        """Creates a credit currency for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_credit_currency(authorization, body=body, request_options=request_options)
        )

    def list_credit_currencies(
        self,
        authorization: str,
        *,
        status: CreditsCurrenciesGetParametersStatusOrStr | None = CreditsCurrenciesGetParametersStatus.ALL,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditCurrencyListResponse:
        """List credit currencies for the organization. Includes active and archived currencies by default; use the
        status query parameter to filter.

        Args:
            authorization: API Key authentication using Bearer token
            status: Filter credit currencies by status. Defaults to ``all`` so archived currencies remain readable after
                they are archived.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_credit_currencies(
                authorization, status=status, request_options=request_options
            ),
        )

    def update_credit_currency_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateCreditCurrencyRequest | UpdateCreditCurrencyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreditCurrency:
        """Update a credit currency description or set its active/archive status.

        Args:
            id_: Credit currency ID.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_credit_currency_by_id(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CreditsWithRawResponse:
        return self._with_raw_response


class AsyncCredits:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCreditsWithRawResponse(client, server)

    async def create_credit_currency(
        self,
        authorization: str,
        *,
        body: CreateCreditCurrencyRequest | CreateCreditCurrencyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditCurrency:
        """Creates a credit currency for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_credit_currency(
                authorization, body=body, request_options=request_options
            ),
        )

    async def list_credit_currencies(
        self,
        authorization: str,
        *,
        status: CreditsCurrenciesGetParametersStatusOrStr | None = CreditsCurrenciesGetParametersStatus.ALL,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditCurrencyListResponse:
        """List credit currencies for the organization. Includes active and archived currencies by default; use the
        status query parameter to filter.

        Args:
            authorization: API Key authentication using Bearer token
            status: Filter credit currencies by status. Defaults to ``all`` so archived currencies remain readable after
                they are archived.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_credit_currencies(
                authorization, status=status, request_options=request_options
            ),
        )

    async def update_credit_currency_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateCreditCurrencyRequest | UpdateCreditCurrencyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreditCurrency:
        """Update a credit currency description or set its active/archive status.

        Args:
            id_: Credit currency ID.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_credit_currency_by_id(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCreditsWithRawResponse:
        return self._with_raw_response


class CreditsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_credit_currency(
        self,
        authorization: str,
        *,
        body: CreateCreditCurrencyRequest | CreateCreditCurrencyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditCurrency, CreateCreditCurrencyErrorBody]:
        """Creates a credit currency for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/credits/currencies"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCreditCurrencyRequest | CreateCreditCurrencyRequestDict | None](body),
            decoder=json_decoder[CreditCurrency],
            error_mapper=create_credit_currency_error_mapper,
            request_options=request_options,
        )

    def list_credit_currencies(
        self,
        authorization: str,
        *,
        status: CreditsCurrenciesGetParametersStatusOrStr | None = CreditsCurrenciesGetParametersStatus.ALL,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditCurrencyListResponse, ListCreditCurrenciesErrorBody]:
        """List credit currencies for the organization. Includes active and archived currencies by default; use the
        status query parameter to filter.

        Args:
            authorization: API Key authentication using Bearer token
            status: Filter credit currencies by status. Defaults to ``all`` so archived currencies remain readable after
                they are archived.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/credits/currencies"),
            query_params=[param[CreditsCurrenciesGetParametersStatusOrStr | None]("status", status)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[CreditCurrencyListResponse],
            error_mapper=list_credit_currencies_error_mapper,
            request_options=request_options,
        )

    def update_credit_currency_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateCreditCurrencyRequest | UpdateCreditCurrencyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditCurrency, UpdateCreditCurrencyByIdErrorBody]:
        """Update a credit currency description or set its active/archive status.

        Args:
            id_: Credit currency ID.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_reference_analytics_experimental_api("/credits/currencies/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCreditCurrencyRequest | UpdateCreditCurrencyRequestDict | None](body),
            decoder=json_decoder[CreditCurrency],
            error_mapper=update_credit_currency_by_id_error_mapper,
            request_options=request_options,
        )


class AsyncCreditsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_credit_currency(
        self,
        authorization: str,
        *,
        body: CreateCreditCurrencyRequest | CreateCreditCurrencyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditCurrency, CreateCreditCurrencyErrorBody]:
        """Creates a credit currency for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/credits/currencies"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCreditCurrencyRequest | CreateCreditCurrencyRequestDict | None](body),
            decoder=async_json_decoder[CreditCurrency],
            error_mapper=create_credit_currency_error_mapper,
            request_options=request_options,
        )

    async def list_credit_currencies(
        self,
        authorization: str,
        *,
        status: CreditsCurrenciesGetParametersStatusOrStr | None = CreditsCurrenciesGetParametersStatus.ALL,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditCurrencyListResponse, ListCreditCurrenciesErrorBody]:
        """List credit currencies for the organization. Includes active and archived currencies by default; use the
        status query parameter to filter.

        Args:
            authorization: API Key authentication using Bearer token
            status: Filter credit currencies by status. Defaults to ``all`` so archived currencies remain readable after
                they are archived.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/credits/currencies"),
            query_params=[param[CreditsCurrenciesGetParametersStatusOrStr | None]("status", status)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[CreditCurrencyListResponse],
            error_mapper=list_credit_currencies_error_mapper,
            request_options=request_options,
        )

    async def update_credit_currency_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateCreditCurrencyRequest | UpdateCreditCurrencyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreditCurrency, UpdateCreditCurrencyByIdErrorBody]:
        """Update a credit currency description or set its active/archive status.

        Args:
            id_: Credit currency ID.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_reference_analytics_experimental_api("/credits/currencies/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCreditCurrencyRequest | UpdateCreditCurrencyRequestDict | None](body),
            decoder=async_json_decoder[CreditCurrency],
            error_mapper=update_credit_currency_by_id_error_mapper,
            request_options=request_options,
        )
