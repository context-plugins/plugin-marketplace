from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeAcmeAccountRequest(SdkBaseModel):
    acme_endpoint_arn: str = Field(alias="AcmeEndpointArn")
    """The Amazon Resource Name (ARN) of the ACME endpoint."""

    account_url: str = Field(alias="AccountUrl")
    """The URL of the ACME account."""


class DescribeAcmeAccountRequestDict(TypedDict):
    acme_endpoint_arn: str
    account_url: str
