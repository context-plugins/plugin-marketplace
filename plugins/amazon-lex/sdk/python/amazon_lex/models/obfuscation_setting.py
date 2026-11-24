from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.obfuscation_setting_type import ObfuscationSettingTypeOrStr


class ObfuscationSetting(SdkBaseModel):
    obfuscation_setting_type: ObfuscationSettingTypeOrStr = Field(alias="obfuscationSettingType")
    """Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the
    values."""


class ObfuscationSettingDict(TypedDict):
    obfuscation_setting_type: ObfuscationSettingTypeOrStr
