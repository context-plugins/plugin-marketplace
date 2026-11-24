from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_ui_path_document_understanding_extraction_api import (
    Status1UiPathDocumentUnderstandingExtractionApiOrStr,
)
from .result_ui_path_document_understanding_extraction_api import (
    ResultUiPathDocumentUnderstandingExtractionApi,
    ResultUiPathDocumentUnderstandingExtractionApiDict,
)


class ExtractionResult(SdkBaseModel):
    """Result of an asynchronous extraction job"""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Unique identifier of the extraction job"""

    status: Optional[Status1UiPathDocumentUnderstandingExtractionApiOrStr] = UNSET
    """Current status of the extraction job"""

    result: Optional[ResultUiPathDocumentUnderstandingExtractionApi] = UNSET
    """Extraction output, populated when status is Succeeded"""


class ExtractionResultDict(TypedDict):
    request_id: NotRequired[str]
    status: NotRequired[Status1UiPathDocumentUnderstandingExtractionApiOrStr]
    result: NotRequired[ResultUiPathDocumentUnderstandingExtractionApiDict]
