from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RelationalDatabaseSourceType(str, Enum):
    """Source type for the relational database. RDS_HTTP_ENDPOINT: The relational database source type is an Amazon
    Relational Database Service (Amazon RDS) HTTP endpoint."""

    RDS_HTTP_ENDPOINT = "RDS_HTTP_ENDPOINT"

    __str__ = str.__str__


RelationalDatabaseSourceTypeOrStr: TypeAlias = Annotated[
    RelationalDatabaseSourceType | str, open_enum_validator(RelationalDatabaseSourceType)
]
