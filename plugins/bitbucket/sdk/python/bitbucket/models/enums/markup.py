from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Markup(str, Enum):
    """The type of markup language the raw content is to be interpreted in."""

    MARKDOWN = "markdown"
    CREOLE = "creole"
    PLAINTEXT = "plaintext"

    __str__ = str.__str__


MarkupOrStr: TypeAlias = Annotated[Markup | str, open_enum_validator(Markup)]
