from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostAudienceFilter(str, Enum):
    FREE = "free"
    PREMIUM = "premium"
    ALL = "all"

    __str__ = str.__str__


PostAudienceFilterOrStr: TypeAlias = Annotated[PostAudienceFilter | str, open_enum_validator(PostAudienceFilter)]
