from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Model(str, Enum):
    """The underlying LLM model to use for generation."""

    GPT_5_4_MINI = "gpt-5.4-mini"
    GPT_5_4_NANO = "gpt-5.4-nano"
    GPT_5_MINI = "gpt-5-mini"
    GPT_5_NANO = "gpt-5-nano"
    GPT_4O = "gpt-4o"
    GPT_4O_MINI = "gpt-4o-mini"
    GPT_4_1 = "gpt-4.1"
    GPT_4_1_MINI = "gpt-4.1-mini"
    OPENAI_GPT_OSS_120B = "openai/gpt-oss-120b"

    __str__ = str.__str__


ModelOrStr: TypeAlias = Annotated[Model | str, open_enum_validator(Model)]
