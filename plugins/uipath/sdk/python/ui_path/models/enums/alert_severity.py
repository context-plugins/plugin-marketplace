from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AlertSeverity(str, Enum):
    """Severity level of the alert"""

    INFO = "Info"
    WARN = "Warn"
    ERROR = "Error"
    FATAL = "Fatal"

    __str__ = str.__str__


AlertSeverityOrStr: TypeAlias = Annotated[AlertSeverity | str, open_enum_validator(AlertSeverity)]
