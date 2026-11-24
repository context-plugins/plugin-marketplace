from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DriveFolder(SdkBaseModel):
    """The Google Drive folder a form's uploads land in. Both keys are null when Fillo manages the folder
    automatically."""

    id: str | None
    name: str | None


class DriveFolderDict(TypedDict):
    id: str | None
    name: str | None
