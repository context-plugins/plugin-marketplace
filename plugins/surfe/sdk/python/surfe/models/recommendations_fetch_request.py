from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecommendationsFetchRequest(SdkBaseModel):
    limit: Optional[int] = UNSET
    """Maximum number of recommendations to return."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Pagination token from a previous response."""


class RecommendationsFetchRequestDict(TypedDict):
    limit: NotRequired[int]
    page_token: NotRequired[str]
