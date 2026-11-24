from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiV1UploadMultipartAbortRequest(SdkBaseModel):
    team_id: OptionalNullable[str] = Field(default=UNSET, alias="teamId")
    path: str
    upload_id: str = Field(alias="uploadId")


class ApiV1UploadMultipartAbortRequestDict(TypedDict):
    team_id: NotRequired[str | None]
    path: str
    upload_id: str
