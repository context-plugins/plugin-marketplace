from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BooleanVariable(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """API name of a variable defined in the bot definition."""

    type_: Literal["boolean"] = Field(default="boolean", alias="type")
    """Variable type of a boolean variable."""

    value: bool | None
    """Boolean value."""


class BooleanVariableDict(TypedDict):
    name: str
    type_: Literal["boolean"]
    value: bool | None
