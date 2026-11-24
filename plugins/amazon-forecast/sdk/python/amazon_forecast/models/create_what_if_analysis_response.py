from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateWhatIfAnalysisResponse(SdkBaseModel):
    what_if_analysis_arn: Optional[str] = Field(default=UNSET, alias="WhatIfAnalysisArn")
    """The Amazon Resource Name (ARN) of the what-if analysis."""


class CreateWhatIfAnalysisResponseDict(TypedDict):
    what_if_analysis_arn: NotRequired[str]
