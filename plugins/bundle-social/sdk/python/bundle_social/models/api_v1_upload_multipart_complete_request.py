from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .part2 import Part2, Part2Dict


class ApiV1UploadMultipartCompleteRequest(SdkBaseModel):
    team_id: OptionalNullable[str] = Field(default=UNSET, alias="teamId")
    parts: list[Part2]
    path: str
    upload_id: str = Field(alias="uploadId")


class ApiV1UploadMultipartCompleteRequestDict(TypedDict):
    team_id: NotRequired[str | None]
    parts: list[Part2Dict]
    path: str
    upload_id: str
