from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InListFilter2(SdkBaseModel):
    """A filter for in list values."""

    values: Optional[list[str]] = UNSET
    """The list of string values. Must be non-empty."""

    case_sensitive: Optional[bool] = Field(default=UNSET, alias="caseSensitive")
    """If true, the string value is case sensitive."""


class InListFilter2Dict(TypedDict):
    values: NotRequired[list[str]]
    case_sensitive: NotRequired[bool]
