from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Destination1(SdkBaseModel):
    type_: str = Field(alias="type")
    id: str
    label: Optional[str] = UNSET


class Destination1Dict(TypedDict):
    type_: str
    id: str
    label: NotRequired[str]
