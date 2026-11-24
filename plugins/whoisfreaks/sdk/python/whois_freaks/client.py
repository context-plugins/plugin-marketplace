from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account import Account
from .apis.asn_whois import AsnWhois
from .apis.databases_asn_whois import DatabasesAsnWhois
from .apis.databases_dns import DatabasesDns
from .apis.databases_expiring_dropped import DatabasesExpiringDropped
from .apis.databases_ip_geolocation import DatabasesIpGeolocation
from .apis.databases_ip_security import DatabasesIpSecurity
from .apis.databases_ip_whois import DatabasesIpWhois
from .apis.databases_newly_registered import DatabasesNewlyRegistered
from .apis.databases_subdomains import DatabasesSubdomains
from .apis.databases_threat_feed import DatabasesThreatFeed
from .apis.databases_whois import DatabasesWhois
from .apis.dns import Dns
from .apis.domain_availability import DomainAvailability
from .apis.domain_reputation import DomainReputation
from .apis.geolocation import Geolocation
from .apis.ip_reputation import IpReputation
from .apis.ip_whois import IpWhois
from .apis.ssl import Ssl
from .apis.subdomains import Subdomains
from .apis.typosquatting import Typosquatting
from .apis.whois import Whois
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseWhoisFreaksClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyQueryScheme,
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
from .server.environment import Environment


class WhoisFreaksClient(BaseWhoisFreaksClient[RawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            base_url=base_url,
            timeout=timeout,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(
            api_key_auth=ApiKeyQueryScheme("apiKey", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def asn_whois(self) -> AsnWhois:
        return AsnWhois(self._raw_client, self._server, self._auth)

    @cached_property
    def account(self) -> Account:
        return Account(self._raw_client, self._server, self._auth)

    @cached_property
    def dns(self) -> Dns:
        return Dns(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_asn_whois(self) -> DatabasesAsnWhois:
        return DatabasesAsnWhois(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_dns(self) -> DatabasesDns:
        return DatabasesDns(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_expiring_dropped(self) -> DatabasesExpiringDropped:
        return DatabasesExpiringDropped(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_ip_geolocation(self) -> DatabasesIpGeolocation:
        return DatabasesIpGeolocation(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_ip_security(self) -> DatabasesIpSecurity:
        return DatabasesIpSecurity(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_ip_whois(self) -> DatabasesIpWhois:
        return DatabasesIpWhois(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_newly_registered(self) -> DatabasesNewlyRegistered:
        return DatabasesNewlyRegistered(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_subdomains(self) -> DatabasesSubdomains:
        return DatabasesSubdomains(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_threat_feed(self) -> DatabasesThreatFeed:
        return DatabasesThreatFeed(self._raw_client, self._server, self._auth)

    @cached_property
    def databases_whois(self) -> DatabasesWhois:
        return DatabasesWhois(self._raw_client, self._server, self._auth)

    @cached_property
    def domain_availability(self) -> DomainAvailability:
        return DomainAvailability(self._raw_client, self._server, self._auth)

    @cached_property
    def domain_reputation(self) -> DomainReputation:
        return DomainReputation(self._raw_client, self._server, self._auth)

    @cached_property
    def geolocation(self) -> Geolocation:
        return Geolocation(self._raw_client, self._server, self._auth)

    @cached_property
    def ip_reputation(self) -> IpReputation:
        return IpReputation(self._raw_client, self._server, self._auth)

    @cached_property
    def ip_whois(self) -> IpWhois:
        return IpWhois(self._raw_client, self._server, self._auth)

    @cached_property
    def ssl(self) -> Ssl:
        return Ssl(self._raw_client, self._server, self._auth)

    @cached_property
    def subdomains(self) -> Subdomains:
        return Subdomains(self._raw_client, self._server, self._auth)

    @cached_property
    def typosquatting(self) -> Typosquatting:
        return Typosquatting(self._raw_client, self._server, self._auth)

    @cached_property
    def whois(self) -> Whois:
        return Whois(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = WhoisFreaksClient
