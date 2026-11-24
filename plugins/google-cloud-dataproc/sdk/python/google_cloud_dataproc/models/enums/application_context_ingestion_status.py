from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApplicationContextIngestionStatus(str, Enum):
    APPLICATION_CONTEXT_INGESTION_STATUS_UNSPECIFIED = "APPLICATION_CONTEXT_INGESTION_STATUS_UNSPECIFIED"
    APPLICATION_CONTEXT_INGESTION_STATUS_COMPLETED = "APPLICATION_CONTEXT_INGESTION_STATUS_COMPLETED"

    __str__ = str.__str__


ApplicationContextIngestionStatusOrStr: TypeAlias = Annotated[
    ApplicationContextIngestionStatus | str, open_enum_validator(ApplicationContextIngestionStatus)
]
