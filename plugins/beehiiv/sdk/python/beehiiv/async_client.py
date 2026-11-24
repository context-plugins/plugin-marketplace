from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.ad_network_offers import AsyncAdNetworkOffers
from .apis.ad_network_reports import AsyncAdNetworkReports
from .apis.advertisement_opportunities import AsyncAdvertisementOpportunities
from .apis.authorizations import AsyncAuthorizations
from .apis.authors import AsyncAuthors
from .apis.automation_journeys import AsyncAutomationJourneys
from .apis.automations import AsyncAutomations
from .apis.bulk_subscription_updates import AsyncBulkSubscriptionUpdates
from .apis.bulk_subscriptions import AsyncBulkSubscriptions
from .apis.complimentary_access_api import AsyncComplimentaryAccessApi
from .apis.condition_sets import AsyncConditionSets
from .apis.custom_fields import AsyncCustomFields
from .apis.data_deletion import AsyncDataDeletion
from .apis.engagements import AsyncEngagements
from .apis.newsletter_list_subscriptions import AsyncNewsletterListSubscriptions
from .apis.newsletter_lists import AsyncNewsletterLists
from .apis.oauth_users import AsyncOauthUsers
from .apis.podcasts import AsyncPodcasts
from .apis.polls import AsyncPolls
from .apis.post_templates import AsyncPostTemplates
from .apis.posts import AsyncPosts
from .apis.publications import AsyncPublications
from .apis.referral_program import AsyncReferralProgram
from .apis.segments import AsyncSegments
from .apis.subscription_tags import AsyncSubscriptionTags
from .apis.subscriptions import AsyncSubscriptions
from .apis.tiers import AsyncTiers
from .apis.tokens import AsyncTokens
from .apis.webhooks_api import AsyncWebhooksApi
from .apis.workspaces import AsyncWorkspaces
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBeehiivClient
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
from .server.server_config import ServerConfigOrDict


class AsyncBeehiivClient(BaseBeehiivClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth_scheme: str | None = None,
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
                param[str]("User-Agent", "BeehiivClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            bearer_auth_scheme=BearerAuthScheme(bearer_auth_scheme) if bearer_auth_scheme is not None else no_auth
        )

    @cached_property
    def ad_network_offers(self) -> AsyncAdNetworkOffers:
        return AsyncAdNetworkOffers(self._raw_client, self._server)

    @cached_property
    def ad_network_reports(self) -> AsyncAdNetworkReports:
        return AsyncAdNetworkReports(self._raw_client, self._server)

    @cached_property
    def advertisement_opportunities(self) -> AsyncAdvertisementOpportunities:
        return AsyncAdvertisementOpportunities(self._raw_client, self._server)

    @cached_property
    def authorizations(self) -> AsyncAuthorizations:
        return AsyncAuthorizations(self._raw_client, self._server)

    @cached_property
    def authors(self) -> AsyncAuthors:
        return AsyncAuthors(self._raw_client, self._server)

    @cached_property
    def automation_journeys(self) -> AsyncAutomationJourneys:
        return AsyncAutomationJourneys(self._raw_client, self._server)

    @cached_property
    def automations(self) -> AsyncAutomations:
        return AsyncAutomations(self._raw_client, self._server)

    @cached_property
    def bulk_subscription_updates(self) -> AsyncBulkSubscriptionUpdates:
        return AsyncBulkSubscriptionUpdates(self._raw_client, self._server)

    @cached_property
    def bulk_subscriptions(self) -> AsyncBulkSubscriptions:
        return AsyncBulkSubscriptions(self._raw_client, self._server)

    @cached_property
    def complimentary_access_api(self) -> AsyncComplimentaryAccessApi:
        return AsyncComplimentaryAccessApi(self._raw_client, self._server)

    @cached_property
    def condition_sets(self) -> AsyncConditionSets:
        return AsyncConditionSets(self._raw_client, self._server)

    @cached_property
    def custom_fields(self) -> AsyncCustomFields:
        return AsyncCustomFields(self._raw_client, self._server)

    @cached_property
    def data_deletion(self) -> AsyncDataDeletion:
        return AsyncDataDeletion(self._raw_client, self._server)

    @cached_property
    def engagements(self) -> AsyncEngagements:
        return AsyncEngagements(self._raw_client, self._server)

    @cached_property
    def newsletter_list_subscriptions(self) -> AsyncNewsletterListSubscriptions:
        return AsyncNewsletterListSubscriptions(self._raw_client, self._server)

    @cached_property
    def newsletter_lists(self) -> AsyncNewsletterLists:
        return AsyncNewsletterLists(self._raw_client, self._server)

    @cached_property
    def podcasts(self) -> AsyncPodcasts:
        return AsyncPodcasts(self._raw_client, self._server)

    @cached_property
    def polls(self) -> AsyncPolls:
        return AsyncPolls(self._raw_client, self._server)

    @cached_property
    def post_templates(self) -> AsyncPostTemplates:
        return AsyncPostTemplates(self._raw_client, self._server)

    @cached_property
    def posts(self) -> AsyncPosts:
        return AsyncPosts(self._raw_client, self._server)

    @cached_property
    def publications(self) -> AsyncPublications:
        return AsyncPublications(self._raw_client, self._server)

    @cached_property
    def referral_program(self) -> AsyncReferralProgram:
        return AsyncReferralProgram(self._raw_client, self._server)

    @cached_property
    def segments(self) -> AsyncSegments:
        return AsyncSegments(self._raw_client, self._server)

    @cached_property
    def subscription_tags(self) -> AsyncSubscriptionTags:
        return AsyncSubscriptionTags(self._raw_client, self._server)

    @cached_property
    def subscriptions(self) -> AsyncSubscriptions:
        return AsyncSubscriptions(self._raw_client, self._server)

    @cached_property
    def tiers(self) -> AsyncTiers:
        return AsyncTiers(self._raw_client, self._server)

    @cached_property
    def tokens(self) -> AsyncTokens:
        return AsyncTokens(self._raw_client, self._server)

    @cached_property
    def webhooks_api(self) -> AsyncWebhooksApi:
        return AsyncWebhooksApi(self._raw_client, self._server)

    @cached_property
    def workspaces(self) -> AsyncWorkspaces:
        return AsyncWorkspaces(self._raw_client, self._server)

    @cached_property
    def oauth_users(self) -> AsyncOauthUsers:
        return AsyncOauthUsers(self._raw_client, self._server)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncBeehiivClient
