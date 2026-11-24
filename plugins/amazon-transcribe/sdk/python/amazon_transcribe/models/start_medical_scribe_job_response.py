from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .medical_scribe_job import MedicalScribeJob, MedicalScribeJobDict


class StartMedicalScribeJobResponse(SdkBaseModel):
    medical_scribe_job: Optional[MedicalScribeJob] = Field(default=UNSET, alias="MedicalScribeJob")


class StartMedicalScribeJobResponseDict(TypedDict):
    medical_scribe_job: NotRequired[MedicalScribeJobDict]
