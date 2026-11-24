from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .file_input_source2 import FileInputSource2, FileInputSource2Dict
from .gcs_input_source1 import GcsInputSource1, GcsInputSource1Dict


class ImportAdaptiveMtFileRequest(SdkBaseModel):
    """The request for importing an AdaptiveMt file along with its sentences."""

    file_input_source: Optional[FileInputSource2] = Field(default=UNSET, alias="fileInputSource")
    """Inline file source."""

    gcs_input_source: Optional[GcsInputSource1] = Field(default=UNSET, alias="gcsInputSource")
    """Google Cloud Storage file source."""


class ImportAdaptiveMtFileRequestDict(TypedDict):
    file_input_source: NotRequired[FileInputSource2Dict]
    gcs_input_source: NotRequired[GcsInputSource1Dict]
