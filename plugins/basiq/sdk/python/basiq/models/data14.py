from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filter3 import Filter3, Filter3Dict


class Data14(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    filters: Optional[list[Filter3]] = UNSET


class Data14Dict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    filters: NotRequired[list[Filter3Dict]]
