from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class NumberVariable(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """API name of a variable defined in the bot definition."""

    type_: Literal["number"] = Field(default="number", alias="type")
    """Variable type of a number variable."""

    value: float | None
    """Variable value in number format."""


class NumberVariableDict(TypedDict):
    name: str
    type_: Literal["number"]
    value: float | None
