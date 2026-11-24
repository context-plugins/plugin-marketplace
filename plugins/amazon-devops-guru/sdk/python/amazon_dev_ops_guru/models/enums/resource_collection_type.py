from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResourceCollectionType(str, Enum):
    AWS_CLOUD_FORMATION = "AWS_CLOUD_FORMATION"
    AWS_SERVICE = "AWS_SERVICE"
    AWS_TAGS = "AWS_TAGS"

    __str__ = str.__str__


ResourceCollectionTypeOrStr: TypeAlias = Annotated[
    ResourceCollectionType | str, open_enum_validator(ResourceCollectionType)
]
