from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModeBrowserUsePublicApiV4WalletsApi(str, Enum):
    TEST = "test"
    LIVE = "live"

    __str__ = str.__str__


ModeBrowserUsePublicApiV4WalletsApiOrStr: TypeAlias = Annotated[
    ModeBrowserUsePublicApiV4WalletsApi | str, open_enum_validator(ModeBrowserUsePublicApiV4WalletsApi)
]
