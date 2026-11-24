from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MetastoreType(str, Enum):
    """The type of the backend metastore."""

    METASTORE_TYPE_UNSPECIFIED = "METASTORE_TYPE_UNSPECIFIED"
    BIGQUERY = "BIGQUERY"
    DATAPROC_METASTORE = "DATAPROC_METASTORE"

    __str__ = str.__str__


MetastoreTypeOrStr: TypeAlias = Annotated[MetastoreType | str, open_enum_validator(MetastoreType)]
