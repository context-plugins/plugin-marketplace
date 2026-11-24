from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .medical_scribe_patient_context import MedicalScribePatientContext, MedicalScribePatientContextDict


class MedicalScribeContext(SdkBaseModel):
    patient_context: Optional[MedicalScribePatientContext] = Field(default=UNSET, alias="PatientContext")


class MedicalScribeContextDict(TypedDict):
    patient_context: NotRequired[MedicalScribePatientContextDict]
