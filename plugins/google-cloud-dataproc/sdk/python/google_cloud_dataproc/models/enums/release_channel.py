from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReleaseChannel(str, Enum):
    """Immutable. The release channel of the service. If unspecified, defaults to STABLE."""

    RELEASE_CHANNEL_UNSPECIFIED = "RELEASE_CHANNEL_UNSPECIFIED"
    CANARY = "CANARY"
    STABLE = "STABLE"

    __str__ = str.__str__


ReleaseChannelOrStr: TypeAlias = Annotated[ReleaseChannel | str, open_enum_validator(ReleaseChannel)]
