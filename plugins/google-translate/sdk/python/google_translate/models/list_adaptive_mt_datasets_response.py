from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .adaptive_mt_dataset import AdaptiveMtDataset, AdaptiveMtDatasetDict


class ListAdaptiveMtDatasetsResponse(SdkBaseModel):
    """A list of AdaptiveMtDatasets."""

    adaptive_mt_datasets: Optional[list[AdaptiveMtDataset]] = Field(default=UNSET, alias="adaptiveMtDatasets")
    """Output only. A list of Adaptive MT datasets."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Optional. A token to retrieve a page of results. Pass this value in the
    [ListAdaptiveMtDatasetsRequest.page_token] field in the subsequent call to ``ListAdaptiveMtDatasets`` method to
    retrieve the next page of results."""


class ListAdaptiveMtDatasetsResponseDict(TypedDict):
    adaptive_mt_datasets: NotRequired[list[AdaptiveMtDatasetDict]]
    next_page_token: NotRequired[str]
