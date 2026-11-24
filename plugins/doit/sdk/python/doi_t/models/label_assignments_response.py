from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .label_assignment_object import LabelAssignmentObject, LabelAssignmentObjectDict


class LabelAssignmentsResponse(SdkBaseModel):
    """Response containing the list of objects assigned to a label."""

    assignments: Optional[list[LabelAssignmentObject]] = UNSET
    """Array of objects currently assigned to the label."""


class LabelAssignmentsResponseDict(TypedDict):
    assignments: NotRequired[list[LabelAssignmentObjectDict]]
