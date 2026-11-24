from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteExplainabilityExportRequest(SdkBaseModel):
    explainability_export_arn: str = Field(alias="ExplainabilityExportArn")
    """The Amazon Resource Name (ARN) of the Explainability export to delete."""


class DeleteExplainabilityExportRequestDict(TypedDict):
    explainability_export_arn: str
