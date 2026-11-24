from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderByBundleSocialPostApi(str, Enum):
    CREATED_AT = "createdAt"
    UPDATED_AT = "updatedAt"
    POST_DATE = "postDate"
    POSTED_DATE = "postedDate"
    DELETED_AT = "deletedAt"

    __str__ = str.__str__


OrderByBundleSocialPostApiOrStr: TypeAlias = Annotated[
    OrderByBundleSocialPostApi | str, open_enum_validator(OrderByBundleSocialPostApi)
]
