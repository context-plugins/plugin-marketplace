from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResiliencyGroupType(str, Enum):
    """The type of the resiliency group. The valid value is Managed."""

    MANAGED = "Managed"

    __str__ = str.__str__


ResiliencyGroupTypeOrStr: TypeAlias = Annotated[ResiliencyGroupType | str, open_enum_validator(ResiliencyGroupType)]
