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
from ..errors.bluetoothlookup_error import BluetoothlookupErrorBody, bluetoothlookup_error_mapper
from ..errors.botdetector_error import BotdetectorErrorBody, botdetector_error_mapper
from ..errors.contentfilter_error import ContentfilterErrorBody, contentfilter_error_mapper
from ..errors.ipblacklistlookup_error import IpblacklistlookupErrorBody, ipblacklistlookup_error_mapper
from ..errors.iplookup_error import IplookupErrorBody, iplookup_error_mapper
from ..errors.macaddresslookup_error import MacaddresslookupErrorBody, macaddresslookup_error_mapper
from ..errors.nameservers_error import NameserversErrorBody, nameservers_error_mapper
from ..errors.phishingcheck_error import PhishingcheckErrorBody, phishingcheck_error_mapper
from ..errors.pinger_error import PingerErrorBody, pinger_error_mapper
from ..errors.tldlookup_error import TldlookupErrorBody, tldlookup_error_mapper
from ..errors.tlscheck_error import TlscheckErrorBody, tlscheck_error_mapper
from ..errors.tordetect_error import TordetectErrorBody, tordetect_error_mapper
from ..errors.usbvendorlookup_error import UsbvendorlookupErrorBody, usbvendorlookup_error_mapper
from ..errors.vpndetector_error import VpndetectorErrorBody, vpndetector_error_mapper
from ..models.v1_bluetoothlookup_response import V1BluetoothlookupResponse
from ..models.v1_botdetector_response import V1BotdetectorResponse
from ..models.v1_contentfilter_request import V1ContentfilterRequest, V1ContentfilterRequestDict
from ..models.v1_contentfilter_response import V1ContentfilterResponse
from ..models.v1_ipblacklistlookup_response import V1IpblacklistlookupResponse
from ..models.v1_iplookup_response import V1IplookupResponse
from ..models.v1_macaddresslookup_response import V1MacaddresslookupResponse
from ..models.v1_nameservers_response import V1NameserversResponse
from ..models.v1_phishingcheck_request import V1PhishingcheckRequest, V1PhishingcheckRequestDict
from ..models.v1_phishingcheck_response import V1PhishingcheckResponse
from ..models.v1_pinger_request import V1PingerRequest, V1PingerRequestDict
from ..models.v1_pinger_response import V1PingerResponse
from ..models.v1_tldlookup_response import V1TldlookupResponse
from ..models.v1_tlscheck_response import V1TlscheckResponse
from ..models.v1_tordetect_response import V1TordetectResponse
from ..models.v1_usbvendorlookup_response import V1UsbvendorlookupResponse
from ..models.v1_vpndetector_response import V1VpndetectorResponse
from ..server.server import Server


