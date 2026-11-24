from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset import Dataset, DatasetDict


class ListDatasetsResponse(SdkBaseModel):
    """Response message for ListDatasets."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token to retrieve next page of results. Pass this token to the page_token field in the ListDatasetsRequest to
    obtain the corresponding page."""

    datasets: Optional[list[Dataset]] = UNSET
    """The datasets read."""


class ListDatasetsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    datasets: NotRequired[list[DatasetDict]]
