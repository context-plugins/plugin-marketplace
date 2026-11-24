from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EffectiveStreamingMode(str, Enum):
    """Output only. The streaming mode this gateway is actually served with, which the service resolves at creation from
    ``streaming_mode``, the referenced API Config, and the platform default at the time. Read this rather than
    ``streaming_mode`` to determine whether a gateway supports streaming."""

    EFFECTIVE_STREAMING_MODE_UNSPECIFIED = "EFFECTIVE_STREAMING_MODE_UNSPECIFIED"
    EFFECTIVE_STREAMING_MODE_DISABLED = "EFFECTIVE_STREAMING_MODE_DISABLED"
    EFFECTIVE_STREAMING_MODE_ENABLED = "EFFECTIVE_STREAMING_MODE_ENABLED"

    __str__ = str.__str__


EffectiveStreamingModeOrStr: TypeAlias = Annotated[
    EffectiveStreamingMode | str, open_enum_validator(EffectiveStreamingMode)
]
