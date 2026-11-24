from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessInListFilter1(SdkBaseModel):
    """A filter for in list values."""

    case_sensitive: Optional[bool] = Field(default=UNSET, alias="caseSensitive")
    """If true, the string value is case sensitive."""

    values: Optional[list[str]] = UNSET
    """The list of string values. Must be non-empty."""


class GoogleAnalyticsAdminV1BetaAccessInListFilter1Dict(TypedDict):
    case_sensitive: NotRequired[bool]
    values: NotRequired[list[str]]
