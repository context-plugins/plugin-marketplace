from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classification_result_item import ClassificationResultItem, ClassificationResultItemDict
from .extraction_result_data import ExtractionResultData, ExtractionResultDataDict


class ValidationRequest(SdkBaseModel):
    """Request payload for validating document processing results"""

    document_id: str = Field(alias="documentId")
    """Document ID of the document whose results are to be validated"""

    classification_result: Optional[ClassificationResultItem] = Field(default=UNSET, alias="classificationResult")
    """Classification result for a specific document or page range"""

    extraction_result: Optional[ExtractionResultData] = Field(default=UNSET, alias="extractionResult")
    """Structured extraction result containing field values and confidence scores"""


class ValidationRequestDict(TypedDict):
    document_id: str
    classification_result: NotRequired[ClassificationResultItemDict]
    extraction_result: NotRequired[ExtractionResultDataDict]
