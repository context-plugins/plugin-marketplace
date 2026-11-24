from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account import AsyncAccount
from .apis.asn_whois import AsyncAsnWhois
from .apis.databases_asn_whois import AsyncDatabasesAsnWhois
from .apis.databases_dns import AsyncDatabasesDns
from .apis.databases_expiring_dropped import AsyncDatabasesExpiringDropped
from .apis.databases_ip_geolocation import AsyncDatabasesIpGeolocation
from .apis.databases_ip_security import AsyncDatabasesIpSecurity
from .apis.databases_ip_whois import AsyncDatabasesIpWhois
from .apis.databases_newly_registered import AsyncDatabasesNewlyRegistered
from .apis.databases_subdomains import AsyncDatabasesSubdomains
from .apis.databases_threat_feed import AsyncDatabasesThreatFeed
from .apis.databases_whois import AsyncDatabasesWhois
from .apis.dns import AsyncDns
from .apis.domain_availability import AsyncDomainAvailability
from .apis.domain_reputation import AsyncDomainReputation
from .apis.geolocation import AsyncGeolocation
from .apis.ip_reputation import AsyncIpReputation
from .apis.ip_whois import AsyncIpWhois
from .apis.ssl import AsyncSsl
from .apis.subdomains import AsyncSubdomains
from .apis.typosquatting import AsyncTyposquatting
from .apis.whois import AsyncWhois
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseWhoisFreaksClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyQueryScheme,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)
from .server.environment import Environment


class AsyncWhoisFreaksClient(BaseWhoisFreaksClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            base_url=base_url,
            timeout=timeout,
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
                param[str]("User-Agent", "WhoisFreaksClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_auth=ApiKeyQueryScheme("apiKey", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def asn_whois(self) -> AsyncAsnWhois:
        return AsyncAsnWhois(self._raw_client, self._server, self._auth)

    @cached_property
    def account(self) -> AsyncAccount:
        return AsyncAccount(self._raw_client, self._server, self._auth)

    @cached_property
    def dns(self) -> AsyncDns:
        return AsyncDns(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_asn_whois(self) -> AsyncDatabasesAsnWhois:
        return AsyncDatabasesAsnWhois(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_dns(self) -> AsyncDatabasesDns:
        return AsyncDatabasesDns(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_expiring_dropped(self) -> AsyncDatabasesExpiringDropped:
        return AsyncDatabasesExpiringDropped(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_ip_geolocation(self) -> AsyncDatabasesIpGeolocation:
        return AsyncDatabasesIpGeolocation(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_ip_security(self) -> AsyncDatabasesIpSecurity:
        return AsyncDatabasesIpSecurity(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_ip_whois(self) -> AsyncDatabasesIpWhois:
        return AsyncDatabasesIpWhois(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_newly_registered(self) -> AsyncDatabasesNewlyRegistered:
        return AsyncDatabasesNewlyRegistered(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_subdomains(self) -> AsyncDatabasesSubdomains:
        return AsyncDatabasesSubdomains(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_threat_feed(self) -> AsyncDatabasesThreatFeed:
        return AsyncDatabasesThreatFeed(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_whois(self) -> AsyncDatabasesWhois:
        return AsyncDatabasesWhois(self._raw_client, self._server, self._auth)

    @cached_property
    def domain_availability(self) -> AsyncDomainAvailability:
        return AsyncDomainAvailability(self._raw_client, self._server, self._auth)

    @cached_property
    def domain_reputation(self) -> AsyncDomainReputation:
        return AsyncDomainReputation(self._raw_client, self._server, self._auth)

    @cached_property
    def geolocation(self) -> AsyncGeolocation:
        return AsyncGeolocation(self._raw_client, self._server, self._auth)

    @cached_property
    def ip_reputation(self) -> AsyncIpReputation:
        return AsyncIpReputation(self._raw_client, self._server, self._auth)

    @cached_property
    def ip_whois(self) -> AsyncIpWhois:
        return AsyncIpWhois(self._raw_client, self._server, self._auth)

    @cached_property
    def ssl(self) -> AsyncSsl:
        return AsyncSsl(self._raw_client, self._server, self._auth)

    @cached_property
    def subdomains(self) -> AsyncSubdomains:
        return AsyncSubdomains(self._raw_client, self._server, self._auth)

    @cached_property
    def typosquatting(self) -> AsyncTyposquatting:
        return AsyncTyposquatting(self._raw_client, self._server, self._auth)

    @cached_property
    def whois(self) -> AsyncWhois:
        return AsyncWhois(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncWhoisFreaksClient
