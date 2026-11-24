from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotAnalyzerStatus2(str, Enum):
    """The current status of the analysis. The initial status is Processing. Valid Values: Processing | Available |
    Failed | Stopping | Stopped"""

    PROCESSING = "Processing"
    AVAILABLE = "Available"
    FAILED = "Failed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"

    __str__ = str.__str__


BotAnalyzerStatus2OrStr: TypeAlias = Annotated[BotAnalyzerStatus2 | str, open_enum_validator(BotAnalyzerStatus2)]
