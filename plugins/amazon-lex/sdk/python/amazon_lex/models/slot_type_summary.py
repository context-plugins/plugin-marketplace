from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.slot_type_category import SlotTypeCategoryOrStr


class SlotTypeSummary(SdkBaseModel):
    slot_type_id: Optional[str] = Field(default=UNSET, alias="slotTypeId")
    """The unique identifier assigned to the slot type."""

    slot_type_name: Optional[str] = Field(default=UNSET, alias="slotTypeName")
    """The name of the slot type."""

    description: Optional[str] = UNSET
    """The description of the slot type."""

    parent_slot_type_signature: Optional[str] = Field(default=UNSET, alias="parentSlotTypeSignature")
    """If the slot type is derived from a built-on slot type, the name of the parent slot type."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """A timestamp of the date and time that the slot type was last updated."""

    slot_type_category: Optional[SlotTypeCategoryOrStr] = Field(default=UNSET, alias="slotTypeCategory")
    """Indicates the type of the slot type. Custom - A slot type that you created using custom values. For more
    information, see Creating custom slot types. Extended - A slot type created by extending the AMAZON.AlphaNumeric
    built-in slot type. For more information, see AMAZON.AlphaNumeric . ExternalGrammar - A slot type using a custom
    GRXML grammar to define values. For more information, see Using a custom grammar slot type."""


class SlotTypeSummaryDict(TypedDict):
    slot_type_id: NotRequired[str]
    slot_type_name: NotRequired[str]
    description: NotRequired[str]
    parent_slot_type_signature: NotRequired[str]
    last_updated_date_time: NotRequired[RFC3339DateTime]
    slot_type_category: NotRequired[SlotTypeCategoryOrStr]
