from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.country_code2 import CountryCode2OrStr
from .enums.state_parameter import StateParameterOrStr
from .include import Include, IncludeDict


class GrokMonitorRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    prompt: str
    """The prompt to send to Grok"""

    country: CountryCode2OrStr
    """Country/region code for localized response, using ISO 3166-1 alpha-2 country codes."""

    include: Optional[Include] = UNSET
    """Optional flags for including additional response formats"""

    state: Optional[StateParameterOrStr] = UNSET
    """State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid add-on: +2 credits, on
    top of the base cost and any other add-on (`pricing </guides/providers#state-level-targeting>`__)."""


class GrokMonitorRequestDict(TypedDict):
    prompt: str
    country: CountryCode2OrStr
    include: NotRequired[IncludeDict]
    state: NotRequired[StateParameterOrStr]
