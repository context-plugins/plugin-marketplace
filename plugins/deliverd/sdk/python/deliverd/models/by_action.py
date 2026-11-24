from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ByAction(SdkBaseModel):
    action_id: str = Field(alias="actionId")
    changed: int
    loosened: int
    tightened: int


class ByActionDict(TypedDict):
    action_id: str
    changed: int
    loosened: int
    tightened: int
