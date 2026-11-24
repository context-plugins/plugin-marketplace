from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateEndpointRequest(SdkBaseModel):
    endpoint_arn: str = Field(alias="EndpointArn")
    """The Amazon Resource Number (ARN) of the endpoint being updated."""

    desired_model_arn: Optional[str] = Field(default=UNSET, alias="DesiredModelArn")
    """The ARN of the new model to use when updating an existing endpoint."""

    desired_inference_units: Optional[int] = Field(default=UNSET, alias="DesiredInferenceUnits")
    """The desired number of inference units to be used by the model using this endpoint. Each inference unit represents
    of a throughput of 100 characters per second."""

    desired_data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DesiredDataAccessRoleArn")
    """Data access role ARN to use in case the new model is encrypted with a customer CMK."""

    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel"""


class UpdateEndpointRequestDict(TypedDict):
    endpoint_arn: str
    desired_model_arn: NotRequired[str]
    desired_inference_units: NotRequired[int]
    desired_data_access_role_arn: NotRequired[str]
    flywheel_arn: NotRequired[str]
