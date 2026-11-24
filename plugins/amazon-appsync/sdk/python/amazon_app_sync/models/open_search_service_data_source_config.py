from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OpenSearchServiceDataSourceConfig(SdkBaseModel):
    endpoint: str
    """The endpoint."""

    aws_region: str = Field(alias="awsRegion")
    """The Amazon Web Services Region."""


class OpenSearchServiceDataSourceConfigDict(TypedDict):
    endpoint: str
    aws_region: str
