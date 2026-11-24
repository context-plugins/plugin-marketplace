from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.method import MethodOrStr
from .enums.status3 import Status3OrStr
from .object import Object, ObjectDict


class Operation(SdkBaseModel):
    method: Optional[MethodOrStr] = UNSET
    status: Optional[Status3OrStr] = UNSET
    object_: Optional[Object] = Field(default=UNSET, alias="object")
    """A single piece of content. Which properties are present depends on ``props``."""

    message: Optional[str] = UNSET
    """Present on deletes and on failures."""


class OperationDict(TypedDict):
    method: NotRequired[MethodOrStr]
    status: NotRequired[Status3OrStr]
    object_: NotRequired[ObjectDict]
    message: NotRequired[str]
