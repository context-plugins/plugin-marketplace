from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .drive_folder import DriveFolder, DriveFolderDict
from .folder import Folder, FolderDict


class DriveFolderListing(SdkBaseModel):
    folder: DriveFolder
    """The Google Drive folder a form's uploads land in. Both keys are null when Fillo manages the folder
    automatically."""

    folders: list[Folder]
    """Writable My Drive folders on the connected account."""


class DriveFolderListingDict(TypedDict):
    folder: DriveFolderDict
    folders: list[FolderDict]
