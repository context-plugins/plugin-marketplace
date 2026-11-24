from __future__ import annotations

from typing import Any
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
from ..errors.analyticsadmin_accounts_delete_error import (
    AnalyticsadminAccountsDeleteErrorBody,
    analyticsadmin_accounts_delete_error_mapper,
)
from ..errors.analyticsadmin_accounts_get_data_sharing_settings_error import (
    AnalyticsadminAccountsGetDataSharingSettingsErrorBody,
    analyticsadmin_accounts_get_data_sharing_settings_error_mapper,
)
from ..errors.analyticsadmin_accounts_get_error import (
    AnalyticsadminAccountsGetErrorBody,
    analyticsadmin_accounts_get_error_mapper,
)
from ..errors.analyticsadmin_accounts_list_error import (
    AnalyticsadminAccountsListErrorBody,
    analyticsadmin_accounts_list_error_mapper,
)
from ..errors.analyticsadmin_accounts_patch_error import (
    AnalyticsadminAccountsPatchErrorBody,
    analyticsadmin_accounts_patch_error_mapper,
)
from ..errors.analyticsadmin_accounts_provision_account_ticket_error import (
    AnalyticsadminAccountsProvisionAccountTicketErrorBody,
    analyticsadmin_accounts_provision_account_ticket_error_mapper,
)
from ..errors.analyticsadmin_accounts_run_access_report_error import (
    AnalyticsadminAccountsRunAccessReportErrorBody,
    analyticsadmin_accounts_run_access_report_error_mapper,
)
from ..errors.analyticsadmin_accounts_search_change_history_events_error import (
    AnalyticsadminAccountsSearchChangeHistoryEventsErrorBody,
    analyticsadmin_accounts_search_change_history_events_error_mapper,
)
from ..models.google_analytics_admin_v1_beta_account import (
    GoogleAnalyticsAdminV1BetaAccount,
    GoogleAnalyticsAdminV1BetaAccountDict,
)
from ..models.google_analytics_admin_v1_beta_data_sharing_settings import GoogleAnalyticsAdminV1BetaDataSharingSettings
from ..models.google_analytics_admin_v1_beta_list_accounts_response import (
    GoogleAnalyticsAdminV1BetaListAccountsResponse,
)
from ..models.google_analytics_admin_v1_beta_provision_account_ticket_request import (
    GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest,
    GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict,
)
from ..models.google_analytics_admin_v1_beta_provision_account_ticket_response import (
    GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse,
)
from ..models.google_analytics_admin_v1_beta_run_access_report_request import (
    GoogleAnalyticsAdminV1BetaRunAccessReportRequest,
    GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict,
)
from ..models.google_analytics_admin_v1_beta_run_access_report_response import (
    GoogleAnalyticsAdminV1BetaRunAccessReportResponse,
)
from ..models.google_analytics_admin_v1_beta_search_change_history_events_request import (
    GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest,
    GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict,
)
from ..models.google_analytics_admin_v1_beta_search_change_history_events_response import (
    GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse,
)
from ..server.server import Server


class Accounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountsWithRawResponse(client, server, auth)

    def analyticsadmin_accounts_delete(
        self, accounts_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to
        restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not
        restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks,
        Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns
        an error if the target is not found.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_accounts_delete(accounts_id, request_options=request_options)
        )

    def analyticsadmin_accounts_get(
        self, accounts_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaAccount:
        """Lookup for a single Account.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(self._with_raw_response.analyticsadmin_accounts_get(accounts_id, request_options=request_options))

    def analyticsadmin_accounts_get_data_sharing_settings(
        self, accounts_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaDataSharingSettings:
        """Get data sharing settings on an account. Data sharing settings are singletons.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_accounts_get_data_sharing_settings(
                accounts_id, request_options=request_options
            ),
        )

    def analyticsadmin_accounts_list(
        self,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        show_deleted: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListAccountsResponse:
        """Returns all accounts accessible by the caller. Note that these accounts might not currently have GA
        properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant
        accounts are found. Note: The easiest way to retrieve a list of all properties you have access to is by using
        ``ListAccountSummaries``.

        Args:
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListAccounts`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters provided to ``ListAccounts`` must match the
                call that provided the page token.
            show_deleted: Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be
                inspected to determine whether they are deleted or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_accounts_list(
                page_size=page_size, page_token=page_token, show_deleted=show_deleted, request_options=request_options
            ),
        )

    def analyticsadmin_accounts_patch(
        self,
        accounts_id: str,
        body: GoogleAnalyticsAdminV1BetaAccount | GoogleAnalyticsAdminV1BetaAccountDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaAccount:
        """Updates an account.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (for example,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_accounts_patch(
                accounts_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def analyticsadmin_accounts_provision_account_ticket(
        self,
        body: (
            GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest
            | GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse:
        """Requests a ticket for creating an account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_accounts_provision_account_ticket(
                body, request_options=request_options
            ),
        )

    def analyticsadmin_accounts_run_access_report(
        self,
        accounts_id: str,
        body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaRunAccessReportResponse:
        """Returns a customized report of data access records. The report provides records of each time a user reads
        Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be
        requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota
        can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These
        data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase &
        Admob that can retrieve data from Google Analytics through a linkage. These records don't include property
        configuration changes like adding a stream or changing a property's time zone. For configuration change history,
        see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports
        feedback form.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_accounts_run_access_report(
                accounts_id, body, request_options=request_options
            ),
        )

    def analyticsadmin_accounts_search_change_history_events(
        self,
        accounts_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest
            | GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse:
        """Searches through all changes to an account or its children given the specified set of filters. Only returns
        the subset of changes supported by the API. The UI may return additional changes.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.analyticsadmin_accounts_search_change_history_events(
                accounts_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AccountsWithRawResponse:
        return self._with_raw_response


class AsyncAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountsWithRawResponse(client, server, auth)

    async def analyticsadmin_accounts_delete(
        self, accounts_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to
        restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not
        restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks,
        Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns
        an error if the target is not found.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_accounts_delete(accounts_id, request_options=request_options)
        )

    async def analyticsadmin_accounts_get(
        self, accounts_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaAccount:
        """Lookup for a single Account.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_accounts_get(accounts_id, request_options=request_options)
        )

    async def analyticsadmin_accounts_get_data_sharing_settings(
        self, accounts_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleAnalyticsAdminV1BetaDataSharingSettings:
        """Get data sharing settings on an account. Data sharing settings are singletons.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_accounts_get_data_sharing_settings(
                accounts_id, request_options=request_options
            ),
        )

    async def analyticsadmin_accounts_list(
        self,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        show_deleted: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaListAccountsResponse:
        """Returns all accounts accessible by the caller. Note that these accounts might not currently have GA
        properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant
        accounts are found. Note: The easiest way to retrieve a list of all properties you have access to is by using
        ``ListAccountSummaries``.

        Args:
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListAccounts`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters provided to ``ListAccounts`` must match the
                call that provided the page token.
            show_deleted: Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be
                inspected to determine whether they are deleted or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_accounts_list(
                page_size=page_size, page_token=page_token, show_deleted=show_deleted, request_options=request_options
            ),
        )

    async def analyticsadmin_accounts_patch(
        self,
        accounts_id: str,
        body: GoogleAnalyticsAdminV1BetaAccount | GoogleAnalyticsAdminV1BetaAccountDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaAccount:
        """Updates an account.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (for example,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_accounts_patch(
                accounts_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def analyticsadmin_accounts_provision_account_ticket(
        self,
        body: (
            GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest
            | GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse:
        """Requests a ticket for creating an account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_accounts_provision_account_ticket(
                body, request_options=request_options
            ),
        )

    async def analyticsadmin_accounts_run_access_report(
        self,
        accounts_id: str,
        body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaRunAccessReportResponse:
        """Returns a customized report of data access records. The report provides records of each time a user reads
        Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be
        requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota
        can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These
        data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase &
        Admob that can retrieve data from Google Analytics through a linkage. These records don't include property
        configuration changes like adding a stream or changing a property's time zone. For configuration change history,
        see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports
        feedback form.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_accounts_run_access_report(
                accounts_id, body, request_options=request_options
            ),
        )

    async def analyticsadmin_accounts_search_change_history_events(
        self,
        accounts_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest
            | GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse:
        """Searches through all changes to an account or its children given the specified set of filters. Only returns
        the subset of changes supported by the API. The UI may return additional changes.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.analyticsadmin_accounts_search_change_history_events(
                accounts_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAccountsWithRawResponse:
        return self._with_raw_response


class AccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def analyticsadmin_accounts_delete(
        self, accounts_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminAccountsDeleteErrorBody]:
        """Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to
        restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not
        restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks,
        Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns
        an error if the target is not found.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/accounts/{accountsId}"),
            path_params=[param[str]("accountsId", accounts_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=analyticsadmin_accounts_delete_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_accounts_get(
        self, accounts_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaAccount, AnalyticsadminAccountsGetErrorBody]:
        """Lookup for a single Account.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/accounts/{accountsId}"),
            path_params=[param[str]("accountsId", accounts_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaAccount],
            error_mapper=analyticsadmin_accounts_get_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_accounts_get_data_sharing_settings(
        self, accounts_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaDataSharingSettings, AnalyticsadminAccountsGetDataSharingSettingsErrorBody
    ]:
        """Get data sharing settings on an account. Data sharing settings are singletons.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/accounts/{accountsId}/dataSharingSettings"),
            path_params=[param[str]("accountsId", accounts_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaDataSharingSettings],
            error_mapper=analyticsadmin_accounts_get_data_sharing_settings_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_accounts_list(
        self,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        show_deleted: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaListAccountsResponse, AnalyticsadminAccountsListErrorBody]:
        """Returns all accounts accessible by the caller. Note that these accounts might not currently have GA
        properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant
        accounts are found. Note: The easiest way to retrieve a list of all properties you have access to is by using
        ``ListAccountSummaries``.

        Args:
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListAccounts`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters provided to ``ListAccounts`` must match the
                call that provided the page token.
            show_deleted: Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be
                inspected to determine whether they are deleted or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/accounts"),
            query_params=[
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("showDeleted", show_deleted),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaListAccountsResponse],
            error_mapper=analyticsadmin_accounts_list_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_accounts_patch(
        self,
        accounts_id: str,
        body: GoogleAnalyticsAdminV1BetaAccount | GoogleAnalyticsAdminV1BetaAccountDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaAccount, AnalyticsadminAccountsPatchErrorBody]:
        """Updates an account.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (for example,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/accounts/{accountsId}"),
            path_params=[param[str]("accountsId", accounts_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaAccount | GoogleAnalyticsAdminV1BetaAccountDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaAccount],
            error_mapper=analyticsadmin_accounts_patch_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_accounts_provision_account_ticket(
        self,
        body: (
            GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest
            | GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse, AnalyticsadminAccountsProvisionAccountTicketErrorBody
    ]:
        """Requests a ticket for creating an account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/accounts:provisionAccountTicket"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest
                    | GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse],
            error_mapper=analyticsadmin_accounts_provision_account_ticket_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_accounts_run_access_report(
        self,
        accounts_id: str,
        body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaRunAccessReportResponse, AnalyticsadminAccountsRunAccessReportErrorBody]:
        """Returns a customized report of data access records. The report provides records of each time a user reads
        Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be
        requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota
        can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These
        data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase &
        Admob that can retrieve data from Google Analytics through a linkage. These records don't include property
        configuration changes like adding a stream or changing a property's time zone. For configuration change history,
        see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports
        feedback form.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/accounts/{accountsId}:runAccessReport"),
            path_params=[param[str]("accountsId", accounts_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaRunAccessReportResponse],
            error_mapper=analyticsadmin_accounts_run_access_report_error_mapper,
            request_options=request_options,
        )

    def analyticsadmin_accounts_search_change_history_events(
        self,
        accounts_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest
            | GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse,
        AnalyticsadminAccountsSearchChangeHistoryEventsErrorBody,
    ]:
        """Searches through all changes to an account or its children given the specified set of filters. Only returns
        the subset of changes supported by the API. The UI may return additional changes.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/accounts/{accountsId}:searchChangeHistoryEvents"),
            path_params=[param[str]("accountsId", accounts_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest
                    | GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse],
            error_mapper=analyticsadmin_accounts_search_change_history_events_error_mapper,
            request_options=request_options,
        )


class AsyncAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def analyticsadmin_accounts_delete(
        self, accounts_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, AnalyticsadminAccountsDeleteErrorBody]:
        """Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to
        restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not
        restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks,
        Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns
        an error if the target is not found.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1beta/accounts/{accountsId}"),
            path_params=[param[str]("accountsId", accounts_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=analyticsadmin_accounts_delete_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_accounts_get(
        self, accounts_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaAccount, AnalyticsadminAccountsGetErrorBody]:
        """Lookup for a single Account.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/accounts/{accountsId}"),
            path_params=[param[str]("accountsId", accounts_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaAccount],
            error_mapper=analyticsadmin_accounts_get_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_accounts_get_data_sharing_settings(
        self, accounts_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaDataSharingSettings, AnalyticsadminAccountsGetDataSharingSettingsErrorBody
    ]:
        """Get data sharing settings on an account. Data sharing settings are singletons.

        Args:
            accounts_id: Resource name segment (accountsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/accounts/{accountsId}/dataSharingSettings"),
            path_params=[param[str]("accountsId", accounts_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaDataSharingSettings],
            error_mapper=analyticsadmin_accounts_get_data_sharing_settings_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_accounts_list(
        self,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        show_deleted: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaListAccountsResponse, AnalyticsadminAccountsListErrorBody]:
        """Returns all accounts accessible by the caller. Note that these accounts might not currently have GA
        properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant
        accounts are found. Note: The easiest way to retrieve a list of all properties you have access to is by using
        ``ListAccountSummaries``.

        Args:
            page_size: Optional. The maximum number of resources to return. The service may return fewer than this
                value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The
                maximum value is 200; (higher values will be coerced to the maximum)
            page_token: Optional. A page token, received from a previous ``ListAccounts`` call. Provide this to retrieve
                the subsequent page. When paginating, all other parameters provided to ``ListAccounts`` must match the
                call that provided the page token.
            show_deleted: Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be
                inspected to determine whether they are deleted or not.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1beta/accounts"),
            query_params=[
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("showDeleted", show_deleted),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaListAccountsResponse],
            error_mapper=analyticsadmin_accounts_list_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_accounts_patch(
        self,
        accounts_id: str,
        body: GoogleAnalyticsAdminV1BetaAccount | GoogleAnalyticsAdminV1BetaAccountDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaAccount, AnalyticsadminAccountsPatchErrorBody]:
        """Updates an account.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            update_mask: Required. The list of fields to be updated. Field names must be in snake case (for example,
                "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with
                the string "*" to match all fields.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1beta/accounts/{accountsId}"),
            path_params=[param[str]("accountsId", accounts_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleAnalyticsAdminV1BetaAccount | GoogleAnalyticsAdminV1BetaAccountDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaAccount],
            error_mapper=analyticsadmin_accounts_patch_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_accounts_provision_account_ticket(
        self,
        body: (
            GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest
            | GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse, AnalyticsadminAccountsProvisionAccountTicketErrorBody
    ]:
        """Requests a ticket for creating an account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/accounts:provisionAccountTicket"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest
                    | GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse],
            error_mapper=analyticsadmin_accounts_provision_account_ticket_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_accounts_run_access_report(
        self,
        accounts_id: str,
        body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleAnalyticsAdminV1BetaRunAccessReportResponse, AnalyticsadminAccountsRunAccessReportErrorBody]:
        """Returns a customized report of data access records. The report provides records of each time a user reads
        Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be
        requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota
        can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These
        data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase &
        Admob that can retrieve data from Google Analytics through a linkage. These records don't include property
        configuration changes like adding a stream or changing a property's time zone. For configuration change history,
        see searchChangeHistoryEvents. To give your feedback on this API, complete the Google Analytics Access Reports
        feedback form.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/accounts/{accountsId}:runAccessReport"),
            path_params=[param[str]("accountsId", accounts_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaRunAccessReportResponse],
            error_mapper=analyticsadmin_accounts_run_access_report_error_mapper,
            request_options=request_options,
        )

    async def analyticsadmin_accounts_search_change_history_events(
        self,
        accounts_id: str,
        body: (
            GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest
            | GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse,
        AnalyticsadminAccountsSearchChangeHistoryEventsErrorBody,
    ]:
        """Searches through all changes to an account or its children given the specified set of filters. Only returns
        the subset of changes supported by the API. The UI may return additional changes.

        Args:
            accounts_id: Resource name segment (accountsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/accounts/{accountsId}:searchChangeHistoryEvents"),
            path_params=[param[str]("accountsId", accounts_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest
                    | GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse],
            error_mapper=analyticsadmin_accounts_search_change_history_events_error_mapper,
            request_options=request_options,
        )
