from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FindAllExtendInput(SdkBaseModel):
    """Input model for FindAll extend."""

    additional_match_limit: int
    """Additional number of matches to find for this FindAll run. This value will be added to the current match limit to
    determine the new total match limit. Must be greater than 0."""


class FindAllExtendInputDict(TypedDict):
    additional_match_limit: int
