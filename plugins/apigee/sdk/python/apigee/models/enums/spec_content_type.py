from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpecContentType(str, Enum):
    """Required. The type of the spec content."""

    SPEC_CONTENT_TYPE_UNSPECIFIED = "SPEC_CONTENT_TYPE_UNSPECIFIED"
    BOOSTED_SPEC_CONTENT = "BOOSTED_SPEC_CONTENT"
    GATEWAY_OPEN_API_SPEC = "GATEWAY_OPEN_API_SPEC"

    __str__ = str.__str__


SpecContentTypeOrStr: TypeAlias = Annotated[SpecContentType | str, open_enum_validator(SpecContentType)]
