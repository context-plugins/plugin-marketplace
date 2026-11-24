from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .label_list_item import LabelListItem, LabelListItemDict


class LabelList(SdkBaseModel):
    """Paged list of labels."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token, returned by a previous call, to request the next page of results."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Total number of labels in the result set."""

    labels: Optional[list[LabelListItem]] = UNSET


class LabelListDict(TypedDict):
    page_token: NotRequired[str]
    row_count: NotRequired[int]
    labels: NotRequired[list[LabelListItemDict]]
