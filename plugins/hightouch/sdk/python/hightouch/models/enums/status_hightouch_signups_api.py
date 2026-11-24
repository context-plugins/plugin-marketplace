from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusHightouchSignupsApi(str, Enum):
    SUBSCRIBED = "subscribed"
    DOI_PENDING_CONFIRMATION = "doi_pending_confirmation"

    __str__ = str.__str__


StatusHightouchSignupsApiOrStr: TypeAlias = Annotated[
    StatusHightouchSignupsApi | str, open_enum_validator(StatusHightouchSignupsApi)
]
