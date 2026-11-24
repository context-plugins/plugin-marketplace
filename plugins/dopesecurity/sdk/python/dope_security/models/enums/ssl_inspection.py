from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SslInspection(str, Enum):
    """Effective SSL inspection status for this policy. If SSL inspection is not explicitly configured on this policy,
    the value is inherited from the Base Policy."""

    ENABLED = "enabled"
    DISABLED = "disabled"

    __str__ = str.__str__


SslInspectionOrStr: TypeAlias = Annotated[SslInspection | str, open_enum_validator(SslInspection)]
