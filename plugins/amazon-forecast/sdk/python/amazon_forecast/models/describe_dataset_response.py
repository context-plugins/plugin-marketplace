from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .encryption_config import EncryptionConfig, EncryptionConfigDict
from .enums.dataset_type1 import DatasetType1OrStr
from .enums.domain1_amazon_forecast_service_datasets_api import Domain1AmazonForecastServiceDatasetsApiOrStr
from .schema import Schema, SchemaDict


class DescribeDatasetResponse(SdkBaseModel):
    dataset_arn: Optional[str] = Field(default=UNSET, alias="DatasetArn")
    """The Amazon Resource Name (ARN) of the dataset."""

    dataset_name: Optional[str] = Field(default=UNSET, alias="DatasetName")
    """The name of the dataset."""

    domain: Optional[Domain1AmazonForecastServiceDatasetsApiOrStr] = Field(default=UNSET, alias="Domain")
    """The domain associated with the dataset."""

    dataset_type: Optional[DatasetType1OrStr] = Field(default=UNSET, alias="DatasetType")
    """The dataset type."""

    data_frequency: Optional[str] = Field(default=UNSET, alias="DataFrequency")
    """The frequency of data collection. Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30
    minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "M" indicates
    every month and "30min" indicates every 30 minutes."""

    schema_value: Optional[Schema] = Field(default=UNSET, alias="Schema")
    encryption_config: Optional[EncryptionConfig] = Field(default=UNSET, alias="EncryptionConfig")
    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the dataset. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED
    DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED UPDATE_PENDING, UPDATE_IN_PROGRESS, UPDATE_FAILED The UPDATE
    states apply while data is imported to the dataset from a call to the CreateDatasetImportJob operation and reflect
    the status of the dataset import job. For example, when the import job status is CREATE_IN_PROGRESS, the status of
    the dataset is UPDATE_IN_PROGRESS. The Status of the dataset must be ACTIVE before you can import training data."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the dataset was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """When you create a dataset, LastModificationTime is the same as CreationTime. While data is being imported to the
    dataset, LastModificationTime is the current time of the DescribeDataset call. After a CreateDatasetImportJob
    operation has finished, LastModificationTime is when the import job completed or failed."""


class DescribeDatasetResponseDict(TypedDict):
    dataset_arn: NotRequired[str]
    dataset_name: NotRequired[str]
    domain: NotRequired[Domain1AmazonForecastServiceDatasetsApiOrStr]
    dataset_type: NotRequired[DatasetType1OrStr]
    data_frequency: NotRequired[str]
    schema_value: NotRequired[SchemaDict]
    encryption_config: NotRequired[EncryptionConfigDict]
    status: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
