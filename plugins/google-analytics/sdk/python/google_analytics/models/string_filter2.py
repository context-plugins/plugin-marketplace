from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.match_type import MatchTypeOrStr


class StringFilter2(SdkBaseModel):
    """Strings related filter."""

    value: Optional[str] = UNSET
    """The string value used for the matching."""

    match_type: Optional[MatchTypeOrStr] = Field(default=UNSET, alias="matchType")
    """The match type for this filter."""

    case_sensitive: Optional[bool] = Field(default=UNSET, alias="caseSensitive")
    """If true, the string value is case sensitive."""


class StringFilter2Dict(TypedDict):
    value: NotRequired[str]
    match_type: NotRequired[MatchTypeOrStr]
    case_sensitive: NotRequired[bool]
