from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MethodPerigonMonitorsApi(str, Enum):
    """Search method used to populate the field. Accepts WEB_SEARCH or ARTICLE_SEARCH."""

    WEB_SEARCH = "WEB_SEARCH"
    ARTICLE_SEARCH = "ARTICLE_SEARCH"
    X_POST = "X_POST"

    __str__ = str.__str__


MethodPerigonMonitorsApiOrStr: TypeAlias = Annotated[
    MethodPerigonMonitorsApi | str, open_enum_validator(MethodPerigonMonitorsApi)
]
