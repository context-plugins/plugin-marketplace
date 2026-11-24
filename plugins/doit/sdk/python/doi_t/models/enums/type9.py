from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type9(str, Enum):
    """Diagram type."""

    APPLICATION = "application"
    INFRASTRUCTURE = "infrastructure"
    NETWORK = "network"
    TEMPLATE = "template"

    __str__ = str.__str__


Type9OrStr: TypeAlias = Annotated[Type9 | str, open_enum_validator(Type9)]
