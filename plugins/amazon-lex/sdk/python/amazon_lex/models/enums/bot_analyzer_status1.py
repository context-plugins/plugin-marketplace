from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotAnalyzerStatus1(str, Enum):
    """The current status of the analysis. Valid Values: Processing | Available | Failed | Stopping | Stopped"""

    PROCESSING = "Processing"
    AVAILABLE = "Available"
    FAILED = "Failed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"

    __str__ = str.__str__


BotAnalyzerStatus1OrStr: TypeAlias = Annotated[BotAnalyzerStatus1 | str, open_enum_validator(BotAnalyzerStatus1)]
