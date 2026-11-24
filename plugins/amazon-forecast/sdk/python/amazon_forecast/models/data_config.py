from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .additional_dataset import AdditionalDataset, AdditionalDatasetDict
from .attribute_config import AttributeConfig, AttributeConfigDict


class DataConfig(SdkBaseModel):
    dataset_group_arn: str = Field(alias="DatasetGroupArn")
    """The ARN of the dataset group used to train the predictor."""

    attribute_configs: Optional[list[AttributeConfig]] = Field(default=UNSET, alias="AttributeConfigs")
    """Aggregation and filling options for attributes in your dataset group."""

    additional_datasets: Optional[list[AdditionalDataset]] = Field(default=UNSET, alias="AdditionalDatasets")
    """Additional built-in datasets like Holidays and the Weather Index."""


class DataConfigDict(TypedDict):
    dataset_group_arn: str
    attribute_configs: NotRequired[list[AttributeConfigDict]]
    additional_datasets: NotRequired[list[AdditionalDatasetDict]]
