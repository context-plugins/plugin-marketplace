from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Thread(SdkBaseModel):
    text: OptionalNullable[str] = UNSET
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")


class ThreadDict(TypedDict):
    text: NotRequired[str | None]
    upload_ids: NotRequired[list[str] | None]
