from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .multiple_values_setting import MultipleValuesSetting, MultipleValuesSettingDict
from .obfuscation_setting import ObfuscationSetting, ObfuscationSettingDict
from .slot_value_elicitation_setting import SlotValueElicitationSetting, SlotValueElicitationSettingDict
from .sub_slot_setting import SubSlotSetting, SubSlotSettingDict


class UpdateSlotRequest(SdkBaseModel):
    slot_id: str = Field(alias="slotId")
    """The unique identifier for the slot to update."""

    slot_name: str = Field(alias="slotName")
    """The new name for the slot."""

    description: Optional[str] = UNSET
    """The new description for the slot."""

    slot_type_id: Optional[str] = Field(default=UNSET, alias="slotTypeId")
    """The unique identifier of the new slot type to associate with this slot."""

    value_elicitation_setting: SlotValueElicitationSetting = Field(alias="valueElicitationSetting")
    obfuscation_setting: Optional[ObfuscationSetting] = Field(default=UNSET, alias="obfuscationSetting")
    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot that contains the slot."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that contains the slot. Must always be DRAFT."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale that contains the slot. The string must match one of the supported
    locales. For more information, see Supported languages."""

    intent_id: str = Field(alias="intentId")
    """The identifier of the intent that contains the slot."""

    multiple_values_setting: Optional[MultipleValuesSetting] = Field(default=UNSET, alias="multipleValuesSetting")
    sub_slot_setting: Optional[SubSlotSetting] = Field(default=UNSET, alias="subSlotSetting")


class UpdateSlotRequestDict(TypedDict):
    slot_id: str
    slot_name: str
    description: NotRequired[str]
    slot_type_id: NotRequired[str]
    value_elicitation_setting: SlotValueElicitationSettingDict
    obfuscation_setting: NotRequired[ObfuscationSettingDict]
    bot_id: str
    bot_version: str
    locale_id: str
    intent_id: str
    multiple_values_setting: NotRequired[MultipleValuesSettingDict]
    sub_slot_setting: NotRequired[SubSlotSettingDict]
