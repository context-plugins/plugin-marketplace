from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class DataCommonelementsComBulkDeliveryApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Delivery id. Poll /v1/deliveries/{id} with it."""

    status: Optional[str] = UNSET
    """Lifecycle state: queued, running, succeeded, failed, or cancelled."""

    row_cap: Optional[float] = UNSET
    """Row ceiling applied to this run, from your plan."""

    max_lookback_days: OptionalNullable[float] = UNSET
    """Lookback window applied in ``changes`` mode, from your plan."""

    requested_at: Optional[RFC3339DateTime] = UNSET
    """When the delivery was accepted."""


class DataCommonelementsComBulkDeliveryApiDict(TypedDict):
    id: NotRequired[UUID]
    status: NotRequired[str]
    row_cap: NotRequired[float]
    max_lookback_days: NotRequired[float | None]
    requested_at: NotRequired[RFC3339DateTime]
