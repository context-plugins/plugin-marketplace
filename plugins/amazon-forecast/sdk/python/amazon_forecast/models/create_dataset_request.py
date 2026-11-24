from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_config import EncryptionConfig, EncryptionConfigDict
from .enums.dataset_type import DatasetTypeOrStr
from .enums.domain_amazon_forecast_service_datasets_api import DomainAmazonForecastServiceDatasetsApiOrStr
from .schema import Schema, SchemaDict
from .tag_model import TagModel, TagModelDict


class CreateDatasetRequest(SdkBaseModel):
    dataset_name: str = Field(alias="DatasetName")
    """A name for the dataset."""

    domain: DomainAmazonForecastServiceDatasetsApiOrStr = Field(alias="Domain")
    """The domain associated with the dataset. When you add a dataset to a dataset group, this value and the value
    specified for the Domain parameter of the CreateDatasetGroup operation must match. The Domain and DatasetType that
    you choose determine the fields that must be present in the training data that you import to the dataset. For
    example, if you choose the RETAIL domain and TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires
    item_id, timestamp, and demand fields to be present in your data. For more information, see Importing datasets."""

    dataset_type: DatasetTypeOrStr = Field(alias="DatasetType")
    """The dataset type. Valid values depend on the chosen Domain."""

    data_frequency: Optional[str] = Field(default=UNSET, alias="DataFrequency")
    """The frequency of data collection. This parameter is required for RELATED_TIME_SERIES datasets. Valid intervals
    are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D"
    indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the
    next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is
    equivalent to 1 hour. The valid values for each frequency are the following: Minute - 1-59 Hour - 1-23 Day - 1-6
    Week - 1-4 Month - 1-11 Year - 1 Thus,"""

    schema_value: Schema = Field(alias="Schema")
    encryption_config: Optional[EncryptionConfig] = Field(default=UNSET, alias="EncryptionConfig")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The optional metadata that you apply to the dataset to help you categorize and organize them. Each tag consists
    of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum
    number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one
    value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8.
    If your tagging schema is used across multiple services and resources, remember that other services may have
    restrictions on allowed charact"""


class CreateDatasetRequestDict(TypedDict):
    dataset_name: str
    domain: DomainAmazonForecastServiceDatasetsApiOrStr
    dataset_type: DatasetTypeOrStr
    data_frequency: NotRequired[str]
    schema_value: SchemaDict
    encryption_config: NotRequired[EncryptionConfigDict]
    tags: NotRequired[list[TagModelDict]]
