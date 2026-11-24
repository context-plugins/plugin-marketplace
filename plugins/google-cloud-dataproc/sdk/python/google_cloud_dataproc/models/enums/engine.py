from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Engine(str, Enum):
    """Optional. The cluster engine."""

    ENGINE_UNSPECIFIED = "ENGINE_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    LIGHTNING = "LIGHTNING"

    __str__ = str.__str__


EngineOrStr: TypeAlias = Annotated[Engine | str, open_enum_validator(Engine)]
