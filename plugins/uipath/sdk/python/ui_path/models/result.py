from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classification_result_item import ClassificationResultItem, ClassificationResultItemDict


class Result(SdkBaseModel):
    """Classification output, populated when status is Succeeded"""

    document_id: Optional[str] = Field(default=UNSET, alias="documentId")
    """Document ID that was classified"""

    classification_results: Optional[list[ClassificationResultItem]] = Field(
        default=UNSET, alias="classificationResults"
    )


class ResultDict(TypedDict):
    document_id: NotRequired[str]
    classification_results: NotRequired[list[ClassificationResultItemDict]]
