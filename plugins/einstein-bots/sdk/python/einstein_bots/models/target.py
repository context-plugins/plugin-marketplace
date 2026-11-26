from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr


class Target(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    type_: TypeOrStr = Field(alias="type")
    """Type of the transfer target."""

    value: str
    """ID of the transfer target."""


class TargetDict(TypedDict):
    type_: TypeOrStr
    value: str
