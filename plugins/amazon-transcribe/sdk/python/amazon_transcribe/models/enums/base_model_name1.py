from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BaseModelName1(str, Enum):
    """The Amazon Transcribe standard language model, or base model, you specified when creating your custom language
    model."""

    NARROW_BAND = "NarrowBand"
    WIDE_BAND = "WideBand"

    __str__ = str.__str__


BaseModelName1OrStr: TypeAlias = Annotated[BaseModelName1 | str, open_enum_validator(BaseModelName1)]
