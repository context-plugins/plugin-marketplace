from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .extraction_result_data import ExtractionResultData, ExtractionResultDataDict


class ResultUiPathDocumentUnderstandingExtractionApi(SdkBaseModel):
    """Extraction output, populated when status is Succeeded"""

    document_id: Optional[str] = Field(default=UNSET, alias="documentId")
    """Document ID from which data was extracted"""

    extraction_result: Optional[ExtractionResultData] = Field(default=UNSET, alias="extractionResult")
    """Structured extraction result containing field values and confidence scores"""


class ResultUiPathDocumentUnderstandingExtractionApiDict(TypedDict):
    document_id: NotRequired[str]
    extraction_result: NotRequired[ExtractionResultDataDict]
