from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Env(str, Enum):
    """Key environment: live or sandbox (stay_test_)."""

    LIVE = "live"
    SANDBOX = "sandbox"

    __str__ = str.__str__


EnvOrStr: TypeAlias = Annotated[Env | str, open_enum_validator(Env)]
