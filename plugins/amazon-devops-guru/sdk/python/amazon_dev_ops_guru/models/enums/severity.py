from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Severity(str, Enum):
    """The severity of the anomaly. The severity of anomalies that generate an insight determine that insight's
    severity. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide."""

    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

    __str__ = str.__str__


SeverityOrStr: TypeAlias = Annotated[Severity | str, open_enum_validator(Severity)]
