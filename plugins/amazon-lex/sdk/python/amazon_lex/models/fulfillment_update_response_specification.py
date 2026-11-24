from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .message_group import MessageGroup, MessageGroupDict


class FulfillmentUpdateResponseSpecification(SdkBaseModel):
    frequency_in_seconds: int = Field(alias="frequencyInSeconds")
    """The frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the
    message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update
    message is not played to the user."""

    message_groups: list[MessageGroup] = Field(alias="messageGroups")
    """1 - 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user."""

    allow_interrupt: Optional[bool] = Field(default=UNSET, alias="allowInterrupt")
    """Determines whether the user can interrupt an update message while it is playing."""


class FulfillmentUpdateResponseSpecificationDict(TypedDict):
    frequency_in_seconds: int
    message_groups: list[MessageGroupDict]
    allow_interrupt: NotRequired[bool]
