from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enumeration_value import EnumerationValue, EnumerationValueDict
from .enums.value_selection_strategy import ValueSelectionStrategyOrStr
from .slot_type_configuration import SlotTypeConfiguration, SlotTypeConfigurationDict


class GetSlotTypeResponse(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the slot type."""

    description: Optional[str] = UNSET
    """A description of the slot type."""

    enumeration_values: Optional[list[EnumerationValue]] = Field(default=UNSET, alias="enumerationValues")
    """A list of EnumerationValue objects that defines the values that the slot type can take."""

    last_updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDate")
    """The date that the slot type was updated. When you create a resource, the creation date and last update date are
    the same."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """The date that the slot type was created."""

    version: Optional[str] = UNSET
    """The version of the slot type."""

    checksum: Optional[str] = UNSET
    """Checksum of the $LATEST version of the slot type."""

    value_selection_strategy: Optional[ValueSelectionStrategyOrStr] = Field(
        default=UNSET, alias="valueSelectionStrategy"
    )
    """The strategy that Amazon Lex uses to determine the value of the slot. For more information, see PutSlotType."""

    parent_slot_type_signature: Optional[str] = Field(default=UNSET, alias="parentSlotTypeSignature")
    """The built-in slot type used as a parent for the slot type."""

    slot_type_configurations: Optional[list[SlotTypeConfiguration]] = Field(
        default=UNSET, alias="slotTypeConfigurations"
    )
    """Configuration information that extends the parent built-in slot type."""


class GetSlotTypeResponseDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    enumeration_values: NotRequired[list[EnumerationValueDict]]
    last_updated_date: NotRequired[RFC3339DateTime]
    created_date: NotRequired[RFC3339DateTime]
    version: NotRequired[str]
    checksum: NotRequired[str]
    value_selection_strategy: NotRequired[ValueSelectionStrategyOrStr]
    parent_slot_type_signature: NotRequired[str]
    slot_type_configurations: NotRequired[list[SlotTypeConfigurationDict]]
