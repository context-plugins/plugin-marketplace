from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HasLogicalRedundancy1(str, Enum):
    """Indicates whether the interconnect supports a secondary BGP in the same address family (IPv4/IPv6)."""

    UNKNOWN = "unknown"
    YES = "yes"
    NO = "no"

    __str__ = str.__str__


HasLogicalRedundancy1OrStr: TypeAlias = Annotated[
    HasLogicalRedundancy1 | str, open_enum_validator(HasLogicalRedundancy1)
]
