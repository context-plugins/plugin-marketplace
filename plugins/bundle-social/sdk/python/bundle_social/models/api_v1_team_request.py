from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ApiV1TeamRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="avatarUrl")


class ApiV1TeamRequestDict(TypedDict):
    name: NotRequired[str]
    avatar_url: NotRequired[str | None]
