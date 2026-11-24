from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1ExcerptSettings(SdkBaseModel):
    """Optional settings for returning relevant excerpts."""

    model_config = ConfigDict(extra="forbid")

    max_chars_per_result: Optional[int] = UNSET
    """Optional upper bound on the total number of characters to include per url. Excerpts may contain fewer characters
    than this limit to maximize relevance and token efficiency."""


class V1ExcerptSettingsDict(TypedDict):
    max_chars_per_result: NotRequired[int]
