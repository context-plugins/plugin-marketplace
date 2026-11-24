from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .composite_slot_type_setting import CompositeSlotTypeSetting, CompositeSlotTypeSettingDict
from .external_source_setting import ExternalSourceSetting, ExternalSourceSettingDict
from .slot_type_value import SlotTypeValue, SlotTypeValueDict
from .slot_value_selection_setting import SlotValueSelectionSetting, SlotValueSelectionSettingDict


class UpdateSlotTypeResponse(SdkBaseModel):
    slot_type_id: Optional[str] = Field(default=UNSET, alias="slotTypeId")
    """The unique identifier of the updated slot type."""

    slot_type_name: Optional[str] = Field(default=UNSET, alias="slotTypeName")
    """The updated name of the slot type."""

    description: Optional[str] = UNSET
    """The updated description of the slot type."""

    slot_type_values: Optional[list[SlotTypeValue]] = Field(default=UNSET, alias="slotTypeValues")
    """The updated values that the slot type provides."""

    value_selection_setting: Optional[SlotValueSelectionSetting] = Field(default=UNSET, alias="valueSelectionSetting")
    parent_slot_type_signature: Optional[str] = Field(default=UNSET, alias="parentSlotTypeSignature")
    """The updated signature of the built-in slot type that is the parent of this slot type."""

    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier of the bot that contains the slot type."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that contains the slot type. This is always DRAFT."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The language and locale of the updated slot type."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The timestamp of the date and time that the slot type was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """A timestamp of the date and time that the slot type was last updated."""

    external_source_setting: Optional[ExternalSourceSetting] = Field(default=UNSET, alias="externalSourceSetting")
    composite_slot_type_setting: Optional[CompositeSlotTypeSetting] = Field(
        default=UNSET, alias="compositeSlotTypeSetting"
    )


class UpdateSlotTypeResponseDict(TypedDict):
    slot_type_id: NotRequired[str]
    slot_type_name: NotRequired[str]
    description: NotRequired[str]
    slot_type_values: NotRequired[list[SlotTypeValueDict]]
    value_selection_setting: NotRequired[SlotValueSelectionSettingDict]
    parent_slot_type_signature: NotRequired[str]
    bot_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    external_source_setting: NotRequired[ExternalSourceSettingDict]
    composite_slot_type_setting: NotRequired[CompositeSlotTypeSettingDict]
