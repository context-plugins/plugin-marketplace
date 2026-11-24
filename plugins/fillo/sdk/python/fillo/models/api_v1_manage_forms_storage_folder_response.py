from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .drive_folder import DriveFolder, DriveFolderDict


class ApiV1ManageFormsStorageFolderResponse(SdkBaseModel):
    folder: DriveFolder
    """The Google Drive folder a form's uploads land in. Both keys are null when Fillo manages the folder
    automatically."""


class ApiV1ManageFormsStorageFolderResponseDict(TypedDict):
    folder: DriveFolderDict
