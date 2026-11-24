from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_api_association_summary import SourceApiAssociationSummary, SourceApiAssociationSummaryDict


class ListSourceApiAssociationsResponse(SdkBaseModel):
    source_api_association_summaries: Optional[list[SourceApiAssociationSummary]] = Field(
        default=UNSET, alias="sourceApiAssociationSummaries"
    )
    """The SourceApiAssociationSummary object data."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier that was returned from the previous call to this operation, which you can use to return the next
    set of items in the list."""


class ListSourceApiAssociationsResponseDict(TypedDict):
    source_api_association_summaries: NotRequired[list[SourceApiAssociationSummaryDict]]
    next_token: NotRequired[str]
