from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaskType3(str, Enum):
    """The AI provider for this task."""

    AIMODE = "AIMODE"
    GOOGLE = "GOOGLE"
    GOOGLE_NEWS = "GOOGLE_NEWS"
    GOOGLE_PRODUCT = "GOOGLE_PRODUCT"
    GEMINI = "GEMINI"
    CHATGPT = "CHATGPT"
    COPILOT = "COPILOT"
    PERPLEXITY = "PERPLEXITY"

    __str__ = str.__str__


TaskType3OrStr: TypeAlias = Annotated[TaskType3 | str, open_enum_validator(TaskType3)]
