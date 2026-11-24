from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Acl(str, Enum):
    """Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. If
    unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT."""

    ACL_UNSPECIFIED = "ACL_UNSPECIFIED"
    ACL_DESTINATION_BUCKET_DEFAULT = "ACL_DESTINATION_BUCKET_DEFAULT"
    ACL_PRESERVE = "ACL_PRESERVE"

    __str__ = str.__str__


AclOrStr: TypeAlias = Annotated[Acl | str, open_enum_validator(Acl)]
