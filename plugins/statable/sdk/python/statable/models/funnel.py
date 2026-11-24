from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scope_statable_stats_sites_api import ScopeStatableStatsSitesApiOrStr


class Funnel(SdkBaseModel):
    id: Optional[int] = UNSET
    name: Optional[str] = UNSET
    scope: Optional[ScopeStatableStatsSitesApiOrStr] = UNSET
    strict_order: Optional[bool] = UNSET


class FunnelDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    scope: NotRequired[ScopeStatableStatsSitesApiOrStr]
    strict_order: NotRequired[bool]
