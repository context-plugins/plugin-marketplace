from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .batch_seat_assignments_request_assignments_items import (
    BatchSeatAssignmentsRequestAssignmentsItems,
    BatchSeatAssignmentsRequestAssignmentsItemsDict,
)


class BatchSeatAssignmentsRequest(SdkBaseModel):
    assignments: list[BatchSeatAssignmentsRequestAssignmentsItems]


class BatchSeatAssignmentsRequestDict(TypedDict):
    assignments: list[BatchSeatAssignmentsRequestAssignmentsItemsDict]
