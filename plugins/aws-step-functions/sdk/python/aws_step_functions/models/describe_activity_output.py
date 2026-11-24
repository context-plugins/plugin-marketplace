from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .encryption_configuration import EncryptionConfiguration, EncryptionConfigurationDict


class DescribeActivityOutput(SdkBaseModel):
    activity_arn: str = Field(alias="activityArn")
    """The Amazon Resource Name (ARN) that identifies the activity."""

    name: str
    r"""The name of the activity. A name must not contain: white space brackets { } [ ] wildcard characters ? * special
    characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates
    (U+D800-DFFF) invalid characters ( U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain
    0-9, A-Z, a-z, - and _."""

    creation_date: RFC3339DateTime = Field(alias="creationDate")
    """The date the activity is created."""

    encryption_configuration: Optional[EncryptionConfiguration] = Field(default=UNSET, alias="encryptionConfiguration")


class DescribeActivityOutputDict(TypedDict):
    activity_arn: str
    name: str
    creation_date: RFC3339DateTime
    encryption_configuration: NotRequired[EncryptionConfigurationDict]
