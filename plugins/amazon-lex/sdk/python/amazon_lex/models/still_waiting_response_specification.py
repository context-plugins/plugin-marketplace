from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .message_group import MessageGroup, MessageGroupDict


class StillWaitingResponseSpecification(SdkBaseModel):
    message_groups: list[MessageGroup] = Field(alias="messageGroups")
    """One or more message groups, each containing one or more messages, that define the prompts that Amazon Lex sends
    to the user."""

    frequency_in_seconds: int = Field(alias="frequencyInSeconds")
    """How often a message should be sent to the user. Minimum of 1 second, maximum of 5 minutes."""

    timeout_in_seconds: int = Field(alias="timeoutInSeconds")
    """If Amazon Lex waits longer than this length of time for a response, it will stop sending messages."""

    allow_interrupt: Optional[bool] = Field(default=UNSET, alias="allowInterrupt")
    """Indicates that the user can interrupt the response by speaking while the message is being played."""


class StillWaitingResponseSpecificationDict(TypedDict):
    message_groups: list[MessageGroupDict]
    frequency_in_seconds: int
    timeout_in_seconds: int
    allow_interrupt: NotRequired[bool]
