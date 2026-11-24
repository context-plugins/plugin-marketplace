from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonRekognitionProjectApi(str, Enum):
    """The status for the dataset."""

    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS"
    CREATE_COMPLETE = "CREATE_COMPLETE"
    CREATE_FAILED = "CREATE_FAILED"
    UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"
    UPDATE_COMPLETE = "UPDATE_COMPLETE"
    UPDATE_FAILED = "UPDATE_FAILED"
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS"

    __str__ = str.__str__


StatusAmazonRekognitionProjectApiOrStr: TypeAlias = Annotated[
    StatusAmazonRekognitionProjectApi | str, open_enum_validator(StatusAmazonRekognitionProjectApi)
]
