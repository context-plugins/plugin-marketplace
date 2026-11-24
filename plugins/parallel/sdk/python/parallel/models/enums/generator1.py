from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Generator1(str, Enum):
    """Generator for the FindAll run."""

    BASE = "base"
    CORE = "core"
    PRO = "pro"
    PREVIEW = "preview"

    __str__ = str.__str__


Generator1OrStr: TypeAlias = Annotated[Generator1 | str, open_enum_validator(Generator1)]
