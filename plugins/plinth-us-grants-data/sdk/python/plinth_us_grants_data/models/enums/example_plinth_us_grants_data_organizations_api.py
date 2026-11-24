from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExamplePlinthUsGrantsDataOrganizationsApi(str, Enum):
    _1 = "1"
    CANDID = "candid"
    NOT_FOUND = "not_found"
    TASTER = "taster"
    LIST = "list"

    __str__ = str.__str__


ExamplePlinthUsGrantsDataOrganizationsApiOrStr: TypeAlias = Annotated[
    ExamplePlinthUsGrantsDataOrganizationsApi | str, open_enum_validator(ExamplePlinthUsGrantsDataOrganizationsApi)
]
