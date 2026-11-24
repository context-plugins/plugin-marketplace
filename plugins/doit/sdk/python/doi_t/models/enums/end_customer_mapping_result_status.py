from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EndCustomerMappingResultStatus(str, Enum):
    MAPPED = "mapped"
    ALREADY_MAPPED = "already_mapped"
    REMAPPED = "remapped"

    __str__ = str.__str__


EndCustomerMappingResultStatusOrStr: TypeAlias = Annotated[
    EndCustomerMappingResultStatus | str, open_enum_validator(EndCustomerMappingResultStatus)
]
