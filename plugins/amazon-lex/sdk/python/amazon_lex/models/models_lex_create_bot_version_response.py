from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.locale import LocaleOrStr
from .enums.status1 import Status1OrStr
from .models_lex_intent import ModelsLexIntent, ModelsLexIntentDict
from .prompt import Prompt, PromptDict
from .statement import Statement, StatementDict


class ModelsLexCreateBotVersionResponse(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the bot."""

    description: Optional[str] = UNSET
    """A description of the bot."""

    intents: Optional[list[ModelsLexIntent]] = UNSET
    """An array of Intent objects. For more information, see PutBot."""

    clarification_prompt: Optional[Prompt] = Field(default=UNSET, alias="clarificationPrompt")
    abort_statement: Optional[Statement] = Field(default=UNSET, alias="abortStatement")
    status: Optional[Status1OrStr] = UNSET
    """When you send a request to create or update a bot, Amazon Lex sets the status response element to BUILDING. After
    Amazon Lex builds the bot, it sets status to READY. If Amazon Lex can't build the bot, it sets status to FAILED.
    Amazon Lex returns the reason for the failure in the failureReason response element."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="failureReason")
    """If status is FAILED, Amazon Lex provides the reason that it failed to build the bot."""

    last_updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDate")
    """The date when the $LATEST version of this bot was updated."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """The date when the bot version was created."""

    idle_session_ttl_in_seconds: Optional[int] = Field(default=UNSET, alias="idleSessionTTLInSeconds")
    """The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. For more information,
    see PutBot."""

    voice_id: Optional[str] = Field(default=UNSET, alias="voiceId")
    """The Amazon Polly voice ID that Amazon Lex uses for voice interactions with the user."""

    checksum: Optional[str] = UNSET
    """Checksum identifying the version of the bot that was created."""

    version: Optional[str] = UNSET
    """The version of the bot."""

    locale: Optional[LocaleOrStr] = UNSET
    """Specifies the target locale for the bot."""

    child_directed: Optional[bool] = Field(default=UNSET, alias="childDirected")
    """For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of
    Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part,
    to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or
    false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon
    Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to
    children under age 13 and"""

    enable_model_improvements: Optional[bool] = Field(default=UNSET, alias="enableModelImprovements")
    """Indicates whether the bot uses accuracy improvements. true indicates that the bot is using the improvements,
    otherwise, false."""

    detect_sentiment: Optional[bool] = Field(default=UNSET, alias="detectSentiment")
    """Indicates whether utterances entered by the user should be sent to Amazon Comprehend for sentiment analysis."""


class ModelsLexCreateBotVersionResponseDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    intents: NotRequired[list[ModelsLexIntentDict]]
    clarification_prompt: NotRequired[PromptDict]
    abort_statement: NotRequired[StatementDict]
    status: NotRequired[Status1OrStr]
    failure_reason: NotRequired[str]
    last_updated_date: NotRequired[RFC3339DateTime]
    created_date: NotRequired[RFC3339DateTime]
    idle_session_ttl_in_seconds: NotRequired[int]
    voice_id: NotRequired[str]
    checksum: NotRequired[str]
    version: NotRequired[str]
    locale: NotRequired[LocaleOrStr]
    child_directed: NotRequired[bool]
    enable_model_improvements: NotRequired[bool]
    detect_sentiment: NotRequired[bool]
