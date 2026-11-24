from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AccumulableInfo(SdkBaseModel):
    name: Optional[str] = UNSET
    accumullable_info_id: Optional[str] = Field(default=UNSET, alias="accumullableInfoId")
    value: Optional[str] = UNSET
    update: Optional[str] = UNSET


class AccumulableInfoDict(TypedDict):
    name: NotRequired[str]
    accumullable_info_id: NotRequired[str]
    value: NotRequired[str]
    update: NotRequired[str]
