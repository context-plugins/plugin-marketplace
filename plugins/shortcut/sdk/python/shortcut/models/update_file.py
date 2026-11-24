from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class UpdateFile(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The description of the file."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """The time/date that the file was uploaded."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """The time/date that the file was last updated."""

    name: Optional[str] = UNSET
    """The name of the file."""

    uploader_id: Optional[UUID] = UNSET
    """The unique ID assigned to the Member who uploaded the file to Shortcut."""

    external_id: Optional[str] = UNSET
    """An additional ID that you may wish to assign to the file."""


class UpdateFileDict(TypedDict):
    description: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    name: NotRequired[str]
    uploader_id: NotRequired[UUID]
    external_id: NotRequired[str]
