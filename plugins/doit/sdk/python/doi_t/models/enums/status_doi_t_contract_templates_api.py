from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTContractTemplatesApi(str, Enum):
    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


StatusDoiTContractTemplatesApiOrStr: TypeAlias = Annotated[
    StatusDoiTContractTemplatesApi | str, open_enum_validator(StatusDoiTContractTemplatesApi)
]
