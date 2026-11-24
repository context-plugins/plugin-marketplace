from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AddressFamily6(str, Enum):
    """The address family of the route. The valid values are ipv4 and ipv6."""

    IPV4 = "ipv4"
    IPV6 = "ipv6"

    __str__ = str.__str__


AddressFamily6OrStr: TypeAlias = Annotated[AddressFamily6 | str, open_enum_validator(AddressFamily6)]
