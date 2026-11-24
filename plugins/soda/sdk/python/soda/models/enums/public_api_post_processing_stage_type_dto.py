from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicApiPostProcessingStageTypeDto(str, Enum):
    DIAGNOSTIC_WAREHOUSE = "diagnosticWarehouse"

    __str__ = str.__str__


PublicApiPostProcessingStageTypeDtoOrStr: TypeAlias = Annotated[
    PublicApiPostProcessingStageTypeDto | str, open_enum_validator(PublicApiPostProcessingStageTypeDto)
]
