from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InListFilter(SdkBaseModel):
    """The result needs to be in a list of string values."""

    values: Optional[list[str]] = UNSET
    """The list of string values. Must be non-empty."""

    case_sensitive: Optional[bool] = Field(default=UNSET, alias="caseSensitive")
    """If true, the string value is case sensitive."""


class InListFilterDict(TypedDict):
    values: NotRequired[list[str]]
    case_sensitive: NotRequired[bool]
