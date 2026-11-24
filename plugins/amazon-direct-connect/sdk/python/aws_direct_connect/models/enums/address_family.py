from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AddressFamily(str, Enum):
    """The address family for the BGP peer."""

    IPV4 = "ipv4"
    IPV6 = "ipv6"

    __str__ = str.__str__


AddressFamilyOrStr: TypeAlias = Annotated[AddressFamily | str, open_enum_validator(AddressFamily)]
