from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.interaction_type import InteractionTypeOrStr
from .enums.microphone_distance import MicrophoneDistanceOrStr
from .enums.original_media_type import OriginalMediaTypeOrStr
from .enums.recording_device_type import RecordingDeviceTypeOrStr


class RecognitionMetadata2(SdkBaseModel):
    """Metadata regarding this request."""

    audio_topic: Optional[str] = Field(default=UNSET, alias="audioTopic")
    """Description of the content. Eg. "Recordings of federal supreme court hearings from 2012"."""

    microphone_distance: Optional[MicrophoneDistanceOrStr] = Field(default=UNSET, alias="microphoneDistance")
    """The audio type that most closely describes the audio being recognized."""

    industry_naics_code_of_audio: Optional[int] = Field(default=UNSET, alias="industryNaicsCodeOfAudio")
    """The industry vertical to which this speech recognition request most closely applies. This is most indicative of
    the topics contained in the audio. Use the 6-digit NAICS code to identify the industry vertical - see
    https://www.naics.com/search/."""

    interaction_type: Optional[InteractionTypeOrStr] = Field(default=UNSET, alias="interactionType")
    """The use case most closely describing the audio content to be recognized."""

    recording_device_type: Optional[RecordingDeviceTypeOrStr] = Field(default=UNSET, alias="recordingDeviceType")
    """The type of device the speech was recorded with."""

    recording_device_name: Optional[str] = Field(default=UNSET, alias="recordingDeviceName")
    """The device used to make the recording. Examples 'Nexus 5X' or 'Polycom SoundStation IP 6000' or 'POTS' or 'VoIP'
    or 'Cardioid Microphone'."""

    original_mime_type: Optional[str] = Field(default=UNSET, alias="originalMimeType")
    """Mime type of the original audio file. For example ``audio/m4a``, ``audio/x-alaw-basic``, ``audio/mp3``,
    ``audio/3gpp``. A list of possible audio mime types is maintained at
    http://www.iana.org/assignments/media-types/media-types.xhtml#audio"""

    original_media_type: Optional[OriginalMediaTypeOrStr] = Field(default=UNSET, alias="originalMediaType")
    """The original media the speech was recorded on."""


class RecognitionMetadata2Dict(TypedDict):
    audio_topic: NotRequired[str]
    microphone_distance: NotRequired[MicrophoneDistanceOrStr]
    industry_naics_code_of_audio: NotRequired[int]
    interaction_type: NotRequired[InteractionTypeOrStr]
    recording_device_type: NotRequired[RecordingDeviceTypeOrStr]
    recording_device_name: NotRequired[str]
    original_mime_type: NotRequired[str]
    original_media_type: NotRequired[OriginalMediaTypeOrStr]
