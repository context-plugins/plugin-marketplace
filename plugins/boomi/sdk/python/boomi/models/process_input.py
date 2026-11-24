from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProcessInput(SdkBaseModel):
    """Input for creating or updating an integration process."""

    name: Optional[str] = UNSET
    """Display name for the process."""

    folder_id: Optional[str] = Field(default=UNSET, alias="folderId")
    """ID of the folder to place the process in."""


class ProcessInputDict(TypedDict):
    name: NotRequired[str]
    folder_id: NotRequired[str]
