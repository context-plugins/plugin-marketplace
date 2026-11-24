from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateExportRequest(SdkBaseModel):
    export_id: str = Field(alias="exportId")
    """The unique identifier Amazon Lex assigned to the export."""

    file_password: Optional[str] = Field(default=UNSET, alias="filePassword")
    """The new password to use to encrypt the export zip archive."""


class UpdateExportRequestDict(TypedDict):
    export_id: str
    file_password: NotRequired[str]
