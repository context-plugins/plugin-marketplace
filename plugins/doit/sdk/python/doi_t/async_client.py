from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account_team import AsyncAccountTeam
from .apis.alerts import AsyncAlerts
from .apis.allocations import AsyncAllocations
from .apis.annotations import AsyncAnnotations
from .apis.anomalies import AsyncAnomalies
from .apis.assets import AsyncAssets
from .apis.auth_api import AsyncAuthApi
from .apis.ava import AsyncAva
from .apis.billing_explainer_api import AsyncBillingExplainerApi
from .apis.billing_transfer import AsyncBillingTransfer
from .apis.budget_suggestions import AsyncBudgetSuggestions
from .apis.budgets import AsyncBudgets
from .apis.cloud_connect import AsyncCloudConnect
from .apis.cloud_diagrams import AsyncCloudDiagrams
from .apis.cloud_flow_api import AsyncCloudFlowApi
from .apis.cloud_incidents import AsyncCloudIncidents
from .apis.commitment_manager import AsyncCommitmentManager
from .apis.composer_insights_beta import AsyncComposerInsightsBeta
from .apis.connections import AsyncConnections
from .apis.contract_templates import AsyncContractTemplates
from .apis.contracts import AsyncContracts
from .apis.customer_groups import AsyncCustomerGroups
from .apis.customers import AsyncCustomers
from .apis.data_hub import AsyncDataHub
from .apis.dimensions import AsyncDimensions
from .apis.folders import AsyncFolders
from .apis.geographic_access import AsyncGeographicAccess
from .apis.insights import AsyncInsights
from .apis.invoices import AsyncInvoices
from .apis.labels import AsyncLabels
from .apis.organizations import AsyncOrganizations
from .apis.perfect_scale_for_commitments_aws import AsyncPerfectScaleForCommitmentsAws
from .apis.perfect_scale_for_commitments_gcp import AsyncPerfectScaleForCommitmentsGcp
from .apis.perfect_scale_for_commitments_general import AsyncPerfectScaleForCommitmentsGeneral
from .apis.platforms import AsyncPlatforms
from .apis.products import AsyncProducts
from .apis.reports import AsyncReports
from .apis.roles import AsyncRoles
from .apis.service_accounts import AsyncServiceAccounts
from .apis.service_quotas import AsyncServiceQuotas
from .apis.settings import AsyncSettings
from .apis.shared_payers import AsyncSharedPayers
from .apis.sharing import AsyncSharing
from .apis.signup import AsyncSignup
from .apis.support_requests import AsyncSupportRequests
from .apis.templates import AsyncTemplates
from .apis.users import AsyncUsers
from .apis.widgets_beta import AsyncWidgetsBeta
from .auth import AsyncAuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseDoiTClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AsyncAuthorizationCodeCredentials,
    AsyncAuthorizationCodeCredentialsOrDict,
    AsyncAuthorizationCodeTokenSource,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncOAuth2RefreshableScheme,
    AsyncRawClient,
    AsyncRefreshableTokenSource,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    client_secret_basic,
    no_auth,
    param,
)
from .server.server_config import ServerConfigOrDict


