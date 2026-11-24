from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.location import Location, LocationDict


class ValidationError(SdkBaseModel):
    type_: str = Field(alias="type")
    loc: list[Location]
    msg: str


class ValidationErrorDict(TypedDict):
    type_: str
    loc: list[LocationDict]
    msg: str
