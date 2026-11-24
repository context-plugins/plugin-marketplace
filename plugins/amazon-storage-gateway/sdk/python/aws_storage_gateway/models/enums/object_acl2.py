from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObjectAcl2(str, Enum):
    PRIVATE = "private"
    PUBLIC_READ = "public-read"
    PUBLIC_READ_WRITE = "public-read-write"
    AUTHENTICATED_READ = "authenticated-read"
    BUCKET_OWNER_READ = "bucket-owner-read"
    BUCKET_OWNER_FULL_CONTROL = "bucket-owner-full-control"
    AWS_EXEC_READ = "aws-exec-read"

    __str__ = str.__str__


ObjectAcl2OrStr: TypeAlias = Annotated[ObjectAcl2 | str, open_enum_validator(ObjectAcl2)]
