from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OnUndeclaredFields(str, Enum):
    """What happens to events that contain fields not in the schema. One of ALLOW_EVENT, BLOCK_EVENT, or OMIT_FIELDS.
    Optional, defaults to OMIT_FIELDS."""

    ALLOW_EVENT = "ALLOW_EVENT"
    BLOCK_EVENT = "BLOCK_EVENT"
    OMIT_FIELDS = "OMIT_FIELDS"

    __str__ = str.__str__


OnUndeclaredFieldsOrStr: TypeAlias = Annotated[OnUndeclaredFields | str, open_enum_validator(OnUndeclaredFields)]
