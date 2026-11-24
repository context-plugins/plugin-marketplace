from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .label_info import LabelInfo, LabelInfoDict


class AnnotationListItem(SdkBaseModel):
    """Summary information about an annotation."""

    id: str
    """The unique identifier of the annotation."""

    content: str
    """The content of the annotation."""

    timestamp: RFC3339DateTime
    """The date associated with the annotation."""

    reports: Optional[list[str]] = UNSET
    """List of report IDs associated with the annotation."""

    labels: Optional[list[LabelInfo]] = UNSET
    """List of labels associated with the annotation."""

    create_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createTime")
    """The creation time of the annotation."""

    update_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updateTime")
    """The time when the annotation was last updated."""


class AnnotationListItemDict(TypedDict):
    id: str
    content: str
    timestamp: RFC3339DateTime
    reports: NotRequired[list[str]]
    labels: NotRequired[list[LabelInfoDict]]
    create_time: NotRequired[RFC3339DateTime]
    update_time: NotRequired[RFC3339DateTime]
