from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.accounts import Accounts
from .apis.app_management import AppManagement
from .apis.available_applications import AvailableApplications
from .apis.companies import Companies
from .apis.configuration_packages import ConfigurationPackages
from .apis.countries_regions import CountriesRegions
from .apis.currency_api import CurrencyApi
from .apis.customer_payments import CustomerPayments
from .apis.customers import Customers
from .apis.dimensions import Dimensions
from .apis.employees import Employees
from .apis.environment_operations import EnvironmentOperations
from .apis.environment_settings_api import EnvironmentSettingsApi
from .apis.environments import Environments
from .apis.extension_deployment_status_api import ExtensionDeploymentStatusApi
from .apis.extension_upload_api import ExtensionUploadApi
from .apis.extensions import Extensions
from .apis.features import Features
from .apis.item_categories import ItemCategories
from .apis.items import Items
from .apis.journals import Journals
from .apis.notifications import Notifications
from .apis.payment_methods import PaymentMethods
from .apis.payment_terms import PaymentTerms
from .apis.permission_sets import PermissionSets
from .apis.profiles import Profiles
from .apis.purchase_invoices import PurchaseInvoices
from .apis.purchase_orders import PurchaseOrders
from .apis.sales_invoices import SalesInvoices
from .apis.sales_orders import SalesOrders
from .apis.scheduled_jobs import ScheduledJobs
from .apis.security_groups import SecurityGroups
from .apis.storage import Storage
from .apis.support_settings_api import SupportSettingsApi
from .apis.update_management import UpdateManagement
from .apis.users import Users
from .apis.vendor_payments import VendorPayments
from .apis.vendors import Vendors
from .auth import AuthSchemes, Oauth2AuthorizationCodeScope, Oauth2ClientCredentialsScope
from .base_client import DEFAULT_TIMEOUT, BaseMicrosoftDynamicsNavClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AuthorizationCodeCredentials,
    AuthorizationCodeCredentialsOrDict,
    AuthorizationCodeTokenSource,
    BearerAuthScheme,
    ClientCredentials,
    ClientCredentialsOrDict,
    ClientCredentialsTokenSource,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    OAuth2RefreshableScheme,
    OAuth2Scheme,
    RawClient,
    RefreshableTokenSource,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    TokenSource,
    client_secret_basic,
    no_auth,
    param,
)
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class MicrosoftDynamicsNavClient(BaseMicrosoftDynamicsNavClient[RawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        timeout: float = DEFAULT_TIMEOUT,
        server_config: ServerConfigOrDict | None = None,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        oauth2_authorization_code: AuthorizationCodeCredentialsOrDict[Oauth2AuthorizationCodeScope] | None = None,
        oauth2_authorization_code_token_source: (
            RefreshableTokenSource[AuthorizationCodeCredentials[Oauth2AuthorizationCodeScope]] | None
        ) = None,
        oauth2_client_credentials: ClientCredentialsOrDict[Oauth2ClientCredentialsScope] | None = None,
        oauth2_client_credentials_token_source: (
            TokenSource[ClientCredentials[Oauth2ClientCredentialsScope]] | None
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
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "MicrosoftDynamicsNavClient/2.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            oauth2_authorization_code=(
                OAuth2RefreshableScheme(
                    credentials=AuthorizationCodeCredentials[Oauth2AuthorizationCodeScope].coerce(
                        oauth2_authorization_code
                    ),
                    source=(
                        oauth2_authorization_code_token_source
                        if oauth2_authorization_code_token_source is not None
                        else AuthorizationCodeTokenSource[Oauth2AuthorizationCodeScope](
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
                OAuth2Scheme(
                    credentials=ClientCredentials[Oauth2ClientCredentialsScope].coerce(oauth2_client_credentials),
                    source=(
                        oauth2_client_credentials_token_source
                        if oauth2_client_credentials_token_source is not None
                        else ClientCredentialsTokenSource[Oauth2ClientCredentialsScope](
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
    def accounts(self) -> Accounts:
        return Accounts(self._raw_client, self._server, self._auth)

    @cached_property
    def app_management(self) -> AppManagement:
        return AppManagement(self._raw_client, self._server, self._auth)

    @cached_property
    def available_applications(self) -> AvailableApplications:
        return AvailableApplications(self._raw_client, self._server, self._auth)

    @cached_property
    def companies(self) -> Companies:
        return Companies(self._raw_client, self._server, self._auth)

    @cached_property
    def configuration_packages(self) -> ConfigurationPackages:
        return ConfigurationPackages(self._raw_client, self._server, self._auth)

    @cached_property
    def countries_regions(self) -> CountriesRegions:
        return CountriesRegions(self._raw_client, self._server, self._auth)

    @cached_property
    def currency_api(self) -> CurrencyApi:
        return CurrencyApi(self._raw_client, self._server, self._auth)

    @cached_property
    def customer_payments(self) -> CustomerPayments:
        return CustomerPayments(self._raw_client, self._server, self._auth)

    @cached_property
    def customers(self) -> Customers:
        return Customers(self._raw_client, self._server, self._auth)

    @cached_property
    def dimensions(self) -> Dimensions:
        return Dimensions(self._raw_client, self._server, self._auth)

    @cached_property
    def employees(self) -> Employees:
        return Employees(self._raw_client, self._server, self._auth)

    @cached_property
    def environment_operations(self) -> EnvironmentOperations:
        return EnvironmentOperations(self._raw_client, self._server, self._auth)

    @cached_property
    def environment_settings_api(self) -> EnvironmentSettingsApi:
        return EnvironmentSettingsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def environments(self) -> Environments:
        return Environments(self._raw_client, self._server, self._auth)

    @cached_property
    def extension_deployment_status_api(self) -> ExtensionDeploymentStatusApi:
        return ExtensionDeploymentStatusApi(self._raw_client, self._server, self._auth)

    @cached_property
    def extension_upload_api(self) -> ExtensionUploadApi:
        return ExtensionUploadApi(self._raw_client, self._server, self._auth)

    @cached_property
    def extensions(self) -> Extensions:
        return Extensions(self._raw_client, self._server, self._auth)

    @cached_property
    def features(self) -> Features:
        return Features(self._raw_client, self._server, self._auth)

    @cached_property
    def item_categories(self) -> ItemCategories:
        return ItemCategories(self._raw_client, self._server, self._auth)

    @cached_property
    def items(self) -> Items:
        return Items(self._raw_client, self._server, self._auth)

    @cached_property
    def journals(self) -> Journals:
        return Journals(self._raw_client, self._server, self._auth)

    @cached_property
    def notifications(self) -> Notifications:
        return Notifications(self._raw_client, self._server, self._auth)

    @cached_property
    def payment_methods(self) -> PaymentMethods:
        return PaymentMethods(self._raw_client, self._server, self._auth)

    @cached_property
    def payment_terms(self) -> PaymentTerms:
        return PaymentTerms(self._raw_client, self._server, self._auth)

    @cached_property
    def permission_sets(self) -> PermissionSets:
        return PermissionSets(self._raw_client, self._server, self._auth)

    @cached_property
    def profiles(self) -> Profiles:
        return Profiles(self._raw_client, self._server, self._auth)

    @cached_property
    def purchase_invoices(self) -> PurchaseInvoices:
        return PurchaseInvoices(self._raw_client, self._server, self._auth)

    @cached_property
    def purchase_orders(self) -> PurchaseOrders:
        return PurchaseOrders(self._raw_client, self._server, self._auth)

    @cached_property
    def sales_invoices(self) -> SalesInvoices:
        return SalesInvoices(self._raw_client, self._server, self._auth)

    @cached_property
    def sales_orders(self) -> SalesOrders:
        return SalesOrders(self._raw_client, self._server, self._auth)

    @cached_property
    def scheduled_jobs(self) -> ScheduledJobs:
        return ScheduledJobs(self._raw_client, self._server, self._auth)

    @cached_property
    def security_groups(self) -> SecurityGroups:
        return SecurityGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def storage(self) -> Storage:
        return Storage(self._raw_client, self._server, self._auth)

    @cached_property
    def support_settings_api(self) -> SupportSettingsApi:
        return SupportSettingsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def update_management(self) -> UpdateManagement:
        return UpdateManagement(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> Users:
        return Users(self._raw_client, self._server, self._auth)

    @cached_property
    def vendor_payments(self) -> VendorPayments:
        return VendorPayments(self._raw_client, self._server, self._auth)

    @cached_property
    def vendors(self) -> Vendors:
        return Vendors(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = MicrosoftDynamicsNavClient
