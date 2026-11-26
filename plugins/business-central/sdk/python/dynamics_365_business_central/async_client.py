from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.accounts import AsyncAccounts
from .apis.app_management import AsyncAppManagement
from .apis.available_applications import AsyncAvailableApplications
from .apis.companies import AsyncCompanies
from .apis.configuration_packages import AsyncConfigurationPackages
from .apis.countries_regions import AsyncCountriesRegions
from .apis.currency_api import AsyncCurrencyApi
from .apis.customer_payments import AsyncCustomerPayments
from .apis.customers import AsyncCustomers
from .apis.dimensions import AsyncDimensions
from .apis.employees import AsyncEmployees
from .apis.environment_operations import AsyncEnvironmentOperations
from .apis.environment_settings_api import AsyncEnvironmentSettingsApi
from .apis.environments import AsyncEnvironments
from .apis.extension_deployment_status_api import AsyncExtensionDeploymentStatusApi
from .apis.extension_upload_api import AsyncExtensionUploadApi
from .apis.extensions import AsyncExtensions
from .apis.features import AsyncFeatures
from .apis.item_categories import AsyncItemCategories
from .apis.items import AsyncItems
from .apis.journals import AsyncJournals
from .apis.notifications import AsyncNotifications
from .apis.payment_methods import AsyncPaymentMethods
from .apis.payment_terms import AsyncPaymentTerms
from .apis.permission_sets import AsyncPermissionSets
from .apis.profiles import AsyncProfiles
from .apis.purchase_invoices import AsyncPurchaseInvoices
from .apis.purchase_orders import AsyncPurchaseOrders
from .apis.sales_invoices import AsyncSalesInvoices
from .apis.sales_orders import AsyncSalesOrders
from .apis.scheduled_jobs import AsyncScheduledJobs
from .apis.security_groups import AsyncSecurityGroups
from .apis.storage import AsyncStorage
from .apis.support_settings_api import AsyncSupportSettingsApi
from .apis.update_management import AsyncUpdateManagement
from .apis.users import AsyncUsers
from .apis.vendor_payments import AsyncVendorPayments
from .apis.vendors import AsyncVendors
from .auth import AsyncAuthSchemes, Oauth2AuthorizationCodeScope, Oauth2ClientCredentialsScope
from .base_client import DEFAULT_TIMEOUT, BaseDynamics365BusinessCentralClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncAuthorizationCodeCredentials,
    AsyncAuthorizationCodeCredentialsOrDict,
    AsyncAuthorizationCodeTokenSource,
    AsyncClientCredentialsTokenSource,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncOAuth2RefreshableScheme,
    AsyncOAuth2Scheme,
    AsyncRawClient,
    AsyncRefreshableTokenSource,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    AsyncTokenSource,
    BearerAuthScheme,
    ClientCredentials,
    ClientCredentialsOrDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    client_secret_basic,
    no_auth,
    param,
)
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class AsyncDynamics365BusinessCentralClient(BaseDynamics365BusinessCentralClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        timeout: float = DEFAULT_TIMEOUT,
        server_config: ServerConfigOrDict | None = None,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        oauth2_authorization_code: AsyncAuthorizationCodeCredentialsOrDict[Oauth2AuthorizationCodeScope] | None = None,
        oauth2_authorization_code_token_source: (
            AsyncRefreshableTokenSource[AsyncAuthorizationCodeCredentials[Oauth2AuthorizationCodeScope]] | None
        ) = None,
        oauth2_client_credentials: ClientCredentialsOrDict[Oauth2ClientCredentialsScope] | None = None,
        oauth2_client_credentials_token_source: (
            AsyncTokenSource[ClientCredentials[Oauth2ClientCredentialsScope]] | None
        ) = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            timeout=timeout,
            server_config=server_config,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "Dynamics365BusinessCentralClient/2.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            oauth2_authorization_code=(
                AsyncOAuth2RefreshableScheme(
                    credentials=AsyncAuthorizationCodeCredentials[Oauth2AuthorizationCodeScope].coerce(
                        oauth2_authorization_code
                    ),
                    source=(
                        oauth2_authorization_code_token_source
                        if oauth2_authorization_code_token_source is not None
                        else AsyncAuthorizationCodeTokenSource[Oauth2AuthorizationCodeScope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/authorize"),
                            token_url=self._server.auth_server("/token"),
                            refresh_url=self._server.auth_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2_authorization_code is not None
                else no_auth
            ),
            oauth2_client_credentials=(
                AsyncOAuth2Scheme(
                    credentials=ClientCredentials[Oauth2ClientCredentialsScope].coerce(oauth2_client_credentials),
                    source=(
                        oauth2_client_credentials_token_source
                        if oauth2_client_credentials_token_source is not None
                        else AsyncClientCredentialsTokenSource[Oauth2ClientCredentialsScope](
                            client=self._raw_client,
                            token_url=self._server.auth_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2_client_credentials is not None
                else no_auth
            ),
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
        )

    @cached_property
    def accounts(self) -> AsyncAccounts:
        return AsyncAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def app_management(self) -> AsyncAppManagement:
        return AsyncAppManagement(self._raw_client, self._server, self._auth)

    @cached_property
    def available_applications(self) -> AsyncAvailableApplications:
        return AsyncAvailableApplications(self._raw_client, self._server, self._auth)

    @cached_property
    def companies(self) -> AsyncCompanies:
        return AsyncCompanies(self._raw_client, self._server, self._auth)

    @cached_property
    def configuration_packages(self) -> AsyncConfigurationPackages:
        return AsyncConfigurationPackages(self._raw_client, self._server, self._auth)

    @cached_property
    def countries_regions(self) -> AsyncCountriesRegions:
        return AsyncCountriesRegions(self._raw_client, self._server, self._auth)

    @cached_property
    def currency_api(self) -> AsyncCurrencyApi:
        return AsyncCurrencyApi(self._raw_client, self._server, self._auth)

    @cached_property
    def customer_payments(self) -> AsyncCustomerPayments:
        return AsyncCustomerPayments(self._raw_client, self._server, self._auth)

    @cached_property
    def customers(self) -> AsyncCustomers:
        return AsyncCustomers(self._raw_client, self._server, self._auth)

    @cached_property
    def dimensions(self) -> AsyncDimensions:
        return AsyncDimensions(self._raw_client, self._server, self._auth)

    @cached_property
    def employees(self) -> AsyncEmployees:
        return AsyncEmployees(self._raw_client, self._server, self._auth)

    @cached_property
    def environment_operations(self) -> AsyncEnvironmentOperations:
        return AsyncEnvironmentOperations(self._raw_client, self._server, self._auth)

    @cached_property
    def environment_settings_api(self) -> AsyncEnvironmentSettingsApi:
        return AsyncEnvironmentSettingsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def environments(self) -> AsyncEnvironments:
        return AsyncEnvironments(self._raw_client, self._server, self._auth)

    @cached_property
    def extension_deployment_status_api(self) -> AsyncExtensionDeploymentStatusApi:
        return AsyncExtensionDeploymentStatusApi(self._raw_client, self._server, self._auth)

    @cached_property
    def extension_upload_api(self) -> AsyncExtensionUploadApi:
        return AsyncExtensionUploadApi(self._raw_client, self._server, self._auth)

    @cached_property
    def extensions(self) -> AsyncExtensions:
        return AsyncExtensions(self._raw_client, self._server, self._auth)

    @cached_property
    def features(self) -> AsyncFeatures:
        return AsyncFeatures(self._raw_client, self._server, self._auth)

    @cached_property
    def item_categories(self) -> AsyncItemCategories:
        return AsyncItemCategories(self._raw_client, self._server, self._auth)

    @cached_property
    def items(self) -> AsyncItems:
        return AsyncItems(self._raw_client, self._server, self._auth)

    @cached_property
    def journals(self) -> AsyncJournals:
        return AsyncJournals(self._raw_client, self._server, self._auth)

    @cached_property
    def notifications(self) -> AsyncNotifications:
        return AsyncNotifications(self._raw_client, self._server, self._auth)

    @cached_property
    def payment_methods(self) -> AsyncPaymentMethods:
        return AsyncPaymentMethods(self._raw_client, self._server, self._auth)

    @cached_property
    def payment_terms(self) -> AsyncPaymentTerms:
        return AsyncPaymentTerms(self._raw_client, self._server, self._auth)

    @cached_property
    def permission_sets(self) -> AsyncPermissionSets:
        return AsyncPermissionSets(self._raw_client, self._server, self._auth)

    @cached_property
    def profiles(self) -> AsyncProfiles:
        return AsyncProfiles(self._raw_client, self._server, self._auth)

    @cached_property
    def purchase_invoices(self) -> AsyncPurchaseInvoices:
        return AsyncPurchaseInvoices(self._raw_client, self._server, self._auth)

    @cached_property
    def purchase_orders(self) -> AsyncPurchaseOrders:
        return AsyncPurchaseOrders(self._raw_client, self._server, self._auth)

    @cached_property
    def sales_invoices(self) -> AsyncSalesInvoices:
        return AsyncSalesInvoices(self._raw_client, self._server, self._auth)

    @cached_property
    def sales_orders(self) -> AsyncSalesOrders:
        return AsyncSalesOrders(self._raw_client, self._server, self._auth)

    @cached_property
    def scheduled_jobs(self) -> AsyncScheduledJobs:
        return AsyncScheduledJobs(self._raw_client, self._server, self._auth)

    @cached_property
    def security_groups(self) -> AsyncSecurityGroups:
        return AsyncSecurityGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def storage(self) -> AsyncStorage:
        return AsyncStorage(self._raw_client, self._server, self._auth)

    @cached_property
    def support_settings_api(self) -> AsyncSupportSettingsApi:
        return AsyncSupportSettingsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def update_management(self) -> AsyncUpdateManagement:
        return AsyncUpdateManagement(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> AsyncUsers:
        return AsyncUsers(self._raw_client, self._server, self._auth)

    @cached_property
    def vendor_payments(self) -> AsyncVendorPayments:
        return AsyncVendorPayments(self._raw_client, self._server, self._auth)

    @cached_property
    def vendors(self) -> AsyncVendors:
        return AsyncVendors(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncDynamics365BusinessCentralClient
