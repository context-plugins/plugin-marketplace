from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """Optional. The reason for the feedback."""

    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    INTERNAL_SYSTEM = "INTERNAL_SYSTEM"
    NON_RISK_CLIENT = "NON_RISK_CLIENT"
    NAT = "NAT"
    PENETRATION_TEST = "PENETRATION_TEST"
    OTHER = "OTHER"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
