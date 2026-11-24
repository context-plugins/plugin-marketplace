from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_amazon_rekognition_stream_processor_api import StatusAmazonRekognitionStreamProcessorApiOrStr
from .region_of_interest import RegionOfInterest, RegionOfInterestDict
from .stream_processor_data_sharing_preference import (
    StreamProcessorDataSharingPreference,
    StreamProcessorDataSharingPreferenceDict,
)
from .stream_processor_input import StreamProcessorInput, StreamProcessorInputDict
from .stream_processor_notification_channel import (
    StreamProcessorNotificationChannel,
    StreamProcessorNotificationChannelDict,
)
from .stream_processor_output import StreamProcessorOutput, StreamProcessorOutputDict
from .stream_processor_settings import StreamProcessorSettings, StreamProcessorSettingsDict


class DescribeStreamProcessorResponse(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Name of the stream processor."""

    stream_processor_arn: Optional[str] = Field(default=UNSET, alias="StreamProcessorArn")
    """ARN of the stream processor."""

    status: Optional[StatusAmazonRekognitionStreamProcessorApiOrStr] = Field(default=UNSET, alias="Status")
    """Current status of the stream processor."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """Detailed status message about the stream processor."""

    creation_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimestamp")
    """Date and time the stream processor was created"""

    last_update_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastUpdateTimestamp")
    """The time, in Unix format, the stream processor was last updated. For example, when the stream processor moves
    from a running state to a failed state, or when the user starts or stops the stream processor."""

    input: Optional[StreamProcessorInput] = Field(default=UNSET, alias="Input")
    output: Optional[StreamProcessorOutput] = Field(default=UNSET, alias="Output")
    role_arn: Optional[str] = Field(default=UNSET, alias="RoleArn")
    """ARN of the IAM role that allows access to the stream processor."""

    settings: Optional[StreamProcessorSettings] = Field(default=UNSET, alias="Settings")
    notification_channel: Optional[StreamProcessorNotificationChannel] = Field(
        default=UNSET, alias="NotificationChannel"
    )
    kms_key_id: Optional[str] = Field(default=UNSET, alias="KmsKeyId")
    """The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label
    detection stream processors."""

    regions_of_interest: Optional[list[RegionOfInterest]] = Field(default=UNSET, alias="RegionsOfInterest")
    """Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional
    parameter for label detection stream processors."""

    data_sharing_preference: Optional[StreamProcessorDataSharingPreference] = Field(
        default=UNSET, alias="DataSharingPreference"
    )


class DescribeStreamProcessorResponseDict(TypedDict):
    name: NotRequired[str]
    stream_processor_arn: NotRequired[str]
    status: NotRequired[StatusAmazonRekognitionStreamProcessorApiOrStr]
    status_message: NotRequired[str]
    creation_timestamp: NotRequired[RFC3339DateTime]
    last_update_timestamp: NotRequired[RFC3339DateTime]
    input: NotRequired[StreamProcessorInputDict]
    output: NotRequired[StreamProcessorOutputDict]
    role_arn: NotRequired[str]
    settings: NotRequired[StreamProcessorSettingsDict]
    notification_channel: NotRequired[StreamProcessorNotificationChannelDict]
    kms_key_id: NotRequired[str]
    regions_of_interest: NotRequired[list[RegionOfInterestDict]]
    data_sharing_preference: NotRequired[StreamProcessorDataSharingPreferenceDict]
