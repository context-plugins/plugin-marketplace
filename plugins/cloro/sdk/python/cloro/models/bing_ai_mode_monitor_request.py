from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.country_code13 import CountryCode13OrStr
from .enums.state_parameter import StateParameterOrStr
from .include12 import Include12, Include12Dict


class BingAiModeMonitorRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    prompt: str
    """The prompt to send to Bing AI Mode. Bing puts the prompt in the page URL, so the limit is 3,500 characters after
    URL encoding. A letter, digit or space counts as 1, most punctuation as 3, an accented or Cyrillic letter as 6, and
    a Chinese, Japanese or Korean character as 9. Thus a CJK prompt can have a maximum of 388 characters. A longer
    prompt returns a 400 error: "Prompt is too long (max 3,500 characters, fewer for non-Latin scripts)"."""

    country: CountryCode13OrStr
    """Country/region code for localized response, using ISO 3166-1 alpha-2 country codes. Bing AI Mode accepts all
    countries except KR and RU. ``GET /v1/countries?model=bing_aimode`` returns the list."""

    state: Optional[StateParameterOrStr] = UNSET
    """State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid add-on: +2 credits, on
    top of the base cost and any other add-on (`pricing </guides/providers#state-level-targeting>`__)."""

    include: Optional[Include12] = UNSET
    """Optional flags for including additional response formats"""


class BingAiModeMonitorRequestDict(TypedDict):
    prompt: str
    country: CountryCode13OrStr
    state: NotRequired[StateParameterOrStr]
    include: NotRequired[Include12Dict]
