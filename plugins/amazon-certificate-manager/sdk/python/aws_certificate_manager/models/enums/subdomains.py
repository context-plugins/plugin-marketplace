from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Subdomains(str, Enum):
    """Whether validation applies to subdomains."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


SubdomainsOrStr: TypeAlias = Annotated[Subdomains | str, open_enum_validator(Subdomains)]
