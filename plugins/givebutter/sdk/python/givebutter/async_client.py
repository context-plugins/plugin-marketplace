from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.campaign_discount_codes import AsyncCampaignDiscountCodes
from .apis.campaign_members import AsyncCampaignMembers
from .apis.campaign_teams import AsyncCampaignTeams
from .apis.campaign_tickets import AsyncCampaignTickets
from .apis.campaigns import AsyncCampaigns
from .apis.contact_activities import AsyncContactActivities
from .apis.contact_tags import AsyncContactTags
from .apis.contacts import AsyncContacts
from .apis.funds import AsyncFunds
from .apis.household_contacts import AsyncHouseholdContacts
from .apis.households import AsyncHouseholds
from .apis.messages import AsyncMessages
from .apis.payouts import AsyncPayouts
from .apis.pledges import AsyncPledges
from .apis.recurring_plans import AsyncRecurringPlans
from .apis.sso_accounts import AsyncSsoAccounts
from .apis.sso_campaigns import AsyncSsoCampaigns
from .apis.tickets import AsyncTickets
from .apis.transactions import AsyncTransactions
from .apis.webhook_activities import AsyncWebhookActivities
from .apis.webhooks_api import AsyncWebhooksApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseGivebutterClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncGivebutterClient(BaseGivebutterClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        http: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "GivebutterClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(http=BearerAuthScheme(http) if http is not None else no_auth)

    @cached_property
    def campaign_discount_codes(self) -> AsyncCampaignDiscountCodes:
        return AsyncCampaignDiscountCodes(self._raw_client, self._server, self._auth)

    @cached_property
    def campaign_members(self) -> AsyncCampaignMembers:
        return AsyncCampaignMembers(self._raw_client, self._server, self._auth)

    @cached_property
    def campaign_teams(self) -> AsyncCampaignTeams:
        return AsyncCampaignTeams(self._raw_client, self._server, self._auth)

    @cached_property
    def campaign_tickets(self) -> AsyncCampaignTickets:
        return AsyncCampaignTickets(self._raw_client, self._server, self._auth)

    @cached_property
    def campaigns(self) -> AsyncCampaigns:
        return AsyncCampaigns(self._raw_client, self._server, self._auth)

    @cached_property
    def contact_activities(self) -> AsyncContactActivities:
        return AsyncContactActivities(self._raw_client, self._server, self._auth)

    @cached_property
    def contact_tags(self) -> AsyncContactTags:
        return AsyncContactTags(self._raw_client, self._server, self._auth)

    @cached_property
    def contacts(self) -> AsyncContacts:
        return AsyncContacts(self._raw_client, self._server, self._auth)

    @cached_property
    def funds(self) -> AsyncFunds:
        return AsyncFunds(self._raw_client, self._server, self._auth)

    @cached_property
    def household_contacts(self) -> AsyncHouseholdContacts:
        return AsyncHouseholdContacts(self._raw_client, self._server, self._auth)

    @cached_property
    def households(self) -> AsyncHouseholds:
        return AsyncHouseholds(self._raw_client, self._server, self._auth)

    @cached_property
    def messages(self) -> AsyncMessages:
        return AsyncMessages(self._raw_client, self._server, self._auth)

    @cached_property
    def payouts(self) -> AsyncPayouts:
        return AsyncPayouts(self._raw_client, self._server, self._auth)

    @cached_property
    def pledges(self) -> AsyncPledges:
        return AsyncPledges(self._raw_client, self._server, self._auth)

    @cached_property
    def recurring_plans(self) -> AsyncRecurringPlans:
        return AsyncRecurringPlans(self._raw_client, self._server, self._auth)

    @cached_property
    def sso_accounts(self) -> AsyncSsoAccounts:
        return AsyncSsoAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def sso_campaigns(self) -> AsyncSsoCampaigns:
        return AsyncSsoCampaigns(self._raw_client, self._server, self._auth)

    @cached_property
    def tickets(self) -> AsyncTickets:
        return AsyncTickets(self._raw_client, self._server, self._auth)

    @cached_property
    def transactions(self) -> AsyncTransactions:
        return AsyncTransactions(self._raw_client, self._server, self._auth)

    @cached_property
    def webhook_activities(self) -> AsyncWebhookActivities:
        return AsyncWebhookActivities(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> AsyncWebhooksApi:
        return AsyncWebhooksApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncGivebutterClient
