from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObfuscationSettingAmazonLexModelBuildingV2VersionsApi(str, Enum):
    """Determines whether a slot is obfuscated in conversation logs and stored utterances. When you obfuscate a slot,
    the value is replaced by the slot name in curly braces ({}). For example, if the slot name is "full_name",
    obfuscated values are replaced with "{full_name}". For more information, see Slot Obfuscation ."""

    NONE = "NONE"
    DEFAULT_OBFUSCATION = "DEFAULT_OBFUSCATION"

    __str__ = str.__str__


ObfuscationSettingAmazonLexModelBuildingV2VersionsApiOrStr: TypeAlias = Annotated[
    ObfuscationSettingAmazonLexModelBuildingV2VersionsApi | str,
    open_enum_validator(ObfuscationSettingAmazonLexModelBuildingV2VersionsApi),
]
