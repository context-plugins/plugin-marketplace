from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audio_specification import AudioSpecification, AudioSpecificationDict
from .dtmf_specification import DtmfSpecification, DtmfSpecificationDict


class AudioAndDtmfInputSpecification(SdkBaseModel):
    start_timeout_ms: int = Field(alias="startTimeoutMs")
    """Time for which a bot waits before assuming that the customer isn't going to speak or press a key. This timeout is
    shared between Audio and DTMF inputs."""

    audio_specification: Optional[AudioSpecification] = Field(default=UNSET, alias="audioSpecification")
    dtmf_specification: Optional[DtmfSpecification] = Field(default=UNSET, alias="dtmfSpecification")


class AudioAndDtmfInputSpecificationDict(TypedDict):
    start_timeout_ms: int
    audio_specification: NotRequired[AudioSpecificationDict]
    dtmf_specification: NotRequired[DtmfSpecificationDict]
