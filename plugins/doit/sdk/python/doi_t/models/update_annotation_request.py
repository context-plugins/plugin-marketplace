from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class UpdateAnnotationRequest(SdkBaseModel):
    """Request body for updating an annotation."""

    content: OptionalNullable[str] = UNSET
    """The content of the annotation."""

    timestamp: OptionalNullable[RFC3339DateTime] = UNSET
    """The date associated with the annotation."""

    reports: OptionalNullable[list[str]] = UNSET
    """List of report IDs associated with the annotation."""

    labels: OptionalNullable[list[str]] = UNSET
    """List of label IDs to associate with the annotation. Labels must already exist."""


class UpdateAnnotationRequestDict(TypedDict):
    content: NotRequired[str | None]
    timestamp: NotRequired[RFC3339DateTime | None]
    reports: NotRequired[list[str] | None]
    labels: NotRequired[list[str] | None]
