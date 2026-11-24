from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NotificationRecipientRoleDto(str, Enum):
    DATASET_OWNER = "datasetOwner"
    MONITOR_OWNER = "monitorOwner"

    __str__ = str.__str__


NotificationRecipientRoleDtoOrStr: TypeAlias = Annotated[
    NotificationRecipientRoleDto | str, open_enum_validator(NotificationRecipientRoleDto)
]
