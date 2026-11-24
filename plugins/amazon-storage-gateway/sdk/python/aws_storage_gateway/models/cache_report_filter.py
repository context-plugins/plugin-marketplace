from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name import NameOrStr


class CacheReportFilter(SdkBaseModel):
    name: NameOrStr = Field(alias="Name")
    """The parameter name for a filter that determines which files are included or excluded from a cache report. Valid
    Names: UploadFailureReason | UploadState"""

    values: list[str] = Field(alias="Values")
    """The parameter value for a filter that determines which files are included or excluded from a cache report. Valid
    UploadFailureReason Values: InaccessibleStorageClass | InvalidObjectState | ObjectMissing | S3AccessDenied Valid
    UploadState Values: FailingUpload"""


class CacheReportFilterDict(TypedDict):
    name: NameOrStr
    values: list[str]
