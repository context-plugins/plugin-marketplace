from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ReputationIndicators(SdkBaseModel):
    is_newly_registered: Optional[bool] = UNSET
    uses_free_extension: Optional[bool] = UNSET
    uses_free_ssl: Optional[bool] = UNSET
    has_privacy_whois: Optional[bool] = UNSET
    ssl_age_days: Optional[int] = UNSET
    has_dmarc: Optional[bool] = UNSET
    has_spf: Optional[bool] = UNSET
    redirects_externally: Optional[bool] = UNSET
    javascript_obfuscated: Optional[bool] = UNSET
    domain_age_days: Optional[int] = UNSET
    registrar: Optional[str] = UNSET


class ReputationIndicatorsDict(TypedDict):
    is_newly_registered: NotRequired[bool]
    uses_free_extension: NotRequired[bool]
    uses_free_ssl: NotRequired[bool]
    has_privacy_whois: NotRequired[bool]
    ssl_age_days: NotRequired[int]
    has_dmarc: NotRequired[bool]
    has_spf: NotRequired[bool]
    redirects_externally: NotRequired[bool]
    javascript_obfuscated: NotRequired[bool]
    domain_age_days: NotRequired[int]
    registrar: NotRequired[str]
