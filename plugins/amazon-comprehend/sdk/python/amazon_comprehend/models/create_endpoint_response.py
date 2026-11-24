from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateEndpointResponse(SdkBaseModel):
    endpoint_arn: Optional[str] = Field(default=UNSET, alias="EndpointArn")
    """The Amazon Resource Number (ARN) of the endpoint being created."""

    model_arn: Optional[str] = Field(default=UNSET, alias="ModelArn")
    """The Amazon Resource Number (ARN) of the model to which the endpoint is attached."""


class CreateEndpointResponseDict(TypedDict):
    endpoint_arn: NotRequired[str]
    model_arn: NotRequired[str]
