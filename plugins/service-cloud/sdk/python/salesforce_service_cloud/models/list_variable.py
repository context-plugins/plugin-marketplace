from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListVariable(SdkBaseModel):
    name: str
    """API name of a variable defined in the bot definition."""

    type_: Literal["list"] = Field(default="list", alias="type")
    """Object variable that contains a list."""

    value: list[Any] | None
    """Array of objects."""


class ListVariableDict(TypedDict):
    name: str
    type_: Literal["list"]
    value: list[Any] | None
