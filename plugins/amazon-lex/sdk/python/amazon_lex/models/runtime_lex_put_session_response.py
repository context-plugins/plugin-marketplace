from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dialog_state1 import DialogState1OrStr
from .enums.message_format1 import MessageFormat1OrStr


class RuntimeLexPutSessionResponse(SdkBaseModel):
    content_type: Optional[str] = Field(default=UNSET, alias="contentType")
    """Content type as specified in the Accept HTTP header in the request."""

    intent_name: Optional[str] = Field(default=UNSET, alias="intentName")
    """The name of the current intent."""

    slots: Optional[str] = UNSET
    """Map of zero or more intent slots Amazon Lex detected from the user input during the conversation. Amazon Lex
    creates a resolution list containing likely values for a slot. The value that it returns is determined by the
    valueSelectionStrategy selected when the slot type was created or updated. If valueSelectionStrategy is set to
    ORIGINAL_VALUE, the value provided by the user is returned, if the user value is similar to the slot values. If
    valueSelectionStrategy is set to TOP_RESOLUTION Amazon Lex returns the first value in the resolution list or, if
    there is no resolution list, null. If you don"""

    session_attributes: Optional[str] = Field(default=UNSET, alias="sessionAttributes")
    """Map of key/value pairs representing session-specific context information."""

    message: Optional[str] = UNSET
    """The next message that should be presented to the user. You can only use this field in the de-DE, en-AU, en-GB,
    en-US, es-419, es-ES, es-US, fr-CA, fr-FR, and it-IT locales. In all other locales, the message field is null. You
    should use the encodedMessage field instead."""

    encoded_message: Optional[str] = Field(default=UNSET, alias="encodedMessage")
    """The next message that should be presented to the user. The encodedMessage field is base-64 encoded. You must
    decode the field before you can use the value."""

    message_format: Optional[MessageFormat1OrStr] = Field(default=UNSET, alias="messageFormat")
    """The format of the response message. One of the following values: PlainText - The message contains plain UTF-8
    text. CustomPayload - The message is a custom format for the client. SSML - The message contains text formatted for
    voice output. Composite - The message contains an escaped JSON object containing one or more messages from the
    groups that messages were assigned to when the intent was created."""

    dialog_state: Optional[DialogState1OrStr] = Field(default=UNSET, alias="dialogState")
    """ConfirmIntent - Amazon Lex is expecting a "yes" or "no" response to confirm the intent before fulfilling an
    intent. ElicitIntent - Amazon Lex wants to elicit the user's intent. ElicitSlot - Amazon Lex is expecting the value
    of a slot for the current intent. Failed - Conveys that the conversation with the user has failed. This can happen
    for various reasons, including the user does not provide an appropriate response to prompts from the service, or if
    the Lambda function fails to fulfill the intent. Fulfilled - Conveys that the Lambda function has sucessfully
    fulfilled the intent. ReadyForFulfi"""

    slot_to_elicit: Optional[str] = Field(default=UNSET, alias="slotToElicit")
    """If the dialogState is ElicitSlot, returns the name of the slot for which Amazon Lex is eliciting a value."""

    audio_stream: Optional[str] = Field(default=UNSET, alias="audioStream")
    """The audio version of the message to convey to the user."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """A unique identifier for the session."""

    active_contexts: Optional[str] = Field(default=UNSET, alias="activeContexts")
    """A list of active contexts for the session."""


class RuntimeLexPutSessionResponseDict(TypedDict):
    content_type: NotRequired[str]
    intent_name: NotRequired[str]
    slots: NotRequired[str]
    session_attributes: NotRequired[str]
    message: NotRequired[str]
    encoded_message: NotRequired[str]
    message_format: NotRequired[MessageFormat1OrStr]
    dialog_state: NotRequired[DialogState1OrStr]
    slot_to_elicit: NotRequired[str]
    audio_stream: NotRequired[str]
    session_id: NotRequired[str]
    active_contexts: NotRequired[str]
