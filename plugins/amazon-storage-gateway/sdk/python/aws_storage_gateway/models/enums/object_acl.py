from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObjectAcl(str, Enum):
    """A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway
    puts objects into. The default value is private."""

    PRIVATE = "private"
    PUBLIC_READ = "public-read"
    PUBLIC_READ_WRITE = "public-read-write"
    AUTHENTICATED_READ = "authenticated-read"
    BUCKET_OWNER_READ = "bucket-owner-read"
    BUCKET_OWNER_FULL_CONTROL = "bucket-owner-full-control"
    AWS_EXEC_READ = "aws-exec-read"

    __str__ = str.__str__


ObjectAclOrStr: TypeAlias = Annotated[ObjectAcl | str, open_enum_validator(ObjectAcl)]
