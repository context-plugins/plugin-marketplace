from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Error1(SdkBaseModel):
    type_: str = Field(alias="type")
    """The type of error."""

    message: str
    """A human-readable description of the error."""


class Error1Dict(TypedDict):
    type_: str
    message: str
