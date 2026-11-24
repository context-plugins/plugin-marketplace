from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OptInStatus1(str, Enum):
    """Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log groups."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


OptInStatus1OrStr: TypeAlias = Annotated[OptInStatus1 | str, open_enum_validator(OptInStatus1)]
