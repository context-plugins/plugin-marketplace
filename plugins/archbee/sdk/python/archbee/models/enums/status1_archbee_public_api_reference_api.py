from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1ArchbeePublicApiReferenceApi(str, Enum):
    """Response Status"""

    OK = "OK"
    NOT_OK = "Not OK"

    __str__ = str.__str__


Status1ArchbeePublicApiReferenceApiOrStr: TypeAlias = Annotated[
    Status1ArchbeePublicApiReferenceApi | str, open_enum_validator(Status1ArchbeePublicApiReferenceApi)
]
