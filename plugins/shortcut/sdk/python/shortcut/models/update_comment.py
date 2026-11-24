from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateComment(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    text: str
    """The updated comment text."""


class UpdateCommentDict(TypedDict):
    text: str
