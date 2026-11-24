from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConditionSetPurpose(str, Enum):
    """The purpose of the condition set, indicating its intended use."""

    DYNAMIC_CONTENT = "dynamic_content"

    __str__ = str.__str__


ConditionSetPurposeOrStr: TypeAlias = Annotated[ConditionSetPurpose | str, open_enum_validator(ConditionSetPurpose)]
