from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .endpoint_properties import EndpointProperties, EndpointPropertiesDict


class DescribeEndpointResponse(SdkBaseModel):
    endpoint_properties: Optional[EndpointProperties] = Field(default=UNSET, alias="EndpointProperties")


class DescribeEndpointResponseDict(TypedDict):
    endpoint_properties: NotRequired[EndpointPropertiesDict]
