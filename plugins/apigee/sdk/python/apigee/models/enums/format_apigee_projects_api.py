from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FormatApigeeProjectsApi(str, Enum):
    """Output only. The format of the spec."""

    FORMAT_UNSPECIFIED = "FORMAT_UNSPECIFIED"
    OPEN_API_SPEC_2_0 = "OPEN_API_SPEC_2_0"
    OPEN_API_SPEC_3_0 = "OPEN_API_SPEC_3_0"
    OPEN_API_SPEC_3_1 = "OPEN_API_SPEC_3_1"

    __str__ = str.__str__


FormatApigeeProjectsApiOrStr: TypeAlias = Annotated[
    FormatApigeeProjectsApi | str, open_enum_validator(FormatApigeeProjectsApi)
]
