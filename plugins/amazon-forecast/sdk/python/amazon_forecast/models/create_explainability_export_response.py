from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateExplainabilityExportResponse(SdkBaseModel):
    explainability_export_arn: Optional[str] = Field(default=UNSET, alias="ExplainabilityExportArn")
    """The Amazon Resource Name (ARN) of the export."""


class CreateExplainabilityExportResponseDict(TypedDict):
    explainability_export_arn: NotRequired[str]
