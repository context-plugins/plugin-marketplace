from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PutSessionResponse(SdkBaseModel):
    content_type: Optional[str] = Field(default=UNSET, alias="contentType")
    """The type of response. Same as the type specified in the responseContentType field in the request."""

    messages: Optional[str] = UNSET
    """A list of messages that were last sent to the user. The messages are ordered based on how you return the messages
    from you Lambda function or the order that the messages are defined in the bot."""

    session_state: Optional[str] = Field(default=UNSET, alias="sessionState")
    """A base-64-encoded gzipped field that represents the current state of the dialog between the user and the bot. Use
    this to determine the progress of the conversation and what the next action may be."""

    request_attributes: Optional[str] = Field(default=UNSET, alias="requestAttributes")
    """A base-64-encoded gzipped field that provides request-specific information passed between the client application
    and Amazon Lex V2. These are the same as the requestAttribute parameter in the call to the PutSession operation."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """The identifier of the session that received the data."""

    audio_stream: Optional[str] = Field(default=UNSET, alias="audioStream")
    """If the requested content type was audio, the audio version of the message to convey to the user."""


class PutSessionResponseDict(TypedDict):
    content_type: NotRequired[str]
    messages: NotRequired[str]
    session_state: NotRequired[str]
    request_attributes: NotRequired[str]
    session_id: NotRequired[str]
    audio_stream: NotRequired[str]
