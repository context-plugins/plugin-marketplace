from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostOrderBy(str, Enum):
    CREATED = "created"
    PUBLISH_DATE = "publish_date"
    DISPLAYED_DATE = "displayed_date"

    __str__ = str.__str__


PostOrderByOrStr: TypeAlias = Annotated[PostOrderBy | str, open_enum_validator(PostOrderBy)]
