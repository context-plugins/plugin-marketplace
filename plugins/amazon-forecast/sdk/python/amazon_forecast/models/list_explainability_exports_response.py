from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .explainability_export_summary import ExplainabilityExportSummary, ExplainabilityExportSummaryDict


class ListExplainabilityExportsResponse(SdkBaseModel):
    explainability_exports: Optional[list[ExplainabilityExportSummary]] = Field(
        default=UNSET, alias="ExplainabilityExports"
    )
    """An array of objects that summarize the properties of each Explainability export."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Returns this token if the response is truncated. To retrieve the next set of results, use the token in the next
    request."""


class ListExplainabilityExportsResponseDict(TypedDict):
    explainability_exports: NotRequired[list[ExplainabilityExportSummaryDict]]
    next_token: NotRequired[str]
