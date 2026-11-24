from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaskType5(str, Enum):
    """The AI provider for this task."""

    AIMODE = "AIMODE"
    BING_AIMODE = "BING_AIMODE"
    GOOGLE = "GOOGLE"
    GOOGLE_NEWS = "GOOGLE_NEWS"
    GOOGLE_PRODUCT = "GOOGLE_PRODUCT"
    GEMINI = "GEMINI"
    CHATGPT = "CHATGPT"

    __str__ = str.__str__


TaskType5OrStr: TypeAlias = Annotated[TaskType5 | str, open_enum_validator(TaskType5)]
