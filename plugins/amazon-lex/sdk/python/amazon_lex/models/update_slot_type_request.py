from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .composite_slot_type_setting import CompositeSlotTypeSetting, CompositeSlotTypeSettingDict
from .external_source_setting import ExternalSourceSetting, ExternalSourceSettingDict
from .slot_type_value import SlotTypeValue, SlotTypeValueDict
from .slot_value_selection_setting import SlotValueSelectionSetting, SlotValueSelectionSettingDict


class UpdateSlotTypeRequest(SdkBaseModel):
    slot_type_id: str = Field(alias="slotTypeId")
    """The unique identifier of the slot type to update."""

    slot_type_name: str = Field(alias="slotTypeName")
    """The new name of the slot type."""

    description: Optional[str] = UNSET
    """The new description of the slot type."""

    slot_type_values: Optional[list[SlotTypeValue]] = Field(default=UNSET, alias="slotTypeValues")
    """A new list of values and their optional synonyms that define the values that the slot type can take."""

    value_selection_setting: Optional[SlotValueSelectionSetting] = Field(default=UNSET, alias="valueSelectionSetting")
    parent_slot_type_signature: Optional[str] = Field(default=UNSET, alias="parentSlotTypeSignature")
    """The new built-in slot type that should be used as the parent of this slot type."""

    bot_id: str = Field(alias="botId")
    """The identifier of the bot that contains the slot type."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that contains the slot type. Must be DRAFT."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale that contains the slot type. The string must match one of the supported
    locales. For more information, see Supported languages."""

    external_source_setting: Optional[ExternalSourceSetting] = Field(default=UNSET, alias="externalSourceSetting")
    composite_slot_type_setting: Optional[CompositeSlotTypeSetting] = Field(
        default=UNSET, alias="compositeSlotTypeSetting"
    )


class UpdateSlotTypeRequestDict(TypedDict):
    slot_type_id: str
    slot_type_name: str
    description: NotRequired[str]
    slot_type_values: NotRequired[list[SlotTypeValueDict]]
    value_selection_setting: NotRequired[SlotValueSelectionSettingDict]
    parent_slot_type_signature: NotRequired[str]
    bot_id: str
    bot_version: str
    locale_id: str
    external_source_setting: NotRequired[ExternalSourceSettingDict]
    composite_slot_type_setting: NotRequired[CompositeSlotTypeSettingDict]
