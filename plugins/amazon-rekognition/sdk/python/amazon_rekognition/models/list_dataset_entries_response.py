from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListDatasetEntriesResponse(SdkBaseModel):
    dataset_entries: Optional[list[str]] = Field(default=UNSET, alias="DatasetEntries")
    """A list of entries (images) in the dataset."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom
    Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of
    results."""


class ListDatasetEntriesResponseDict(TypedDict):
    dataset_entries: NotRequired[list[str]]
    next_token: NotRequired[str]
