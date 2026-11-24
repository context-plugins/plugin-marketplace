from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Require2Fa(str, Enum):
    """Two-factor authentication requirement for this organization. Possible values: "none", "sms". Omitted when no auth
    requirements are configured."""

    NONE = "none"
    SMS = "sms"

    __str__ = str.__str__


Require2FaOrStr: TypeAlias = Annotated[Require2Fa | str, open_enum_validator(Require2Fa)]
