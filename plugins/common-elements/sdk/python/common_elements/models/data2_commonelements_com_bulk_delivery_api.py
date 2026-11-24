from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Data2CommonelementsComBulkDeliveryApi(SdkBaseModel):
    status: Optional[str] = UNSET
    """queued, running, succeeded, failed, or cancelled."""

    rows_written: OptionalNullable[float] = UNSET
    """Rows written so far, or in total once finished."""

    part_count: OptionalNullable[float] = UNSET
    """How many parts the artifact was split into."""

    download_url: OptionalNullable[str] = UNSET
    """Signed download link, present only while the delivery is downloadable."""

    error_code: OptionalNullable[str] = UNSET
    """Machine-readable failure reason. Switch on this, not on the message."""


class Data2CommonelementsComBulkDeliveryApiDict(TypedDict):
    status: NotRequired[str]
    rows_written: NotRequired[float | None]
    part_count: NotRequired[float | None]
    download_url: NotRequired[str | None]
    error_code: NotRequired[str | None]
