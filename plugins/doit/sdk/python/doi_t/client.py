from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account_team import AccountTeam
from .apis.alerts import Alerts
from .apis.allocations import Allocations
from .apis.annotations import Annotations
from .apis.anomalies import Anomalies
from .apis.assets import Assets
from .apis.auth_api import AuthApi
from .apis.ava import Ava
from .apis.billing_explainer_api import BillingExplainerApi
from .apis.billing_transfer import BillingTransfer
from .apis.budget_suggestions import BudgetSuggestions
from .apis.budgets import Budgets
from .apis.cloud_connect import CloudConnect
from .apis.cloud_diagrams import CloudDiagrams
from .apis.cloud_flow_api import CloudFlowApi
from .apis.cloud_incidents import CloudIncidents
from .apis.commitment_manager import CommitmentManager
from .apis.composer_insights_beta import ComposerInsightsBeta
from .apis.connections import Connections
from .apis.contract_templates import ContractTemplates
from .apis.contracts import Contracts
from .apis.customer_groups import CustomerGroups
from .apis.customers import Customers
from .apis.data_hub import DataHub
from .apis.dimensions import Dimensions
from .apis.folders import Folders
from .apis.geographic_access import GeographicAccess
from .apis.insights import Insights
from .apis.invoices import Invoices
from .apis.labels import Labels
from .apis.organizations import Organizations
from .apis.perfect_scale_for_commitments_aws import PerfectScaleForCommitmentsAws
from .apis.perfect_scale_for_commitments_gcp import PerfectScaleForCommitmentsGcp
from .apis.perfect_scale_for_commitments_general import PerfectScaleForCommitmentsGeneral
from .apis.platforms import Platforms
from .apis.products import Products
from .apis.reports import Reports
from .apis.roles import Roles
from .apis.service_accounts import ServiceAccounts
from .apis.service_quotas import ServiceQuotas
from .apis.settings import Settings
from .apis.shared_payers import SharedPayers
from .apis.sharing import Sharing
from .apis.signup import Signup
from .apis.support_requests import SupportRequests
from .apis.templates import Templates
from .apis.users import Users
from .apis.widgets_beta import WidgetsBeta
from .auth import AuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseDoiTClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AuthorizationCodeCredentials,
    AuthorizationCodeCredentialsOrDict,
    AuthorizationCodeTokenSource,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    OAuth2RefreshableScheme,
    RawClient,
    RefreshableTokenSource,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    client_secret_basic,
    no_auth,
    param,
)
from .server.server_config import ServerConfigOrDict


