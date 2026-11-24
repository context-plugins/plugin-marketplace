from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KeyEntity(SdkBaseModel):
    name: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    description: Optional[str] = UNSET


class KeyEntityDict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[str]
    description: NotRequired[str]
