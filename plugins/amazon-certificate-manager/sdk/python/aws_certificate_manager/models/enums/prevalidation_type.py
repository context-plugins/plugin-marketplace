from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PrevalidationType(str, Enum):
    """The type of prevalidation used."""

    DNS_PREVALIDATION = "DNS_PREVALIDATION"

    __str__ = str.__str__


PrevalidationTypeOrStr: TypeAlias = Annotated[PrevalidationType | str, open_enum_validator(PrevalidationType)]
