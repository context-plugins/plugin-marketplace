from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enumeration_value import EnumerationValue, EnumerationValueDict
from .enums.value_selection_strategy2 import ValueSelectionStrategy2OrStr
from .slot_type_configuration import SlotTypeConfiguration, SlotTypeConfigurationDict


class PutSlotTypeRequest(SdkBaseModel):
    name: str
    """The name of the slot type. The name is not case sensitive. The name can't match a built-in slot type name, or a
    built-in slot type name with "AMAZON." removed. For example, because there is a built-in slot type called
    AMAZON.DATE, you can't create a custom slot type called DATE. For a list of built-in slot types, see Slot Type
    Reference in the Alexa Skills Kit."""

    description: Optional[str] = UNSET
    """A description of the slot type."""

    enumeration_values: Optional[list[EnumerationValue]] = Field(default=UNSET, alias="enumerationValues")
    """A list of EnumerationValue objects that defines the values that the slot type can take. Each value can have a
    list of synonyms, which are additional values that help train the machine learning model about the values that it
    resolves for a slot. A regular expression slot type doesn't require enumeration values. All other slot types require
    a list of enumeration values. When Amazon Lex resolves a slot value, it generates a resolution list that contains up
    to five possible values for the slot. If you are using a Lambda function, this resolution list is passed to the
    function. If you are not using"""

    checksum: Optional[str] = UNSET
    """Identifies a specific revision of the $LATEST version. When you create a new slot type, leave the checksum field
    blank. If you specify a checksum you get a BadRequestException exception. When you want to update a slot type, set
    the checksum field to the checksum of the most recent revision of the $LATEST version. If you don't specify the
    checksum field, or if the checksum does not match the $LATEST version, you get a PreconditionFailedException
    exception."""

    value_selection_strategy: Optional[ValueSelectionStrategy2OrStr] = Field(
        default=UNSET, alias="valueSelectionStrategy"
    )
    """Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to
    one of the following values: ORIGINAL_VALUE - Returns the value entered by the user, if the user value is similar to
    the slot value. TOP_RESOLUTION - If there is a resolution list for the slot, return the first value in the
    resolution list as the slot type value. If there is no resolution list, null is returned. If you don't specify the
    valueSelectionStrategy, the default is ORIGINAL_VALUE."""

    create_version: Optional[bool] = Field(default=UNSET, alias="createVersion")
    """When set to true a new numbered version of the slot type is created. This is the same as calling the
    CreateSlotTypeVersion operation. If you do not specify createVersion, the default is false."""

    parent_slot_type_signature: Optional[str] = Field(default=UNSET, alias="parentSlotTypeSignature")
    """The built-in slot type used as the parent of the slot type. When you define a parent slot type, the new slot type
    has all of the same configuration as the parent. Only AMAZON.AlphaNumeric is supported."""

    slot_type_configurations: Optional[list[SlotTypeConfiguration]] = Field(
        default=UNSET, alias="slotTypeConfigurations"
    )
    """Configuration information that extends the parent built-in slot type. The configuration is added to the settings
    for the parent slot type."""


class PutSlotTypeRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    enumeration_values: NotRequired[list[EnumerationValueDict]]
    checksum: NotRequired[str]
    value_selection_strategy: NotRequired[ValueSelectionStrategy2OrStr]
    create_version: NotRequired[bool]
    parent_slot_type_signature: NotRequired[str]
    slot_type_configurations: NotRequired[list[SlotTypeConfigurationDict]]
