from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Filter3(SdkBaseModel):
    name: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    required: Optional[bool] = UNSET


class Filter3Dict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[str]
    required: NotRequired[bool]
