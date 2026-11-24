from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvokeType(str, Enum):
    """The invocation type for a Lambda data source."""

    REQUEST_RESPONSE = "REQUEST_RESPONSE"
    EVENT = "EVENT"

    __str__ = str.__str__


InvokeTypeOrStr: TypeAlias = Annotated[InvokeType | str, open_enum_validator(InvokeType)]
