from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IntrospectionStatus(str, Enum):
    """The status of the introspection during retrieval. By default, when a new instrospection is being retrieved, the
    status will be set to PROCESSING. Once the operation has been completed, the status will change to SUCCESS or FAILED
    depending on how the data was parsed. A FAILED operation will return an error and its details as an
    introspectionStatusDetail."""

    PROCESSING = "PROCESSING"
    FAILED = "FAILED"
    SUCCESS = "SUCCESS"

    __str__ = str.__str__


IntrospectionStatusOrStr: TypeAlias = Annotated[IntrospectionStatus | str, open_enum_validator(IntrospectionStatus)]
