from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutoUpdate1(str, Enum):
    """Indicates whether automatic retraining will be attempted for the versions of the project. Applies only to
    adapters."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


AutoUpdate1OrStr: TypeAlias = Annotated[AutoUpdate1 | str, open_enum_validator(AutoUpdate1)]
