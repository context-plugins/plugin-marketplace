from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .composite_slot_type_setting import CompositeSlotTypeSetting, CompositeSlotTypeSettingDict
from .external_source_setting import ExternalSourceSetting, ExternalSourceSettingDict
from .slot_type_value import SlotTypeValue, SlotTypeValueDict
from .slot_value_selection_setting import SlotValueSelectionSetting, SlotValueSelectionSettingDict


class CreateSlotTypeRequest(SdkBaseModel):
    slot_type_name: str = Field(alias="slotTypeName")
    """The name for the slot. A slot type name must be unique within the intent."""

    description: Optional[str] = UNSET
    """A description of the slot type. Use the description to help identify the slot type in lists."""

    slot_type_values: Optional[list[SlotTypeValue]] = Field(default=UNSET, alias="slotTypeValues")
    """A list of SlotTypeValue objects that defines the values that the slot type can take. Each value can have a list
    of synonyms, additional values that help train the machine learning model about the values that it resolves for a
    slot."""

    value_selection_setting: Optional[SlotValueSelectionSetting] = Field(default=UNSET, alias="valueSelectionSetting")
    parent_slot_type_signature: Optional[str] = Field(default=UNSET, alias="parentSlotTypeSignature")
    """The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type
    has the configuration of the parent slot type. Only AMAZON.AlphaNumeric is supported."""

    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with this slot type."""

    bot_version: str = Field(alias="botVersion")
    """The identifier of the bot version associated with this slot type."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale that the slot type will be used in. The string must match one of the
    supported locales. All of the bots, intents, and slots used by the slot type must have the same locale. For more
    information, see Supported languages."""

    external_source_setting: Optional[ExternalSourceSetting] = Field(default=UNSET, alias="externalSourceSetting")
    composite_slot_type_setting: Optional[CompositeSlotTypeSetting] = Field(
        default=UNSET, alias="compositeSlotTypeSetting"
    )


class CreateSlotTypeRequestDict(TypedDict):
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
