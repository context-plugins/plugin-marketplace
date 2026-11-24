from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Processor(str, Enum):
    """Processor to use for the monitor. ``lite`` is faster and cheaper; ``base`` performs more thorough analysis at
    higher cost and latency. Defaults to ``lite``."""

    LITE = "lite"
    BASE = "base"

    __str__ = str.__str__


ProcessorOrStr: TypeAlias = Annotated[Processor | str, open_enum_validator(Processor)]
