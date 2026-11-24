from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .clinical_note_generation_result import ClinicalNoteGenerationResult, ClinicalNoteGenerationResultDict


class MedicalScribePostStreamAnalyticsResult(SdkBaseModel):
    clinical_note_generation_result: Optional[ClinicalNoteGenerationResult] = Field(
        default=UNSET, alias="ClinicalNoteGenerationResult"
    )


class MedicalScribePostStreamAnalyticsResultDict(TypedDict):
    clinical_note_generation_result: NotRequired[ClinicalNoteGenerationResultDict]
