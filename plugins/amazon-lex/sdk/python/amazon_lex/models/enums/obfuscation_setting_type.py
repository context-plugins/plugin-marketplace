from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObfuscationSettingType(str, Enum):
    """Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the
    values."""

    NONE = "None"
    DEFAULT_OBFUSCATION = "DefaultObfuscation"

    __str__ = str.__str__


ObfuscationSettingTypeOrStr: TypeAlias = Annotated[
    ObfuscationSettingType | str, open_enum_validator(ObfuscationSettingType)
]
