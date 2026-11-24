from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scope_hud_platform_checks_api import ScopeHudPlatformChecksApi, ScopeHudPlatformChecksApiOrStr
from .unions.credit_price import CreditPrice, CreditPriceDict
from .unions.pass_threshold import PassThreshold, PassThresholdDict


class QcPipelineCreateRequest(SdkBaseModel):
    """Register a team environment as a private DataVendor QC pipeline."""

    model_config = ConfigDict(extra="forbid")

    asset_type: str
    scope: ScopeHudPlatformChecksApiOrStr = ScopeHudPlatformChecksApi.ASSET
    key: str
    label: str
    description: Optional[str] = UNSET
    registry_id: UUID
    scenario_name: str
    model: Optional[str] = UNSET
    pass_threshold: Optional[PassThreshold] = UNSET
    credit_price: Optional[CreditPrice] = UNSET


class QcPipelineCreateRequestDict(TypedDict):
    asset_type: str
    scope: NotRequired[ScopeHudPlatformChecksApiOrStr]
    key: str
    label: str
    description: NotRequired[str]
    registry_id: UUID
    scenario_name: str
    model: NotRequired[str]
    pass_threshold: NotRequired[PassThresholdDict]
    credit_price: NotRequired[CreditPriceDict]
