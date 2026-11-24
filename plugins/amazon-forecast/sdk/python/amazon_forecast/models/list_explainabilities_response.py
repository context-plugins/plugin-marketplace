from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .explainability_summary import ExplainabilitySummary, ExplainabilitySummaryDict


class ListExplainabilitiesResponse(SdkBaseModel):
    explainabilities: Optional[list[ExplainabilitySummary]] = Field(default=UNSET, alias="Explainabilities")
    """An array of objects that summarize the properties of each Explainability resource."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Returns this token if the response is truncated. To retrieve the next set of results, use the token in the next
    request."""


class ListExplainabilitiesResponseDict(TypedDict):
    explainabilities: NotRequired[list[ExplainabilitySummaryDict]]
    next_token: NotRequired[str]
