from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WorkspaceFileUploadResponseItem(SdkBaseModel):
    id: UUID
    """Upload id. Pass THIS in RunCreateRequest.attachedFileIds to attach the file to a run."""

    name: str
    """Original filename from the request"""

    stored_name: str = Field(alias="storedName")
    """Sanitized filename the object is stored under, e.g. "data.csv"."""

    path: str
    """Path within the workspace, e.g. "uploads/data.csv"
    """

    will_override: bool = Field(alias="willOverride")
    """True if a file with this stored_name already exists in the workspace and uploading will replace it. Surface a
    warning to the user."""

    upload_url: str = Field(alias="uploadUrl")
    """Presigned PUT URL (5 min expiry). PUT the file bytes with the matching Content-Type and Content-Length
    headers."""


class WorkspaceFileUploadResponseItemDict(TypedDict):
    id: UUID
    name: str
    stored_name: str
    path: str
    will_override: bool
    upload_url: str
