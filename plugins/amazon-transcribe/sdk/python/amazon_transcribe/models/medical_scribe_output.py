from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MedicalScribeOutput(SdkBaseModel):
    transcript_file_uri: str = Field(alias="TranscriptFileUri")
    """Holds the Amazon S3 URI for the Transcript."""

    clinical_document_uri: str = Field(alias="ClinicalDocumentUri")
    """Holds the Amazon S3 URI for the Clinical Document."""


class MedicalScribeOutputDict(TypedDict):
    transcript_file_uri: str
    clinical_document_uri: str
