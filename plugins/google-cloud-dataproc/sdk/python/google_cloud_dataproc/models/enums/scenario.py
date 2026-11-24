from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scenario(str, Enum):
    SCENARIO_UNSPECIFIED = "SCENARIO_UNSPECIFIED"
    SCALING = "SCALING"
    BROADCAST_HASH_JOIN = "BROADCAST_HASH_JOIN"
    MEMORY = "MEMORY"
    NONE = "NONE"
    AUTO = "AUTO"

    __str__ = str.__str__


ScenarioOrStr: TypeAlias = Annotated[Scenario | str, open_enum_validator(Scenario)]
