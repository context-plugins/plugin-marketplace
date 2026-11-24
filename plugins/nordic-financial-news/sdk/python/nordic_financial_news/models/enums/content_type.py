from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentType(str, Enum):
    """Type of article content"""

    NEWS = "news"
    ANALYSIS = "analysis"
    PRESS_RELEASE = "press_release"
    MARKET_COMMENTARY = "market_commentary"
    MARKET_NEWS = "market_news"
    TRADING_HALT = "trading_halt"
    TRADING_EVENT = "trading_event"
    OTHER = "other"

    __str__ = str.__str__


ContentTypeOrStr: TypeAlias = Annotated[ContentType | str, open_enum_validator(ContentType)]
