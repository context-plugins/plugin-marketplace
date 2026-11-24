from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EnumerationValue(SdkBaseModel):
    value: str
    """The value of the slot type."""

    synonyms: Optional[list[str]] = UNSET
    """Additional values related to the slot type value."""


class EnumerationValueDict(TypedDict):
    value: str
    synonyms: NotRequired[list[str]]
