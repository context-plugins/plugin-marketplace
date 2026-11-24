from __future__ import annotations

from typing import TYPE_CHECKING, Literal

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel

if TYPE_CHECKING:
    from .unions.variable import Variable, VariableDict


class ObjectVariable(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """API name of a variable defined in the bot definition."""

    type_: Literal["object"] = Field(default="object", alias="type")
    """Variable type of an object variable."""

    value: list[Variable] | None
    """Variable value is an object."""


class ObjectVariableDict(TypedDict):
    name: str
    type_: Literal["object"]
    value: list[VariableDict] | None
