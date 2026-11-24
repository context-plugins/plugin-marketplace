from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Parent(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the parent label."""


class ParentDict(TypedDict):
    name: NotRequired[str]
