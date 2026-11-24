from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Data3CommonelementsComBulkDeliveryApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Schedule id."""

    cadence: Optional[str] = UNSET
    """How often it runs."""

    next_run_at: OptionalNullable[RFC3339DateTime] = UNSET
    """When the next run is due."""

    paused_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Set while the schedule is paused."""


class Data3CommonelementsComBulkDeliveryApiDict(TypedDict):
    id: NotRequired[UUID]
    cadence: NotRequired[str]
    next_run_at: NotRequired[RFC3339DateTime | None]
    paused_at: NotRequired[RFC3339DateTime | None]
