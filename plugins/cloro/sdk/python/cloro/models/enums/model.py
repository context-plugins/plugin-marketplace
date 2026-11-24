from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Model(str, Enum):
    AIMODE = "aimode"
    AIOVERVIEW = "aioverview"
    CHATGPT = "chatgpt"
    COPILOT = "copilot"
    GEMINI = "gemini"
    GOOGLE = "google"
    GROK = "grok"
    PERPLEXITY = "perplexity"

    __str__ = str.__str__


ModelOrStr: TypeAlias = Annotated[Model | str, open_enum_validator(Model)]
