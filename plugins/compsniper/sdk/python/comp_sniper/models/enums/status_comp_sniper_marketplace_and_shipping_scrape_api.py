from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusCompSniperMarketplaceAndShippingScrapeApi(str, Enum):
    QUEUED = "queued"
    RUNNING = "running"
    DONE = "done"
    MAX_PAGES_REACHED = "maxPages_reached"
    CANCELLED = "cancelled"
    FAILED = "failed"

    __str__ = str.__str__


StatusCompSniperMarketplaceAndShippingScrapeApiOrStr: TypeAlias = Annotated[
    StatusCompSniperMarketplaceAndShippingScrapeApi | str,
    open_enum_validator(StatusCompSniperMarketplaceAndShippingScrapeApi),
]
