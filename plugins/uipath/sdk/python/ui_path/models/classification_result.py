from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_ui_path_document_understanding_classification_api import (
    StatusUiPathDocumentUnderstandingClassificationApiOrStr,
)
from .result import Result, ResultDict


class ClassificationResult(SdkBaseModel):
    """Result of an asynchronous classification job"""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Unique identifier of the classification job"""

    status: Optional[StatusUiPathDocumentUnderstandingClassificationApiOrStr] = UNSET
    """Current status of the classification job"""

    result: Optional[Result] = UNSET
    """Classification output, populated when status is Succeeded"""


class ClassificationResultDict(TypedDict):
    request_id: NotRequired[str]
    status: NotRequired[StatusUiPathDocumentUnderstandingClassificationApiOrStr]
    result: NotRequired[ResultDict]