class AsyncDoiTClient(BaseDoiTClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key: str | None = None,
        tenant_id: str | None = None,
        oauth2: AsyncAuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: AsyncRefreshableTokenSource[AsyncAuthorizationCodeCredentials[Oauth2Scope]] | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
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
        self._auth = AsyncAuthSchemes(
            api_key=ApiKeyHeaderScheme("Authorization", api_key) if api_key is not None else no_auth,
            tenant_id=ApiKeyHeaderScheme("X-Tenant-Id", tenant_id) if tenant_id is not None else no_auth,
            oauth2=(
                AsyncOAuth2RefreshableScheme(
                    credentials=AsyncAuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AsyncAuthorizationCodeTokenSource[Oauth2Scope](
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
    def account_team(self) -> AsyncAccountTeam:
        return AsyncAccountTeam(self._raw_client, self._server, self._auth)

    @cached_property
    def alerts(self) -> AsyncAlerts:
        return AsyncAlerts(self._raw_client, self._server, self._auth)

    @cached_property
    def allocations(self) -> AsyncAllocations:
        return AsyncAllocations(self._raw_client, self._server, self._auth)

    @cached_property
    def annotations(self) -> AsyncAnnotations:
        return AsyncAnnotations(self._raw_client, self._server, self._auth)

    @cached_property
    def anomalies(self) -> AsyncAnomalies:
        return AsyncAnomalies(self._raw_client, self._server, self._auth)

    @cached_property
    def assets(self) -> AsyncAssets:
        return AsyncAssets(self._raw_client, self._server, self._auth)

    @cached_property
    def auth_api(self) -> AsyncAuthApi:
        return AsyncAuthApi(self._raw_client, self._server, self._auth)

    @cached_property
    def ava(self) -> AsyncAva:
        return AsyncAva(self._raw_client, self._server, self._auth)

    @cached_property
    def billing_explainer_api(self) -> AsyncBillingExplainerApi:
        return AsyncBillingExplainerApi(self._raw_client, self._server, self._auth)

    @cached_property
    def billing_transfer(self) -> AsyncBillingTransfer:
        return AsyncBillingTransfer(self._raw_client, self._server, self._auth)

    @cached_property
    def budget_suggestions(self) -> AsyncBudgetSuggestions:
        return AsyncBudgetSuggestions(self._raw_client, self._server, self._auth)

    @cached_property
    def budgets(self) -> AsyncBudgets:
        return AsyncBudgets(self._raw_client, self._server, self._auth)

    @cached_property
    def cloud_connect(self) -> AsyncCloudConnect:
        return AsyncCloudConnect(self._raw_client, self._server, self._auth)

    @cached_property
    def cloud_diagrams(self) -> AsyncCloudDiagrams:
        return AsyncCloudDiagrams(self._raw_client, self._server, self._auth)

    @cached_property
    def cloud_incidents(self) -> AsyncCloudIncidents:
        return AsyncCloudIncidents(self._raw_client, self._server, self._auth)

    @cached_property
    def cloud_flow_api(self) -> AsyncCloudFlowApi:
        return AsyncCloudFlowApi(self._raw_client, self._server, self._auth)

    @cached_property
    def commitment_manager(self) -> AsyncCommitmentManager:
        return AsyncCommitmentManager(self._raw_client, self._server, self._auth)

    @cached_property
    def composer_insights_beta(self) -> AsyncComposerInsightsBeta:
        return AsyncComposerInsightsBeta(self._raw_client, self._server, self._auth)

    @cached_property
    def connections(self) -> AsyncConnections:
        return AsyncConnections(self._raw_client, self._server, self._auth)

    @cached_property
    def contract_templates(self) -> AsyncContractTemplates:
        return AsyncContractTemplates(self._raw_client, self._server, self._auth)

    @cached_property
    def contracts(self) -> AsyncContracts:
        return AsyncContracts(self._raw_client, self._server, self._auth)

    @cached_property
    def customer_groups(self) -> AsyncCustomerGroups:
        return AsyncCustomerGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def customers(self) -> AsyncCustomers:
        return AsyncCustomers(self._raw_client, self._server, self._auth)

    @cached_property
    def data_hub(self) -> AsyncDataHub:
        return AsyncDataHub(self._raw_client, self._server, self._auth)

    @cached_property
    def dimensions(self) -> AsyncDimensions:
        return AsyncDimensions(self._raw_client, self._server, self._auth)

    @cached_property
    def folders(self) -> AsyncFolders:
        return AsyncFolders(self._raw_client, self._server, self._auth)

    @cached_property
    def geographic_access(self) -> AsyncGeographicAccess:
        return AsyncGeographicAccess(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> AsyncInsights:
        return AsyncInsights(self._raw_client, self._server, self._auth)

    @cached_property
    def invoices(self) -> AsyncInvoices:
        return AsyncInvoices(self._raw_client, self._server, self._auth)

    @cached_property
    def labels(self) -> AsyncLabels:
        return AsyncLabels(self._raw_client, self._server, self._auth)

    @cached_property
    def organizations(self) -> AsyncOrganizations:
        return AsyncOrganizations(self._raw_client, self._server, self._auth)

    @cached_property
    def perfect_scale_for_commitments_aws(self) -> AsyncPerfectScaleForCommitmentsAws:
        return AsyncPerfectScaleForCommitmentsAws(self._raw_client, self._server, self._auth)

    @cached_property
    def perfect_scale_for_commitments_gcp(self) -> AsyncPerfectScaleForCommitmentsGcp:
        return AsyncPerfectScaleForCommitmentsGcp(self._raw_client, self._server, self._auth)

    @cached_property
    def perfect_scale_for_commitments_general(self) -> AsyncPerfectScaleForCommitmentsGeneral:
        return AsyncPerfectScaleForCommitmentsGeneral(self._raw_client, self._server, self._auth)

    @cached_property
    def platforms(self) -> AsyncPlatforms:
        return AsyncPlatforms(self._raw_client, self._server, self._auth)

    @cached_property
    def products(self) -> AsyncProducts:
        return AsyncProducts(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> AsyncReports:
        return AsyncReports(self._raw_client, self._server, self._auth)

    @cached_property
    def roles(self) -> AsyncRoles:
        return AsyncRoles(self._raw_client, self._server, self._auth)

    @cached_property
    def service_accounts(self) -> AsyncServiceAccounts:
        return AsyncServiceAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def service_quotas(self) -> AsyncServiceQuotas:
        return AsyncServiceQuotas(self._raw_client, self._server, self._auth)

    @cached_property
    def settings(self) -> AsyncSettings:
        return AsyncSettings(self._raw_client, self._server, self._auth)

    @cached_property
    def shared_payers(self) -> AsyncSharedPayers:
        return AsyncSharedPayers(self._raw_client, self._server, self._auth)

    @cached_property
    def sharing(self) -> AsyncSharing:
        return AsyncSharing(self._raw_client, self._server, self._auth)

    @cached_property
    def signup(self) -> AsyncSignup:
        return AsyncSignup(self._raw_client, self._server)

    @cached_property
    def support_requests(self) -> AsyncSupportRequests:
        return AsyncSupportRequests(self._raw_client, self._server, self._auth)

    @cached_property
    def templates(self) -> AsyncTemplates:
        return AsyncTemplates(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> AsyncUsers:
        return AsyncUsers(self._raw_client, self._server, self._auth)

    @cached_property
    def widgets_beta(self) -> AsyncWidgetsBeta:
        return AsyncWidgetsBeta(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncDoiTClient
