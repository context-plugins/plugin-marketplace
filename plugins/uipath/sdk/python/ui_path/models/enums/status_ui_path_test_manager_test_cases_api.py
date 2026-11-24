from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusUiPathTestManagerTestCasesApi(str, Enum):
    """Lifecycle status of the test case"""

    DRAFT = "Draft"
    ACTIVE = "Active"
    DEPRECATED = "Deprecated"

    __str__ = str.__str__


StatusUiPathTestManagerTestCasesApiOrStr: TypeAlias = Annotated[
    StatusUiPathTestManagerTestCasesApi | str, open_enum_validator(StatusUiPathTestManagerTestCasesApi)
]
