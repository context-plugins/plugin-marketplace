from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OverwriteWhen(str, Enum):
    """When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by
    overwrite_objects_already_existing_in_sink."""

    OVERWRITE_WHEN_UNSPECIFIED = "OVERWRITE_WHEN_UNSPECIFIED"
    DIFFERENT = "DIFFERENT"
    NEVER = "NEVER"
    ALWAYS = "ALWAYS"

    __str__ = str.__str__


OverwriteWhenOrStr: TypeAlias = Annotated[OverwriteWhen | str, open_enum_validator(OverwriteWhen)]
