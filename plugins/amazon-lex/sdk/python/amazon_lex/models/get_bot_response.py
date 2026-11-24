from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.locale_amazon_lex_model_building_v2_versions_api import LocaleAmazonLexModelBuildingV2VersionsApiOrStr
from .enums.status1_amazon_lex_model_building_v2_versions_api import Status1AmazonLexModelBuildingV2VersionsApiOrStr
from .models_lex_intent import ModelsLexIntent, ModelsLexIntentDict
from .prompt import Prompt, PromptDict
from .statement import Statement, StatementDict


class GetBotResponse(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the bot."""

    description: Optional[str] = UNSET
    """A description of the bot."""

    intents: Optional[list[ModelsLexIntent]] = UNSET
    """An array of intent objects. For more information, see PutBot."""

    enable_model_improvements: Optional[bool] = Field(default=UNSET, alias="enableModelImprovements")
    """Indicates whether the bot uses accuracy improvements. true indicates that the bot is using the improvements,
    otherwise, false."""

    nlu_intent_confidence_threshold: Optional[float] = Field(default=UNSET, alias="nluIntentConfidenceThreshold")
    """The score that determines where Amazon Lex inserts the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both
    when returning alternative intents in a PostContent or PostText response. AMAZON.FallbackIntent is inserted if the
    confidence score for all intents is below this value. AMAZON.KendraSearchIntent is only inserted if it is configured
    for the bot."""

    clarification_prompt: Optional[Prompt] = Field(default=UNSET, alias="clarificationPrompt")
    abort_statement: Optional[Statement] = Field(default=UNSET, alias="abortStatement")
    status: Optional[Status1AmazonLexModelBuildingV2VersionsApiOrStr] = UNSET
    """The status of the bot. When the status is BUILDING Amazon Lex is building the bot for testing and use. If the
    status of the bot is READY_BASIC_TESTING, you can test the bot using the exact utterances specified in the bot's
    intents. When the bot is ready for full testing or to run, the status is READY. If there was a problem with building
    the bot, the status is FAILED and the failureReason field explains why the bot did not build. If the bot was saved
    but not built, the status is NOT_BUILT."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="failureReason")
    """If status is FAILED, Amazon Lex explains why it failed to build the bot."""

    last_updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDate")
    """The date that the bot was updated. When you create a resource, the creation date and last updated date are the
    same."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """The date that the bot was created."""

    idle_session_ttl_in_seconds: Optional[int] = Field(default=UNSET, alias="idleSessionTTLInSeconds")
    """The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. For more information,
    see PutBot."""

    voice_id: Optional[str] = Field(default=UNSET, alias="voiceId")
    """The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more information, see
    PutBot."""

    checksum: Optional[str] = UNSET
    """Checksum of the bot used to identify a specific revision of the bot's $LATEST version."""

    version: Optional[str] = UNSET
    """The version of the bot. For a new bot, the version is always $LATEST."""

    locale: Optional[LocaleAmazonLexModelBuildingV2VersionsApiOrStr] = UNSET
    """The target locale for the bot."""

    child_directed: Optional[bool] = Field(default=UNSET, alias="childDirected")
    """For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of
    Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part,
    to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or
    false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon
    Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to
    children under age 13 and"""

    detect_sentiment: Optional[bool] = Field(default=UNSET, alias="detectSentiment")
    """Indicates whether user utterances should be sent to Amazon Comprehend for sentiment analysis."""


class GetBotResponseDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    intents: NotRequired[list[ModelsLexIntentDict]]
    enable_model_improvements: NotRequired[bool]
    nlu_intent_confidence_threshold: NotRequired[float]
    clarification_prompt: NotRequired[PromptDict]
    abort_statement: NotRequired[StatementDict]
    status: NotRequired[Status1AmazonLexModelBuildingV2VersionsApiOrStr]
    failure_reason: NotRequired[str]
    last_updated_date: NotRequired[RFC3339DateTime]
    created_date: NotRequired[RFC3339DateTime]
    idle_session_ttl_in_seconds: NotRequired[int]
    voice_id: NotRequired[str]
    checksum: NotRequired[str]
    version: NotRequired[str]
    locale: NotRequired[LocaleAmazonLexModelBuildingV2VersionsApiOrStr]
    child_directed: NotRequired[bool]
    detect_sentiment: NotRequired[bool]
