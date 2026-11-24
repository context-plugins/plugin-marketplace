from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BuiltInSlotTypeSummary(SdkBaseModel):
    slot_type_signature: Optional[str] = Field(default=UNSET, alias="slotTypeSignature")
    """The signature of the built-in slot type. Use this to specify the parent slot type of a derived slot type."""

    description: Optional[str] = UNSET
    """The description of the built-in slot type."""


class BuiltInSlotTypeSummaryDict(TypedDict):
    slot_type_signature: NotRequired[str]
    description: NotRequired[str]
