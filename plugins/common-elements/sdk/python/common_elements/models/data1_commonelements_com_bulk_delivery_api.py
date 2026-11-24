from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Data1CommonelementsComBulkDeliveryApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Delivery id."""

    status: Optional[str] = UNSET
    """queued, running, succeeded, failed, or cancelled."""

    rows_written: OptionalNullable[float] = UNSET
    """Rows written once the run has produced output."""

    truncated: Optional[bool] = UNSET
    """Whether the run stopped at the plan's row cap."""

    checksum: OptionalNullable[str] = UNSET
    """Checksum of the artifact, for verifying a download."""

    download_expires_at: OptionalNullable[RFC3339DateTime] = UNSET
    """When the download link stops working."""


class Data1CommonelementsComBulkDeliveryApiDict(TypedDict):
    id: NotRequired[UUID]
    status: NotRequired[str]
    rows_written: NotRequired[float | None]
    truncated: NotRequired[bool]
    checksum: NotRequired[str | None]
    download_expires_at: NotRequired[RFC3339DateTime | None]
