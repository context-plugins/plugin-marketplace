from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Entry(SdkBaseModel):
    """A single replacement configuration."""

    search: Optional[str] = UNSET
    """What to replace. Max length is 100 characters."""

    replace: Optional[str] = UNSET
    """What to replace with. Max length is 100 characters."""

    case_sensitive: Optional[bool] = Field(default=UNSET, alias="caseSensitive")
    """Whether the search is case sensitive."""


class EntryDict(TypedDict):
    search: NotRequired[str]
    replace: NotRequired[str]
    case_sensitive: NotRequired[bool]
