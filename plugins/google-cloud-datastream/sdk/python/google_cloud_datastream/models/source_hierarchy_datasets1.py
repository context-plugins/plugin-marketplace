from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_template2 import DatasetTemplate2, DatasetTemplate2Dict


class SourceHierarchyDatasets1(SdkBaseModel):
    """Source hierarchy datasets."""

    project_id: Optional[str] = Field(default=UNSET, alias="projectId")
    """Optional. The project id of the BigQuery dataset. If not specified, the project will be inferred from the stream
    resource."""

    dataset_template: Optional[DatasetTemplate2] = Field(default=UNSET, alias="datasetTemplate")
    """The dataset template to use for dynamic dataset creation."""


class SourceHierarchyDatasets1Dict(TypedDict):
    project_id: NotRequired[str]
    dataset_template: NotRequired[DatasetTemplate2Dict]
