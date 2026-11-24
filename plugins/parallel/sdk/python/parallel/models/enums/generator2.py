from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Generator2(str, Enum):
    """Generator for the FindAll run. One of base, core, pro, preview."""

    BASE = "base"
    CORE = "core"
    PRO = "pro"
    PREVIEW = "preview"

    __str__ = str.__str__


Generator2OrStr: TypeAlias = Annotated[Generator2 | str, open_enum_validator(Generator2)]
