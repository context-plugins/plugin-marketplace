from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HasLogicalRedundancy(str, Enum):
    """Indicates whether the connection supports a secondary BGP peer in the same address family (IPv4/IPv6)."""

    UNKNOWN = "unknown"
    YES = "yes"
    NO = "no"

    __str__ = str.__str__


HasLogicalRedundancyOrStr: TypeAlias = Annotated[HasLogicalRedundancy | str, open_enum_validator(HasLogicalRedundancy)]
