from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusConnectionsApi(str, Enum):
    """Connection status, available only for SERVER_SCOPE."""

    ACTIVE = "active"
    PENDING = "pending"
    INVALID = "invalid"
    PRE_INIT = "pre-init"

    __str__ = str.__str__


StatusConnectionsApiOrStr: TypeAlias = Annotated[StatusConnectionsApi | str, open_enum_validator(StatusConnectionsApi)]
