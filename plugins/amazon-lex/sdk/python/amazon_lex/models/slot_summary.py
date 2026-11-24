from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.slot_constraint1 import SlotConstraint1OrStr
from .prompt_specification import PromptSpecification, PromptSpecificationDict


class SlotSummary(SdkBaseModel):
    slot_id: Optional[str] = Field(default=UNSET, alias="slotId")
    """The unique identifier of the slot."""

    slot_name: Optional[str] = Field(default=UNSET, alias="slotName")
    """The name given to the slot."""

    description: Optional[str] = UNSET
    """The description of the slot."""

    slot_constraint: Optional[SlotConstraint1OrStr] = Field(default=UNSET, alias="slotConstraint")
    """Whether the slot is required or optional. An intent is complete when all required slots are filled."""

    slot_type_id: Optional[str] = Field(default=UNSET, alias="slotTypeId")
    """The unique identifier for the slot type that defines the values for the slot."""

    value_elicitation_prompt_specification: Optional[PromptSpecification] = Field(
        default=UNSET, alias="valueElicitationPromptSpecification"
    )
    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The timestamp of the last date and time that the slot was updated."""


class SlotSummaryDict(TypedDict):
    slot_id: NotRequired[str]
    slot_name: NotRequired[str]
    description: NotRequired[str]
    slot_constraint: NotRequired[SlotConstraint1OrStr]
    slot_type_id: NotRequired[str]
    value_elicitation_prompt_specification: NotRequired[PromptSpecificationDict]
    last_updated_date_time: NotRequired[RFC3339DateTime]
