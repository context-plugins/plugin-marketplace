from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.scope_statable_stats_sites_api import ScopeStatableStatsSitesApiOrStr
from .funnel_step import FunnelStep, FunnelStepDict


class FunnelDefinition(SdkBaseModel):
    """A saved funnel definition (managed in the dashboard)."""

    id: Optional[int] = UNSET
    site_id: Optional[int] = UNSET
    name: Optional[str] = UNSET
    scope: Optional[ScopeStatableStatsSitesApiOrStr] = UNSET
    strict_order: Optional[bool] = UNSET
    """When true, steps must occur in exact order (windowFunnel strict_order)."""

    steps: Optional[list[FunnelStep]] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    updated_at: Optional[RFC3339DateTime] = UNSET


class FunnelDefinitionDict(TypedDict):
    id: NotRequired[int]
    site_id: NotRequired[int]
    name: NotRequired[str]
    scope: NotRequired[ScopeStatableStatsSitesApiOrStr]
    strict_order: NotRequired[bool]
    steps: NotRequired[list[FunnelStepDict]]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
