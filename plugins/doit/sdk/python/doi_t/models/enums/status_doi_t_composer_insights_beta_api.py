from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTComposerInsightsBetaApi(str, Enum):
    """Recipe status, derived from its results and whether it is dismissed. Absent when unavailable."""

    ACTIVE = "active"
    RESOLVED = "resolved"
    DISMISSED = "dismissed"

    __str__ = str.__str__


StatusDoiTComposerInsightsBetaApiOrStr: TypeAlias = Annotated[
    StatusDoiTComposerInsightsBetaApi | str, open_enum_validator(StatusDoiTComposerInsightsBetaApi)
]
