from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModerationOutputError(SdkBaseModel):
    """An error produced while attempting moderation for the response input or output."""

    code: str
    message: str
    type_: Literal["error"] = Field(default="error", alias="type")


class ModerationOutputErrorDict(TypedDict):
    code: str
    message: str
    type_: Literal["error"]
