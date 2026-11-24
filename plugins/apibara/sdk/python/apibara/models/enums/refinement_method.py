from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RefinementMethod(str, Enum):
    """Optional high/low-trim refinement. engine_mileage is preferred when at least 5 final-sale comparables exist in
    the target engine+mileage band; engine is the fallback when at least 5 engine-matched final sales exist."""

    ENGINE_MILEAGE = "engine_mileage"
    ENGINE = "engine"

    __str__ = str.__str__


RefinementMethodOrStr: TypeAlias = Annotated[RefinementMethod | str, open_enum_validator(RefinementMethod)]
