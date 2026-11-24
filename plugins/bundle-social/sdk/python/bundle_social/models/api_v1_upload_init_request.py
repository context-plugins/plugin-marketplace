from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.mime_type import MimeTypeOrStr


class ApiV1UploadInitRequest(SdkBaseModel):
    team_id: OptionalNullable[str] = Field(default=UNSET, alias="teamId")
    file_name: str = Field(alias="fileName")
    mime_type: MimeTypeOrStr = Field(alias="mimeType")
    file_size: Optional[int] = Field(default=UNSET, alias="fileSize")


class ApiV1UploadInitRequestDict(TypedDict):
    team_id: NotRequired[str | None]
    file_name: str
    mime_type: MimeTypeOrStr
    file_size: NotRequired[int]
