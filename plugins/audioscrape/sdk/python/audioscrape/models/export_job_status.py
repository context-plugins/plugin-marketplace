from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ExportJobStatus(SdkBaseModel):
    """Response from ``GET /api/workspaces/{workspace}/export/{job_id}``."""

    bytes_: OptionalNullable[int] = Field(default=UNSET, alias="bytes")
    """Total size of the generated archive in bytes. ``null`` until completion."""

    completed_at: OptionalNullable[str] = UNSET
    """RFC 3339 UTC timestamp the job reached a terminal state. ``null`` while in flight."""

    created_at: OptionalNullable[str] = UNSET
    """RFC 3339 UTC timestamp the job was created."""

    download_expires_at: OptionalNullable[str] = UNSET
    """RFC 3339 UTC timestamp at which ``download_url`` stops working."""

    download_url: OptionalNullable[str] = UNSET
    """Signed download URL, valid for 15 minutes from this response. Present only when ``status == "completed"``; poll
    the job again for a fresh one. A finished export stays downloadable for 7 days, then reads ``expired``."""

    error_message: OptionalNullable[str] = UNSET
    """Human-readable failure reason. Set only when ``status == "failed"``."""

    id: int
    """Numeric job ID."""

    item_count: OptionalNullable[int] = UNSET
    """Number of items packaged in the export. ``null`` until completion."""

    status: str
    """One of ``queued``, ``running``, ``completed``, ``failed``, ``expired``."""


class ExportJobStatusDict(TypedDict):
    bytes_: NotRequired[int | None]
    completed_at: NotRequired[str | None]
    created_at: NotRequired[str | None]
    download_expires_at: NotRequired[str | None]
    download_url: NotRequired[str | None]
    error_message: NotRequired[str | None]
    id: int
    item_count: NotRequired[int | None]
    status: str
