from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.location import Location, LocationDict


class ValidationError(SdkBaseModel):
    loc: list[Location]
    msg: str
    type_: str = Field(alias="type")
    input: Optional[Any] = UNSET
    ctx: Optional[Any] = UNSET


class ValidationErrorDict(TypedDict):
    loc: list[LocationDict]
    msg: str
    type_: str
    input: NotRequired[Any]
    ctx: NotRequired[Any]
