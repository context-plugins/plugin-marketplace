from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sampler(str, Enum):
    """Sampler of distributed tracing. OFF is the default value."""

    SAMPLER_UNSPECIFIED = "SAMPLER_UNSPECIFIED"
    OFF = "OFF"
    PROBABILITY = "PROBABILITY"

    __str__ = str.__str__


SamplerOrStr: TypeAlias = Annotated[Sampler | str, open_enum_validator(Sampler)]
