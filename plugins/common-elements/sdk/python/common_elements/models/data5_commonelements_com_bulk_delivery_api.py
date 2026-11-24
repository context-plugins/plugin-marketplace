from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Data5CommonelementsComBulkDeliveryApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Schedule id."""

    cadence: Optional[str] = UNSET
    """daily, weekly, or monthly."""

    next_run_at: OptionalNullable[RFC3339DateTime] = UNSET
    """When the next run is due. Null while paused."""

    runs: Optional[list[Any]] = UNSET
    """The schedule's recent runs, each in the same shape as a one-off delivery."""


class Data5CommonelementsComBulkDeliveryApiDict(TypedDict):
    id: NotRequired[UUID]
    cadence: NotRequired[str]
    next_run_at: NotRequired[RFC3339DateTime | None]
    runs: NotRequired[list[Any]]
