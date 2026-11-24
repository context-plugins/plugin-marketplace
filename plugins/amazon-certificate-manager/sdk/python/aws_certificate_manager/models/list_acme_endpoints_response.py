from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acme_endpoint_summary import AcmeEndpointSummary, AcmeEndpointSummaryDict


class ListAcmeEndpointsResponse(SdkBaseModel):
    acme_endpoints: Optional[list[AcmeEndpointSummary]] = Field(default=UNSET, alias="AcmeEndpoints")
    """The list of ACME endpoints."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """A token for pagination."""


class ListAcmeEndpointsResponseDict(TypedDict):
    acme_endpoints: NotRequired[list[AcmeEndpointSummaryDict]]
    next_token: NotRequired[str]
