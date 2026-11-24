from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.dataset_type2 import DatasetType2OrStr
from .enums.status1 import Status1OrStr


class DatasetProperties(SdkBaseModel):
    dataset_arn: Optional[str] = Field(default=UNSET, alias="DatasetArn")
    """The ARN of the dataset."""

    dataset_name: Optional[str] = Field(default=UNSET, alias="DatasetName")
    """The name of the dataset."""

    dataset_type: Optional[DatasetType2OrStr] = Field(default=UNSET, alias="DatasetType")
    """The dataset type (training data or test data)."""

    dataset_s3_uri: Optional[str] = Field(default=UNSET, alias="DatasetS3Uri")
    """The S3 URI where the dataset is stored."""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """Description of the dataset."""

    status: Optional[Status1OrStr] = Field(default=UNSET, alias="Status")
    """The dataset status. While the system creates the dataset, the status is CREATING. When the dataset is ready to
    use, the status changes to COMPLETED."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A description of the status of the dataset."""

    number_of_documents: Optional[int] = Field(default=UNSET, alias="NumberOfDocuments")
    """The number of documents in the dataset."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """Creation time of the dataset."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """Time when the data from the dataset becomes available in the data lake."""


class DatasetPropertiesDict(TypedDict):
    dataset_arn: NotRequired[str]
    dataset_name: NotRequired[str]
    dataset_type: NotRequired[DatasetType2OrStr]
    dataset_s3_uri: NotRequired[str]
    description: NotRequired[str]
    status: NotRequired[Status1OrStr]
    message: NotRequired[str]
    number_of_documents: NotRequired[int]
    creation_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
