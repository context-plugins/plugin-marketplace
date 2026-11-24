from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpecContentType1(str, Enum):
    SPEC_CONTENT_TYPE_UNSPECIFIED = "SPEC_CONTENT_TYPE_UNSPECIFIED"
    BOOSTED_SPEC_CONTENT = "BOOSTED_SPEC_CONTENT"
    GATEWAY_OPEN_API_SPEC = "GATEWAY_OPEN_API_SPEC"

    __str__ = str.__str__


SpecContentType1OrStr: TypeAlias = Annotated[SpecContentType1 | str, open_enum_validator(SpecContentType1)]
