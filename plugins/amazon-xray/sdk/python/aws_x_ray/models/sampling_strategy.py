from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name import NameOrStr


class SamplingStrategy(SdkBaseModel):
    name: Optional[NameOrStr] = Field(default=UNSET, alias="Name")
    """The name of a sampling rule."""

    value: Optional[float] = Field(default=UNSET, alias="Value")
    """The value of a sampling rule."""


class SamplingStrategyDict(TypedDict):
    name: NotRequired[NameOrStr]
    value: NotRequired[float]
