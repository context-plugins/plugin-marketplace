from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiV1UploadFromUrlRequest(SdkBaseModel):
    team_id: OptionalNullable[str] = Field(default=UNSET, alias="teamId")
    url: str


class ApiV1UploadFromUrlRequestDict(TypedDict):
    team_id: NotRequired[str | None]
    url: str
