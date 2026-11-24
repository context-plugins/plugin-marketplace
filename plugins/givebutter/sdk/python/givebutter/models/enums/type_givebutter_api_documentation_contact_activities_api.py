from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeGivebutterApiDocumentationContactActivitiesApi(str, Enum):
    EMAIL = "email"
    MEETING = "meeting"
    NOTE = "note"
    PHONE_CALL = "phone_call"
    SMS = "sms"
    COMPLETED_TASK = "completed_task"
    VOLUNTEER_ACTIVITY = "volunteer_activity"

    __str__ = str.__str__


TypeGivebutterApiDocumentationContactActivitiesApiOrStr: TypeAlias = Annotated[
    TypeGivebutterApiDocumentationContactActivitiesApi | str,
    open_enum_validator(TypeGivebutterApiDocumentationContactActivitiesApi),
]
