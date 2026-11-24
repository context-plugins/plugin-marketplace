from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Result(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[str] = UNSET
    title: Optional[str] = UNSET


class ResultDict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[str]
    title: NotRequired[str]
