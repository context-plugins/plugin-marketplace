from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteAcmeEndpointRequest(SdkBaseModel):
    acme_endpoint_arn: str = Field(alias="AcmeEndpointArn")
    """The Amazon Resource Name (ARN) of the ACME endpoint to delete."""


class DeleteAcmeEndpointRequestDict(TypedDict):
    acme_endpoint_arn: str
