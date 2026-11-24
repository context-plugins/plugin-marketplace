from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiV1UploadMultipartSignRequest(SdkBaseModel):
    team_id: OptionalNullable[str] = Field(default=UNSET, alias="teamId")
    part_numbers: list[int] = Field(alias="partNumbers")
    path: str
    upload_id: str = Field(alias="uploadId")


class ApiV1UploadMultipartSignRequestDict(TypedDict):
    team_id: NotRequired[str | None]
    part_numbers: list[int]
    path: str
    upload_id: str
