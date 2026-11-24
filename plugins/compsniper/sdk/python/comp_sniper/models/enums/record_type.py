from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RecordType(str, Enum):
    SINGLE_UNIT_LISTING = "single_unit_listing"
    LISTING_AGGREGATE = "listing_aggregate"

    __str__ = str.__str__


RecordTypeOrStr: TypeAlias = Annotated[RecordType | str, open_enum_validator(RecordType)]
