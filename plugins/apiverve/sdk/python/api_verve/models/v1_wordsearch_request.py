from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1WordsearchRequest(SdkBaseModel):
    words: str
    """Array of words to hide in the puzzle (3-20 words)"""

    size: Optional[int] = UNSET
    """Grid size"""

    difficulty: Optional[str] = UNSET
    """Difficulty level (affects word directions)"""

    image: Optional[bool] = UNSET
    """Set to true to generate a downloadable puzzle image"""

    solution_image: Optional[bool] = Field(default=UNSET, alias="solutionImage")
    """Set to true to generate a downloadable solution image"""


class V1WordsearchRequestDict(TypedDict):
    words: str
    size: NotRequired[int]
    difficulty: NotRequired[str]
    image: NotRequired[bool]
    solution_image: NotRequired[bool]
