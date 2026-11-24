from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResumeAt(str, Enum):
    """When to resume. Currently only 'now' is supported."""

    NOW = "now"

    __str__ = str.__str__


ResumeAtOrStr: TypeAlias = Annotated[ResumeAt | str, open_enum_validator(ResumeAt)]
