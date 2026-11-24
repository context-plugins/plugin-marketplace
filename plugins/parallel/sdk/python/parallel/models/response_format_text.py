from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResponseFormatText(SdkBaseModel):
    """Default response format. Used to generate text responses."""

    type_: Literal["text"] = Field(default="text", alias="type")


class ResponseFormatTextDict(TypedDict):
    type_: Literal["text"]
