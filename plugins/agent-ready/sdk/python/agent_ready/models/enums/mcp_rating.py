from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class McpRating(str, Enum):
    """Coarse rating bucket derived from the Vercel Agent Readability score."""

    EXCELLENT = "excellent"
    GOOD = "good"
    FAIR = "fair"
    NEEDS_IMPROVEMENT = "needs_improvement"

    __str__ = str.__str__


McpRatingOrStr: TypeAlias = Annotated[McpRating | str, open_enum_validator(McpRating)]
