from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Visibility(str, Enum):
    """Deprecated. The job is only visible to the owner. The visibility of the job. Defaults to Visibility.ACCOUNT_ONLY
    if not specified."""

    VISIBILITY_UNSPECIFIED = "VISIBILITY_UNSPECIFIED"
    ACCOUNT_ONLY = "ACCOUNT_ONLY"
    SHARED_WITH_GOOGLE = "SHARED_WITH_GOOGLE"
    SHARED_WITH_PUBLIC = "SHARED_WITH_PUBLIC"

    __str__ = str.__str__


VisibilityOrStr: TypeAlias = Annotated[Visibility | str, open_enum_validator(Visibility)]
