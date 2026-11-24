from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
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


class CreateStreamProcessorRequest(SdkBaseModel):
    input: StreamProcessorInput = Field(alias="Input")
    output: StreamProcessorOutput = Field(alias="Output")
    name: str = Field(alias="Name")
    """An identifier you assign to the stream processor. You can use Name to manage the stream processor. For example,
    you can get the current status of the stream processor by calling DescribeStreamProcessor. Name is idempotent. This
    is required for both face search and label detection stream processors."""

    settings: StreamProcessorSettings = Field(alias="Settings")
    role_arn: str = Field(alias="RoleArn")
    """The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. The IAM role
    provides Rekognition read permissions for a Kinesis stream. It also provides write permissions to an Amazon S3
    bucket and Amazon Simple Notification Service topic for a label detection stream processor. This is required for
    both face search and label detection stream processors."""

    tags: Optional[dict[str, str]] = Field(default=UNSET, alias="Tags")
    """A set of tags (key-value pairs) that you want to attach to the stream processor."""

    notification_channel: Optional[StreamProcessorNotificationChannel] = Field(
        default=UNSET, alias="NotificationChannel"
    )
    kms_key_id: Optional[str] = Field(default=UNSET, alias="KmsKeyId")
    """The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label
    detection stream processors and should not be used to create a face search stream processor. You can supply the
    Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The
    key is used to encrypt results and data published to your Amazon S3 bucket, which includes image frames and hero
    images. Your source images are unaffected."""

    regions_of_interest: Optional[list[RegionOfInterest]] = Field(default=UNSET, alias="RegionsOfInterest")
    """Specifies locations in the frames where Amazon Rekognition checks for objects or people. You can specify up to 10
    regions of interest, and each region has either a polygon or a bounding box. This is an optional parameter for label
    detection stream processors and should not be used to create a face search stream processor."""

    data_sharing_preference: Optional[StreamProcessorDataSharingPreference] = Field(
        default=UNSET, alias="DataSharingPreference"
    )


class CreateStreamProcessorRequestDict(TypedDict):
    input: StreamProcessorInputDict
    output: StreamProcessorOutputDict
    name: str
    settings: StreamProcessorSettingsDict
    role_arn: str
    tags: NotRequired[dict[str, str]]
    notification_channel: NotRequired[StreamProcessorNotificationChannelDict]
    kms_key_id: NotRequired[str]
    regions_of_interest: NotRequired[list[RegionOfInterestDict]]
    data_sharing_preference: NotRequired[StreamProcessorDataSharingPreferenceDict]
