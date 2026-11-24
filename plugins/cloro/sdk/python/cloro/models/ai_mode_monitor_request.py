from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.country_code2 import CountryCode2OrStr
from .enums.device1 import Device1, Device1OrStr
from .include6 import Include6, Include6Dict


class AiModeMonitorRequest(SdkBaseModel):
    prompt: Optional[str] = UNSET
    """The prompt to send to AI Mode"""

    country: CountryCode2OrStr
    """Country/region code for localized response, using ISO 3166-1 alpha-2 country codes."""

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
    When both ``location`` and ``uule`` are omitted, cloro pins results to the country's canonical location (e.g.
    ``Portugal`` for ``PT``) where it has one; otherwise Google geolocates from the proxy's exit IP."""

    uule: Optional[str] = UNSET
    """Pre-encoded Google UULE string for precise geo-targeting. Use this when you have a pre-built UULE value instead
    of a location name. Mutually exclusive with 'location' — provide one or the other, not both."""

    device: Device1OrStr = Device1.DESKTOP
    """Device type for search results"""

    include: Optional[Include6] = UNSET
    """Optional flags for including additional response formats"""


class AiModeMonitorRequestDict(TypedDict):
    prompt: NotRequired[str]
    country: CountryCode2OrStr
    gl: NotRequired[str]
    hl: NotRequired[str]
    location: NotRequired[str]
    uule: NotRequired[str]
    device: NotRequired[Device1OrStr]
    include: NotRequired[Include6Dict]
