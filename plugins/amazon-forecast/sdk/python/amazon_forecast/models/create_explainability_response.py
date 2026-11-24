from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateExplainabilityResponse(SdkBaseModel):
    explainability_arn: Optional[str] = Field(default=UNSET, alias="ExplainabilityArn")
    """The Amazon Resource Name (ARN) of the Explainability."""


class CreateExplainabilityResponseDict(TypedDict):
    explainability_arn: NotRequired[str]
