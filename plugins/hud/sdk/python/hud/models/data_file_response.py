from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.scope import ScopeOrStr
from .enums.status_hud_platform_data_api import StatusHudPlatformDataApiOrStr


class DataFileResponse(SdkBaseModel):
    """Size is reserved up front and verified against the stored object on completion."""

    id: UUID
    team_id: UUID
    membership_id: int
    scope: ScopeOrStr
    status: StatusHudPlatformDataApiOrStr
    filename: str
    content_type: str
    size_bytes: int
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime


class DataFileResponseDict(TypedDict):
    id: UUID
    team_id: UUID
    membership_id: int
    scope: ScopeOrStr
    status: StatusHudPlatformDataApiOrStr
    filename: str
    content_type: str
    size_bytes: int
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
