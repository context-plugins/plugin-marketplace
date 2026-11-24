from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.language_code6 import LanguageCode6OrStr
from .enums.media_encoding2 import MediaEncoding2OrStr
from .medical_scribe_result_stream import MedicalScribeResultStream, MedicalScribeResultStreamDict


class StartMedicalScribeStreamResponse(SdkBaseModel):
    session_id: Optional[str] = Field(default=UNSET, alias="SessionId")
    """The identifier (in UUID format) for your streaming session. If you already started streaming, this is same ID as
    the one you specified in your initial StartMedicalScribeStreamRequest."""

    request_id: Optional[str] = Field(default=UNSET, alias="RequestId")
    """The unique identifier for your streaming request."""

    language_code: Optional[LanguageCode6OrStr] = Field(default=UNSET, alias="LanguageCode")
    """The Language Code that you specified in your request. Same as provided in the StartMedicalScribeStreamRequest."""

    media_sample_rate_hertz: Optional[int] = Field(default=UNSET, alias="MediaSampleRateHertz")
    """The sample rate (in hertz) that you specified in your request. Same as provided in the
    StartMedicalScribeStreamRequest"""

    media_encoding: Optional[MediaEncoding2OrStr] = Field(default=UNSET, alias="MediaEncoding")
    """The Media Encoding you specified in your request. Same as provided in the StartMedicalScribeStreamRequest"""

    result_stream: Optional[MedicalScribeResultStream] = Field(default=UNSET, alias="ResultStream")
    """Exactly one member is set."""


class StartMedicalScribeStreamResponseDict(TypedDict):
    session_id: NotRequired[str]
    request_id: NotRequired[str]
    language_code: NotRequired[LanguageCode6OrStr]
    media_sample_rate_hertz: NotRequired[int]
    media_encoding: NotRequired[MediaEncoding2OrStr]
    result_stream: NotRequired[MedicalScribeResultStreamDict]
