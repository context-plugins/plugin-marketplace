from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.llc_file_type import LlcFileTypeOrStr


class DocumentData(SdkBaseModel):
    content: str
    """File content, Base64 decoded"""

    content_type: str = Field(alias="contentType")
    """The file content type. All standard mime types are supported"""

    file_name: str = Field(alias="fileName")
    """The name of the file"""

    llc_file_type: Optional[LlcFileTypeOrStr] = Field(default=UNSET, alias="llcFileType")
    """The type of the file"""


class DocumentDataDict(TypedDict):
    content: str
    content_type: str
    file_name: str
    llc_file_type: NotRequired[LlcFileTypeOrStr]
