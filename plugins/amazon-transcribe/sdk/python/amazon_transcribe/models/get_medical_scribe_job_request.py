from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetMedicalScribeJobRequest(SdkBaseModel):
    medical_scribe_job_name: str = Field(alias="MedicalScribeJobName")
    """The name of the Medical Scribe job you want information about. Job names are case sensitive."""


class GetMedicalScribeJobRequestDict(TypedDict):
    medical_scribe_job_name: str
