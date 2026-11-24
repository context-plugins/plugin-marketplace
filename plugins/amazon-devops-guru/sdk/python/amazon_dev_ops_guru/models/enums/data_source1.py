from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataSource1(str, Enum):
    """The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, of the events you want returned."""

    AWS_CLOUD_TRAIL = "AWS_CLOUD_TRAIL"
    AWS_CODE_DEPLOY = "AWS_CODE_DEPLOY"

    __str__ = str.__str__


DataSource1OrStr: TypeAlias = Annotated[DataSource1 | str, open_enum_validator(DataSource1)]
