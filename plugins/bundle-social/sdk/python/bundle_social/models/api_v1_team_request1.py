from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiV1TeamRequest1(SdkBaseModel):
    name: str
    avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="avatarUrl")


class ApiV1TeamRequest1Dict(TypedDict):
    name: str
    avatar_url: NotRequired[str | None]
