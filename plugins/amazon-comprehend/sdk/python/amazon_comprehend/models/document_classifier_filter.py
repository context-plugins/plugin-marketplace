from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status7 import Status7OrStr


class DocumentClassifierFilter(SdkBaseModel):
    status: Optional[Status7OrStr] = Field(default=UNSET, alias="Status")
    """Filters the list of classifiers based on status."""

    document_classifier_name: Optional[str] = Field(default=UNSET, alias="DocumentClassifierName")
    """The name that you assigned to the document classifier"""

    submit_time_before: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTimeBefore")
    """Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only
    classifiers submitted before the specified time. Classifiers are returned in ascending order, oldest to newest."""

    submit_time_after: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTimeAfter")
    """Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only
    classifiers submitted after the specified time. Classifiers are returned in descending order, newest to oldest."""


class DocumentClassifierFilterDict(TypedDict):
    status: NotRequired[Status7OrStr]
    document_classifier_name: NotRequired[str]
    submit_time_before: NotRequired[RFC3339DateTime]
    submit_time_after: NotRequired[RFC3339DateTime]
