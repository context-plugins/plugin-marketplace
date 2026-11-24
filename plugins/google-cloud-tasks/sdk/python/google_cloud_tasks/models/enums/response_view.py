from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResponseView(str, Enum):
    """The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all
    information is retrieved by default because some data, such as payloads, might be desirable to return only when
    needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL
    requires ``cloudtasks.tasks.fullView`` `Google IAM <https://cloud.google.com/iam/>`__ permission on the Task
    resource."""

    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"

    __str__ = str.__str__


ResponseViewOrStr: TypeAlias = Annotated[ResponseView | str, open_enum_validator(ResponseView)]
