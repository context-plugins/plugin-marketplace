from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StorageClass(str, Enum):
    """The storage class that is associated with the new custom pool. When you use your backup application to eject the
    tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds
    to the pool."""

    DEEP_ARCHIVE = "DEEP_ARCHIVE"
    GLACIER = "GLACIER"

    __str__ = str.__str__


StorageClassOrStr: TypeAlias = Annotated[StorageClass | str, open_enum_validator(StorageClass)]
