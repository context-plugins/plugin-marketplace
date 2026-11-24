from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scope_statable_stats_sites_api import ScopeStatableStatsSitesApi, ScopeStatableStatsSitesApiOrStr
from .funnel_step import FunnelStep, FunnelStepDict


class FunnelRequest(SdkBaseModel):
    name: str
    steps: list[FunnelStep]
    scope: ScopeStatableStatsSitesApiOrStr = ScopeStatableStatsSitesApi.VISITOR
    strict_order: Optional[bool] = UNSET


class FunnelRequestDict(TypedDict):
    name: str
    steps: list[FunnelStepDict]
    scope: NotRequired[ScopeStatableStatsSitesApiOrStr]
    strict_order: NotRequired[bool]
