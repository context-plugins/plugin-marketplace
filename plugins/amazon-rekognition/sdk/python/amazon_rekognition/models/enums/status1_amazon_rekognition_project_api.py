from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1AmazonRekognitionProjectApi(str, Enum):
    """The current status of the delete project operation."""

    CREATING = "CREATING"
    CREATED = "CREATED"
    DELETING = "DELETING"

    __str__ = str.__str__


Status1AmazonRekognitionProjectApiOrStr: TypeAlias = Annotated[
    Status1AmazonRekognitionProjectApi | str, open_enum_validator(Status1AmazonRekognitionProjectApi)
]
