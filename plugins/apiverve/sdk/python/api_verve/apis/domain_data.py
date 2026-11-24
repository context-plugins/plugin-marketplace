from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.bimivalidator_error import BimivalidatorErrorBody, bimivalidator_error_mapper
from ..errors.dkimvalidator_error import DkimvalidatorErrorBody, dkimvalidator_error_mapper
from ..errors.dmarcvalidator_error import DmarcvalidatorErrorBody, dmarcvalidator_error_mapper
from ..errors.dnslookup_error import DnslookupErrorBody, dnslookup_error_mapper
from ..errors.dnspropagation_error import DnspropagationErrorBody, dnspropagation_error_mapper
from ..errors.dnsseccheck_error import DnsseccheckErrorBody, dnsseccheck_error_mapper
from ..errors.domainavailability_error import DomainavailabilityErrorBody, domainavailability_error_mapper
from ..errors.domainexpiration_error import DomainexpirationErrorBody, domainexpiration_error_mapper
from ..errors.fullyqualifieddomain_error import FullyqualifieddomainErrorBody, fullyqualifieddomain_error_mapper
from ..errors.mxlookup_error import MxlookupErrorBody, mxlookup_error_mapper
from ..errors.reversednslookup_error import ReversednslookupErrorBody, reversednslookup_error_mapper
from ..errors.spfvalidator_error import SpfvalidatorErrorBody, spfvalidator_error_mapper
from ..errors.sslchecker_error import SslcheckerErrorBody, sslchecker_error_mapper
from ..errors.subdomainfinder_error import SubdomainfinderErrorBody, subdomainfinder_error_mapper
from ..errors.urllookup_error import UrllookupErrorBody, urllookup_error_mapper
from ..errors.urltitle_error import UrltitleErrorBody, urltitle_error_mapper
from ..errors.urlunshortener_error import UrlunshortenerErrorBody, urlunshortener_error_mapper
from ..errors.whoislookup_error import WhoislookupErrorBody, whoislookup_error_mapper
from ..models.v1_bimivalidator_response import V1BimivalidatorResponse
from ..models.v1_dkimvalidator_response import V1DkimvalidatorResponse
from ..models.v1_dmarcvalidator_response import V1DmarcvalidatorResponse
from ..models.v1_dnslookup_response import V1DnslookupResponse
from ..models.v1_dnspropagation_response import V1DnspropagationResponse
from ..models.v1_dnsseccheck_response import V1DnsseccheckResponse
from ..models.v1_domainavailability_response import V1DomainavailabilityResponse
from ..models.v1_domainexpiration_response import V1DomainexpirationResponse
from ..models.v1_fullyqualifieddomain_response import V1FullyqualifieddomainResponse
from ..models.v1_mxlookup_response import V1MxlookupResponse
from ..models.v1_reversednslookup_response import V1ReversednslookupResponse
from ..models.v1_spfvalidator_response import V1SpfvalidatorResponse
from ..models.v1_sslchecker_response import V1SslcheckerResponse
from ..models.v1_subdomainfinder_response import V1SubdomainfinderResponse
from ..models.v1_urllookup_request import V1UrllookupRequest, V1UrllookupRequestDict
from ..models.v1_urllookup_response import V1UrllookupResponse
from ..models.v1_urltitle_request import V1UrltitleRequest, V1UrltitleRequestDict
from ..models.v1_urltitle_response import V1UrltitleResponse
from ..models.v1_urlunshortener_request import V1UrlunshortenerRequest, V1UrlunshortenerRequestDict
from ..models.v1_urlunshortener_response import V1UrlunshortenerResponse
from ..models.v1_whoislookup_response import V1WhoislookupResponse
from ..server.server import Server


