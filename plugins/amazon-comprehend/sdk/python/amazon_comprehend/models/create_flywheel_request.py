from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_security_config import DataSecurityConfig, DataSecurityConfigDict
from .enums.model_type import ModelTypeOrStr
from .tag_model import TagModel, TagModelDict
from .task_config import TaskConfig, TaskConfigDict


class CreateFlywheelRequest(SdkBaseModel):
    flywheel_name: str = Field(alias="FlywheelName")
    """Name for the flywheel."""

    active_model_arn: Optional[str] = Field(default=UNSET, alias="ActiveModelArn")
    """To associate an existing model with the flywheel, specify the Amazon Resource Number (ARN) of the model version.
    Do not set TaskConfig or ModelType if you specify an ActiveModelArn."""

    data_access_role_arn: str = Field(alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend the permissions required to access
    the flywheel data in the data lake."""

    task_config: Optional[TaskConfig] = Field(default=UNSET, alias="TaskConfig")
    model_type: Optional[ModelTypeOrStr] = Field(default=UNSET, alias="ModelType")
    """The model type. You need to set ModelType if you are creating a flywheel for a new model."""

    data_lake_s3_uri: str = Field(alias="DataLakeS3Uri")
    """Enter the S3 location for the data lake. You can specify a new S3 bucket or a new folder of an existing S3
    bucket. The flywheel creates the data lake at this location."""

    data_security_config: Optional[DataSecurityConfig] = Field(default=UNSET, alias="DataSecurityConfig")
    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates
    one."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The tags to associate with this flywheel."""


class CreateFlywheelRequestDict(TypedDict):
    flywheel_name: str
    active_model_arn: NotRequired[str]
    data_access_role_arn: str
    task_config: NotRequired[TaskConfigDict]
    model_type: NotRequired[ModelTypeOrStr]
    data_lake_s3_uri: str
    data_security_config: NotRequired[DataSecurityConfigDict]
    client_request_token: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
