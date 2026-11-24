from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecognizeUtteranceResponse(SdkBaseModel):
    input_mode: Optional[str] = Field(default=UNSET, alias="inputMode")
    """Indicates whether the input mode to the operation was text, speech, or from a touch-tone keypad."""

    content_type: Optional[str] = Field(default=UNSET, alias="contentType")
    """Content type as specified in the responseContentType in the request."""

    messages: Optional[str] = UNSET
    """A list of messages that were last sent to the user. The messages are ordered based on the order that you returned
    the messages from your Lambda function or the order that the messages are defined in the bot. The messages field is
    compressed with gzip and then base64 encoded. Before you can use the contents of the field, you must decode and
    decompress the contents. See the example for a simple function to decode and decompress the contents."""

    interpretations: Optional[str] = UNSET
    """A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. Each interpretation includes
    the intent, a score that indicates how confident Amazon Lex V2 is that the interpretation is the correct one, and an
    optional sentiment response that indicates the sentiment expressed in the utterance. The interpretations field is
    compressed with gzip and then base64 encoded. Before you can use the contents of the field, you must decode and
    decompress the contents. See the example for a simple function to decode and decompress the contents."""

    session_state: Optional[str] = Field(default=UNSET, alias="sessionState")
    """Represents the current state of the dialog between the user and the bot. Use this to determine the progress of
    the conversation and what the next action might be. The sessionState field is compressed with gzip and then base64
    encoded. Before you can use the contents of the field, you must decode and decompress the contents. See the example
    for a simple function to decode and decompress the contents."""

    request_attributes: Optional[str] = Field(default=UNSET, alias="requestAttributes")
    """The attributes sent in the request. The requestAttributes field is compressed with gzip and then base64 encoded.
    Before you can use the contents of the field, you must decode and decompress the contents."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """The identifier of the session in use."""

    input_transcript: Optional[str] = Field(default=UNSET, alias="inputTranscript")
    """The text used to process the request. If the input was an audio stream, the inputTranscript field contains the
    text extracted from the audio stream. This is the text that is actually processed to recognize intents and slot
    values. You can use this information to determine if Amazon Lex V2 is correctly processing the audio that you send.
    The inputTranscript field is compressed with gzip and then base64 encoded. Before you can use the contents of the
    field, you must decode and decompress the contents. See the example for a simple function to decode and decompress
    the contents."""

    audio_stream: Optional[str] = Field(default=UNSET, alias="audioStream")
    """The prompt or statement to send to the user. This is based on the bot configuration and context. For example, if
    Amazon Lex V2 did not understand the user intent, it sends the clarificationPrompt configured for the bot. If the
    intent requires confirmation before taking the fulfillment action, it sends the confirmationPrompt. Another example:
    Suppose that the Lambda function successfully fulfilled the intent, and sent a message to convey to the user. Then
    Amazon Lex V2 sends that message in the response."""

    recognized_bot_member: Optional[str] = Field(default=UNSET, alias="recognizedBotMember")
    """The bot member that recognized the utterance."""


class RecognizeUtteranceResponseDict(TypedDict):
    input_mode: NotRequired[str]
    content_type: NotRequired[str]
    messages: NotRequired[str]
    interpretations: NotRequired[str]
    session_state: NotRequired[str]
    request_attributes: NotRequired[str]
    session_id: NotRequired[str]
    input_transcript: NotRequired[str]
    audio_stream: NotRequired[str]
    recognized_bot_member: NotRequired[str]
