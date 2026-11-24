from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_summary import DatasetSummary, DatasetSummaryDict


class ListDatasetsResponse(SdkBaseModel):
    datasets: Optional[list[DatasetSummary]] = Field(default=UNSET, alias="Datasets")
    """An array of objects that summarize each dataset's properties."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the
    token in the next request."""


class ListDatasetsResponseDict(TypedDict):
    datasets: NotRequired[list[DatasetSummaryDict]]
    next_token: NotRequired[str]
