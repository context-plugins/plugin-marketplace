from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class WorkspaceInfo(SdkBaseModel):
    id: UUID
    name: Optional[str] = UNSET
    archived: bool
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class WorkspaceInfoDict(TypedDict):
    id: UUID
    name: NotRequired[str]
    archived: bool
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
