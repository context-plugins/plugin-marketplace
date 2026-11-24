from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.locale2 import Locale2OrStr
from .enums.process_behavior import ProcessBehaviorOrStr
from .models_lex_intent import ModelsLexIntent, ModelsLexIntentDict
from .prompt import Prompt, PromptDict
from .statement import Statement, StatementDict
from .tag_model import TagModel, TagModelDict


class PutBotRequest(SdkBaseModel):
    name: str
    """The name of the bot. The name is not case sensitive."""

    description: Optional[str] = UNSET
    """A description of the bot."""

    intents: Optional[list[ModelsLexIntent]] = UNSET
    """An array of Intent objects. Each intent represents a command that a user can express. For example, a pizza
    ordering bot might support an OrderPizza intent. For more information, see how-it-works."""

    enable_model_improvements: Optional[bool] = Field(default=UNSET, alias="enableModelImprovements")
    """Set to true to enable access to natural language understanding improvements. When you set the
    enableModelImprovements parameter to true you can use the nluIntentConfidenceThreshold parameter to configure
    confidence scores. For more information, see Confidence Scores. You can only set the enableModelImprovements
    parameter in certain Regions. If you set the parameter to true, your bot has access to accuracy improvements. The
    Regions where you can set the enableModelImprovements parameter to true are: US East (N. Virginia) (us-east-1) US
    West (Oregon) (us-west-2) Asia Pacific (Sydney) (ap-southea"""

    nlu_intent_confidence_threshold: Optional[float] = Field(default=UNSET, alias="nluIntentConfidenceThreshold")
    """Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or
    both when returning alternative intents in a PostContent or PostText response. AMAZON.FallbackIntent and
    AMAZON.KendraSearchIntent are only inserted if they are configured for the bot. You must set the
    enableModelImprovements parameter to true to use confidence scores in the following regions. US East (N. Virginia)
    (us-east-1) US West (Oregon) (us-west-2) Asia Pacific (Sydney) (ap-southeast-2) EU (Ireland) (eu-west-1) In other
    Regions, the enableModelImprovements parameter is set to t"""

    clarification_prompt: Optional[Prompt] = Field(default=UNSET, alias="clarificationPrompt")
    abort_statement: Optional[Statement] = Field(default=UNSET, alias="abortStatement")
    idle_session_ttl_in_seconds: Optional[int] = Field(default=UNSET, alias="idleSessionTTLInSeconds")
    """The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. A user interaction
    session remains active for the amount of time specified. If no conversation occurs during this time, the session
    expires and Amazon Lex deletes any data provided before the timeout. For example, suppose that a user chooses the
    OrderPizza intent, but gets sidetracked halfway through placing an order. If the user doesn't complete the order
    within the specified time, Amazon Lex discards the slot information that it gathered, and the user must start over.
    If you don't include the idleSession"""

    voice_id: Optional[str] = Field(default=UNSET, alias="voiceId")
    """The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale
    configured for the voice must match the locale of the bot. For more information, see Voices in Amazon Polly in the
    Amazon Polly Developer Guide."""

    checksum: Optional[str] = UNSET
    """Identifies a specific revision of the $LATEST version. When you create a new bot, leave the checksum field blank.
    If you specify a checksum you get a BadRequestException exception. When you want to update a bot, set the checksum
    field to the checksum of the most recent revision of the $LATEST version. If you don't specify the checksum field,
    or if the checksum does not match the $LATEST version, you get a PreconditionFailedException exception."""

    process_behavior: Optional[ProcessBehaviorOrStr] = Field(default=UNSET, alias="processBehavior")
    """If you set the processBehavior element to BUILD, Amazon Lex builds the bot so that it can be run. If you set the
    element to SAVE Amazon Lex saves the bot, but doesn't build it. If you don't specify this value, the default value
    is BUILD."""

    locale: Locale2OrStr
    """Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the
    bot. The default is en-US."""

    child_directed: bool = Field(alias="childDirected")
    """For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of
    Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part,
    to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or
    false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon
    Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to
    children under age 13 and"""

    detect_sentiment: Optional[bool] = Field(default=UNSET, alias="detectSentiment")
    """When set to true user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify
    detectSentiment, the default is false."""

    create_version: Optional[bool] = Field(default=UNSET, alias="createVersion")
    """When set to true a new numbered version of the bot is created. This is the same as calling the CreateBotVersion
    operation. If you don't specify createVersion, the default is false."""

    tags: Optional[list[TagModel]] = UNSET
    """A list of tags to add to the bot. You can only add tags when you create a bot, you can't use the PutBot operation
    to update the tags on a bot. To update tags, use the TagResource operation."""


class PutBotRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    intents: NotRequired[list[ModelsLexIntentDict]]
    enable_model_improvements: NotRequired[bool]
    nlu_intent_confidence_threshold: NotRequired[float]
    clarification_prompt: NotRequired[PromptDict]
    abort_statement: NotRequired[StatementDict]
    idle_session_ttl_in_seconds: NotRequired[int]
    voice_id: NotRequired[str]
    checksum: NotRequired[str]
    process_behavior: NotRequired[ProcessBehaviorOrStr]
    locale: Locale2OrStr
    child_directed: bool
    detect_sentiment: NotRequired[bool]
    create_version: NotRequired[bool]
    tags: NotRequired[list[TagModelDict]]
