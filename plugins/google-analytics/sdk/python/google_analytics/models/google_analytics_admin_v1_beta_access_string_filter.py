from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.match_type import MatchTypeOrStr


class GoogleAnalyticsAdminV1BetaAccessStringFilter(SdkBaseModel):
    """The filter for strings."""

    match_type: Optional[MatchTypeOrStr] = Field(default=UNSET, alias="matchType")
    """The match type for this filter."""

    case_sensitive: Optional[bool] = Field(default=UNSET, alias="caseSensitive")
    """If true, the string value is case sensitive."""

    value: Optional[str] = UNSET
    """The string value used for the matching."""


class GoogleAnalyticsAdminV1BetaAccessStringFilterDict(TypedDict):
    match_type: NotRequired[MatchTypeOrStr]
    case_sensitive: NotRequired[bool]
    value: NotRequired[str]
