from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GroupObserver(SdkBaseModel):
    type_: Literal["GROUP"] = Field(default="GROUP", alias="type")
    group_id: str
    """Unique group identifier."""


class GroupObserverDict(TypedDict):
    type_: Literal["GROUP"]
    group_id: str
