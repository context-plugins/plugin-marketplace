from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .update_frequencies import UpdateFrequencies, UpdateFrequenciesDict


class DatabaseUpdates(SdkBaseModel):
    domain_whois: Optional[UpdateFrequencies] = UNSET
    dns: Optional[UpdateFrequencies] = UNSET
    subdomains: Optional[UpdateFrequencies] = UNSET
    ip_whois: Optional[UpdateFrequencies] = UNSET


class DatabaseUpdatesDict(TypedDict):
    domain_whois: NotRequired[UpdateFrequenciesDict]
    dns: NotRequired[UpdateFrequenciesDict]
    subdomains: NotRequired[UpdateFrequenciesDict]
    ip_whois: NotRequired[UpdateFrequenciesDict]
