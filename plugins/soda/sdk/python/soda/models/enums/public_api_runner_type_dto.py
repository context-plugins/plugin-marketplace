from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicApiRunnerTypeDto(str, Enum):
    SELF_HOSTED = "SELF_HOSTED"
    SODA_HOSTED = "SODA_HOSTED"

    __str__ = str.__str__


PublicApiRunnerTypeDtoOrStr: TypeAlias = Annotated[
    PublicApiRunnerTypeDto | str, open_enum_validator(PublicApiRunnerTypeDto)
]
