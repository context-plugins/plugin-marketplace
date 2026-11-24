from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteExplainabilityRequest(SdkBaseModel):
    explainability_arn: str = Field(alias="ExplainabilityArn")
    """The Amazon Resource Name (ARN) of the Explainability resource to delete."""


class DeleteExplainabilityRequestDict(TypedDict):
    explainability_arn: str
