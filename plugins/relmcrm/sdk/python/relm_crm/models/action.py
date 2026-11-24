from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class Action(SdkBaseModel):
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")


class ActionDict(TypedDict):
    type_: NotRequired[TypeOrStr]
