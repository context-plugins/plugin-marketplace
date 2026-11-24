from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusInstacartCatalogItemsApi(str, Enum):
    """The current status of the submission."""

    ACCEPTED = "accepted"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


StatusInstacartCatalogItemsApiOrStr: TypeAlias = Annotated[
    StatusInstacartCatalogItemsApi | str, open_enum_validator(StatusInstacartCatalogItemsApi)
]
