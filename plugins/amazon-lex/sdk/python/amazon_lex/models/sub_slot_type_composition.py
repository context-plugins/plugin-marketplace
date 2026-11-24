from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SubSlotTypeComposition(SdkBaseModel):
    name: str
    """Name of a constituent sub slot inside a composite slot."""

    slot_type_id: str = Field(alias="slotTypeId")
    """The unique identifier assigned to a slot type. This refers to either a built-in slot type or the unique
    slotTypeId of a custom slot type."""


class SubSlotTypeCompositionDict(TypedDict):
    name: str
    slot_type_id: str
