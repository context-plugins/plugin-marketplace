from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeEndpointRequest(SdkBaseModel):
    endpoint_arn: str = Field(alias="EndpointArn")
    """The Amazon Resource Number (ARN) of the endpoint being described."""


class DescribeEndpointRequestDict(TypedDict):
    endpoint_arn: str