class DomainData:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DomainDataWithRawResponse(client, server, auth)

    def bimivalidator(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1BimivalidatorResponse:
        """BIMI Validator checks if a domain has a valid BIMI record published in DNS. BIMI enables domain owners to
        display verified logos in supported email clients.

        Args:
            domain: The domain to validate the BIMI record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.bimivalidator(domain, request_options=request_options))

    def dkimvalidator(
        self, domain: str, *, selector: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1DkimvalidatorResponse:
        """DKIM Validator checks the DomainKeys Identified Mail (DKIM) DNS records for a domain to verify that they are
        present and correctly formatted.

        Args:
            domain: The domain to validate the DKIM record for
            selector: The DKIM selector to look up (the label before ._domainkey). When omitted, a list of common
                selectors is tried
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dkimvalidator(domain, selector=selector, request_options=request_options))

    def dmarcvalidator(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1DmarcvalidatorResponse:
        """DMARC Validator checks the Domain-based Message Authentication, Reporting and Conformance (DMARC) record for
        a domain to ensure it is correctly configured.

        Args:
            domain: The domain to validate the DMARC record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dmarcvalidator(domain, request_options=request_options))

    def dnslookup(self, domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DnslookupResponse:
        """Lookup the DNS records of a domain

        Args:
            domain: The domain name for which you want to lookup the DNS records. Do not include the protocol, and not
                subdomains (e.g., myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dnslookup(domain, request_options=request_options))

    def dnspropagation(
        self, domain: str, *, type_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1DnspropagationResponse:
        """Check DNS propagation for a domain across global DNS servers

        Args:
            domain: The domain name to check propagation for
            type_: The DNS record type to check
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dnspropagation(domain, type_=type_, request_options=request_options))

    def dnsseccheck(self, domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DnsseccheckResponse:
        """Validate DNSSEC configuration for a domain

        Args:
            domain: The domain name to check DNSSEC configuration for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dnsseccheck(domain, request_options=request_options))

    def domainavailability(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1DomainavailabilityResponse:
        """Check if a domain is available

        Args:
            domain: The domain to check if it is available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.domainavailability(domain, request_options=request_options))

    def domainexpiration(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1DomainexpirationResponse:
        """Check the expiration date of a domain

        Args:
            domain: The domain to check the expiration date of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.domainexpiration(domain, request_options=request_options))

    def fullyqualifieddomain(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1FullyqualifieddomainResponse:
        """Get the fully qualified domain name of an ip

        Args:
            ip: The IP address to get the fully qualified domain name of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.fullyqualifieddomain(ip, request_options=request_options))

    def mxlookup(self, domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1MxlookupResponse:
        """MX Lookup is a simple tool for getting MX records for a domain. It returns the MX records for the given
        domain.

        Args:
            domain: The domain you want to get the MX records for (e.g. yahoo.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.mxlookup(domain, request_options=request_options))

    def reversednslookup(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ReversednslookupResponse:
        """Get the hostname associated with an IP address

        Args:
            ip: The IP address to lookup (IPv4 or IPv6)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.reversednslookup(ip, request_options=request_options))

    def spfvalidator(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1SpfvalidatorResponse:
        """SPF Validator checks the Sender Policy Framework (SPF) DNS record for a domain to verify if it's valid and
        optionally whether a given IP address is authorized to send emails for that domain.

        Args:
            domain: The domain to validate the SPF record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.spfvalidator(domain, request_options=request_options))

    def sslchecker(self, domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1SslcheckerResponse:
        """Check the SSL certificate of a domain

        Args:
            domain: The domain of the website to check the SSL certificate of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.sslchecker(domain, request_options=request_options))

    def subdomainfinder(
        self,
        domain: str,
        *,
        limit: int | None = None,
        deep_scan: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SubdomainfinderResponse:
        """Subdomain Finder is a simple tool for finding all the available subdomains for a given domain. It returns a
        list of all the available subdomains for the given domain.

        Args:
            domain: The domain you want to find all the available subdomains for (e.g. google.com)
            limit: Limit the number of subdomains to detect
            deep_scan: Search the full wordlist instead of only certificate transparency and common names. Slower, and
                may still report complete: false when the time limit is reached
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.subdomainfinder(
                domain, limit=limit, deep_scan=deep_scan, request_options=request_options
            ),
        )

    def urllookup(
        self, body: V1UrllookupRequest | V1UrllookupRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1UrllookupResponse:
        """Lookup the location of a URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.urllookup(body, request_options=request_options))

    def urltitle(
        self, body: V1UrltitleRequest | V1UrltitleRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1UrltitleResponse:
        """Get the title of a web page based on the URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.urltitle(body, request_options=request_options))

    def urlunshortener(
        self,
        body: V1UrlunshortenerRequest | V1UrlunshortenerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1UrlunshortenerResponse:
        """Unshorten a shortened URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.urlunshortener(body, request_options=request_options))

    def whoislookup(self, domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1WhoislookupResponse:
        """Lookup domain registration data based on the domain name

        Args:
            domain: The domain name for which you want to get the registration data (e.g., myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.whoislookup(domain, request_options=request_options))

    @property
    def with_raw_response(self) -> DomainDataWithRawResponse:
        return self._with_raw_response


class AsyncDomainData:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDomainDataWithRawResponse(client, server, auth)

    async def bimivalidator(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1BimivalidatorResponse:
        """BIMI Validator checks if a domain has a valid BIMI record published in DNS. BIMI enables domain owners to
        display verified logos in supported email clients.

        Args:
            domain: The domain to validate the BIMI record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.bimivalidator(domain, request_options=request_options))

    async def dkimvalidator(
        self, domain: str, *, selector: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DkimvalidatorResponse:
        """DKIM Validator checks the DomainKeys Identified Mail (DKIM) DNS records for a domain to verify that they are
        present and correctly formatted.

        Args:
            domain: The domain to validate the DKIM record for
            selector: The DKIM selector to look up (the label before ._domainkey). When omitted, a list of common
                selectors is tried
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dkimvalidator(domain, selector=selector, request_options=request_options)
        )

    async def dmarcvalidator(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DmarcvalidatorResponse:
        """DMARC Validator checks the Domain-based Message Authentication, Reporting and Conformance (DMARC) record for
        a domain to ensure it is correctly configured.

        Args:
            domain: The domain to validate the DMARC record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.dmarcvalidator(domain, request_options=request_options))

    async def dnslookup(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DnslookupResponse:
        """Lookup the DNS records of a domain

        Args:
            domain: The domain name for which you want to lookup the DNS records. Do not include the protocol, and not
                subdomains (e.g., myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.dnslookup(domain, request_options=request_options))

    async def dnspropagation(
        self, domain: str, *, type_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DnspropagationResponse:
        """Check DNS propagation for a domain across global DNS servers

        Args:
            domain: The domain name to check propagation for
            type_: The DNS record type to check
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dnspropagation(domain, type_=type_, request_options=request_options)
        )

    async def dnsseccheck(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DnsseccheckResponse:
        """Validate DNSSEC configuration for a domain

        Args:
            domain: The domain name to check DNSSEC configuration for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.dnsseccheck(domain, request_options=request_options))

    async def domainavailability(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DomainavailabilityResponse:
        """Check if a domain is available

        Args:
            domain: The domain to check if it is available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.domainavailability(domain, request_options=request_options))

    async def domainexpiration(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DomainexpirationResponse:
        """Check the expiration date of a domain

        Args:
            domain: The domain to check the expiration date of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.domainexpiration(domain, request_options=request_options))

    async def fullyqualifieddomain(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1FullyqualifieddomainResponse:
        """Get the fully qualified domain name of an ip

        Args:
            ip: The IP address to get the fully qualified domain name of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.fullyqualifieddomain(ip, request_options=request_options))

    async def mxlookup(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1MxlookupResponse:
        """MX Lookup is a simple tool for getting MX records for a domain. It returns the MX records for the given
        domain.

        Args:
            domain: The domain you want to get the MX records for (e.g. yahoo.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.mxlookup(domain, request_options=request_options))

    async def reversednslookup(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ReversednslookupResponse:
        """Get the hostname associated with an IP address

        Args:
            ip: The IP address to lookup (IPv4 or IPv6)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.reversednslookup(ip, request_options=request_options))

    async def spfvalidator(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1SpfvalidatorResponse:
        """SPF Validator checks the Sender Policy Framework (SPF) DNS record for a domain to verify if it's valid and
        optionally whether a given IP address is authorized to send emails for that domain.

        Args:
            domain: The domain to validate the SPF record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.spfvalidator(domain, request_options=request_options))

    async def sslchecker(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1SslcheckerResponse:
        """Check the SSL certificate of a domain

        Args:
            domain: The domain of the website to check the SSL certificate of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.sslchecker(domain, request_options=request_options))

    async def subdomainfinder(
        self,
        domain: str,
        *,
        limit: int | None = None,
        deep_scan: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SubdomainfinderResponse:
        """Subdomain Finder is a simple tool for finding all the available subdomains for a given domain. It returns a
        list of all the available subdomains for the given domain.

        Args:
            domain: The domain you want to find all the available subdomains for (e.g. google.com)
            limit: Limit the number of subdomains to detect
            deep_scan: Search the full wordlist instead of only certificate transparency and common names. Slower, and
                may still report complete: false when the time limit is reached
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.subdomainfinder(
                domain, limit=limit, deep_scan=deep_scan, request_options=request_options
            ),
        )

    async def urllookup(
        self,
        body: V1UrllookupRequest | V1UrllookupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UrllookupResponse:
        """Lookup the location of a URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.urllookup(body, request_options=request_options))

    async def urltitle(
        self,
        body: V1UrltitleRequest | V1UrltitleRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UrltitleResponse:
        """Get the title of a web page based on the URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.urltitle(body, request_options=request_options))

    async def urlunshortener(
        self,
        body: V1UrlunshortenerRequest | V1UrlunshortenerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UrlunshortenerResponse:
        """Unshorten a shortened URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.urlunshortener(body, request_options=request_options))

    async def whoislookup(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WhoislookupResponse:
        """Lookup domain registration data based on the domain name

        Args:
            domain: The domain name for which you want to get the registration data (e.g., myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.whoislookup(domain, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDomainDataWithRawResponse:
        return self._with_raw_response


class DomainDataWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bimivalidator(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1BimivalidatorResponse, BimivalidatorErrorBody]:
        """BIMI Validator checks if a domain has a valid BIMI record published in DNS. BIMI enables domain owners to
        display verified logos in supported email clients.

        Args:
            domain: The domain to validate the BIMI record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bimivalidator"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BimivalidatorResponse],
            error_mapper=bimivalidator_error_mapper,
            request_options=request_options,
        )

    def dkimvalidator(
        self, domain: str, *, selector: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DkimvalidatorResponse, DkimvalidatorErrorBody]:
        """DKIM Validator checks the DomainKeys Identified Mail (DKIM) DNS records for a domain to verify that they are
        present and correctly formatted.

        Args:
            domain: The domain to validate the DKIM record for
            selector: The DKIM selector to look up (the label before ._domainkey). When omitted, a list of common
                selectors is tried
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dkimvalidator"),
            query_params=[param[str]("domain", domain), param[str | None]("selector", selector)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DkimvalidatorResponse],
            error_mapper=dkimvalidator_error_mapper,
            request_options=request_options,
        )

    def dmarcvalidator(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DmarcvalidatorResponse, DmarcvalidatorErrorBody]:
        """DMARC Validator checks the Domain-based Message Authentication, Reporting and Conformance (DMARC) record for
        a domain to ensure it is correctly configured.

        Args:
            domain: The domain to validate the DMARC record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dmarcvalidator"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DmarcvalidatorResponse],
            error_mapper=dmarcvalidator_error_mapper,
            request_options=request_options,
        )

    def dnslookup(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DnslookupResponse, DnslookupErrorBody]:
        """Lookup the DNS records of a domain

        Args:
            domain: The domain name for which you want to lookup the DNS records. Do not include the protocol, and not
                subdomains (e.g., myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dnslookup"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DnslookupResponse],
            error_mapper=dnslookup_error_mapper,
            request_options=request_options,
        )

    def dnspropagation(
        self, domain: str, *, type_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DnspropagationResponse, DnspropagationErrorBody]:
        """Check DNS propagation for a domain across global DNS servers

        Args:
            domain: The domain name to check propagation for
            type_: The DNS record type to check
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dnspropagation"),
            query_params=[param[str]("domain", domain), param[str | None]("type", type_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DnspropagationResponse],
            error_mapper=dnspropagation_error_mapper,
            request_options=request_options,
        )

    def dnsseccheck(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DnsseccheckResponse, DnsseccheckErrorBody]:
        """Validate DNSSEC configuration for a domain

        Args:
            domain: The domain name to check DNSSEC configuration for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dnsseccheck"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DnsseccheckResponse],
            error_mapper=dnsseccheck_error_mapper,
            request_options=request_options,
        )

    def domainavailability(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DomainavailabilityResponse, DomainavailabilityErrorBody]:
        """Check if a domain is available

        Args:
            domain: The domain to check if it is available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/domainavailability"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DomainavailabilityResponse],
            error_mapper=domainavailability_error_mapper,
            request_options=request_options,
        )

    def domainexpiration(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DomainexpirationResponse, DomainexpirationErrorBody]:
        """Check the expiration date of a domain

        Args:
            domain: The domain to check the expiration date of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/domainexpiration"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DomainexpirationResponse],
            error_mapper=domainexpiration_error_mapper,
            request_options=request_options,
        )

    def fullyqualifieddomain(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1FullyqualifieddomainResponse, FullyqualifieddomainErrorBody]:
        """Get the fully qualified domain name of an ip

        Args:
            ip: The IP address to get the fully qualified domain name of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/fullyqualifieddomain"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1FullyqualifieddomainResponse],
            error_mapper=fullyqualifieddomain_error_mapper,
            request_options=request_options,
        )

    def mxlookup(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1MxlookupResponse, MxlookupErrorBody]:
        """MX Lookup is a simple tool for getting MX records for a domain. It returns the MX records for the given
        domain.

        Args:
            domain: The domain you want to get the MX records for (e.g. yahoo.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/mxlookup"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MxlookupResponse],
            error_mapper=mxlookup_error_mapper,
            request_options=request_options,
        )

    def reversednslookup(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ReversednslookupResponse, ReversednslookupErrorBody]:
        """Get the hostname associated with an IP address

        Args:
            ip: The IP address to lookup (IPv4 or IPv6)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/reversednslookup"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ReversednslookupResponse],
            error_mapper=reversednslookup_error_mapper,
            request_options=request_options,
        )

    def spfvalidator(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SpfvalidatorResponse, SpfvalidatorErrorBody]:
        """SPF Validator checks the Sender Policy Framework (SPF) DNS record for a domain to verify if it's valid and
        optionally whether a given IP address is authorized to send emails for that domain.

        Args:
            domain: The domain to validate the SPF record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/spfvalidator"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SpfvalidatorResponse],
            error_mapper=spfvalidator_error_mapper,
            request_options=request_options,
        )

    def sslchecker(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SslcheckerResponse, SslcheckerErrorBody]:
        """Check the SSL certificate of a domain

        Args:
            domain: The domain of the website to check the SSL certificate of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sslchecker"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SslcheckerResponse],
            error_mapper=sslchecker_error_mapper,
            request_options=request_options,
        )

    def subdomainfinder(
        self,
        domain: str,
        *,
        limit: int | None = None,
        deep_scan: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SubdomainfinderResponse, SubdomainfinderErrorBody]:
        """Subdomain Finder is a simple tool for finding all the available subdomains for a given domain. It returns a
        list of all the available subdomains for the given domain.

        Args:
            domain: The domain you want to find all the available subdomains for (e.g. google.com)
            limit: Limit the number of subdomains to detect
            deep_scan: Search the full wordlist instead of only certificate transparency and common names. Slower, and
                may still report complete: false when the time limit is reached
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/subdomainfinder"),
            query_params=[
                param[str]("domain", domain),
                param[int | None]("limit", limit),
                param[bool | None]("deepScan", deep_scan),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SubdomainfinderResponse],
            error_mapper=subdomainfinder_error_mapper,
            request_options=request_options,
        )

    def urllookup(
        self, body: V1UrllookupRequest | V1UrllookupRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1UrllookupResponse, UrllookupErrorBody]:
        """Lookup the location of a URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urllookup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UrllookupRequest | V1UrllookupRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UrllookupResponse],
            error_mapper=urllookup_error_mapper,
            request_options=request_options,
        )

    def urltitle(
        self, body: V1UrltitleRequest | V1UrltitleRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1UrltitleResponse, UrltitleErrorBody]:
        """Get the title of a web page based on the URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urltitle"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UrltitleRequest | V1UrltitleRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UrltitleResponse],
            error_mapper=urltitle_error_mapper,
            request_options=request_options,
        )

    def urlunshortener(
        self,
        body: V1UrlunshortenerRequest | V1UrlunshortenerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UrlunshortenerResponse, UrlunshortenerErrorBody]:
        """Unshorten a shortened URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urlunshortener"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UrlunshortenerRequest | V1UrlunshortenerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UrlunshortenerResponse],
            error_mapper=urlunshortener_error_mapper,
            request_options=request_options,
        )

    def whoislookup(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WhoislookupResponse, WhoislookupErrorBody]:
        """Lookup domain registration data based on the domain name

        Args:
            domain: The domain name for which you want to get the registration data (e.g., myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/whoislookup"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WhoislookupResponse],
            error_mapper=whoislookup_error_mapper,
            request_options=request_options,
        )


class AsyncDomainDataWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bimivalidator(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1BimivalidatorResponse, BimivalidatorErrorBody]:
        """BIMI Validator checks if a domain has a valid BIMI record published in DNS. BIMI enables domain owners to
        display verified logos in supported email clients.

        Args:
            domain: The domain to validate the BIMI record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bimivalidator"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BimivalidatorResponse],
            error_mapper=bimivalidator_error_mapper,
            request_options=request_options,
        )

    async def dkimvalidator(
        self, domain: str, *, selector: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DkimvalidatorResponse, DkimvalidatorErrorBody]:
        """DKIM Validator checks the DomainKeys Identified Mail (DKIM) DNS records for a domain to verify that they are
        present and correctly formatted.

        Args:
            domain: The domain to validate the DKIM record for
            selector: The DKIM selector to look up (the label before ._domainkey). When omitted, a list of common
                selectors is tried
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dkimvalidator"),
            query_params=[param[str]("domain", domain), param[str | None]("selector", selector)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DkimvalidatorResponse],
            error_mapper=dkimvalidator_error_mapper,
            request_options=request_options,
        )

    async def dmarcvalidator(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DmarcvalidatorResponse, DmarcvalidatorErrorBody]:
        """DMARC Validator checks the Domain-based Message Authentication, Reporting and Conformance (DMARC) record for
        a domain to ensure it is correctly configured.

        Args:
            domain: The domain to validate the DMARC record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dmarcvalidator"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DmarcvalidatorResponse],
            error_mapper=dmarcvalidator_error_mapper,
            request_options=request_options,
        )

    async def dnslookup(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DnslookupResponse, DnslookupErrorBody]:
        """Lookup the DNS records of a domain

        Args:
            domain: The domain name for which you want to lookup the DNS records. Do not include the protocol, and not
                subdomains (e.g., myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dnslookup"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DnslookupResponse],
            error_mapper=dnslookup_error_mapper,
            request_options=request_options,
        )

    async def dnspropagation(
        self, domain: str, *, type_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DnspropagationResponse, DnspropagationErrorBody]:
        """Check DNS propagation for a domain across global DNS servers

        Args:
            domain: The domain name to check propagation for
            type_: The DNS record type to check
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dnspropagation"),
            query_params=[param[str]("domain", domain), param[str | None]("type", type_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DnspropagationResponse],
            error_mapper=dnspropagation_error_mapper,
            request_options=request_options,
        )

    async def dnsseccheck(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DnsseccheckResponse, DnsseccheckErrorBody]:
        """Validate DNSSEC configuration for a domain

        Args:
            domain: The domain name to check DNSSEC configuration for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dnsseccheck"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DnsseccheckResponse],
            error_mapper=dnsseccheck_error_mapper,
            request_options=request_options,
        )

    async def domainavailability(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DomainavailabilityResponse, DomainavailabilityErrorBody]:
        """Check if a domain is available

        Args:
            domain: The domain to check if it is available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/domainavailability"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DomainavailabilityResponse],
            error_mapper=domainavailability_error_mapper,
            request_options=request_options,
        )

    async def domainexpiration(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DomainexpirationResponse, DomainexpirationErrorBody]:
        """Check the expiration date of a domain

        Args:
            domain: The domain to check the expiration date of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/domainexpiration"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DomainexpirationResponse],
            error_mapper=domainexpiration_error_mapper,
            request_options=request_options,
        )

    async def fullyqualifieddomain(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1FullyqualifieddomainResponse, FullyqualifieddomainErrorBody]:
        """Get the fully qualified domain name of an ip

        Args:
            ip: The IP address to get the fully qualified domain name of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/fullyqualifieddomain"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1FullyqualifieddomainResponse],
            error_mapper=fullyqualifieddomain_error_mapper,
            request_options=request_options,
        )

    async def mxlookup(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1MxlookupResponse, MxlookupErrorBody]:
        """MX Lookup is a simple tool for getting MX records for a domain. It returns the MX records for the given
        domain.

        Args:
            domain: The domain you want to get the MX records for (e.g. yahoo.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/mxlookup"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MxlookupResponse],
            error_mapper=mxlookup_error_mapper,
            request_options=request_options,
        )

    async def reversednslookup(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ReversednslookupResponse, ReversednslookupErrorBody]:
        """Get the hostname associated with an IP address

        Args:
            ip: The IP address to lookup (IPv4 or IPv6)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/reversednslookup"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ReversednslookupResponse],
            error_mapper=reversednslookup_error_mapper,
            request_options=request_options,
        )

    async def spfvalidator(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1SpfvalidatorResponse, SpfvalidatorErrorBody]:
        """SPF Validator checks the Sender Policy Framework (SPF) DNS record for a domain to verify if it's valid and
        optionally whether a given IP address is authorized to send emails for that domain.

        Args:
            domain: The domain to validate the SPF record for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/spfvalidator"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SpfvalidatorResponse],
            error_mapper=spfvalidator_error_mapper,
            request_options=request_options,
        )

    async def sslchecker(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1SslcheckerResponse, SslcheckerErrorBody]:
        """Check the SSL certificate of a domain

        Args:
            domain: The domain of the website to check the SSL certificate of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sslchecker"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SslcheckerResponse],
            error_mapper=sslchecker_error_mapper,
            request_options=request_options,
        )

    async def subdomainfinder(
        self,
        domain: str,
        *,
        limit: int | None = None,
        deep_scan: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SubdomainfinderResponse, SubdomainfinderErrorBody]:
        """Subdomain Finder is a simple tool for finding all the available subdomains for a given domain. It returns a
        list of all the available subdomains for the given domain.

        Args:
            domain: The domain you want to find all the available subdomains for (e.g. google.com)
            limit: Limit the number of subdomains to detect
            deep_scan: Search the full wordlist instead of only certificate transparency and common names. Slower, and
                may still report complete: false when the time limit is reached
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/subdomainfinder"),
            query_params=[
                param[str]("domain", domain),
                param[int | None]("limit", limit),
                param[bool | None]("deepScan", deep_scan),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SubdomainfinderResponse],
            error_mapper=subdomainfinder_error_mapper,
            request_options=request_options,
        )

    async def urllookup(
        self,
        body: V1UrllookupRequest | V1UrllookupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UrllookupResponse, UrllookupErrorBody]:
        """Lookup the location of a URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urllookup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UrllookupRequest | V1UrllookupRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UrllookupResponse],
            error_mapper=urllookup_error_mapper,
            request_options=request_options,
        )

    async def urltitle(
        self,
        body: V1UrltitleRequest | V1UrltitleRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UrltitleResponse, UrltitleErrorBody]:
        """Get the title of a web page based on the URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urltitle"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UrltitleRequest | V1UrltitleRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UrltitleResponse],
            error_mapper=urltitle_error_mapper,
            request_options=request_options,
        )

    async def urlunshortener(
        self,
        body: V1UrlunshortenerRequest | V1UrlunshortenerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UrlunshortenerResponse, UrlunshortenerErrorBody]:
        """Unshorten a shortened URL

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urlunshortener"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UrlunshortenerRequest | V1UrlunshortenerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UrlunshortenerResponse],
            error_mapper=urlunshortener_error_mapper,
            request_options=request_options,
        )

    async def whoislookup(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WhoislookupResponse, WhoislookupErrorBody]:
        """Lookup domain registration data based on the domain name

        Args:
            domain: The domain name for which you want to get the registration data (e.g., myspace.com)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/whoislookup"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WhoislookupResponse],
            error_mapper=whoislookup_error_mapper,
            request_options=request_options,
        )
