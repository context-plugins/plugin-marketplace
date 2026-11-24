from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr
from .unions.datum import Datum, DatumDict


class LeadSearchResponse(SdkBaseModel):
    status: Literal["True"] = "True"
    type_: TypeOrStr = Field(alias="type")
    count: int
    data: list[Datum]
    """Lead records. Available fields depend on the requested inventory type and source data."""


class LeadSearchResponseDict(TypedDict):
    status: Literal["True"]
    type_: TypeOrStr
    count: int
    data: list[DatumDict]
