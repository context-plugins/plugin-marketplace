from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UserStatusAmazonRekognitionUserApi(str, Enum):
    """Communicates if the UserID has been updated with latest set of faces to be associated with the UserID."""

    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    CREATING = "CREATING"
    CREATED = "CREATED"

    __str__ = str.__str__


UserStatusAmazonRekognitionUserApiOrStr: TypeAlias = Annotated[
    UserStatusAmazonRekognitionUserApi | str, open_enum_validator(UserStatusAmazonRekognitionUserApi)
]
