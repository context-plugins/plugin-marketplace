from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class BasicWorkspaceInfo(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: UUID
    created_at: RFC3339DateTime
    default_workflow_id: int
    estimate_scale: list[int]
    name: str
    url_slug: str
    utc_offset: str
    korey_enabled: Optional[bool] = UNSET


class BasicWorkspaceInfoDict(TypedDict):
    id: UUID
    created_at: RFC3339DateTime
    default_workflow_id: int
    estimate_scale: list[int]
    name: str
    url_slug: str
    utc_offset: str
    korey_enabled: NotRequired[bool]
