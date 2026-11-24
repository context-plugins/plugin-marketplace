from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateApigeeProjectsApi(str, Enum):
    """Required. Lint state represents success or failure for linting."""

    LINT_STATE_UNSPECIFIED = "LINT_STATE_UNSPECIFIED"
    LINT_STATE_SUCCESS = "LINT_STATE_SUCCESS"
    LINT_STATE_ERROR = "LINT_STATE_ERROR"

    __str__ = str.__str__


StateApigeeProjectsApiOrStr: TypeAlias = Annotated[
    StateApigeeProjectsApi | str, open_enum_validator(StateApigeeProjectsApi)
]
