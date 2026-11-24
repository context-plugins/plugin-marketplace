from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Event(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    at: Optional[RFC3339DateTime] = UNSET
    detail: OptionalNullable[str] = UNSET


class EventDict(TypedDict):
    type_: NotRequired[str]
    at: NotRequired[RFC3339DateTime]
    detail: NotRequired[str | None]
