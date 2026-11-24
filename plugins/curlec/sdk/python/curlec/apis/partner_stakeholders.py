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
from ..errors.create_stakeholder2_error import CreateStakeholder2ErrorBody, create_stakeholder2_error_mapper
from ..errors.fetch_all_stakeholders_error import FetchAllStakeholdersErrorBody, fetch_all_stakeholders_error_mapper
from ..errors.update_stakeholder2_error import UpdateStakeholder2ErrorBody, update_stakeholder2_error_mapper
from ..models.stakeholder_razorpay_partner_stakeholders_api import StakeholderRazorpayPartnerStakeholdersApi
from ..models.v2_accounts_stakeholders_request1 import (
    V2AccountsStakeholdersRequest1,
    V2AccountsStakeholdersRequest1Dict,
)
from ..models.v2_accounts_stakeholders_request_razorpay_partner_stakeholders_api import (
    V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi,
    V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict,
)
from ..models.v2_accounts_stakeholders_response import V2AccountsStakeholdersResponse
from ..server.server import Server


class PartnerStakeholders:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PartnerStakeholdersWithRawResponse(client, server, auth)

    def create_stakeholder2(
        self,
        account_id: str,
        body: (
            V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi
            | V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StakeholderRazorpayPartnerStakeholdersApi:
        """Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked
        Account. PAN 4th character must be 'P' (individual PAN).

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stakeholder created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_stakeholder2(account_id, body, request_options=request_options))

    def fetch_all_stakeholders(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V2AccountsStakeholdersResponse:
        """Retrieve all stakeholders associated with a sub-merchant account. Partners API only — Route allows only 1
        stakeholder per account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of stakeholders

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_all_stakeholders(account_id, request_options=request_options))

    def update_stakeholder2(
        self,
        account_id: str,
        stakeholder_id: str,
        body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StakeholderRazorpayPartnerStakeholdersApi:
        """Update stakeholder information for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            stakeholder_id: Stakeholder ID (sth_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stakeholder updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_stakeholder2(
                account_id, stakeholder_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PartnerStakeholdersWithRawResponse:
        return self._with_raw_response


class AsyncPartnerStakeholders:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPartnerStakeholdersWithRawResponse(client, server, auth)

    async def create_stakeholder2(
        self,
        account_id: str,
        body: (
            V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi
            | V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StakeholderRazorpayPartnerStakeholdersApi:
        """Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked
        Account. PAN 4th character must be 'P' (individual PAN).

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stakeholder created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_stakeholder2(account_id, body, request_options=request_options)
        )

    async def fetch_all_stakeholders(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V2AccountsStakeholdersResponse:
        """Retrieve all stakeholders associated with a sub-merchant account. Partners API only — Route allows only 1
        stakeholder per account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of stakeholders

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.fetch_all_stakeholders(account_id, request_options=request_options))

    async def update_stakeholder2(
        self,
        account_id: str,
        stakeholder_id: str,
        body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StakeholderRazorpayPartnerStakeholdersApi:
        """Update stakeholder information for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            stakeholder_id: Stakeholder ID (sth_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stakeholder updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_stakeholder2(
                account_id, stakeholder_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPartnerStakeholdersWithRawResponse:
        return self._with_raw_response


class PartnerStakeholdersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_stakeholder2(
        self,
        account_id: str,
        body: (
            V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi
            | V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StakeholderRazorpayPartnerStakeholdersApi, CreateStakeholder2ErrorBody]:
        """Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked
        Account. PAN 4th character must be 'P' (individual PAN).

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi
                    | V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict
                )
            ](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[StakeholderRazorpayPartnerStakeholdersApi],
            error_mapper=create_stakeholder2_error_mapper,
            request_options=request_options,
        )

    def fetch_all_stakeholders(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V2AccountsStakeholdersResponse, FetchAllStakeholdersErrorBody]:
        """Retrieve all stakeholders associated with a sub-merchant account. Partners API only — Route allows only 1
        stakeholder per account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[V2AccountsStakeholdersResponse],
            error_mapper=fetch_all_stakeholders_error_mapper,
            request_options=request_options,
        )

    def update_stakeholder2(
        self,
        account_id: str,
        stakeholder_id: str,
        body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StakeholderRazorpayPartnerStakeholdersApi, UpdateStakeholder2ErrorBody]:
        """Update stakeholder information for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            stakeholder_id: Stakeholder ID (sth_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("stakeholder_id", stakeholder_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[StakeholderRazorpayPartnerStakeholdersApi],
            error_mapper=update_stakeholder2_error_mapper,
            request_options=request_options,
        )


class AsyncPartnerStakeholdersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_stakeholder2(
        self,
        account_id: str,
        body: (
            V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi
            | V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StakeholderRazorpayPartnerStakeholdersApi, CreateStakeholder2ErrorBody]:
        """Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked
        Account. PAN 4th character must be 'P' (individual PAN).

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi
                    | V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[StakeholderRazorpayPartnerStakeholdersApi],
            error_mapper=create_stakeholder2_error_mapper,
            request_options=request_options,
        )

    async def fetch_all_stakeholders(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V2AccountsStakeholdersResponse, FetchAllStakeholdersErrorBody]:
        """Retrieve all stakeholders associated with a sub-merchant account. Partners API only — Route allows only 1
        stakeholder per account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[V2AccountsStakeholdersResponse],
            error_mapper=fetch_all_stakeholders_error_mapper,
            request_options=request_options,
        )

    async def update_stakeholder2(
        self,
        account_id: str,
        stakeholder_id: str,
        body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StakeholderRazorpayPartnerStakeholdersApi, UpdateStakeholder2ErrorBody]:
        """Update stakeholder information for a Linked Account.

        Args:
            account_id: Linked Account ID (acc_*).
            stakeholder_id: Stakeholder ID (sth_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("stakeholder_id", stakeholder_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[StakeholderRazorpayPartnerStakeholdersApi],
            error_mapper=update_stakeholder2_error_mapper,
            request_options=request_options,
        )
