from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RenewalPolicy(str, Enum):
    """The renewal policy."""

    AUTO = "auto"
    MANUAL = "manual"
    FIXED = "fixed"

    __str__ = str.__str__


RenewalPolicyOrStr: TypeAlias = Annotated[RenewalPolicy | str, open_enum_validator(RenewalPolicy)]
