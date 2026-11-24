from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceType(str, Enum):
    NEWS_PUBLICATION = "news_publication"
    WIRE_SERVICE = "wire_service"
    PRESS_RELEASE = "press_release"
    GOVERNMENT = "government"
    TRADE_PUBLICATION = "trade_publication"
    BLOG = "blog"
    STOCK_EXCHANGE = "stock_exchange"
    RESEARCH = "research"

    __str__ = str.__str__


SourceTypeOrStr: TypeAlias = Annotated[SourceType | str, open_enum_validator(SourceType)]
