from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Choice(SdkBaseModel):
    """Choice"""

    label: str
    """Choice label."""

    alias: OptionalNullable[str] = UNSET
    """Choice alias, for example, a number to represent the choice."""

    id: str
    """Choice ID."""


class ChoiceDict(TypedDict):
    label: str
    alias: NotRequired[str | None]
    id: str
