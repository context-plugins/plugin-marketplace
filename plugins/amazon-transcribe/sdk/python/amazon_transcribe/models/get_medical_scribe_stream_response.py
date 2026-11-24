from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .medical_scribe_stream_details import MedicalScribeStreamDetails, MedicalScribeStreamDetailsDict


class GetMedicalScribeStreamResponse(SdkBaseModel):
    medical_scribe_stream_details: Optional[MedicalScribeStreamDetails] = Field(
        default=UNSET, alias="MedicalScribeStreamDetails"
    )


class GetMedicalScribeStreamResponseDict(TypedDict):
    medical_scribe_stream_details: NotRequired[MedicalScribeStreamDetailsDict]
