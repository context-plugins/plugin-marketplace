from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CloudProvider1(str, Enum):
    AWS = "aws"
    GCP = "gcp"

    __str__ = str.__str__


CloudProvider1OrStr: TypeAlias = Annotated[CloudProvider1 | str, open_enum_validator(CloudProvider1)]
