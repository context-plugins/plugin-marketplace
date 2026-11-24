from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.file_format import FileFormatOrStr
from .enums.table_format import TableFormatOrStr


class BlmtConfig(SdkBaseModel):
    """The configuration for BLMT."""

    root_path: Optional[str] = Field(default=UNSET, alias="rootPath")
    """The root path inside the Cloud Storage bucket."""

    file_format: Optional[FileFormatOrStr] = Field(default=UNSET, alias="fileFormat")
    """Required. The file format."""

    connection_name: Optional[str] = Field(default=UNSET, alias="connectionName")
    """Required. The bigquery connection. Format: ``{project}.{location}.{name}``"""

    bucket: Optional[str] = UNSET
    """Required. The Cloud Storage bucket name."""

    table_format: Optional[TableFormatOrStr] = Field(default=UNSET, alias="tableFormat")
    """Required. The table format."""


class BlmtConfigDict(TypedDict):
    root_path: NotRequired[str]
    file_format: NotRequired[FileFormatOrStr]
    connection_name: NotRequired[str]
    bucket: NotRequired[str]
    table_format: NotRequired[TableFormatOrStr]
