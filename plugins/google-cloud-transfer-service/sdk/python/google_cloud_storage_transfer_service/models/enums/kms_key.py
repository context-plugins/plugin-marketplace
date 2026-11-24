from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KmsKey(str, Enum):
    """Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between
    Google Cloud Storage buckets. If unspecified, the default behavior is the same as
    KMS_KEY_DESTINATION_BUCKET_DEFAULT."""

    KMS_KEY_UNSPECIFIED = "KMS_KEY_UNSPECIFIED"
    KMS_KEY_DESTINATION_BUCKET_DEFAULT = "KMS_KEY_DESTINATION_BUCKET_DEFAULT"
    KMS_KEY_PRESERVE = "KMS_KEY_PRESERVE"

    __str__ = str.__str__


KmsKeyOrStr: TypeAlias = Annotated[KmsKey | str, open_enum_validator(KmsKey)]
