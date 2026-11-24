from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaskType4(str, Enum):
    """The AI provider to use for this task."""

    AIMODE = "AIMODE"
    BING_AIMODE = "BING_AIMODE"
    GOOGLE = "GOOGLE"
    GOOGLE_NEWS = "GOOGLE_NEWS"
    GOOGLE_PRODUCT = "GOOGLE_PRODUCT"
    GEMINI = "GEMINI"
    CHATGPT = "CHATGPT"

    __str__ = str.__str__


TaskType4OrStr: TypeAlias = Annotated[TaskType4 | str, open_enum_validator(TaskType4)]
