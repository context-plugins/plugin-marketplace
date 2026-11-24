from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ClassificationResultItem(SdkBaseModel):
    """Classification result for a specific document or page range"""

    classifier_id: Optional[str] = Field(default=UNSET, alias="classifierId")
    """Identifier of the classifier that produced this result"""

    document_type_id: Optional[str] = Field(default=UNSET, alias="documentTypeId")
    """Identified document type identifier"""

    confidence: Optional[float] = UNSET
    """Confidence score of the classification result (0.0 to 1.0)"""

    start_page: Optional[int] = Field(default=UNSET, alias="startPage")
    """First page of the classified document section"""

    end_page: Optional[int] = Field(default=UNSET, alias="endPage")
    """Last page of the classified document section"""


class ClassificationResultItemDict(TypedDict):
    classifier_id: NotRequired[str]
    document_type_id: NotRequired[str]
    confidence: NotRequired[float]
    start_page: NotRequired[int]
    end_page: NotRequired[int]
