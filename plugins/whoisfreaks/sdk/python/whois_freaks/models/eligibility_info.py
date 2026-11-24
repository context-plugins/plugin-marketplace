from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EligibilityInfo(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")


class EligibilityInfoDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[str]
