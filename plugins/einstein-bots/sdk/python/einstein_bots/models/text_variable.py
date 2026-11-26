from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TextVariable(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """API name of a variable defined in the bot definition."""

    type_: Literal["text"] = Field(default="text", alias="type")
    """Variable type of a text variable."""

    value: str | None
    """Variable value in text format."""


class TextVariableDict(TypedDict):
    name: str
    type_: Literal["text"]
    value: str | None
