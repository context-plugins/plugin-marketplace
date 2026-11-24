from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.compression import CompressionOrStr
from .enums.schema_file_format import SchemaFileFormatOrStr


class JsonFileFormat(SdkBaseModel):
    """JSON file format configuration."""

    schema_file_format: Optional[SchemaFileFormatOrStr] = Field(default=UNSET, alias="schemaFileFormat")
    """The schema file format along JSON data files."""

    compression: Optional[CompressionOrStr] = UNSET
    """Compression of the loaded JSON file."""


class JsonFileFormatDict(TypedDict):
    schema_file_format: NotRequired[SchemaFileFormatOrStr]
    compression: NotRequired[CompressionOrStr]
