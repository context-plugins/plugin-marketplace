from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .runtime_v2_lex_message import RuntimeV2LexMessage, RuntimeV2LexMessageDict
from .session_state import SessionState, SessionStateDict


class ConfigurationEvent(SdkBaseModel):
    request_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="requestAttributes")
    """Request-specific information passed between the client application and Amazon Lex V2. The namespace x-amz-lex: is
    reserved for special attributes. Don't create any request attributes for prefix x-amz-lex:."""

    response_content_type: str = Field(alias="responseContentType")
    """The message that Amazon Lex V2 returns in the response can be either text or speech based on the
    responseContentType value. If the value is text/plain;charset=utf-8, Amazon Lex V2 returns text in the response. If
    the value begins with audio/, Amazon Lex V2 returns speech in the response. Amazon Lex V2 uses Amazon Polly to
    generate the speech using the configuration that you specified in the requestContentType parameter. For example, if
    you specify audio/mpeg as the value, Amazon Lex V2 returns speech in the MPEG format. If the value is audio/pcm, the
    speech returned is audio/pcm in 16-bit, lit"""

    session_state: Optional[SessionState] = Field(default=UNSET, alias="sessionState")
    welcome_messages: Optional[list[RuntimeV2LexMessage]] = Field(default=UNSET, alias="welcomeMessages")
    """A list of messages to send to the user. If you set the welcomeMessage field, you must also set the DialogAction
    structure's type field."""

    disable_playback: Optional[bool] = Field(default=UNSET, alias="disablePlayback")
    """Determines whether Amazon Lex V2 should send audio responses to the client application. Set this field to false
    when the client is operating in a playback mode where audio responses are played to the user. If the client isn't
    operating in playback mode, such as a text chat application, set this to true so that Amazon Lex V2 doesn't wait for
    the prompt to finish playing on the client."""

    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    """A unique identifier that your application assigns to the event. You can use this to identify events in logs."""

    client_timestamp_millis: Optional[int] = Field(default=UNSET, alias="clientTimestampMillis")
    """A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2."""


class ConfigurationEventDict(TypedDict):
    request_attributes: NotRequired[dict[str, str]]
    response_content_type: str
    session_state: NotRequired[SessionStateDict]
    welcome_messages: NotRequired[list[RuntimeV2LexMessageDict]]
    disable_playback: NotRequired[bool]
    event_id: NotRequired[str]
    client_timestamp_millis: NotRequired[int]
