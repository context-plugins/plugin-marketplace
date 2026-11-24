from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.dataset_type1 import DatasetType1OrStr
from .enums.domain1_amazon_forecast_service_datasets_api import Domain1AmazonForecastServiceDatasetsApiOrStr


class DatasetSummary(SdkBaseModel):
    dataset_arn: Optional[str] = Field(default=UNSET, alias="DatasetArn")
    """The Amazon Resource Name (ARN) of the dataset."""

    dataset_name: Optional[str] = Field(default=UNSET, alias="DatasetName")
    """The name of the dataset."""

    dataset_type: Optional[DatasetType1OrStr] = Field(default=UNSET, alias="DatasetType")
    """The dataset type."""

    domain: Optional[Domain1AmazonForecastServiceDatasetsApiOrStr] = Field(default=UNSET, alias="Domain")
    """The domain associated with the dataset."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the dataset was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """When you create a dataset, LastModificationTime is the same as CreationTime. While data is being imported to the
    dataset, LastModificationTime is the current time of the ListDatasets call. After a CreateDatasetImportJob operation
    has finished, LastModificationTime is when the import job completed or failed."""


class DatasetSummaryDict(TypedDict):
    dataset_arn: NotRequired[str]
    dataset_name: NotRequired[str]
    dataset_type: NotRequired[DatasetType1OrStr]
    domain: NotRequired[Domain1AmazonForecastServiceDatasetsApiOrStr]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
