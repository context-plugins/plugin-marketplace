from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.location import Location, LocationDict


class ValidationError(SdkBaseModel):
    loc: list[Location]
    msg: str
    type_: str = Field(alias="type")


class ValidationErrorDict(TypedDict):
    loc: list[LocationDict]
    msg: str
    type_: str
