from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .json_file_format import JsonFileFormat, JsonFileFormatDict


class GcsDestinationConfig2(SdkBaseModel):
    """A configuration for how data should be loaded to Cloud Storage."""

    path: Optional[str] = UNSET
    """Path inside the Cloud Storage bucket to write data to."""

    file_rotation_interval: Optional[str] = Field(default=UNSET, alias="fileRotationInterval")
    """The maximum duration for which new events are added before a file is closed and a new file is created. Values
    within the range of 15-60 seconds are allowed."""

    avro_file_format: Optional[Any] = Field(default=UNSET, alias="avroFileFormat")
    """AVRO file format configuration."""

    json_file_format: Optional[JsonFileFormat] = Field(default=UNSET, alias="jsonFileFormat")
    """JSON file format configuration."""

    file_rotation_mb: Optional[int] = Field(default=UNSET, alias="fileRotationMb")
    """The maximum file size to be saved in the bucket."""


class GcsDestinationConfig2Dict(TypedDict):
    path: NotRequired[str]
    file_rotation_interval: NotRequired[str]
    avro_file_format: NotRequired[Any]
    json_file_format: NotRequired[JsonFileFormatDict]
    file_rotation_mb: NotRequired[int]
