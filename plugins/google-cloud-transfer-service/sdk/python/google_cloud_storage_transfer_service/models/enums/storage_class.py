from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StorageClass(str, Enum):
    """Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. If unspecified,
    the default behavior is the same as STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT."""

    STORAGE_CLASS_UNSPECIFIED = "STORAGE_CLASS_UNSPECIFIED"
    STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT = "STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT"
    STORAGE_CLASS_PRESERVE = "STORAGE_CLASS_PRESERVE"
    STORAGE_CLASS_STANDARD = "STORAGE_CLASS_STANDARD"
    STORAGE_CLASS_NEARLINE = "STORAGE_CLASS_NEARLINE"
    STORAGE_CLASS_COLDLINE = "STORAGE_CLASS_COLDLINE"
    STORAGE_CLASS_ARCHIVE = "STORAGE_CLASS_ARCHIVE"

    __str__ = str.__str__


StorageClassOrStr: TypeAlias = Annotated[StorageClass | str, open_enum_validator(StorageClass)]
