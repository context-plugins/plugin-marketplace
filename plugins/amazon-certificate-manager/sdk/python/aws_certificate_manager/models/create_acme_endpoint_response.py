from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateAcmeEndpointResponse(SdkBaseModel):
    acme_endpoint_arn: Optional[str] = Field(default=UNSET, alias="AcmeEndpointArn")
    """The Amazon Resource Name (ARN) of the created ACME endpoint."""


class CreateAcmeEndpointResponseDict(TypedDict):
    acme_endpoint_arn: NotRequired[str]
