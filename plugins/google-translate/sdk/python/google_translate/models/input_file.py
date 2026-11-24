from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gcs_input_source1 import GcsInputSource1, GcsInputSource1Dict


class InputFile(SdkBaseModel):
    """An input file."""

    gcs_source: Optional[GcsInputSource1] = Field(default=UNSET, alias="gcsSource")
    """Google Cloud Storage file source."""

    usage: Optional[str] = UNSET
    """Optional. Usage of the file contents. Options are TRAIN|VALIDATION|TEST, or UNASSIGNED (by default) for auto
    split."""


class InputFileDict(TypedDict):
    gcs_source: NotRequired[GcsInputSource1Dict]
    usage: NotRequired[str]
