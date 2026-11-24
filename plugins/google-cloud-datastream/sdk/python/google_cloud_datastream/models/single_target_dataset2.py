from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SingleTargetDataset2(SdkBaseModel):
    """Single destination dataset."""

    dataset_id: Optional[str] = Field(default=UNSET, alias="datasetId")
    """The dataset ID of the target dataset. DatasetIds allowed characters:
    https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference."""


class SingleTargetDataset2Dict(TypedDict):
    dataset_id: NotRequired[str]
