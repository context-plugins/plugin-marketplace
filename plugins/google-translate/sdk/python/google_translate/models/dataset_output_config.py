from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gcs_output_destination2 import GcsOutputDestination2, GcsOutputDestination2Dict


class DatasetOutputConfig(SdkBaseModel):
    """Output configuration for datasets."""

    gcs_destination: Optional[GcsOutputDestination2] = Field(default=UNSET, alias="gcsDestination")
    """Google Cloud Storage destination to write the output."""


class DatasetOutputConfigDict(TypedDict):
    gcs_destination: NotRequired[GcsOutputDestination2Dict]
