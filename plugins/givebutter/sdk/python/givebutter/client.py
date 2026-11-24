from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.campaign_discount_codes import CampaignDiscountCodes
from .apis.campaign_members import CampaignMembers
from .apis.campaign_teams import CampaignTeams
from .apis.campaign_tickets import CampaignTickets
from .apis.campaigns import Campaigns
from .apis.contact_activities import ContactActivities
from .apis.contact_tags import ContactTags
from .apis.contacts import Contacts
from .apis.funds import Funds
from .apis.household_contacts import HouseholdContacts
from .apis.households import Households
from .apis.messages import Messages
from .apis.payouts import Payouts
from .apis.pledges import Pledges
from .apis.recurring_plans import RecurringPlans
from .apis.sso_accounts import SsoAccounts
from .apis.sso_campaigns import SsoCampaigns
from .apis.tickets import Tickets
from .apis.transactions import Transactions
from .apis.webhook_activities import WebhookActivities
from .apis.webhooks_api import WebhooksApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseGivebutterClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    BearerAuthScheme,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    no_auth,
    param,
)


class GivebutterClient(BaseGivebutterClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        http: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(http=BearerAuthScheme(http) if http is not None else no_auth)

    @cached_property
    def campaign_discount_codes(self) -> CampaignDiscountCodes:
        return CampaignDiscountCodes(self._raw_client, self._server, self._auth)

    @cached_property
    def campaign_members(self) -> CampaignMembers:
        return CampaignMembers(self._raw_client, self._server, self._auth)

    @cached_property
    def campaign_teams(self) -> CampaignTeams:
        return CampaignTeams(self._raw_client, self._server, self._auth)

    @cached_property
    def campaign_tickets(self) -> CampaignTickets:
        return CampaignTickets(self._raw_client, self._server, self._auth)

    @cached_property
    def campaigns(self) -> Campaigns:
        return Campaigns(self._raw_client, self._server, self._auth)

    @cached_property
    def contact_activities(self) -> ContactActivities:
        return ContactActivities(self._raw_client, self._server, self._auth)

    @cached_property
    def contact_tags(self) -> ContactTags:
        return ContactTags(self._raw_client, self._server, self._auth)

    @cached_property
    def contacts(self) -> Contacts:
        return Contacts(self._raw_client, self._server, self._auth)

    @cached_property
    def funds(self) -> Funds:
        return Funds(self._raw_client, self._server, self._auth)

    @cached_property
    def household_contacts(self) -> HouseholdContacts:
        return HouseholdContacts(self._raw_client, self._server, self._auth)

    @cached_property
    def households(self) -> Households:
        return Households(self._raw_client, self._server, self._auth)

    @cached_property
    def messages(self) -> Messages:
        return Messages(self._raw_client, self._server, self._auth)

    @cached_property
    def payouts(self) -> Payouts:
        return Payouts(self._raw_client, self._server, self._auth)

    @cached_property
    def pledges(self) -> Pledges:
        return Pledges(self._raw_client, self._server, self._auth)

    @cached_property
    def recurring_plans(self) -> RecurringPlans:
        return RecurringPlans(self._raw_client, self._server, self._auth)

    @cached_property
    def sso_accounts(self) -> SsoAccounts:
        return SsoAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def sso_campaigns(self) -> SsoCampaigns:
        return SsoCampaigns(self._raw_client, self._server, self._auth)

    @cached_property
    def tickets(self) -> Tickets:
        return Tickets(self._raw_client, self._server, self._auth)

    @cached_property
    def transactions(self) -> Transactions:
        return Transactions(self._raw_client, self._server, self._auth)

    @cached_property
    def webhook_activities(self) -> WebhookActivities:
        return WebhookActivities(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> WebhooksApi:
        return WebhooksApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = GivebutterClient
