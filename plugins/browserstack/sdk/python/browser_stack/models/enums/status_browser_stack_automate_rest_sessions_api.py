from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBrowserStackAutomateRestSessionsApi(str, Enum):
    PASSED = "passed"
    FAILED = "failed"

    __str__ = str.__str__


StatusBrowserStackAutomateRestSessionsApiOrStr: TypeAlias = Annotated[
    StatusBrowserStackAutomateRestSessionsApi | str, open_enum_validator(StatusBrowserStackAutomateRestSessionsApi)
]
