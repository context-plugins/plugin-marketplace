from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .message_group import MessageGroup, MessageGroupDict


class ResponseSpecification(SdkBaseModel):
    message_groups: list[MessageGroup] = Field(alias="messageGroups")
    """A collection of responses that Amazon Lex can send to the user. Amazon Lex chooses the actual response to send at
    runtime."""

    allow_interrupt: Optional[bool] = Field(default=UNSET, alias="allowInterrupt")
    """Indicates whether the user can interrupt a speech response from Amazon Lex."""


class ResponseSpecificationDict(TypedDict):
    message_groups: list[MessageGroupDict]
    allow_interrupt: NotRequired[bool]
