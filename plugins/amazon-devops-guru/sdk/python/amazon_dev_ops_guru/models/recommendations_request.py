from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.locale import LocaleOrStr


class RecommendationsRequest(SdkBaseModel):
    insight_id: str = Field(alias="InsightId")
    """The ID of the requested insight."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If this value is null, it
    retrieves the first page."""

    locale: Optional[LocaleOrStr] = Field(default=UNSET, alias="Locale")
    """A locale that specifies the language to use for recommendations."""

    account_id: Optional[str] = Field(default=UNSET, alias="AccountId")
    """The ID of the Amazon Web Services account."""


class RecommendationsRequestDict(TypedDict):
    insight_id: str
    next_token: NotRequired[str]
    locale: NotRequired[LocaleOrStr]
    account_id: NotRequired[str]
