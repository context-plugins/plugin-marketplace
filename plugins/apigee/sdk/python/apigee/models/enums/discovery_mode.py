from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DiscoveryMode(str, Enum):
    """Output only. Discovery mode of the dependency."""

    DISCOVERY_MODE_UNSPECIFIED = "DISCOVERY_MODE_UNSPECIFIED"
    MANUAL = "MANUAL"

    __str__ = str.__str__


DiscoveryModeOrStr: TypeAlias = Annotated[DiscoveryMode | str, open_enum_validator(DiscoveryMode)]
