from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .endpoint_properties import EndpointProperties, EndpointPropertiesDict


class ListEndpointsResponse(SdkBaseModel):
    endpoint_properties_list: Optional[list[EndpointProperties]] = Field(default=UNSET, alias="EndpointPropertiesList")
    """Displays a list of endpoint properties being retrieved by the service in response to the request."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListEndpointsResponseDict(TypedDict):
    endpoint_properties_list: NotRequired[list[EndpointPropertiesDict]]
    next_token: NotRequired[str]
