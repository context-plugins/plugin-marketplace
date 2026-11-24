from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    CARRIER_PACKAGING = "carrier_packaging"
    ELIGIBLE_CONTENTS = "eligible_contents"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
