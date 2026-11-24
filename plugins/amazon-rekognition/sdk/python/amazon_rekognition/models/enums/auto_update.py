from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutoUpdate(str, Enum):
    """Specifies whether automatic retraining should be attempted for the versions of the project. Automatic retraining
    is done as a best effort. Required argument for Content Moderation. Applicable only to adapters."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


AutoUpdateOrStr: TypeAlias = Annotated[AutoUpdate | str, open_enum_validator(AutoUpdate)]
