from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModerationOutputError1(SdkBaseModel):
    """An error produced while attempting moderation."""

    code: str
    message: str
    type_: Literal["error"] = Field(default="error", alias="type")


class ModerationOutputError1Dict(TypedDict):
    code: str
    message: str
    type_: Literal["error"]
