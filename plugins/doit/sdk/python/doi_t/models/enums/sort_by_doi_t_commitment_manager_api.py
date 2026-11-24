from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByDoiTCommitmentManagerApi(str, Enum):
    NAME = "name"
    START_DATE = "startDate"
    END_DATE = "endDate"
    PROVIDER = "provider"
    CREATE_TIME = "createTime"
    UPDATE_TIME = "updateTime"

    __str__ = str.__str__


SortByDoiTCommitmentManagerApiOrStr: TypeAlias = Annotated[
    SortByDoiTCommitmentManagerApi | str, open_enum_validator(SortByDoiTCommitmentManagerApi)
]
