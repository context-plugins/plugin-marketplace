from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UserStatus1AmazonRekognitionUserApi(str, Enum):
    """The status of the user matched to a provided FaceID."""

    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    CREATING = "CREATING"
    CREATED = "CREATED"

    __str__ = str.__str__


UserStatus1AmazonRekognitionUserApiOrStr: TypeAlias = Annotated[
    UserStatus1AmazonRekognitionUserApi | str, open_enum_validator(UserStatus1AmazonRekognitionUserApi)
]
