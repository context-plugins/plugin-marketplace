from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.kind import Kind, KindOrStr
from .enums.scope_hud_platform_checks_api import ScopeHudPlatformChecksApiOrStr


class QcPipelineRegistrationResponse(SdkBaseModel):
    """A team-owned environment pipeline available to DataVendor."""

    id: UUID
    owner_team_id: UUID
    asset_type: str
    kind: KindOrStr = Kind.ENVIRONMENT
    scope: ScopeHudPlatformChecksApiOrStr
    key: str
    label: str
    description: str
    registry_id: UUID
    scenario_name: str
    model: str
    pass_threshold: float
    credit_price: float
    enabled: bool
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime


class QcPipelineRegistrationResponseDict(TypedDict):
    id: UUID
    owner_team_id: UUID
    asset_type: str
    kind: NotRequired[KindOrStr]
    scope: ScopeHudPlatformChecksApiOrStr
    key: str
    label: str
    description: str
    registry_id: UUID
    scenario_name: str
    model: str
    pass_threshold: float
    credit_price: float
    enabled: bool
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
