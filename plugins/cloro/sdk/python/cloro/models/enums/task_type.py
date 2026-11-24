from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaskType(str, Enum):
    """The AI provider to use for this task."""

    AIMODE = "AIMODE"
    GOOGLE = "GOOGLE"
    GOOGLE_NEWS = "GOOGLE_NEWS"
    GEMINI = "GEMINI"
    CHATGPT = "CHATGPT"
    COPILOT = "COPILOT"
    PERPLEXITY = "PERPLEXITY"
    GROK = "GROK"

    __str__ = str.__str__


TaskTypeOrStr: TypeAlias = Annotated[TaskType | str, open_enum_validator(TaskType)]
