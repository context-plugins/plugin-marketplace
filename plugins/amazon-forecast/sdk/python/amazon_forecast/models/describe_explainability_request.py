from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeExplainabilityRequest(SdkBaseModel):
    explainability_arn: str = Field(alias="ExplainabilityArn")
    """The Amazon Resource Name (ARN) of the Explaianability to describe."""


class DescribeExplainabilityRequestDict(TypedDict):
    explainability_arn: str
