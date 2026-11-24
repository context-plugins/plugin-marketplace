from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusNordicFinancialNewsCompaniesApi(str, Enum):
    """Lifecycle status. ``active``/``closed`` are live (closed = coverage window lapsed but the event stays visible and
    can reopen). ``merged`` = absorbed into another event (see ``merged_into``); ``removed`` = withdrawn from the feed
    (no live articles remain, or it was found to be incorrect). ``merged``/``removed`` never appear in the default list
    and carry only the tombstone fields."""

    ACTIVE = "active"
    CLOSED = "closed"
    MERGED = "merged"
    REMOVED = "removed"

    __str__ = str.__str__


StatusNordicFinancialNewsCompaniesApiOrStr: TypeAlias = Annotated[
    StatusNordicFinancialNewsCompaniesApi | str, open_enum_validator(StatusNordicFinancialNewsCompaniesApi)
]
