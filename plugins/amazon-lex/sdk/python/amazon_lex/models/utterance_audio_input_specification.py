from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UtteranceAudioInputSpecification(SdkBaseModel):
    audio_file_s3_location: str = Field(alias="audioFileS3Location")
    """Amazon S3 file pointing to the audio."""


class UtteranceAudioInputSpecificationDict(TypedDict):
    audio_file_s3_location: str
