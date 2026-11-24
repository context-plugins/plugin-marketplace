from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteEndpointRequest(SdkBaseModel):
    endpoint_arn: str = Field(alias="EndpointArn")
    """The Amazon Resource Number (ARN) of the endpoint being deleted."""


class DeleteEndpointRequestDict(TypedDict):
    endpoint_arn: str
