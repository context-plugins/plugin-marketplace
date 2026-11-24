from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DefaultFrequency(SdkBaseModel):
    """Default donation frequency. Typically ``once``, ``monthly``, ``quarterly``, or ``yearly``."""

    name: Literal["default_frequency"] = "default_frequency"
    value: OptionalNullable[str] = UNSET


class DefaultFrequencyDict(TypedDict):
    name: Literal["default_frequency"]
    value: NotRequired[str | None]
