from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .message_group import MessageGroup, MessageGroupDict


class FulfillmentStartResponseSpecification(SdkBaseModel):
    delay_in_seconds: int = Field(alias="delayInSeconds")
    """The delay between when the Lambda fulfillment function starts running and the start message is played. If the
    Lambda function returns before the delay is over, the start message isn't played."""

    message_groups: list[MessageGroup] = Field(alias="messageGroups")
    """1 - 5 message groups that contain start messages. Amazon Lex chooses one of the messages to play to the user."""

    allow_interrupt: Optional[bool] = Field(default=UNSET, alias="allowInterrupt")
    """Determines whether the user can interrupt the start message while it is playing."""


class FulfillmentStartResponseSpecificationDict(TypedDict):
    delay_in_seconds: int
    message_groups: list[MessageGroupDict]
    allow_interrupt: NotRequired[bool]
