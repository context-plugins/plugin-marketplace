from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FormatDeliverdDevTasksApi(str, Enum):
    """The tool that wrote it: deliverd, promptfoo, inspect, garak, weave, braintrust, junit"""

    DELIVERD = "deliverd"
    PROMPTFOO = "promptfoo"
    INSPECT = "inspect"
    GARAK = "garak"
    WEAVE = "weave"
    BRAINTRUST = "braintrust"
    JUNIT = "junit"

    __str__ = str.__str__


FormatDeliverdDevTasksApiOrStr: TypeAlias = Annotated[
    FormatDeliverdDevTasksApi | str, open_enum_validator(FormatDeliverdDevTasksApi)
]
