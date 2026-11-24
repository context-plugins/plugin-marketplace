from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.ad_network_offers import AdNetworkOffers
from .apis.ad_network_reports import AdNetworkReports
from .apis.advertisement_opportunities import AdvertisementOpportunities
from .apis.authorizations import Authorizations
from .apis.authors import Authors
from .apis.automation_journeys import AutomationJourneys
from .apis.automations import Automations
from .apis.bulk_subscription_updates import BulkSubscriptionUpdates
from .apis.bulk_subscriptions import BulkSubscriptions
from .apis.complimentary_access_api import ComplimentaryAccessApi
from .apis.condition_sets import ConditionSets
from .apis.custom_fields import CustomFields
from .apis.data_deletion import DataDeletion
from .apis.engagements import Engagements
from .apis.newsletter_list_subscriptions import NewsletterListSubscriptions
from .apis.newsletter_lists import NewsletterLists
from .apis.oauth_users import OauthUsers
from .apis.podcasts import Podcasts
from .apis.polls import Polls
from .apis.post_templates import PostTemplates
from .apis.posts import Posts
from .apis.publications import Publications
from .apis.referral_program import ReferralProgram
from .apis.segments import Segments
from .apis.subscription_tags import SubscriptionTags
from .apis.subscriptions import Subscriptions
from .apis.tiers import Tiers
from .apis.tokens import Tokens
from .apis.webhooks_api import WebhooksApi
from .apis.workspaces import Workspaces
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBeehiivClient
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
from .server.server_config import ServerConfigOrDict


class BeehiivClient(BaseBeehiivClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth_scheme: str | None = None,
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
                param[str]("User-Agent", "BeehiivClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            bearer_auth_scheme=BearerAuthScheme(bearer_auth_scheme) if bearer_auth_scheme is not None else no_auth
        )

    @cached_property
    def ad_network_offers(self) -> AdNetworkOffers:
        return AdNetworkOffers(self._raw_client, self._server)

    @cached_property
    def ad_network_reports(self) -> AdNetworkReports:
        return AdNetworkReports(self._raw_client, self._server)

    @cached_property
    def advertisement_opportunities(self) -> AdvertisementOpportunities:
        return AdvertisementOpportunities(self._raw_client, self._server)

    @cached_property
    def authorizations(self) -> Authorizations:
        return Authorizations(self._raw_client, self._server)

    @cached_property
    def authors(self) -> Authors:
        return Authors(self._raw_client, self._server)

    @cached_property
    def automation_journeys(self) -> AutomationJourneys:
        return AutomationJourneys(self._raw_client, self._server)

    @cached_property
    def automations(self) -> Automations:
        return Automations(self._raw_client, self._server)

    @cached_property
    def bulk_subscription_updates(self) -> BulkSubscriptionUpdates:
        return BulkSubscriptionUpdates(self._raw_client, self._server)

    @cached_property
    def bulk_subscriptions(self) -> BulkSubscriptions:
        return BulkSubscriptions(self._raw_client, self._server)

    @cached_property
    def complimentary_access_api(self) -> ComplimentaryAccessApi:
        return ComplimentaryAccessApi(self._raw_client, self._server)

    @cached_property
    def condition_sets(self) -> ConditionSets:
        return ConditionSets(self._raw_client, self._server)

    @cached_property
    def custom_fields(self) -> CustomFields:
        return CustomFields(self._raw_client, self._server)

    @cached_property
    def data_deletion(self) -> DataDeletion:
        return DataDeletion(self._raw_client, self._server)

    @cached_property
    def engagements(self) -> Engagements:
        return Engagements(self._raw_client, self._server)

    @cached_property
    def newsletter_list_subscriptions(self) -> NewsletterListSubscriptions:
        return NewsletterListSubscriptions(self._raw_client, self._server)

    @cached_property
    def newsletter_lists(self) -> NewsletterLists:
        return NewsletterLists(self._raw_client, self._server)

    @cached_property
    def podcasts(self) -> Podcasts:
        return Podcasts(self._raw_client, self._server)

    @cached_property
    def polls(self) -> Polls:
        return Polls(self._raw_client, self._server)

    @cached_property
    def post_templates(self) -> PostTemplates:
        return PostTemplates(self._raw_client, self._server)

    @cached_property
    def posts(self) -> Posts:
        return Posts(self._raw_client, self._server)

    @cached_property
    def publications(self) -> Publications:
        return Publications(self._raw_client, self._server)

    @cached_property
    def referral_program(self) -> ReferralProgram:
        return ReferralProgram(self._raw_client, self._server)

    @cached_property
    def segments(self) -> Segments:
        return Segments(self._raw_client, self._server)

    @cached_property
    def subscription_tags(self) -> SubscriptionTags:
        return SubscriptionTags(self._raw_client, self._server)

    @cached_property
    def subscriptions(self) -> Subscriptions:
        return Subscriptions(self._raw_client, self._server)

    @cached_property
    def tiers(self) -> Tiers:
        return Tiers(self._raw_client, self._server)

    @cached_property
    def tokens(self) -> Tokens:
        return Tokens(self._raw_client, self._server)

    @cached_property
    def webhooks_api(self) -> WebhooksApi:
        return WebhooksApi(self._raw_client, self._server)

    @cached_property
    def workspaces(self) -> Workspaces:
        return Workspaces(self._raw_client, self._server)

    @cached_property
    def oauth_users(self) -> OauthUsers:
        return OauthUsers(self._raw_client, self._server)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = BeehiivClient
