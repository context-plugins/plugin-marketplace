from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RuntimeProvider(str, Enum):
    HUD = "hud"
    MODAL = "modal"

    __str__ = str.__str__


RuntimeProviderOrStr: TypeAlias = Annotated[RuntimeProvider | str, open_enum_validator(RuntimeProvider)]
