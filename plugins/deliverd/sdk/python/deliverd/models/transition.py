from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.from_model import FromModelOrStr
from .enums.to import ToOrStr


class Transition(SdkBaseModel):
    from_: FromModelOrStr = Field(alias="from")
    to: ToOrStr
    count: int


class TransitionDict(TypedDict):
    from_: FromModelOrStr
    to: ToOrStr
    count: int
