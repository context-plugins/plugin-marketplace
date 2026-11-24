from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.country_code1 import CountryCode1OrStr
from .enums.device import Device, DeviceOrStr
from .include1 import Include1, Include1Dict


class GoogleNewsMonitorRequest(SdkBaseModel):
    query: Optional[str] = UNSET
    """The search query to execute on Google News"""

    country: CountryCode1OrStr
    """ISO 3166-1 alpha-2 country code for localized news results. See `List of countries
    </api-reference/endpoint/countries>`__ for the codes each provider supports."""

    gl: Optional[str] = UNSET
    """Alternative to ``country``, using Google's own parameter name for the result geography. Same ISO 3166-1 alpha-2
    codes, accepted in either case (``us`` or ``US``), and must be a country the endpoint supports — see ``GET
    /v1/countries``. Provide ``country`` or ``gl``; sending both with different values is a ``400``."""

    hl: Optional[str] = UNSET
    """Interface language, as Google's own ``hl`` parameter (e.g. ``en``, ``de``, ``pt-BR``). Free-form and
    case-insensitive — Google owns the list of codes. Overrides the language cloro derives from the country, so the
    interface language and the result geography can differ."""

    device: DeviceOrStr = Device.DESKTOP
    """Device the search is run from. 'desktop' returns the desktop news SERP; 'ios' (Safari on iPhone), 'android'
    (Chrome on Android) and 'mobile' (alias for 'android') all return the mobile news SERP."""

    pages: int = 1
    """Number of news results pages to scrape (1-10). Paid add-on: +2 credits per page after the first (`pricing
    </guides/providers#google-search-multi-page-pricing>`__)."""

    include: Optional[Include1] = UNSET
    """Optional flags for including additional response data"""


class GoogleNewsMonitorRequestDict(TypedDict):
    query: NotRequired[str]
    country: CountryCode1OrStr
    gl: NotRequired[str]
    hl: NotRequired[str]
    device: NotRequired[DeviceOrStr]
    pages: NotRequired[int]
    include: NotRequired[Include1Dict]
