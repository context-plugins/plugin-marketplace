from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .multiple_values_setting import MultipleValuesSetting, MultipleValuesSettingDict
from .obfuscation_setting import ObfuscationSetting, ObfuscationSettingDict
from .slot_value_elicitation_setting import SlotValueElicitationSetting, SlotValueElicitationSettingDict
from .sub_slot_setting import SubSlotSetting, SubSlotSettingDict


class CreateSlotRequest(SdkBaseModel):
    slot_name: str = Field(alias="slotName")
    """The name of the slot. Slot names must be unique within the bot that contains the slot."""

    description: Optional[str] = UNSET
    """A description of the slot. Use this to help identify the slot in lists."""

    slot_type_id: Optional[str] = Field(default=UNSET, alias="slotTypeId")
    """The unique identifier for the slot type associated with this slot. The slot type determines the values that can
    be entered into the slot."""

    value_elicitation_setting: SlotValueElicitationSetting = Field(alias="valueElicitationSetting")
    obfuscation_setting: Optional[ObfuscationSetting] = Field(default=UNSET, alias="obfuscationSetting")
    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with the slot."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot associated with the slot."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale that the slot will be used in. The string must match one of the
    supported locales. All of the bots, intents, slot types used by the slot must have the same locale. For more
    information, see Supported languages."""

    intent_id: str = Field(alias="intentId")
    """The identifier of the intent that contains the slot."""

    multiple_values_setting: Optional[MultipleValuesSetting] = Field(default=UNSET, alias="multipleValuesSetting")
    sub_slot_setting: Optional[SubSlotSetting] = Field(default=UNSET, alias="subSlotSetting")


class CreateSlotRequestDict(TypedDict):
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
