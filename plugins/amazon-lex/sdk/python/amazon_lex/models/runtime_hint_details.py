from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .runtime_hint_value import RuntimeHintValue, RuntimeHintValueDict


class RuntimeHintDetails(SdkBaseModel):
    runtime_hint_values: Optional[list[RuntimeHintValue]] = Field(default=UNSET, alias="runtimeHintValues")
    """One or more strings that Amazon Lex should look for in the input to the bot. Each phrase is given preference when
    deciding on slot values."""

    sub_slot_hints: Optional[dict[str, RuntimeHintDetails]] = Field(default=UNSET, alias="subSlotHints")
    """A map of constituent sub slot names inside a composite slot in the intent and the phrases that should be added
    for each sub slot. Inside each composite slot hints, this structure provides a mechanism to add granular sub slot
    phrases. Only sub slot hints are supported for composite slots. The intent name, composite slot name and the
    constituent sub slot names must exist."""


class RuntimeHintDetailsDict(TypedDict):
    runtime_hint_values: NotRequired[list[RuntimeHintValueDict]]
    sub_slot_hints: NotRequired[dict[str, RuntimeHintDetailsDict]]
