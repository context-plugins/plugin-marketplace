from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindHudPlatformQaAgentsApi(str, Enum):
    SCENARIO_SETUP = "scenario_setup"
    SCENARIO_EVALUATE = "scenario_evaluate"

    __str__ = str.__str__


KindHudPlatformQaAgentsApiOrStr: TypeAlias = Annotated[
    KindHudPlatformQaAgentsApi | str, open_enum_validator(KindHudPlatformQaAgentsApi)
]
