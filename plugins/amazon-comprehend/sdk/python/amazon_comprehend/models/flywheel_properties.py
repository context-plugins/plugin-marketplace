from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_security_config import DataSecurityConfig, DataSecurityConfigDict
from .enums.model_type1 import ModelType1OrStr
from .enums.status6 import Status6OrStr
from .task_config import TaskConfig, TaskConfigDict


class FlywheelProperties(SdkBaseModel):
    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel."""

    active_model_arn: Optional[str] = Field(default=UNSET, alias="ActiveModelArn")
    """The Amazon Resource Number (ARN) of the active model version."""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel
    data."""

    task_config: Optional[TaskConfig] = Field(default=UNSET, alias="TaskConfig")
    data_lake_s3_uri: Optional[str] = Field(default=UNSET, alias="DataLakeS3Uri")
    """Amazon S3 URI of the data lake location."""

    data_security_config: Optional[DataSecurityConfig] = Field(default=UNSET, alias="DataSecurityConfig")
    status: Optional[Status6OrStr] = Field(default=UNSET, alias="Status")
    """The status of the flywheel."""

    model_type: Optional[ModelType1OrStr] = Field(default=UNSET, alias="ModelType")
    """Model type of the flywheel's model."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A description of the status of the flywheel."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """Creation time of the flywheel."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """Last modified time for the flywheel."""

    latest_flywheel_iteration: Optional[str] = Field(default=UNSET, alias="LatestFlywheelIteration")
    """The most recent flywheel iteration."""


class FlywheelPropertiesDict(TypedDict):
    flywheel_arn: NotRequired[str]
    active_model_arn: NotRequired[str]
    data_access_role_arn: NotRequired[str]
    task_config: NotRequired[TaskConfigDict]
    data_lake_s3_uri: NotRequired[str]
    data_security_config: NotRequired[DataSecurityConfigDict]
    status: NotRequired[Status6OrStr]
    model_type: NotRequired[ModelType1OrStr]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modified_time: NotRequired[RFC3339DateTime]
    latest_flywheel_iteration: NotRequired[str]
