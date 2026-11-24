from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.country_code2 import CountryCode2OrStr
from .enums.state_parameter import StateParameterOrStr
from .include5 import Include5, Include5Dict


class ChatGptMonitorRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    prompt: str
    """The prompt to send to ChatGPT"""

    country: CountryCode2OrStr
    """Country/region code for localized response, using ISO 3166-1 alpha-2 country codes."""

    include: Optional[Include5] = UNSET
    """Optional flags for including additional response formats"""

    legacy: bool = False
    """Serve ChatGPT's legacy desktop interface instead of the default mobile-web one. The legacy interface streams the
    answer as an event stream, so ``result.model``, ``result.searchQueries`` and ``result.mapSearchQueries`` are
    populated. Best-effort and temporary: OpenAI controls which interface it serves and can retire the legacy one at any
    time, so a request can still come back in the mobile-web shape. Handle both. Defaults to false."""

    disable_web_search: bool = Field(default=False, alias="disableWebSearch")
    """Do not force ChatGPT's web search. cloro returns the answer ChatGPT gives on its own, which uses web search only
    when ChatGPT decides to, so ``result.sources``, ``result.citationPills`` and ``result.searchQueries`` are often
    empty. Defaults to false: web search is forced on every request."""

    state: Optional[StateParameterOrStr] = UNSET
    """State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid add-on: +2 credits, on
    top of the base cost and any other add-on (`pricing </guides/providers#state-level-targeting>`__)."""


class ChatGptMonitorRequestDict(TypedDict):
    prompt: str
    country: CountryCode2OrStr
    include: NotRequired[Include5Dict]
    legacy: NotRequired[bool]
    disable_web_search: NotRequired[bool]
    state: NotRequired[StateParameterOrStr]
