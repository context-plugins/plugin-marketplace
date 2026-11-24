from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBoomiDataHubModelsApi(str, Enum):
    """Publication status of the model."""

    DRAFT = "DRAFT"
    PUBLISHED = "PUBLISHED"

    __str__ = str.__str__


StatusBoomiDataHubModelsApiOrStr: TypeAlias = Annotated[
    StatusBoomiDataHubModelsApi | str, open_enum_validator(StatusBoomiDataHubModelsApi)
]
