from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_group_summary import DatasetGroupSummary, DatasetGroupSummaryDict


class ListDatasetGroupsResponse(SdkBaseModel):
    dataset_groups: Optional[list[DatasetGroupSummary]] = Field(default=UNSET, alias="DatasetGroups")
    """An array of objects that summarize each dataset group's properties."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the
    token in the next request."""


class ListDatasetGroupsResponseDict(TypedDict):
    dataset_groups: NotRequired[list[DatasetGroupSummaryDict]]
    next_token: NotRequired[str]
