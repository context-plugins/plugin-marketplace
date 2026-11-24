from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProtectiveEquipmentSummary(SdkBaseModel):
    persons_with_required_equipment: Optional[list[int]] = Field(default=UNSET, alias="PersonsWithRequiredEquipment")
    """An array of IDs for persons who are wearing detected personal protective equipment."""

    persons_without_required_equipment: Optional[list[int]] = Field(
        default=UNSET, alias="PersonsWithoutRequiredEquipment"
    )
    """An array of IDs for persons who are not wearing all of the types of PPE specified in the RequiredEquipmentTypes
    field of the detected personal protective equipment."""

    persons_indeterminate: Optional[list[int]] = Field(default=UNSET, alias="PersonsIndeterminate")
    """An array of IDs for persons where it was not possible to determine if they are wearing personal protective
    equipment."""


class ProtectiveEquipmentSummaryDict(TypedDict):
    persons_with_required_equipment: NotRequired[list[int]]
    persons_without_required_equipment: NotRequired[list[int]]
    persons_indeterminate: NotRequired[list[int]]
