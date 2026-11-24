from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.message_selection_strategy import MessageSelectionStrategyOrStr
from .message_group import MessageGroup, MessageGroupDict
from .prompt_attempt_specification import PromptAttemptSpecification, PromptAttemptSpecificationDict


class PromptSpecification(SdkBaseModel):
    message_groups: list[MessageGroup] = Field(alias="messageGroups")
    """A collection of messages that Amazon Lex can send to the user. Amazon Lex chooses the actual message to send at
    runtime."""

    max_retries: int = Field(alias="maxRetries")
    """The maximum number of times the bot tries to elicit a response from the user using this prompt."""

    allow_interrupt: Optional[bool] = Field(default=UNSET, alias="allowInterrupt")
    """Indicates whether the user can interrupt a speech prompt from the bot."""

    message_selection_strategy: Optional[MessageSelectionStrategyOrStr] = Field(
        default=UNSET, alias="messageSelectionStrategy"
    )
    """Indicates how a message is selected from a message group among retries."""

    prompt_attempts_specification: Optional[dict[str, PromptAttemptSpecification]] = Field(
        default=UNSET, alias="promptAttemptsSpecification"
    )
    """Specifies the advanced settings on each attempt of the prompt."""


class PromptSpecificationDict(TypedDict):
    message_groups: list[MessageGroupDict]
    max_retries: int
    allow_interrupt: NotRequired[bool]
    message_selection_strategy: NotRequired[MessageSelectionStrategyOrStr]
    prompt_attempts_specification: NotRequired[dict[str, PromptAttemptSpecificationDict]]
