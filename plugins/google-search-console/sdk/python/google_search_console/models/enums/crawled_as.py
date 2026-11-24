from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CrawledAs(str, Enum):
    """Primary crawler that was used by Google to crawl your site."""

    CRAWLING_USER_AGENT_UNSPECIFIED = "CRAWLING_USER_AGENT_UNSPECIFIED"
    DESKTOP = "DESKTOP"
    MOBILE = "MOBILE"

    __str__ = str.__str__


CrawledAsOrStr: TypeAlias = Annotated[CrawledAs | str, open_enum_validator(CrawledAs)]
