from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreationState(str, Enum):
    ACTIVE = "active"
    DRAFT = "draft"

    __str__ = str.__str__


CreationStateOrStr: TypeAlias = Annotated[CreationState | str, open_enum_validator(CreationState)]
