from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Method(str, Enum):
    """Article selection method. ARTICLES selects up to maxArticleCount matching articles; CLUSTERS selects the first
    article from each of up to maxArticleCount stories."""

    ARTICLES = "ARTICLES"
    CLUSTERS = "CLUSTERS"

    __str__ = str.__str__


MethodOrStr: TypeAlias = Annotated[Method | str, open_enum_validator(Method)]
