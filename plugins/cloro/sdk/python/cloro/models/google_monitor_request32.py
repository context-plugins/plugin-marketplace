from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.country_code8 import CountryCode8OrStr
from .enums.device2 import Device2, Device2OrStr
from .include10 import Include10, Include10Dict


class GoogleMonitorRequest32(SdkBaseModel):
    query: Optional[str] = UNSET
    """The search query to execute on Google. Required unless you supply 'url' instead — the two are mutually
    exclusive."""

    url: str
    """A complete Google web search URL to run instead of building the request from 'query' and the targeting fields.
    Must be an absolute http(s) URL on a Google web search host (google.com, google.co.uk, www.google.de, ...), with the
    path '/search' and a non-empty 'q'. Mutually exclusive with 'query', 'location', 'uule' and 'pages' — the URL owns
    those values. cloro applies a fixed set of query parameters — 'q', 'gl', 'hl', 'uule', 'num' (read as result depth),
    'start', 'tbs' and 'safe' — and drops anything else. URLs carrying 'tbm' are rejected, because they target a Google
    vertical with its own endpoint and pricing (use POST /v1/monitor/google/news for tbm=nws)."""

    country: Optional[CountryCode8OrStr] = UNSET
    """ISO 3166-1 alpha-2 country code for localized search results. See `List of countries
    </api-reference/endpoint/countries>`__ for the codes each provider supports. Required in the standard request shape
    unless you send ``gl``. When you supply 'url' instead, country is derived from the URL's 'gl' — pass it explicitly
    to override that, or when the URL has no 'gl'."""

    gl: Optional[str] = UNSET
    """Alternative to ``country``, using Google's own parameter name for the result geography. Same ISO 3166-1 alpha-2
    codes, accepted in either case (``us`` or ``US``), and must be a country the endpoint supports — see ``GET
    /v1/countries``. Provide ``country`` or ``gl``; sending both with different values is a ``400``."""

    hl: Optional[str] = UNSET
    """Interface language, as Google's own ``hl`` parameter (e.g. ``en``, ``de``, ``pt-BR``). Free-form and
    case-insensitive — Google owns the list of codes. Overrides the language cloro derives from the country, so the
    interface language and the result geography can differ."""

    location: Optional[str] = UNSET
    """Google canonical location name for geo-targeted results, in comma-separated format: 'City,Region,Country' (see
    https://developers.google.com/google-ads/api/reference/data/geotargets for all ~100,000 supported locations). Use
    alongside 'country' for city-level precision. Mutually exclusive with 'uule' — provide one or the other, not both.
    Cannot be combined with 'url'. When both ``location`` and ``uule`` are omitted, cloro pins results to the country's
    canonical location (e.g. ``Portugal`` for ``PT``) where it has one; otherwise Google geolocates from the proxy's
    exit IP."""

    uule: Optional[str] = UNSET
    """Pre-encoded Google UULE string for precise geo-targeting. Use this when you have a pre-built UULE value instead
    of a location name. Mutually exclusive with 'location' — provide one or the other, not both. Cannot be combined with
    'url'; put 'uule' in the URL's query string instead."""

    device: Device2OrStr = Device2.DESKTOP
    """Device the search is run from. 'desktop' returns the desktop SERP; 'ios' (Safari on iPhone), 'android' (Chrome on
    Android) and 'mobile' (alias for 'android') all return the mobile SERP."""

    pages: int = 1
    """Number of search results pages to scrape (1-10). Paid add-on: +2 credits per page after the first (`pricing
    </guides/providers#google-search-multi-page-pricing>`__). Cannot be combined with 'url' — in that shape, depth comes
    from the URL's 'num' (rounded up to whole pages of 10, capped at 10 pages)."""

    include: Optional[Include10] = UNSET
    """Optional flags for including additional response data"""


class GoogleMonitorRequest32Dict(TypedDict):
    query: NotRequired[str]
    url: str
    country: NotRequired[CountryCode8OrStr]
    gl: NotRequired[str]
    hl: NotRequired[str]
    location: NotRequired[str]
    uule: NotRequired[str]
    device: NotRequired[Device2OrStr]
    pages: NotRequired[int]
    include: NotRequired[Include10Dict]
