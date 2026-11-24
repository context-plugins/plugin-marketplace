from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    r"""Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or Gnews."""

    WEB = "WEB"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    NEWS = "NEWS"
    DISCOVER = "DISCOVER"
    GOOGLE_NEWS = "GOOGLE_NEWS"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
