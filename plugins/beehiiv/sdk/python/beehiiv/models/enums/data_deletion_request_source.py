from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataDeletionRequestSource(str, Enum):
    """The source from which the deletion request was created."""

    ZENDESK = "zendesk"
    RETOOL = "retool"
    WEBSITE = "website"
    APP = "app"
    PUBLIC_API = "public_api"
    OTHER = "other"

    __str__ = str.__str__


DataDeletionRequestSourceOrStr: TypeAlias = Annotated[
    DataDeletionRequestSource | str, open_enum_validator(DataDeletionRequestSource)
]
