from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CheckExecutorType(str, Enum):
    """Execution mechanisms supported by a check definition."""

    DETERMINISTIC = "deterministic"
    SCENARIO_AGENT = "scenario_agent"

    __str__ = str.__str__


CheckExecutorTypeOrStr: TypeAlias = Annotated[CheckExecutorType | str, open_enum_validator(CheckExecutorType)]
