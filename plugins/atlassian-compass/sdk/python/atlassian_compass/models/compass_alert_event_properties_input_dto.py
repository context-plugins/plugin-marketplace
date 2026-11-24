from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.priority import PriorityOrStr
from .enums.status1 import Status1OrStr


class CompassAlertEventPropertiesInputDto(SdkBaseModel):
    """The list of properties of the alert event."""

    id: str
    """The ID of the alert."""

    status: OptionalNullable[Status1OrStr] = UNSET
    """Status of the alert."""

    priority: OptionalNullable[PriorityOrStr] = UNSET
    """Priority of the alert."""

    created_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    """Timestamp for when the alert was created, when status is set to OPENED."""

    acknowledged_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="acknowledgedAt")
    """The last time the alert status changed to ACKNOWLEDGED."""

    snoozed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="snoozedAt")
    """The last time the alert status changed to SNOOZED."""

    closed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="closedAt")
    """The last time the alert status changed to CLOSED."""


class CompassAlertEventPropertiesInputDtoDict(TypedDict):
    id: str
    status: NotRequired[Status1OrStr | None]
    priority: NotRequired[PriorityOrStr | None]
    created_at: NotRequired[RFC3339DateTime | None]
    acknowledged_at: NotRequired[RFC3339DateTime | None]
    snoozed_at: NotRequired[RFC3339DateTime | None]
    closed_at: NotRequired[RFC3339DateTime | None]
