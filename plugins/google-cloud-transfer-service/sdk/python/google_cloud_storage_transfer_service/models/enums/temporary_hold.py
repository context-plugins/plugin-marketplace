from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TemporaryHold(str, Enum):
    """Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage
    buckets. If unspecified, the default behavior is the same as TEMPORARY_HOLD_PRESERVE."""

    TEMPORARY_HOLD_UNSPECIFIED = "TEMPORARY_HOLD_UNSPECIFIED"
    TEMPORARY_HOLD_SKIP = "TEMPORARY_HOLD_SKIP"
    TEMPORARY_HOLD_PRESERVE = "TEMPORARY_HOLD_PRESERVE"

    __str__ = str.__str__


TemporaryHoldOrStr: TypeAlias = Annotated[TemporaryHold | str, open_enum_validator(TemporaryHold)]
