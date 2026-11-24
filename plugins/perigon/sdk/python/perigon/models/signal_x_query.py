from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.search_type import SearchTypeOrStr


class SignalXQuery(SdkBaseModel):
    version: Literal["V1"] = "V1"
    query: str
    search_type: SearchTypeOrStr = Field(alias="searchType")


class SignalXQueryDict(TypedDict):
    version: Literal["V1"]
    query: str
    search_type: SearchTypeOrStr
