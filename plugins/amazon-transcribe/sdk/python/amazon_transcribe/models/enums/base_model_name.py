from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BaseModelName(str, Enum):
    """The Amazon Transcribe standard language model, or base model, used to create your custom language model. Amazon
    Transcribe offers two options for base models: Wideband and Narrowband. If the audio you want to transcribe has a
    sample rate of 16,000 Hz or greater, choose WideBand. To transcribe audio with a sample rate less than 16,000 Hz,
    choose NarrowBand."""

    NARROW_BAND = "NarrowBand"
    WIDE_BAND = "WideBand"

    __str__ = str.__str__


BaseModelNameOrStr: TypeAlias = Annotated[BaseModelName | str, open_enum_validator(BaseModelName)]
