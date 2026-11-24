from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FileSystemAssociationStatusDetail(SdkBaseModel):
    error_code: Optional[str] = Field(default=UNSET, alias="ErrorCode")
    """The error code for a given file system association status."""


class FileSystemAssociationStatusDetailDict(TypedDict):
    error_code: NotRequired[str]
