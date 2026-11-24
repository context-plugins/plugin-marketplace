from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeCreated(str, Enum):
    """Specifies how each object's ``timeCreated`` metadata is preserved for transfers. If unspecified, the default
    behavior is the same as TIME_CREATED_SKIP. This behavior is supported for transfers to Cloud Storage buckets from
    Cloud Storage, Amazon S3, S3-compatible storage, and Azure sources."""

    TIME_CREATED_UNSPECIFIED = "TIME_CREATED_UNSPECIFIED"
    TIME_CREATED_SKIP = "TIME_CREATED_SKIP"
    TIME_CREATED_PRESERVE_AS_CUSTOM_TIME = "TIME_CREATED_PRESERVE_AS_CUSTOM_TIME"

    __str__ = str.__str__


TimeCreatedOrStr: TypeAlias = Annotated[TimeCreated | str, open_enum_validator(TimeCreated)]
