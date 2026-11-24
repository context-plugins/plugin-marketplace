from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaskType1(str, Enum):
    """The AI provider for this task."""

    AIMODE = "AIMODE"
    GOOGLE = "GOOGLE"
    GOOGLE_NEWS = "GOOGLE_NEWS"
    GEMINI = "GEMINI"
    CHATGPT = "CHATGPT"
    COPILOT = "COPILOT"
    PERPLEXITY = "PERPLEXITY"
    GROK = "GROK"

    __str__ = str.__str__


TaskType1OrStr: TypeAlias = Annotated[TaskType1 | str, open_enum_validator(TaskType1)]