class Networking:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NetworkingWithRawResponse(client, server, auth)

    def bluetoothlookup(
        self, companyid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1BluetoothlookupResponse:
        """Lookup Bluetooth company/manufacturer by company ID

        Args:
            companyid: The Bluetooth SIG company identifier (decimal or hex with 0x prefix). For example, 76 or 0x4C for
                Apple.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.bluetoothlookup(companyid, request_options=request_options))

    def botdetector(
        self, ua: str, *, ip: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1BotdetectorResponse:
        """Analyzes a user agent string to determine if it belongs to a known bot or crawler, and returns detailed
        information about the bot type and category.

        Args:
            ua: The user agent string to analyze (URL encoded)
            ip: Optional IP the request came from. When the user agent claims to be a Google, Bing, OpenAI or Apple
                crawler, it is checked against that operator's published IP ranges
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.botdetector(ua, ip=ip, request_options=request_options))

    def contentfilter(
        self,
        body: V1ContentfilterRequest | V1ContentfilterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ContentfilterResponse:
        """Checks whether a URL or domain appears in the content filter blocklist covering fake news, gambling, adult
        content, and social media.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.contentfilter(body, request_options=request_options))

    def ipblacklistlookup(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1IpblacklistlookupResponse:
        """Checks whether an IP address appears on inbound (attacker) or outbound (malicious destination) blocklists and
        returns threat level assessment with geolocation details.

        Args:
            ip: The IP address to check against blocklists
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.ipblacklistlookup(ip, request_options=request_options))

    def iplookup(self, ip: str, *, request_options: RequestOptionsOrDict | None = None) -> V1IplookupResponse:
        """Lookup the details and location of an IP address

        Args:
            ip: The IP address for which you want to get the location data (e.g., 173.172.81.20)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.iplookup(ip, request_options=request_options))

    def macaddresslookup(
        self, mac: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1MacaddresslookupResponse:
        """Lookup MAC address data based on the MAC address

        Args:
            mac: The MAC address for which you want to get the data (e.g., 00-B0-D0-63-C2-26)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.macaddresslookup(mac, request_options=request_options))

    def nameservers(self, domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1NameserversResponse:
        """Get the authoritative nameservers for a domain including IP addresses and owner information.

        Args:
            domain: The domain name to lookup nameservers for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.nameservers(domain, request_options=request_options))

    def phishingcheck(
        self,
        body: V1PhishingcheckRequest | V1PhishingcheckRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PhishingcheckResponse:
        """Checks whether a domain is in the active phishing database

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.phishingcheck(body, request_options=request_options))

    def pinger(
        self, body: V1PingerRequest | V1PingerRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1PingerResponse:
        """Pinger is a simple tool for checking if a URL is up. It returns a boolean value indicating whether the URL is
        up or not.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.pinger(body, request_options=request_options))

    def tldlookup(self, tld: str, *, request_options: RequestOptionsOrDict | None = None) -> V1TldlookupResponse:
        """Retrieves the type and sponsoring organization for a given top-level domain.

        Args:
            tld: The top-level domain to look up (with or without leading dot)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.tldlookup(tld, request_options=request_options))

    def tlscheck(
        self, domain: str, *, port: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1TlscheckResponse:
        """TLS Check is an API that inspects the TLS/SSL configuration of a server identified by its IP address. It
        reports supported protocols, cipher suites, and potential vulnerabilities.

        Args:
            domain: The domain to check the TLS/SSL configuration for
            port: The port to connect to (usually 443 for HTTPS)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.tlscheck(domain, port=port, request_options=request_options))

    def tordetect(self, ip: str, *, request_options: RequestOptionsOrDict | None = None) -> V1TordetectResponse:
        """Tor Detect is an API that checks whether a given IP address belongs to a known Tor exit node. Useful for
        security, access control, and analytics.

        Args:
            ip: The IP address to check against the Tor exit node list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.tordetect(ip, request_options=request_options))

    def usbvendorlookup(
        self, vendorid: str, *, productid: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1UsbvendorlookupResponse:
        """Lookup USB vendor and optionally product information by ID

        Args:
            vendorid: The USB vendor ID in 4-digit hex format (e.g., 05AC for Apple)
            productid: The USB product ID in 4-digit hex format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.usbvendorlookup(vendorid, productid=productid, request_options=request_options)
        )

    def vpndetector(self, ip: str, *, request_options: RequestOptionsOrDict | None = None) -> V1VpndetectorResponse:
        """VPN Detector is a simple tool for detecting VPN usage. It returns a boolean value indicating whether the IP
        address is using a VPN or not.

        Args:
            ip: The IP address you want to check for VPN usage
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.vpndetector(ip, request_options=request_options))

    @property
    def with_raw_response(self) -> NetworkingWithRawResponse:
        return self._with_raw_response


