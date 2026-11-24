from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StoryCitationResolvingType(str, Enum):
    """How story citations are resolved. Accepts STORY or TOP_ARTICLE."""

    STORY = "STORY"
    TOP_ARTICLE = "TOP_ARTICLE"

    __str__ = str.__str__


StoryCitationResolvingTypeOrStr: TypeAlias = Annotated[
    StoryCitationResolvingType | str, open_enum_validator(StoryCitationResolvingType)
]
