from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acme_endpoint import AcmeEndpoint, AcmeEndpointDict


class DescribeAcmeEndpointResponse(SdkBaseModel):
    acme_endpoint: Optional[AcmeEndpoint] = Field(default=UNSET, alias="AcmeEndpoint")


class DescribeAcmeEndpointResponseDict(TypedDict):
    acme_endpoint: NotRequired[AcmeEndpointDict]
