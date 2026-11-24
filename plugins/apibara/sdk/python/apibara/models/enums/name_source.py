from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NameSource(str, Enum):
    COPART_SCN = "copart_scn"
    COPART_SN = "copart_sn"
    IAAI_PROVIDER_NAME = "iaai_provider_name"
    UNAVAILABLE = "unavailable"

    __str__ = str.__str__


NameSourceOrStr: TypeAlias = Annotated[NameSource | str, open_enum_validator(NameSource)]
