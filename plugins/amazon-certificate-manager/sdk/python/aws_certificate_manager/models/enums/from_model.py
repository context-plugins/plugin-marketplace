from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FromModel(str, Enum):
    """The validation method that the certificate was using before the update."""

    EMAIL = "EMAIL"
    DNS = "DNS"
    HTTP = "HTTP"

    __str__ = str.__str__


FromModelOrStr: TypeAlias = Annotated[FromModel | str, open_enum_validator(FromModel)]
