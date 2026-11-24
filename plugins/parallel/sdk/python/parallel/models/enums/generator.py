from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Generator(str, Enum):
    """The generator of the FindAll run."""

    BASE = "base"
    CORE = "core"
    PRO = "pro"
    PREVIEW = "preview"

    __str__ = str.__str__


GeneratorOrStr: TypeAlias = Annotated[Generator | str, open_enum_validator(Generator)]
