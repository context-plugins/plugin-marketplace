from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataSource(str, Enum):
    """The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, where DevOps Guru analysis found the event."""

    AWS_CLOUD_TRAIL = "AWS_CLOUD_TRAIL"
    AWS_CODE_DEPLOY = "AWS_CODE_DEPLOY"

    __str__ = str.__str__


DataSourceOrStr: TypeAlias = Annotated[DataSource | str, open_enum_validator(DataSource)]
