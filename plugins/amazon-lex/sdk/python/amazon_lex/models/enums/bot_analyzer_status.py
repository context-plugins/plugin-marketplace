from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotAnalyzerStatus(str, Enum):
    """The status of the historical analysis execution. Valid Values: Processing | Available | Failed | Stopping |
    Stopped"""

    PROCESSING = "Processing"
    AVAILABLE = "Available"
    FAILED = "Failed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"

    __str__ = str.__str__


BotAnalyzerStatusOrStr: TypeAlias = Annotated[BotAnalyzerStatus | str, open_enum_validator(BotAnalyzerStatus)]
