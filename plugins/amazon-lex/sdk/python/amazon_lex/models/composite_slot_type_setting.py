from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sub_slot_type_composition import SubSlotTypeComposition, SubSlotTypeCompositionDict


class CompositeSlotTypeSetting(SdkBaseModel):
    sub_slots: Optional[list[SubSlotTypeComposition]] = Field(default=UNSET, alias="subSlots")
    """Subslots in the composite slot."""


class CompositeSlotTypeSettingDict(TypedDict):
    sub_slots: NotRequired[list[SubSlotTypeCompositionDict]]
