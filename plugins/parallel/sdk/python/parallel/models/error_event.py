from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error2 import Error2, Error2Dict


class ErrorEvent(SdkBaseModel):
    """Event indicating an error."""

    type_: Literal["error"] = Field(default="error", alias="type")
    """Event type; always 'error'."""

    error: Error2
    """Error."""


class ErrorEventDict(TypedDict):
    type_: Literal["error"]
    error: Error2Dict
