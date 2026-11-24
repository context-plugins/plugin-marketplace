from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NotificationRecipientTypeDto(str, Enum):
    EMAIL = "email"
    USER = "user"
    USER_GROUP = "userGroup"
    INTEGRATION = "integration"
    RESOURCE_ROLE = "resourceRole"
    CUSTOM_ROLE = "customRole"

    __str__ = str.__str__


NotificationRecipientTypeDtoOrStr: TypeAlias = Annotated[
    NotificationRecipientTypeDto | str, open_enum_validator(NotificationRecipientTypeDto)
]
