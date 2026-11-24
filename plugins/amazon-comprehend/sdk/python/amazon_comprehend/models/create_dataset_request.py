from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_input_data_config import DatasetInputDataConfig, DatasetInputDataConfigDict
from .enums.dataset_type import DatasetTypeOrStr
from .tag_model import TagModel, TagModelDict


class CreateDatasetRequest(SdkBaseModel):
    flywheel_arn: str = Field(alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel of the flywheel to receive the data."""

    dataset_name: str = Field(alias="DatasetName")
    """Name of the dataset."""

    dataset_type: Optional[DatasetTypeOrStr] = Field(default=UNSET, alias="DatasetType")
    """The dataset type. You can specify that the data in a dataset is for training the model or for testing the
    model."""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """Description of the dataset."""

    input_data_config: DatasetInputDataConfig = Field(alias="InputDataConfig")
    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates
    one."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Tags for the dataset."""


class CreateDatasetRequestDict(TypedDict):
    flywheel_arn: str
    dataset_name: str
    dataset_type: NotRequired[DatasetTypeOrStr]
    description: NotRequired[str]
    input_data_config: DatasetInputDataConfigDict
    client_request_token: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
