from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class To(str, Enum):
    """The target validation method for the update."""

    EMAIL = "EMAIL"
    DNS = "DNS"
    HTTP = "HTTP"

    __str__ = str.__str__


ToOrStr: TypeAlias = Annotated[To | str, open_enum_validator(To)]