class AsyncNetworking:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNetworkingWithRawResponse(client, server, auth)

    async def bluetoothlookup(
        self, companyid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1BluetoothlookupResponse:
        """Lookup Bluetooth company/manufacturer by company ID

        Args:
            companyid: The Bluetooth SIG company identifier (decimal or hex with 0x prefix). For example, 76 or 0x4C for
                Apple.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.bluetoothlookup(companyid, request_options=request_options))

    async def botdetector(
        self, ua: str, *, ip: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1BotdetectorResponse:
        """Analyzes a user agent string to determine if it belongs to a known bot or crawler, and returns detailed
        information about the bot type and category.

        Args:
            ua: The user agent string to analyze (URL encoded)
            ip: Optional IP the request came from. When the user agent claims to be a Google, Bing, OpenAI or Apple
                crawler, it is checked against that operator's published IP ranges
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.botdetector(ua, ip=ip, request_options=request_options))

    async def contentfilter(
        self,
        body: V1ContentfilterRequest | V1ContentfilterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ContentfilterResponse:
        """Checks whether a URL or domain appears in the content filter blocklist covering fake news, gambling, adult
        content, and social media.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.contentfilter(body, request_options=request_options))

    async def ipblacklistlookup(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1IpblacklistlookupResponse:
        """Checks whether an IP address appears on inbound (attacker) or outbound (malicious destination) blocklists and
        returns threat level assessment with geolocation details.

        Args:
            ip: The IP address to check against blocklists
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.ipblacklistlookup(ip, request_options=request_options))

    async def iplookup(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1IplookupResponse:
        """Lookup the details and location of an IP address

        Args:
            ip: The IP address for which you want to get the location data (e.g., 173.172.81.20)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.iplookup(ip, request_options=request_options))

    async def macaddresslookup(
        self, mac: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1MacaddresslookupResponse:
        """Lookup MAC address data based on the MAC address

        Args:
            mac: The MAC address for which you want to get the data (e.g., 00-B0-D0-63-C2-26)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.macaddresslookup(mac, request_options=request_options))

    async def nameservers(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1NameserversResponse:
        """Get the authoritative nameservers for a domain including IP addresses and owner information.

        Args:
            domain: The domain name to lookup nameservers for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.nameservers(domain, request_options=request_options))

    async def phishingcheck(
        self,
        body: V1PhishingcheckRequest | V1PhishingcheckRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PhishingcheckResponse:
        """Checks whether a domain is in the active phishing database

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.phishingcheck(body, request_options=request_options))

    async def pinger(
        self, body: V1PingerRequest | V1PingerRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1PingerResponse:
        """Pinger is a simple tool for checking if a URL is up. It returns a boolean value indicating whether the URL is
        up or not.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.pinger(body, request_options=request_options))

    async def tldlookup(
        self, tld: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1TldlookupResponse:
        """Retrieves the type and sponsoring organization for a given top-level domain.

        Args:
            tld: The top-level domain to look up (with or without leading dot)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.tldlookup(tld, request_options=request_options))

    async def tlscheck(
        self, domain: str, *, port: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1TlscheckResponse:
        """TLS Check is an API that inspects the TLS/SSL configuration of a server identified by its IP address. It
        reports supported protocols, cipher suites, and potential vulnerabilities.

        Args:
            domain: The domain to check the TLS/SSL configuration for
            port: The port to connect to (usually 443 for HTTPS)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.tlscheck(domain, port=port, request_options=request_options))

    async def tordetect(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1TordetectResponse:
        """Tor Detect is an API that checks whether a given IP address belongs to a known Tor exit node. Useful for
        security, access control, and analytics.

        Args:
            ip: The IP address to check against the Tor exit node list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.tordetect(ip, request_options=request_options))

    async def usbvendorlookup(
        self, vendorid: str, *, productid: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1UsbvendorlookupResponse:
        """Lookup USB vendor and optionally product information by ID

        Args:
            vendorid: The USB vendor ID in 4-digit hex format (e.g., 05AC for Apple)
            productid: The USB product ID in 4-digit hex format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.usbvendorlookup(
                vendorid, productid=productid, request_options=request_options
            ),
        )

    async def vpndetector(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1VpndetectorResponse:
        """VPN Detector is a simple tool for detecting VPN usage. It returns a boolean value indicating whether the IP
        address is using a VPN or not.

        Args:
            ip: The IP address you want to check for VPN usage
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.vpndetector(ip, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncNetworkingWithRawResponse:
        return self._with_raw_response


class NetworkingWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bluetoothlookup(
        self, companyid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1BluetoothlookupResponse, BluetoothlookupErrorBody]:
        """Lookup Bluetooth company/manufacturer by company ID

        Args:
            companyid: The Bluetooth SIG company identifier (decimal or hex with 0x prefix). For example, 76 or 0x4C for
                Apple.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bluetoothlookup"),
            query_params=[param[str]("companyid", companyid)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BluetoothlookupResponse],
            error_mapper=bluetoothlookup_error_mapper,
            request_options=request_options,
        )

    def botdetector(
        self, ua: str, *, ip: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1BotdetectorResponse, BotdetectorErrorBody]:
        """Analyzes a user agent string to determine if it belongs to a known bot or crawler, and returns detailed
        information about the bot type and category.

        Args:
            ua: The user agent string to analyze (URL encoded)
            ip: Optional IP the request came from. When the user agent claims to be a Google, Bing, OpenAI or Apple
                crawler, it is checked against that operator's published IP ranges
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/botdetector"),
            query_params=[param[str]("ua", ua), param[str | None]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BotdetectorResponse],
            error_mapper=botdetector_error_mapper,
            request_options=request_options,
        )

    def contentfilter(
        self,
        body: V1ContentfilterRequest | V1ContentfilterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ContentfilterResponse, ContentfilterErrorBody]:
        """Checks whether a URL or domain appears in the content filter blocklist covering fake news, gambling, adult
        content, and social media.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/contentfilter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContentfilterRequest | V1ContentfilterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ContentfilterResponse],
            error_mapper=contentfilter_error_mapper,
            request_options=request_options,
        )

    def ipblacklistlookup(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1IpblacklistlookupResponse, IpblacklistlookupErrorBody]:
        """Checks whether an IP address appears on inbound (attacker) or outbound (malicious destination) blocklists and
        returns threat level assessment with geolocation details.

        Args:
            ip: The IP address to check against blocklists
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ipblacklistlookup"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1IpblacklistlookupResponse],
            error_mapper=ipblacklistlookup_error_mapper,
            request_options=request_options,
        )

    def iplookup(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1IplookupResponse, IplookupErrorBody]:
        """Lookup the details and location of an IP address

        Args:
            ip: The IP address for which you want to get the location data (e.g., 173.172.81.20)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/iplookup"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1IplookupResponse],
            error_mapper=iplookup_error_mapper,
            request_options=request_options,
        )

    def macaddresslookup(
        self, mac: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1MacaddresslookupResponse, MacaddresslookupErrorBody]:
        """Lookup MAC address data based on the MAC address

        Args:
            mac: The MAC address for which you want to get the data (e.g., 00-B0-D0-63-C2-26)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/macaddresslookup"),
            query_params=[param[str]("mac", mac)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MacaddresslookupResponse],
            error_mapper=macaddresslookup_error_mapper,
            request_options=request_options,
        )

    def nameservers(
        self, domain: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1NameserversResponse, NameserversErrorBody]:
        """Get the authoritative nameservers for a domain including IP addresses and owner information.

        Args:
            domain: The domain name to lookup nameservers for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/nameservers"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1NameserversResponse],
            error_mapper=nameservers_error_mapper,
            request_options=request_options,
        )

    def phishingcheck(
        self,
        body: V1PhishingcheckRequest | V1PhishingcheckRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PhishingcheckResponse, PhishingcheckErrorBody]:
        """Checks whether a domain is in the active phishing database

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/phishingcheck"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1PhishingcheckRequest | V1PhishingcheckRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PhishingcheckResponse],
            error_mapper=phishingcheck_error_mapper,
            request_options=request_options,
        )

    def pinger(
        self, body: V1PingerRequest | V1PingerRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PingerResponse, PingerErrorBody]:
        """Pinger is a simple tool for checking if a URL is up. It returns a boolean value indicating whether the URL is
        up or not.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/pinger"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1PingerRequest | V1PingerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PingerResponse],
            error_mapper=pinger_error_mapper,
            request_options=request_options,
        )

    def tldlookup(
        self, tld: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1TldlookupResponse, TldlookupErrorBody]:
        """Retrieves the type and sponsoring organization for a given top-level domain.

        Args:
            tld: The top-level domain to look up (with or without leading dot)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tldlookup"),
            query_params=[param[str]("tld", tld)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TldlookupResponse],
            error_mapper=tldlookup_error_mapper,
            request_options=request_options,
        )

    def tlscheck(
        self, domain: str, *, port: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1TlscheckResponse, TlscheckErrorBody]:
        """TLS Check is an API that inspects the TLS/SSL configuration of a server identified by its IP address. It
        reports supported protocols, cipher suites, and potential vulnerabilities.

        Args:
            domain: The domain to check the TLS/SSL configuration for
            port: The port to connect to (usually 443 for HTTPS)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tlscheck"),
            query_params=[param[str]("domain", domain), param[int | None]("port", port)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TlscheckResponse],
            error_mapper=tlscheck_error_mapper,
            request_options=request_options,
        )

    def tordetect(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1TordetectResponse, TordetectErrorBody]:
        """Tor Detect is an API that checks whether a given IP address belongs to a known Tor exit node. Useful for
        security, access control, and analytics.

        Args:
            ip: The IP address to check against the Tor exit node list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tordetect"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TordetectResponse],
            error_mapper=tordetect_error_mapper,
            request_options=request_options,
        )

    def usbvendorlookup(
        self, vendorid: str, *, productid: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1UsbvendorlookupResponse, UsbvendorlookupErrorBody]:
        """Lookup USB vendor and optionally product information by ID

        Args:
            vendorid: The USB vendor ID in 4-digit hex format (e.g., 05AC for Apple)
            productid: The USB product ID in 4-digit hex format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/usbvendorlookup"),
            query_params=[param[str]("vendorid", vendorid), param[str | None]("productid", productid)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UsbvendorlookupResponse],
            error_mapper=usbvendorlookup_error_mapper,
            request_options=request_options,
        )

    def vpndetector(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1VpndetectorResponse, VpndetectorErrorBody]:
        """VPN Detector is a simple tool for detecting VPN usage. It returns a boolean value indicating whether the IP
        address is using a VPN or not.

        Args:
            ip: The IP address you want to check for VPN usage
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/vpndetector"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1VpndetectorResponse],
            error_mapper=vpndetector_error_mapper,
            request_options=request_options,
        )


class AsyncNetworkingWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bluetoothlookup(
        self, companyid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1BluetoothlookupResponse, BluetoothlookupErrorBody]:
        """Lookup Bluetooth company/manufacturer by company ID

        Args:
            companyid: The Bluetooth SIG company identifier (decimal or hex with 0x prefix). For example, 76 or 0x4C for
                Apple.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bluetoothlookup"),
            query_params=[param[str]("companyid", companyid)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BluetoothlookupResponse],
            error_mapper=bluetoothlookup_error_mapper,
            request_options=request_options,
        )

    async def botdetector(
        self, ua: str, *, ip: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1BotdetectorResponse, BotdetectorErrorBody]:
        """Analyzes a user agent string to determine if it belongs to a known bot or crawler, and returns detailed
        information about the bot type and category.

        Args:
            ua: The user agent string to analyze (URL encoded)
            ip: Optional IP the request came from. When the user agent claims to be a Google, Bing, OpenAI or Apple
                crawler, it is checked against that operator's published IP ranges
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/botdetector"),
            query_params=[param[str]("ua", ua), param[str | None]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BotdetectorResponse],
            error_mapper=botdetector_error_mapper,
            request_options=request_options,
        )

    async def contentfilter(
        self,
        body: V1ContentfilterRequest | V1ContentfilterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ContentfilterResponse, ContentfilterErrorBody]:
        """Checks whether a URL or domain appears in the content filter blocklist covering fake news, gambling, adult
        content, and social media.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/contentfilter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContentfilterRequest | V1ContentfilterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ContentfilterResponse],
            error_mapper=contentfilter_error_mapper,
            request_options=request_options,
        )

    async def ipblacklistlookup(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1IpblacklistlookupResponse, IpblacklistlookupErrorBody]:
        """Checks whether an IP address appears on inbound (attacker) or outbound (malicious destination) blocklists and
        returns threat level assessment with geolocation details.

        Args:
            ip: The IP address to check against blocklists
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ipblacklistlookup"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1IpblacklistlookupResponse],
            error_mapper=ipblacklistlookup_error_mapper,
            request_options=request_options,
        )

    async def iplookup(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1IplookupResponse, IplookupErrorBody]:
        """Lookup the details and location of an IP address

        Args:
            ip: The IP address for which you want to get the location data (e.g., 173.172.81.20)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/iplookup"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1IplookupResponse],
            error_mapper=iplookup_error_mapper,
            request_options=request_options,
        )

    async def macaddresslookup(
        self, mac: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1MacaddresslookupResponse, MacaddresslookupErrorBody]:
        """Lookup MAC address data based on the MAC address

        Args:
            mac: The MAC address for which you want to get the data (e.g., 00-B0-D0-63-C2-26)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/macaddresslookup"),
            query_params=[param[str]("mac", mac)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MacaddresslookupResponse],
            error_mapper=macaddresslookup_error_mapper,
            request_options=request_options,
        )

    async def nameservers(
        self, domain: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1NameserversResponse, NameserversErrorBody]:
        """Get the authoritative nameservers for a domain including IP addresses and owner information.

        Args:
            domain: The domain name to lookup nameservers for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/nameservers"),
            query_params=[param[str]("domain", domain)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1NameserversResponse],
            error_mapper=nameservers_error_mapper,
            request_options=request_options,
        )

    async def phishingcheck(
        self,
        body: V1PhishingcheckRequest | V1PhishingcheckRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PhishingcheckResponse, PhishingcheckErrorBody]:
        """Checks whether a domain is in the active phishing database

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/phishingcheck"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1PhishingcheckRequest | V1PhishingcheckRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PhishingcheckResponse],
            error_mapper=phishingcheck_error_mapper,
            request_options=request_options,
        )

    async def pinger(
        self, body: V1PingerRequest | V1PingerRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PingerResponse, PingerErrorBody]:
        """Pinger is a simple tool for checking if a URL is up. It returns a boolean value indicating whether the URL is
        up or not.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/pinger"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1PingerRequest | V1PingerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PingerResponse],
            error_mapper=pinger_error_mapper,
            request_options=request_options,
        )

    async def tldlookup(
        self, tld: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1TldlookupResponse, TldlookupErrorBody]:
        """Retrieves the type and sponsoring organization for a given top-level domain.

        Args:
            tld: The top-level domain to look up (with or without leading dot)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tldlookup"),
            query_params=[param[str]("tld", tld)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TldlookupResponse],
            error_mapper=tldlookup_error_mapper,
            request_options=request_options,
        )

    async def tlscheck(
        self, domain: str, *, port: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1TlscheckResponse, TlscheckErrorBody]:
        """TLS Check is an API that inspects the TLS/SSL configuration of a server identified by its IP address. It
        reports supported protocols, cipher suites, and potential vulnerabilities.

        Args:
            domain: The domain to check the TLS/SSL configuration for
            port: The port to connect to (usually 443 for HTTPS)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tlscheck"),
            query_params=[param[str]("domain", domain), param[int | None]("port", port)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TlscheckResponse],
            error_mapper=tlscheck_error_mapper,
            request_options=request_options,
        )

    async def tordetect(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1TordetectResponse, TordetectErrorBody]:
        """Tor Detect is an API that checks whether a given IP address belongs to a known Tor exit node. Useful for
        security, access control, and analytics.

        Args:
            ip: The IP address to check against the Tor exit node list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tordetect"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TordetectResponse],
            error_mapper=tordetect_error_mapper,
            request_options=request_options,
        )

    async def usbvendorlookup(
        self, vendorid: str, *, productid: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1UsbvendorlookupResponse, UsbvendorlookupErrorBody]:
        """Lookup USB vendor and optionally product information by ID

        Args:
            vendorid: The USB vendor ID in 4-digit hex format (e.g., 05AC for Apple)
            productid: The USB product ID in 4-digit hex format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/usbvendorlookup"),
            query_params=[param[str]("vendorid", vendorid), param[str | None]("productid", productid)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UsbvendorlookupResponse],
            error_mapper=usbvendorlookup_error_mapper,
            request_options=request_options,
        )

    async def vpndetector(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1VpndetectorResponse, VpndetectorErrorBody]:
        """VPN Detector is a simple tool for detecting VPN usage. It returns a boolean value indicating whether the IP
        address is using a VPN or not.

        Args:
            ip: The IP address you want to check for VPN usage
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/vpndetector"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1VpndetectorResponse],
            error_mapper=vpndetector_error_mapper,
            request_options=request_options,
        )
