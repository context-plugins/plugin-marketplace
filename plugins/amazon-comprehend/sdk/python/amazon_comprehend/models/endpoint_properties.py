from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status3 import Status3OrStr


class EndpointProperties(SdkBaseModel):
    endpoint_arn: Optional[str] = Field(default=UNSET, alias="EndpointArn")
    """The Amazon Resource Number (ARN) of the endpoint."""

    status: Optional[Status3OrStr] = Field(default=UNSET, alias="Status")
    """Specifies the status of the endpoint. Because the endpoint updates and creation are asynchronous, so customers
    will need to wait for the endpoint to be Ready status before making inference requests."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """Specifies a reason for failure in cases of Failed status."""

    model_arn: Optional[str] = Field(default=UNSET, alias="ModelArn")
    """The Amazon Resource Number (ARN) of the model to which the endpoint is attached."""

    desired_model_arn: Optional[str] = Field(default=UNSET, alias="DesiredModelArn")
    """ARN of the new model to use for updating an existing endpoint. This ARN is going to be different from the model
    ARN when the update is in progress"""

    desired_inference_units: Optional[int] = Field(default=UNSET, alias="DesiredInferenceUnits")
    """The desired number of inference units to be used by the model using this endpoint. Each inference unit represents
    of a throughput of 100 characters per second."""

    current_inference_units: Optional[int] = Field(default=UNSET, alias="CurrentInferenceUnits")
    """The number of inference units currently used by the model using this endpoint."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The creation date and time of the endpoint."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """The date and time that the endpoint was last modified."""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models
    encrypted with a customer managed key (ModelKmsKeyId)."""

    desired_data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DesiredDataAccessRoleArn")
    """Data access role ARN to use in case the new model is encrypted with a customer KMS key."""

    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel"""


class EndpointPropertiesDict(TypedDict):
    endpoint_arn: NotRequired[str]
    status: NotRequired[Status3OrStr]
    message: NotRequired[str]
    model_arn: NotRequired[str]
    desired_model_arn: NotRequired[str]
    desired_inference_units: NotRequired[int]
    current_inference_units: NotRequired[int]
    creation_time: NotRequired[RFC3339DateTime]
    last_modified_time: NotRequired[RFC3339DateTime]
    data_access_role_arn: NotRequired[str]
    desired_data_access_role_arn: NotRequired[str]
    flywheel_arn: NotRequired[str]
