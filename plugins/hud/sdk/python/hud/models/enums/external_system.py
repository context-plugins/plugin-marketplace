from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExternalSystem(str, Enum):
    """A system HUD imports environments and runs from."""

    HARBOR = "harbor"

    __str__ = str.__str__


ExternalSystemOrStr: TypeAlias = Annotated[ExternalSystem | str, open_enum_validator(ExternalSystem)]
