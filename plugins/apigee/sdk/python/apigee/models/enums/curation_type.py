from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CurationType(str, Enum):
    """Required. The curation type for this plugin instance."""

    CURATION_TYPE_UNSPECIFIED = "CURATION_TYPE_UNSPECIFIED"
    DEFAULT_CURATION_FOR_API_METADATA = "DEFAULT_CURATION_FOR_API_METADATA"
    CUSTOM_CURATION_FOR_API_METADATA = "CUSTOM_CURATION_FOR_API_METADATA"

    __str__ = str.__str__


CurationTypeOrStr: TypeAlias = Annotated[CurationType | str, open_enum_validator(CurationType)]
