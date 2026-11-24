from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_type2 import ContentType2OrStr


class ModelsLexMessage(SdkBaseModel):
    content_type: ContentType2OrStr = Field(alias="contentType")
    """The content type of the message string."""

    content: str
    """The text of the message."""

    group_number: Optional[int] = Field(default=UNSET, alias="groupNumber")
    """Identifies the message group that the message belongs to. When a group is assigned to a message, Amazon Lex
    returns one message from each group in the response."""


class ModelsLexMessageDict(TypedDict):
    content_type: ContentType2OrStr
    content: str
    group_number: NotRequired[int]
