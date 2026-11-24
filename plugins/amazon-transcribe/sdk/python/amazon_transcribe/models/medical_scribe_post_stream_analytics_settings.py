from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .transcribestreaming_clinical_note_generation_settings import (
    TranscribestreamingClinicalNoteGenerationSettings,
    TranscribestreamingClinicalNoteGenerationSettingsDict,
)


class MedicalScribePostStreamAnalyticsSettings(SdkBaseModel):
    clinical_note_generation_settings: TranscribestreamingClinicalNoteGenerationSettings = Field(
        alias="ClinicalNoteGenerationSettings"
    )


class MedicalScribePostStreamAnalyticsSettingsDict(TypedDict):
    clinical_note_generation_settings: TranscribestreamingClinicalNoteGenerationSettingsDict
