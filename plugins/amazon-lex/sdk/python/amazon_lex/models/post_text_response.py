from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dialog_state1_amazon_lex_model_building_v2_operations_api import (
    DialogState1AmazonLexModelBuildingV2OperationsApiOrStr,
)
from .enums.message_format1_amazon_lex_model_building_v2_operations_api import (
    MessageFormat1AmazonLexModelBuildingV2OperationsApiOrStr,
)
from .intent_confidence import IntentConfidence, IntentConfidenceDict
from .predicted_intent import PredictedIntent, PredictedIntentDict
from .response_card import ResponseCard, ResponseCardDict
from .runtime_lex_active_context import RuntimeLexActiveContext, RuntimeLexActiveContextDict
from .runtime_lex_sentiment_response import RuntimeLexSentimentResponse, RuntimeLexSentimentResponseDict


class PostTextResponse(SdkBaseModel):
    intent_name: Optional[str] = Field(default=UNSET, alias="intentName")
    """The current user intent that Amazon Lex is aware of."""

    nlu_intent_confidence: Optional[IntentConfidence] = Field(default=UNSET, alias="nluIntentConfidence")
    alternative_intents: Optional[list[PredictedIntent]] = Field(default=UNSET, alias="alternativeIntents")
    """One to four alternative intents that may be applicable to the user's intent. Each alternative includes a score
    that indicates how confident Amazon Lex is that the intent matches the user's intent. The intents are sorted by the
    confidence score."""

    slots: Optional[dict[str, str]] = UNSET
    """The intent slots that Amazon Lex detected from the user input in the conversation. Amazon Lex creates a
    resolution list containing likely values for a slot. The value that it returns is determined by the
    valueSelectionStrategy selected when the slot type was created or updated. If valueSelectionStrategy is set to
    ORIGINAL_VALUE, the value provided by the user is returned, if the user value is similar to the slot values. If
    valueSelectionStrategy is set to TOP_RESOLUTION Amazon Lex returns the first value in the resolution list or, if
    there is no resolution list, null. If you don't specify a va"""

    session_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="sessionAttributes")
    """A map of key-value pairs representing the session-specific context information."""

    message: Optional[str] = UNSET
    """The message to convey to the user. The message can come from the bot's configuration or from a Lambda function.
    If the intent is not configured with a Lambda function, or if the Lambda function returned Delegate as the
    dialogAction.type its response, Amazon Lex decides on the next course of action and selects an appropriate message
    from the bot's configuration based on the current interaction context. For example, if Amazon Lex isn't able to
    understand user input, it uses a clarification prompt message. When you create an intent you can assign messages to
    groups. When messages are assigned to"""

    sentiment_response: Optional[RuntimeLexSentimentResponse] = Field(default=UNSET, alias="sentimentResponse")
    message_format: Optional[MessageFormat1AmazonLexModelBuildingV2OperationsApiOrStr] = Field(
        default=UNSET, alias="messageFormat"
    )
    """The format of the response message. One of the following values: PlainText - The message contains plain UTF-8
    text. CustomPayload - The message is a custom format defined by the Lambda function. SSML - The message contains
    text formatted for voice output. Composite - The message contains an escaped JSON object containing one or more
    messages from the groups that messages were assigned to when the intent was created."""

    dialog_state: Optional[DialogState1AmazonLexModelBuildingV2OperationsApiOrStr] = Field(
        default=UNSET, alias="dialogState"
    )
    """Identifies the current state of the user interaction. Amazon Lex returns one of the following values as
    dialogState. The client can optionally use this information to customize the user interface. ElicitIntent - Amazon
    Lex wants to elicit user intent. For example, a user might utter an intent ("I want to order a pizza"). If Amazon
    Lex cannot infer the user intent from this utterance, it will return this dialogState. ConfirmIntent - Amazon Lex is
    expecting a "yes" or "no" response. For example, Amazon Lex wants user confirmation before fulfilling an intent.
    Instead of a simple "yes" or "no," a"""

    slot_to_elicit: Optional[str] = Field(default=UNSET, alias="slotToElicit")
    """If the dialogState value is ElicitSlot, returns the name of the slot for which Amazon Lex is eliciting a
    value."""

    response_card: Optional[ResponseCard] = Field(default=UNSET, alias="responseCard")
    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """A unique identifier for the session."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that responded to the conversation. You can use this information to help determine if one
    version of a bot is performing better than another version."""

    active_contexts: Optional[list[RuntimeLexActiveContext]] = Field(default=UNSET, alias="activeContexts")
    """A list of active contexts for the session. A context can be set when an intent is fulfilled or by calling the
    PostContent, PostText, or PutSession operation. You can use a context to control the intents that can follow up an
    intent, or to modify the operation of your application."""


class PostTextResponseDict(TypedDict):
    intent_name: NotRequired[str]
    nlu_intent_confidence: NotRequired[IntentConfidenceDict]
    alternative_intents: NotRequired[list[PredictedIntentDict]]
    slots: NotRequired[dict[str, str]]
    session_attributes: NotRequired[dict[str, str]]
    message: NotRequired[str]
    sentiment_response: NotRequired[RuntimeLexSentimentResponseDict]
    message_format: NotRequired[MessageFormat1AmazonLexModelBuildingV2OperationsApiOrStr]
    dialog_state: NotRequired[DialogState1AmazonLexModelBuildingV2OperationsApiOrStr]
    slot_to_elicit: NotRequired[str]
    response_card: NotRequired[ResponseCardDict]
    session_id: NotRequired[str]
    bot_version: NotRequired[str]
    active_contexts: NotRequired[list[RuntimeLexActiveContextDict]]
