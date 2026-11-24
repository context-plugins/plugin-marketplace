from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CreateAnnotationRequest(SdkBaseModel):
    """Request body to create an annotation."""

    content: str
    """The content of the annotation."""

    timestamp: RFC3339DateTime
    """The date associated with the annotation."""

    reports: Optional[list[str]] = UNSET
    """List of report IDs associated with the annotation."""

    labels: Optional[list[str]] = UNSET
    """List of label IDs to associate with the annotation. Labels must already exist."""


class CreateAnnotationRequestDict(TypedDict):
    content: str
    timestamp: RFC3339DateTime
    reports: NotRequired[list[str]]
    labels: NotRequired[list[str]]
