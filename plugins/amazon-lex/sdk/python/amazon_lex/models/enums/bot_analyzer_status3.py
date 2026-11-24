from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotAnalyzerStatus3(str, Enum):
    """The updated status of the analysis. The status will be Stopping and will eventually transition to Stopped. Valid
    Values: Processing | Available | Failed | Stopping | Stopped"""

    PROCESSING = "Processing"
    AVAILABLE = "Available"
    FAILED = "Failed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"

    __str__ = str.__str__


BotAnalyzerStatus3OrStr: TypeAlias = Annotated[BotAnalyzerStatus3 | str, open_enum_validator(BotAnalyzerStatus3)]
