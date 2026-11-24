from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SearchType(str, Enum):
    r"""[Optional; Default is \"web\"] The search type to filter for."""

    WEB = "WEB"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    NEWS = "NEWS"
    DISCOVER = "DISCOVER"
    GOOGLE_NEWS = "GOOGLE_NEWS"

    __str__ = str.__str__


SearchTypeOrStr: TypeAlias = Annotated[SearchType | str, open_enum_validator(SearchType)]