class DoiTClient(BaseDoiTClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key: str | None = None,
        tenant_id: str | None = None,
        oauth2: AuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: RefreshableTokenSource[AuthorizationCodeCredentials[Oauth2Scope]] | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "DoiTClient/v1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key=ApiKeyHeaderScheme("Authorization", api_key) if api_key is not None else no_auth,
            tenant_id=ApiKeyHeaderScheme("X-Tenant-Id", tenant_id) if tenant_id is not None else no_auth,
            oauth2=(
                OAuth2RefreshableScheme(
                    credentials=AuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AuthorizationCodeTokenSource[Oauth2Scope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/oauth"),
                            token_url=self._server.access_token_server("/token"),
                            refresh_url=self._server.access_token_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2 is not None
                else no_auth
            ),
        )

    @cached_property
    def account_team(self) -> AccountTeam:
        return AccountTeam(self._raw_client, self._server, self._auth)

    @cached_property
    def alerts(self) -> Alerts:
        return Alerts(self._raw_client, self._server, self._auth)

    @cached_property
    def allocations(self) -> Allocations:
        return Allocations(self._raw_client, self._server, self._auth)

    @cached_property
    def annotations(self) -> Annotations:
        return Annotations(self._raw_client, self._server, self._auth)

    @cached_property
    def anomalies(self) -> Anomalies:
        return Anomalies(self._raw_client, self._server, self._auth)

    @cached_property
    def assets(self) -> Assets:
        return Assets(self._raw_client, self._server, self._auth)

    @cached_property
    def auth_api(self) -> AuthApi:
        return AuthApi(self._raw_client, self._server, self._auth)

    @cached_property
    def ava(self) -> Ava:
        return Ava(self._raw_client, self._server, self._auth)

    @cached_property
    def billing_explainer_api(self) -> BillingExplainerApi:
        return BillingExplainerApi(self._raw_client, self._server, self._auth)

    @cached_property
    def billing_transfer(self) -> BillingTransfer:
        return BillingTransfer(self._raw_client, self._server, self._auth)

    @cached_property
    def budget_suggestions(self) -> BudgetSuggestions:
        return BudgetSuggestions(self._raw_client, self._server, self._auth)

    @cached_property
    def budgets(self) -> Budgets:
        return Budgets(self._raw_client, self._server, self._auth)

    @cached_property
    def cloud_connect(self) -> CloudConnect:
        return CloudConnect(self._raw_client, self._server, self._auth)

    @cached_property
    def cloud_diagrams(self) -> CloudDiagrams:
        return CloudDiagrams(self._raw_client, self._server, self._auth)

    @cached_property
    def cloud_incidents(self) -> CloudIncidents:
        return CloudIncidents(self._raw_client, self._server, self._auth)

    @cached_property
    def cloud_flow_api(self) -> CloudFlowApi:
        return CloudFlowApi(self._raw_client, self._server, self._auth)

    @cached_property
    def commitment_manager(self) -> CommitmentManager:
        return CommitmentManager(self._raw_client, self._server, self._auth)

    @cached_property
    def composer_insights_beta(self) -> ComposerInsightsBeta:
        return ComposerInsightsBeta(self._raw_client, self._server, self._auth)

    @cached_property
    def connections(self) -> Connections:
        return Connections(self._raw_client, self._server, self._auth)

    @cached_property
    def contract_templates(self) -> ContractTemplates:
        return ContractTemplates(self._raw_client, self._server, self._auth)

    @cached_property
    def contracts(self) -> Contracts:
        return Contracts(self._raw_client, self._server, self._auth)

    @cached_property
    def customer_groups(self) -> CustomerGroups:
        return CustomerGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def customers(self) -> Customers:
        return Customers(self._raw_client, self._server, self._auth)

    @cached_property
    def data_hub(self) -> DataHub:
        return DataHub(self._raw_client, self._server, self._auth)

    @cached_property
    def dimensions(self) -> Dimensions:
        return Dimensions(self._raw_client, self._server, self._auth)

    @cached_property
    def folders(self) -> Folders:
        return Folders(self._raw_client, self._server, self._auth)

    @cached_property
    def geographic_access(self) -> GeographicAccess:
        return GeographicAccess(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> Insights:
        return Insights(self._raw_client, self._server, self._auth)

    @cached_property
    def invoices(self) -> Invoices:
        return Invoices(self._raw_client, self._server, self._auth)

    @cached_property
    def labels(self) -> Labels:
        return Labels(self._raw_client, self._server, self._auth)

    @cached_property
    def organizations(self) -> Organizations:
        return Organizations(self._raw_client, self._server, self._auth)

    @cached_property
    def perfect_scale_for_commitments_aws(self) -> PerfectScaleForCommitmentsAws:
        return PerfectScaleForCommitmentsAws(self._raw_client, self._server, self._auth)

    @cached_property
    def perfect_scale_for_commitments_gcp(self) -> PerfectScaleForCommitmentsGcp:
        return PerfectScaleForCommitmentsGcp(self._raw_client, self._server, self._auth)

    @cached_property
    def perfect_scale_for_commitments_general(self) -> PerfectScaleForCommitmentsGeneral:
        return PerfectScaleForCommitmentsGeneral(self._raw_client, self._server, self._auth)

    @cached_property
    def platforms(self) -> Platforms:
        return Platforms(self._raw_client, self._server, self._auth)

    @cached_property
    def products(self) -> Products:
        return Products(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> Reports:
        return Reports(self._raw_client, self._server, self._auth)

    @cached_property
    def roles(self) -> Roles:
        return Roles(self._raw_client, self._server, self._auth)

    @cached_property
    def service_accounts(self) -> ServiceAccounts:
        return ServiceAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def service_quotas(self) -> ServiceQuotas:
        return ServiceQuotas(self._raw_client, self._server, self._auth)

    @cached_property
    def settings(self) -> Settings:
        return Settings(self._raw_client, self._server, self._auth)

    @cached_property
    def shared_payers(self) -> SharedPayers:
        return SharedPayers(self._raw_client, self._server, self._auth)

    @cached_property
    def sharing(self) -> Sharing:
        return Sharing(self._raw_client, self._server, self._auth)

    @cached_property
    def signup(self) -> Signup:
        return Signup(self._raw_client, self._server)

    @cached_property
    def support_requests(self) -> SupportRequests:
        return SupportRequests(self._raw_client, self._server, self._auth)

    @cached_property
    def templates(self) -> Templates:
        return Templates(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> Users:
        return Users(self._raw_client, self._server, self._auth)

    @cached_property
    def widgets_beta(self) -> WidgetsBeta:
        return WidgetsBeta(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = DoiTClient
