from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .annotation_list_item import AnnotationListItem, AnnotationListItemDict


class AnalyticsV1AnnotationsResponse(SdkBaseModel):
    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token, returned by a previous call, to request the next page of results"""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Total number of annotations in the result set"""

    annotations: Optional[list[AnnotationListItem]] = UNSET


class AnalyticsV1AnnotationsResponseDict(TypedDict):
    page_token: NotRequired[str]
    row_count: NotRequired[int]
    annotations: NotRequired[list[AnnotationListItemDict]]
