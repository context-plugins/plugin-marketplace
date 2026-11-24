from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.generation_status import GenerationStatusOrStr


class DescribeBotResourceGenerationResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot for which the generation request was made."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot for which the generation request was made."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale of the bot for which the generation request was made."""

    generation_id: Optional[str] = Field(default=UNSET, alias="generationId")
    """The generation ID for which to return the generation details."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """A list of reasons why the generation of bot resources through natural language description failed."""

    generation_status: Optional[GenerationStatusOrStr] = Field(default=UNSET, alias="generationStatus")
    """The status of the generation request."""

    generation_input_prompt: Optional[str] = Field(default=UNSET, alias="generationInputPrompt")
    """The prompt used in the generation request."""

    generated_bot_locale_url: Optional[str] = Field(default=UNSET, alias="generatedBotLocaleUrl")
    """The Amazon S3 location of the generated bot locale configuration."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time at which the item was generated."""

    model_arn: Optional[str] = Field(default=UNSET, alias="modelArn")
    """The ARN of the model used to generate the bot resources."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time at which the generated item was updated."""


class DescribeBotResourceGenerationResponseDict(TypedDict):
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    generation_id: NotRequired[str]
    failure_reasons: NotRequired[list[str]]
    generation_status: NotRequired[GenerationStatusOrStr]
    generation_input_prompt: NotRequired[str]
    generated_bot_locale_url: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    model_arn: NotRequired[str]
    last_updated_date_time: NotRequired[RFC3339DateTime]
