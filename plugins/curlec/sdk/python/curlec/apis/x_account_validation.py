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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.fetch_fund_account_validation_error import (
    FetchFundAccountValidationErrorBody,
    fetch_fund_account_validation_error_mapper,
)
from ..errors.list_fund_account_validations_error import (
    ListFundAccountValidationsErrorBody,
    list_fund_account_validations_error_mapper,
)
from ..errors.validate_fund_account_error import ValidateFundAccountErrorBody, validate_fund_account_error_mapper
from ..models.fund_account_validation import FundAccountValidation
from ..models.fund_accounts_validations_request import (
    FundAccountsValidationsRequest,
    FundAccountsValidationsRequestDict,
)
from ..models.fund_accounts_validations_response import FundAccountsValidationsResponse
from ..server.server import Server


class XAccountValidation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = XAccountValidationWithRawResponse(client, server, auth)

    def fetch_fund_account_validation(
        self, validation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FundAccountValidation:
        """Fetch details of a specific fund account validation by its ID.

        Args:
            validation_id: Unique identifier of the fund account validation (e.g. ``fav_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validation details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_fund_account_validation(validation_id, request_options=request_options)
        )

    def list_fund_account_validations(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FundAccountsValidationsResponse:
        """List all fund account validation records, optionally filtered by date range.

        Args:
            from_: Unix timestamp. Only validations created from this timestamp onwards are returned.
            to: Unix timestamp. Only validations created before this timestamp are returned.
            count: Number of validation records to return. Default: 10. Maximum: 100.
            skip: Number of validation records to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of validations

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_fund_account_validations(
                from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    def validate_fund_account(
        self,
        body: FundAccountsValidationsRequest | FundAccountsValidationsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FundAccountValidation:
        """Three validation methods: (1) penny drop for bank accounts — sends Re.1 to verify; (2) penny drop for VPA —
        sends Re.1 to UPI address; (3) reverse penny drop — sends UPI intent URL to customer who initiates payment.
        Live-mode only, RazorpayX Lite account required. Composite validation (creates Contact + Fund Account inline)
        supported via validation_type field.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validation created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.validate_fund_account(body, request_options=request_options))

    @property
    def with_raw_response(self) -> XAccountValidationWithRawResponse:
        return self._with_raw_response


class AsyncXAccountValidation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncXAccountValidationWithRawResponse(client, server, auth)

    async def fetch_fund_account_validation(
        self, validation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FundAccountValidation:
        """Fetch details of a specific fund account validation by its ID.

        Args:
            validation_id: Unique identifier of the fund account validation (e.g. ``fav_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validation details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_fund_account_validation(validation_id, request_options=request_options)
        )

    async def list_fund_account_validations(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FundAccountsValidationsResponse:
        """List all fund account validation records, optionally filtered by date range.

        Args:
            from_: Unix timestamp. Only validations created from this timestamp onwards are returned.
            to: Unix timestamp. Only validations created before this timestamp are returned.
            count: Number of validation records to return. Default: 10. Maximum: 100.
            skip: Number of validation records to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of validations

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_fund_account_validations(
                from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    async def validate_fund_account(
        self,
        body: FundAccountsValidationsRequest | FundAccountsValidationsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FundAccountValidation:
        """Three validation methods: (1) penny drop for bank accounts — sends Re.1 to verify; (2) penny drop for VPA —
        sends Re.1 to UPI address; (3) reverse penny drop — sends UPI intent URL to customer who initiates payment.
        Live-mode only, RazorpayX Lite account required. Composite validation (creates Contact + Fund Account inline)
        supported via validation_type field.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validation created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.validate_fund_account(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncXAccountValidationWithRawResponse:
        return self._with_raw_response


class XAccountValidationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def fetch_fund_account_validation(
        self, validation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FundAccountValidation, FetchFundAccountValidationErrorBody]:
        """Fetch details of a specific fund account validation by its ID.

        Args:
            validation_id: Unique identifier of the fund account validation (e.g. ``fav_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/fund_accounts/validations/{validation_id}"),
            path_params=[param[str]("validation_id", validation_id)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[FundAccountValidation],
            error_mapper=fetch_fund_account_validation_error_mapper,
            request_options=request_options,
        )

    def list_fund_account_validations(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FundAccountsValidationsResponse, ListFundAccountValidationsErrorBody]:
        """List all fund account validation records, optionally filtered by date range.

        Args:
            from_: Unix timestamp. Only validations created from this timestamp onwards are returned.
            to: Unix timestamp. Only validations created before this timestamp are returned.
            count: Number of validation records to return. Default: 10. Maximum: 100.
            skip: Number of validation records to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/fund_accounts/validations"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[FundAccountsValidationsResponse],
            error_mapper=list_fund_account_validations_error_mapper,
            request_options=request_options,
        )

    def validate_fund_account(
        self,
        body: FundAccountsValidationsRequest | FundAccountsValidationsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FundAccountValidation, ValidateFundAccountErrorBody]:
        """Three validation methods: (1) penny drop for bank accounts — sends Re.1 to verify; (2) penny drop for VPA —
        sends Re.1 to UPI address; (3) reverse penny drop — sends UPI intent URL to customer who initiates payment.
        Live-mode only, RazorpayX Lite account required. Composite validation (creates Contact + Fund Account inline)
        supported via validation_type field.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/fund_accounts/validations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FundAccountsValidationsRequest | FundAccountsValidationsRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[FundAccountValidation],
            error_mapper=validate_fund_account_error_mapper,
            request_options=request_options,
        )


class AsyncXAccountValidationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def fetch_fund_account_validation(
        self, validation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FundAccountValidation, FetchFundAccountValidationErrorBody]:
        """Fetch details of a specific fund account validation by its ID.

        Args:
            validation_id: Unique identifier of the fund account validation (e.g. ``fav_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/fund_accounts/validations/{validation_id}"),
            path_params=[param[str]("validation_id", validation_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[FundAccountValidation],
            error_mapper=fetch_fund_account_validation_error_mapper,
            request_options=request_options,
        )

    async def list_fund_account_validations(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FundAccountsValidationsResponse, ListFundAccountValidationsErrorBody]:
        """List all fund account validation records, optionally filtered by date range.

        Args:
            from_: Unix timestamp. Only validations created from this timestamp onwards are returned.
            to: Unix timestamp. Only validations created before this timestamp are returned.
            count: Number of validation records to return. Default: 10. Maximum: 100.
            skip: Number of validation records to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/fund_accounts/validations"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[FundAccountsValidationsResponse],
            error_mapper=list_fund_account_validations_error_mapper,
            request_options=request_options,
        )

    async def validate_fund_account(
        self,
        body: FundAccountsValidationsRequest | FundAccountsValidationsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FundAccountValidation, ValidateFundAccountErrorBody]:
        """Three validation methods: (1) penny drop for bank accounts — sends Re.1 to verify; (2) penny drop for VPA —
        sends Re.1 to UPI address; (3) reverse penny drop — sends UPI intent URL to customer who initiates payment.
        Live-mode only, RazorpayX Lite account required. Composite validation (creates Contact + Fund Account inline)
        supported via validation_type field.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/fund_accounts/validations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FundAccountsValidationsRequest | FundAccountsValidationsRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[FundAccountValidation],
            error_mapper=validate_fund_account_error_mapper,
            request_options=request_options,
        )
