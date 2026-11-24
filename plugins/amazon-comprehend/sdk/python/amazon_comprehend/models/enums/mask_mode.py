from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MaskMode(str, Enum):
    """Specifies whether the PII entity is redacted with the mask character or the entity type."""

    MASK = "MASK"
    REPLACE_WITH_PII_ENTITY_TYPE = "REPLACE_WITH_PII_ENTITY_TYPE"

    __str__ = str.__str__


MaskModeOrStr: TypeAlias = Annotated[MaskMode | str, open_enum_validator(MaskMode)]
