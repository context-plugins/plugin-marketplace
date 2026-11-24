from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class Health(SdkBaseModel):
    """The current health status of the Epic."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    author_id: Optional[UUID] = UNSET
    """The ID of the permission who created or updated the Health record."""

    epic_id: Optional[int] = UNSET
    """The ID of the Epic associated with this Health record."""

    objective_id: Optional[int] = UNSET
    """The ID of the Objective associated with this Health record."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """The time that the Health record was updated."""

    status: StatusOrStr
    """The health status of the Epic or Objective."""

    id: UUID | None
    """The unique ID of the Health record."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """The time that the Health record was created."""

    text: Optional[str] = UNSET
    """The text of the Health record."""


class HealthDict(TypedDict):
    entity_type: str
    author_id: NotRequired[UUID]
    epic_id: NotRequired[int]
    objective_id: NotRequired[int]
    updated_at: NotRequired[RFC3339DateTime]
    status: StatusOrStr
    id: UUID | None
    created_at: NotRequired[RFC3339DateTime]
    text: NotRequired[str]
