from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .multiple_values_setting import MultipleValuesSetting, MultipleValuesSettingDict
from .obfuscation_setting import ObfuscationSetting, ObfuscationSettingDict
from .slot_value_elicitation_setting import SlotValueElicitationSetting, SlotValueElicitationSettingDict
from .sub_slot_setting import SubSlotSetting, SubSlotSettingDict


class UpdateSlotResponse(SdkBaseModel):
    slot_id: Optional[str] = Field(default=UNSET, alias="slotId")
    """The unique identifier of the slot that was updated."""

    slot_name: Optional[str] = Field(default=UNSET, alias="slotName")
    """The updated name of the slot."""

    description: Optional[str] = UNSET
    """The updated description of the bot."""

    slot_type_id: Optional[str] = Field(default=UNSET, alias="slotTypeId")
    """The updated identifier of the slot type that provides values for the slot."""

    value_elicitation_setting: Optional[SlotValueElicitationSetting] = Field(
        default=UNSET, alias="valueElicitationSetting"
    )
    obfuscation_setting: Optional[ObfuscationSetting] = Field(default=UNSET, alias="obfuscationSetting")
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that contains the slot."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that contains the slot. Will always be DRAFT."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale that contains the slot."""

    intent_id: Optional[str] = Field(default=UNSET, alias="intentId")
    """The intent that contains the slot."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The timestamp of the date and time that the slot was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The timestamp of the date and time that the slot was last updated."""

    multiple_values_setting: Optional[MultipleValuesSetting] = Field(default=UNSET, alias="multipleValuesSetting")
    sub_slot_setting: Optional[SubSlotSetting] = Field(default=UNSET, alias="subSlotSetting")


class UpdateSlotResponseDict(TypedDict):
    slot_id: NotRequired[str]
    slot_name: NotRequired[str]
    description: NotRequired[str]
    slot_type_id: NotRequired[str]
    value_elicitation_setting: NotRequired[SlotValueElicitationSettingDict]
    obfuscation_setting: NotRequired[ObfuscationSettingDict]
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    intent_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    multiple_values_setting: NotRequired[MultipleValuesSettingDict]
    sub_slot_setting: NotRequired[SubSlotSettingDict]
