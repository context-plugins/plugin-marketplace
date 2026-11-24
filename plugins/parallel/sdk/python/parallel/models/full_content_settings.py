from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FullContentSettings(SdkBaseModel):
    """Optional settings for returning full content."""

    max_chars_per_result: Optional[int] = UNSET
    """Optional limit on the number of characters to include in the full content for each url. Full content always
    starts at the beginning of the page and is truncated at the limit if necessary."""


class FullContentSettingsDict(TypedDict):
    max_chars_per_result: NotRequired[int]
