from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RefVariable(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """API name of a variable defined in the bot definition."""

    type_: Literal["ref"] = Field(default="ref", alias="type")
    """Variable type of a reference ID variable."""

    value: str | None
    """Variable value in reference ID format."""


class RefVariableDict(TypedDict):
    name: str
    type_: Literal["ref"]
    value: str | None
