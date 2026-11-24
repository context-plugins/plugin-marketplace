from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SigningOrderTypeJuriSignTemplatesApi(str, Enum):
    PARALLEL = "parallel"
    SEQUENTIAL = "sequential"

    __str__ = str.__str__


SigningOrderTypeJuriSignTemplatesApiOrStr: TypeAlias = Annotated[
    SigningOrderTypeJuriSignTemplatesApi | str, open_enum_validator(SigningOrderTypeJuriSignTemplatesApi)
]
