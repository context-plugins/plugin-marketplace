from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_ui_path_document_understanding_digitization_api import (
    StatusUiPathDocumentUnderstandingDigitizationApiOrStr,
)


class DigitizationResult(SdkBaseModel):
    """Result of a document digitization operation"""

    document_id: Optional[str] = Field(default=UNSET, alias="documentId")
    """Unique identifier assigned to the digitized document. Use this ID in subsequent classification, extraction, and
    validation calls. Results are retained for seven days."""

    status: Optional[StatusUiPathDocumentUnderstandingDigitizationApiOrStr] = UNSET
    """Outcome of the digitization operation"""

    page_count: Optional[int] = Field(default=UNSET, alias="pageCount")
    """Number of pages detected in the document"""


class DigitizationResultDict(TypedDict):
    document_id: NotRequired[str]
    status: NotRequired[StatusUiPathDocumentUnderstandingDigitizationApiOrStr]
    page_count: NotRequired[int]
