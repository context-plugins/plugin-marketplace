from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class CreateEndpointRequest(SdkBaseModel):
    endpoint_name: str = Field(alias="EndpointName")
    """This is the descriptive suffix that becomes part of the EndpointArn used for all subsequent requests to this
    resource."""

    model_arn: Optional[str] = Field(default=UNSET, alias="ModelArn")
    """The Amazon Resource Number (ARN) of the model to which the endpoint will be attached."""

    desired_inference_units: int = Field(alias="DesiredInferenceUnits")
    """The desired number of inference units to be used by the model using this endpoint. Each inference unit represents
    of a throughput of 100 characters per second."""

    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """An idempotency token provided by the customer. If this token matches a previous endpoint creation request, Amazon
    Comprehend will not return a ResourceInUseException."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Tags to associate with the endpoint. A tag is a key-value pair that adds metadata to the endpoint. For example, a
    tag with "Sales" as the key might be added to an endpoint to indicate its use by the sales department."""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models
    encrypted with a customer managed key (ModelKmsKeyId)."""

    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel to which the endpoint will be attached."""


class CreateEndpointRequestDict(TypedDict):
    endpoint_name: str
    model_arn: NotRequired[str]
    desired_inference_units: int
    client_request_token: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
    data_access_role_arn: NotRequired[str]
    flywheel_arn: NotRequired[str]
