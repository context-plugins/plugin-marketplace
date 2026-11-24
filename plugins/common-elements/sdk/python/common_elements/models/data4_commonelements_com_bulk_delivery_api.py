from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Data4CommonelementsComBulkDeliveryApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Schedule id."""

    dataset: Optional[str] = UNSET
    """Dataset the schedule delivers."""

    cadence: Optional[str] = UNSET
    """daily, weekly, or monthly."""

    next_run_at: OptionalNullable[RFC3339DateTime] = UNSET
    """When the next run is due."""

    last_success_at: OptionalNullable[RFC3339DateTime] = UNSET
    """When a file last landed. In ``changes`` mode this is the watermark the next run reads from."""


class Data4CommonelementsComBulkDeliveryApiDict(TypedDict):
    id: NotRequired[UUID]
    dataset: NotRequired[str]
    cadence: NotRequired[str]
    next_run_at: NotRequired[RFC3339DateTime | None]
    last_success_at: NotRequired[RFC3339DateTime | None]
