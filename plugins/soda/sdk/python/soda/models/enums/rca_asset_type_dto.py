from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RcaAssetTypeDto(str, Enum):
    DATASET = "dataset"
    DATASOURCE = "datasource"

    __str__ = str.__str__


RcaAssetTypeDtoOrStr: TypeAlias = Annotated[RcaAssetTypeDto | str, open_enum_validator(RcaAssetTypeDto)]
