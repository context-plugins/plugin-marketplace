from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BaseModelName2(str, Enum):
    """The Amazon Transcribe standard language model, or base model, used to create your custom language model."""

    NARROW_BAND = "NarrowBand"
    WIDE_BAND = "WideBand"

    __str__ = str.__str__


BaseModelName2OrStr: TypeAlias = Annotated[BaseModelName2 | str, open_enum_validator(BaseModelName2)]
