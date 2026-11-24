from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SeverityApigeeProjectsApi(str, Enum):
    """Required. Severity level of the rule violation."""

    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    SEVERITY_ERROR = "SEVERITY_ERROR"
    SEVERITY_WARNING = "SEVERITY_WARNING"
    SEVERITY_INFO = "SEVERITY_INFO"
    SEVERITY_HINT = "SEVERITY_HINT"

    __str__ = str.__str__


SeverityApigeeProjectsApiOrStr: TypeAlias = Annotated[
    SeverityApigeeProjectsApi | str, open_enum_validator(SeverityApigeeProjectsApi)
]
