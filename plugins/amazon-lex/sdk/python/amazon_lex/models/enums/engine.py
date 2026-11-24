from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Engine(str, Enum):
    """Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more
    information, see the engine parameter of the SynthesizeSpeech operation in the Amazon Polly developer guide. If you
    do not specify a value, the default is standard."""

    STANDARD = "standard"
    NEURAL = "neural"
    LONG_FORM = "long-form"
    GENERATIVE = "generative"

    __str__ = str.__str__


EngineOrStr: TypeAlias = Annotated[Engine | str, open_enum_validator(Engine)]
