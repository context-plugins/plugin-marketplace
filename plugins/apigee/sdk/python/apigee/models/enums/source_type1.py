from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceType1(str, Enum):
    SOURCE_TYPE_UNSPECIFIED = "SOURCE_TYPE_UNSPECIFIED"
    GCP_XLB = "GCP_XLB"
    GCP_ILB = "GCP_ILB"

    __str__ = str.__str__


SourceType1OrStr: TypeAlias = Annotated[SourceType1 | str, open_enum_validator(SourceType1)]
