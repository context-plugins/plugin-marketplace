from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopResourceRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) that identifies the resource to stop. The supported ARNs are DatasetImportJobArn,
    PredictorArn, PredictorBacktestExportJobArn, ForecastArn, ForecastExportJobArn, ExplainabilityArn, and
    ExplainabilityExportArn."""


class StopResourceRequestDict(TypedDict):
    resource_arn: str
