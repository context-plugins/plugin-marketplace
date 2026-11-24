from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.dataset_type_amazon_rekognition_project_api import DatasetTypeAmazonRekognitionProjectApiOrStr
from .enums.status_amazon_rekognition_project_api import StatusAmazonRekognitionProjectApiOrStr
from .enums.status_message_code import StatusMessageCodeOrStr


class DatasetMetadata(SdkBaseModel):
    creation_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimestamp")
    """The Unix timestamp for the date and time that the dataset was created."""

    dataset_type: Optional[DatasetTypeAmazonRekognitionProjectApiOrStr] = Field(default=UNSET, alias="DatasetType")
    """The type of the dataset."""

    dataset_arn: Optional[str] = Field(default=UNSET, alias="DatasetArn")
    """The Amazon Resource Name (ARN) for the dataset."""

    status: Optional[StatusAmazonRekognitionProjectApiOrStr] = Field(default=UNSET, alias="Status")
    """The status for the dataset."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """The status message for the dataset."""

    status_message_code: Optional[StatusMessageCodeOrStr] = Field(default=UNSET, alias="StatusMessageCode")
    """The status message code for the dataset operation. If a service error occurs, try the API call again later. If a
    client error occurs, check the input parameters to the dataset API call that failed."""


class DatasetMetadataDict(TypedDict):
    creation_timestamp: NotRequired[RFC3339DateTime]
    dataset_type: NotRequired[DatasetTypeAmazonRekognitionProjectApiOrStr]
    dataset_arn: NotRequired[str]
    status: NotRequired[StatusAmazonRekognitionProjectApiOrStr]
    status_message: NotRequired[str]
    status_message_code: NotRequired[StatusMessageCodeOrStr]
