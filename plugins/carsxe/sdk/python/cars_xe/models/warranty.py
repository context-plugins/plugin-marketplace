from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Warranty(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    miles: Optional[str] = UNSET
    months: Optional[str] = UNSET


class WarrantyDict(TypedDict):
    type_: NotRequired[str]
    miles: NotRequired[str]
    months: NotRequired[str]
