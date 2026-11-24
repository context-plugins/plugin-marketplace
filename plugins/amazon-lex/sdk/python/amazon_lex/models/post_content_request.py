from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostContentRequest(SdkBaseModel):
    bot_name: str = Field(alias="botName")
    """Name of the Amazon Lex bot."""

    bot_alias: str = Field(alias="botAlias")
    """Alias of the Amazon Lex bot."""

    user_id: str = Field(alias="userId")
    """The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. At
    runtime, each request must contain the userID field. To decide the user ID to use for your application, consider the
    following factors. The userID field must not contain any personally identifiable information of the user, for
    example, name, personal identification numbers, or other end user personal information. If you want a user to start
    a conversation on one device and continue on another device, use a user-specific identifier. If you want the same
    user to be able to have two ind"""

    session_attributes: Optional[str] = Field(default=UNSET, alias="sessionAttributes")
    """You pass this value as the x-amz-lex-session-attributes HTTP header. Application-specific information passed
    between Amazon Lex and a client application. The value must be a JSON serialized and base64 encoded map with string
    keys and values. The total size of the sessionAttributes and requestAttributes headers is limited to 12 KB. For more
    information, see Setting Session Attributes."""

    request_attributes: Optional[str] = Field(default=UNSET, alias="requestAttributes")
    """You pass this value as the x-amz-lex-request-attributes HTTP header. Request-specific information passed between
    Amazon Lex and a client application. The value must be a JSON serialized and base64 encoded map with string keys and
    values. The total size of the requestAttributes and sessionAttributes headers is limited to 12 KB. The namespace
    x-amz-lex: is reserved for special attributes. Don't create any request attributes with the prefix x-amz-lex:. For
    more information, see Setting Request Attributes."""

    content_type: str = Field(alias="contentType")
    """You pass this value as the Content-Type HTTP header. Indicates the audio format or text. The header value must
    start with one of the following prefixes: PCM format, audio data must be in little-endian byte order. audio/l16;
    rate=16000; channels=1 audio/x-l16; sample-rate=16000; channel-count=1 audio/lpcm; sample-rate=8000;
    sample-size-bits=16; channel-count=1; is-big-endian=false Opus format audio/x-cbr-opus-with-preamble;
    preamble-size=0; bit-rate=256000; frame-size-milliseconds=4 Text format text/plain; charset=utf-8"""

    accept: Optional[str] = UNSET
    """You pass this value as the Accept HTTP header. The message Amazon Lex returns in the response can be either text
    or speech based on the Accept HTTP header value in the request. If the value is text/plain; charset=utf-8, Amazon
    Lex returns text in the response. If the value begins with audio/, Amazon Lex returns speech in the response. Amazon
    Lex uses Amazon Polly to generate the speech (using the configuration you specified in the Accept header). For
    example, if you specify audio/mpeg as the value, Amazon Lex returns speech in the MPEG format. If the value is
    audio/pcm, the speech returned is"""

    input_stream: str = Field(alias="inputStream")
    """User input in PCM or Opus audio format or text format as described in the Content-Type HTTP header. You can
    stream audio data to Amazon Lex or you can create a local buffer that captures all of the audio data before sending.
    In general, you get better performance if you stream audio data rather than buffering the data locally."""

    active_contexts: Optional[str] = Field(default=UNSET, alias="activeContexts")
    """A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by
    including the context in the request, If you don't specify a list of contexts, Amazon Lex will use the current list
    of contexts for the session. If you specify an empty list, all contexts for the session are cleared."""


class PostContentRequestDict(TypedDict):
    bot_name: str
    bot_alias: str
    user_id: str
    session_attributes: NotRequired[str]
    request_attributes: NotRequired[str]
    content_type: str
    accept: NotRequired[str]
    input_stream: str
    active_contexts: NotRequired[str]
