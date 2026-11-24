from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sub_slot_value_elicitation_setting import SubSlotValueElicitationSetting, SubSlotValueElicitationSettingDict


class Specifications(SdkBaseModel):
    slot_type_id: str = Field(alias="slotTypeId")
    """The unique identifier assigned to the slot type."""

    value_elicitation_setting: SubSlotValueElicitationSetting = Field(alias="valueElicitationSetting")


class SpecificationsDict(TypedDict):
    slot_type_id: str
    value_elicitation_setting: SubSlotValueElicitationSettingDict
