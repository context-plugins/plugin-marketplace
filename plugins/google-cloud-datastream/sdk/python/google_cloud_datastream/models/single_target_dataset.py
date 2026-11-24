from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SingleTargetDataset(SdkBaseModel):
    """A single target dataset to which all data will be streamed."""

    dataset_id: Optional[str] = Field(default=UNSET, alias="datasetId")
    """The dataset ID of the target dataset. DatasetIds allowed characters:
    https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference."""


class SingleTargetDatasetDict(TypedDict):
    dataset_id: NotRequired[str]
