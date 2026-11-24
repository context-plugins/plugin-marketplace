from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListAcmeDomainValidationsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """A token for pagination."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return."""

    acme_endpoint_arn: str = Field(alias="AcmeEndpointArn")
    """The Amazon Resource Name (ARN) of the ACME endpoint."""


class ListAcmeDomainValidationsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    acme_endpoint_arn: str
