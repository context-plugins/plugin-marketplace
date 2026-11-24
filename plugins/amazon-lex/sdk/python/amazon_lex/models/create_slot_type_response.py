from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .composite_slot_type_setting import CompositeSlotTypeSetting, CompositeSlotTypeSettingDict
from .external_source_setting import ExternalSourceSetting, ExternalSourceSettingDict
from .slot_type_value import SlotTypeValue, SlotTypeValueDict
from .slot_value_selection_setting import SlotValueSelectionSetting, SlotValueSelectionSettingDict


class CreateSlotTypeResponse(SdkBaseModel):
    slot_type_id: Optional[str] = Field(default=UNSET, alias="slotTypeId")
    """The unique identifier assigned to the slot type. Use this to identify the slot type in the UpdateSlotType and
    DeleteSlotType operations."""

    slot_type_name: Optional[str] = Field(default=UNSET, alias="slotTypeName")
    """The name specified for the slot type."""

    description: Optional[str] = UNSET
    """The description specified for the slot type."""

    slot_type_values: Optional[list[SlotTypeValue]] = Field(default=UNSET, alias="slotTypeValues")
    """The list of values that the slot type can assume."""

    value_selection_setting: Optional[SlotValueSelectionSetting] = Field(default=UNSET, alias="valueSelectionSetting")
    parent_slot_type_signature: Optional[str] = Field(default=UNSET, alias="parentSlotTypeSignature")
    """The signature of the base slot type specified for the slot type."""

    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The identifier for the bot associated with the slot type."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot associated with the slot type."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The specified language and local specified for the slot type."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the slot type was created."""

    external_source_setting: Optional[ExternalSourceSetting] = Field(default=UNSET, alias="externalSourceSetting")
    composite_slot_type_setting: Optional[CompositeSlotTypeSetting] = Field(
        default=UNSET, alias="compositeSlotTypeSetting"
    )


class CreateSlotTypeResponseDict(TypedDict):
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
    external_source_setting: NotRequired[ExternalSourceSettingDict]
    composite_slot_type_setting: NotRequired[CompositeSlotTypeSettingDict]
