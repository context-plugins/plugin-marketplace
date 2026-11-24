from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.file_format import FileFormatOrStr
from .export_resource_specification import ExportResourceSpecification, ExportResourceSpecificationDict


class CreateExportRequest(SdkBaseModel):
    resource_specification: ExportResourceSpecification = Field(alias="resourceSpecification")
    file_format: FileFormatOrStr = Field(alias="fileFormat")
    """The file format of the bot or bot locale definition files."""

    file_password: Optional[str] = Field(default=UNSET, alias="filePassword")
    """An password to use to encrypt the exported archive. Using a password is optional, but you should encrypt the
    archive to protect the data in transit between Amazon Lex and your local computer."""


class CreateExportRequestDict(TypedDict):
    resource_specification: ExportResourceSpecificationDict
    file_format: FileFormatOrStr
    file_password: NotRequired[str]
