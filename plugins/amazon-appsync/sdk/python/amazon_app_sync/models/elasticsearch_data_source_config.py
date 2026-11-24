from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ElasticsearchDataSourceConfig(SdkBaseModel):
    endpoint: str
    """The endpoint."""

    aws_region: str = Field(alias="awsRegion")
    """The Amazon Web Services Region."""


class ElasticsearchDataSourceConfigDict(TypedDict):
    endpoint: str
    aws_region: str
