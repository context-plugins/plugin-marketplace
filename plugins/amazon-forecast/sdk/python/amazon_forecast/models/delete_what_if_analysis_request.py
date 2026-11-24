from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteWhatIfAnalysisRequest(SdkBaseModel):
    what_if_analysis_arn: str = Field(alias="WhatIfAnalysisArn")
    """The Amazon Resource Name (ARN) of the what-if analysis that you want to delete."""


class DeleteWhatIfAnalysisRequestDict(TypedDict):
    what_if_analysis_arn: str
