from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .runtime_hint_details import RuntimeHintDetails, RuntimeHintDetailsDict


class RuntimeHints(SdkBaseModel):
    slot_hints: Optional[dict[str, RuntimeHintDetails]] = Field(default=UNSET, alias="slotHints")
    """A list of the slots in the intent that should have runtime hints added, and the phrases that should be added for
    each slot. The first level of the slotHints map is the name of the intent. The second level is the name of the slot
    within the intent. For more information, see Using hints to improve accuracy. The intent name and slot name must
    exist."""


class RuntimeHintsDict(TypedDict):
    slot_hints: NotRequired[dict[str, RuntimeHintDetailsDict]]
