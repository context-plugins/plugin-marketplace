from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .speech_adaptation_info2 import SpeechAdaptationInfo2, SpeechAdaptationInfo2Dict
from .speech_recognition_result import SpeechRecognitionResult, SpeechRecognitionResultDict


class RecognizeResponse(SdkBaseModel):
    """The only message returned to the client by the ``Recognize`` method. It contains the result as zero or more
    sequential ``SpeechRecognitionResult`` messages."""

    total_billed_time: Optional[str] = Field(default=UNSET, alias="totalBilledTime")
    """When available, billed audio seconds for the corresponding request."""

    using_legacy_models: Optional[bool] = Field(default=UNSET, alias="usingLegacyModels")
    """Whether request used legacy asr models (was not automatically migrated to use conformer models)."""

    speech_adaptation_info: Optional[SpeechAdaptationInfo2] = Field(default=UNSET, alias="speechAdaptationInfo")
    """Provides information on adaptation behavior in response"""

    results: Optional[list[SpeechRecognitionResult]] = UNSET
    """Sequential list of transcription results corresponding to sequential portions of audio."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """The ID associated with the request. This is a unique ID specific only to the given request."""


class RecognizeResponseDict(TypedDict):
    total_billed_time: NotRequired[str]
    using_legacy_models: NotRequired[bool]
    speech_adaptation_info: NotRequired[SpeechAdaptationInfo2Dict]
    results: NotRequired[list[SpeechRecognitionResultDict]]
    request_id: NotRequired[str]
