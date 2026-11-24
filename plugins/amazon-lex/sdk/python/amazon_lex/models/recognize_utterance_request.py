from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecognizeUtteranceRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot that should receive the request."""

    bot_alias_id: str = Field(alias="botAliasId")
    """The alias identifier in use for the bot that should receive the request."""

    locale_id: str = Field(alias="localeId")
    """The locale where the session is in use."""

    session_id: str = Field(alias="sessionId")
    """The identifier of the session in use."""

    session_state: Optional[str] = Field(default=UNSET, alias="sessionState")
    """Sets the state of the session with the user. You can use this to set the current intent, attributes, context, and
    dialog action. Use the dialog action to determine the next step that Amazon Lex V2 should use in the conversation
    with the user. The sessionState field must be compressed using gzip and then base64 encoded before sending to Amazon
    Lex V2."""

    request_attributes: Optional[str] = Field(default=UNSET, alias="requestAttributes")
    """Request-specific information passed between the client application and Amazon Lex V2 The namespace x-amz-lex: is
    reserved for special attributes. Don't create any request attributes for prefix x-amz-lex:. The requestAttributes
    field must be compressed using gzip and then base64 encoded before sending to Amazon Lex V2."""

    request_content_type: str = Field(alias="requestContentType")
    """Indicates the format for audio input or that the content is text. The header must start with one of the following
    prefixes: PCM format, audio data must be in little-endian byte order. audio/l16; rate=16000; channels=1 audio/x-l16;
    sample-rate=16000; channel-count=1 audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1;
    is-big-endian=false Opus format
    audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4 Text format text/plain;
    charset=utf-8"""

    response_content_type: Optional[str] = Field(default=UNSET, alias="responseContentType")
    """The message that Amazon Lex V2 returns in the response can be either text or speech based on the
    responseContentType value. If the value is text/plain;charset=utf-8, Amazon Lex V2 returns text in the response. If
    the value begins with audio/, Amazon Lex V2 returns speech in the response. Amazon Lex V2 uses Amazon Polly to
    generate the speech using the configuration that you specified in the responseContentType parameter. For example, if
    you specify audio/mpeg as the value, Amazon Lex V2 returns speech in the MPEG format. If the value is audio/pcm, the
    speech returned is audio/pcm at 16 KHz in"""

    input_stream: Optional[str] = Field(default=UNSET, alias="inputStream")
    """User input in PCM or Opus audio format or text format as described in the requestContentType parameter."""


class RecognizeUtteranceRequestDict(TypedDict):
    bot_id: str
    bot_alias_id: str
    locale_id: str
    session_id: str
    session_state: NotRequired[str]
    request_attributes: NotRequired[str]
    request_content_type: str
    response_content_type: NotRequired[str]
    input_stream: NotRequired[str]
