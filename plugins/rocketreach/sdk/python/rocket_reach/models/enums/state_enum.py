from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateEnum(str, Enum):
    ANONYMOUS = "anonymous"
    TEST_USER = "test_user"
    REGISTERED = "registered"

    __str__ = str.__str__


StateEnumOrStr: TypeAlias = Annotated[StateEnum | str, open_enum_validator(StateEnum)]
