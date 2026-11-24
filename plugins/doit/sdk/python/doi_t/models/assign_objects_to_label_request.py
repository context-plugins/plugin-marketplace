from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .label_assignment_object import LabelAssignmentObject, LabelAssignmentObjectDict


class AssignObjectsToLabelRequest(SdkBaseModel):
    """Request to assign or remove objects from a label."""

    add: Optional[list[LabelAssignmentObject]] = UNSET
    """Array of objects to assign to the label."""

    remove: Optional[list[LabelAssignmentObject]] = UNSET
    """Array of objects to unassign from the label."""


class AssignObjectsToLabelRequestDict(TypedDict):
    add: NotRequired[list[LabelAssignmentObjectDict]]
    remove: NotRequired[list[LabelAssignmentObjectDict]]
