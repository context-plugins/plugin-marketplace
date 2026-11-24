from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .slot_value_override import SlotValueOverride, SlotValueOverrideDict


class IntentOverride(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the intent. Only required when you're switching intents."""

    slots: Optional[dict[str, SlotValueOverride]] = UNSET
    """A map of all of the slot value overrides for the intent. The name of the slot maps to the value of the slot.
    Slots that are not included in the map aren't overridden."""


class IntentOverrideDict(TypedDict):
    name: NotRequired[str]
    slots: NotRequired[dict[str, SlotValueOverrideDict]]
