from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDeliverdDevAudiencesApi(str, Enum):
    OWNER = "owner"
    USER = "user"
    WORKSPACE = "workspace"
    GROUP = "group"
    ORG = "org"
    GUEST = "guest"
    LINK = "link"
    PUBLIC = "public"
    DOMAIN = "domain"

    __str__ = str.__str__


TypeDeliverdDevAudiencesApiOrStr: TypeAlias = Annotated[
    TypeDeliverdDevAudiencesApi | str, open_enum_validator(TypeDeliverdDevAudiencesApi)
]
