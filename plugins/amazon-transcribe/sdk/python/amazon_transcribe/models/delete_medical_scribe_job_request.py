from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteMedicalScribeJobRequest(SdkBaseModel):
    medical_scribe_job_name: str = Field(alias="MedicalScribeJobName")
    """The name of the Medical Scribe job you want to delete. Job names are case sensitive."""


class DeleteMedicalScribeJobRequestDict(TypedDict):
    medical_scribe_job_name: str
