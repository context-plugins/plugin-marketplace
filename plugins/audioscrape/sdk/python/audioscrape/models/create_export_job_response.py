from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateExportJobResponse(SdkBaseModel):
    """Response from ``POST /api/workspaces/{workspace}/export``."""

    job_id: int
    """Numeric ID of the newly created export job."""

    status: str
    """Always ``"queued"`` immediately after creation."""

    status_url: str
    """Relative URL clients should poll for status + the eventual download URL."""


class CreateExportJobResponseDict(TypedDict):
    job_id: int
    status: str
    status_url: str
