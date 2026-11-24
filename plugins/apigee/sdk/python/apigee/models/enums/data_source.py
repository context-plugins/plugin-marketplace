from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataSource(str, Enum):
    """Required. The data source on which the addon operates. This determines which field in the ``config`` oneof is
    used."""

    DATA_SOURCE_UNSPECIFIED = "DATA_SOURCE_UNSPECIFIED"
    PLUGIN_INSTANCE = "PLUGIN_INSTANCE"
    ALL_DATA = "ALL_DATA"

    __str__ = str.__str__


DataSourceOrStr: TypeAlias = Annotated[DataSource | str, open_enum_validator(DataSource)]
