from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_ui_path_document_understanding_extraction_api import (
    StatusUiPathDocumentUnderstandingExtractionApiOrStr,
)


class AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi(SdkBaseModel):
    """Response returned when an asynchronous processing job is started"""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Unique identifier of the asynchronous job. Use this to poll for results."""

    status: Optional[StatusUiPathDocumentUnderstandingExtractionApiOrStr] = UNSET
    """Initial status of the asynchronous job"""


class AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApiDict(TypedDict):
    request_id: NotRequired[str]
    status: NotRequired[StatusUiPathDocumentUnderstandingExtractionApiOrStr]
