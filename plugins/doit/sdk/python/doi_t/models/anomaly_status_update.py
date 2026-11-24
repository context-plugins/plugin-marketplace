from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .customer_feedback import CustomerFeedback, CustomerFeedbackDict


class AnomalyStatusUpdate(SdkBaseModel):
    customer_feedback: CustomerFeedback = Field(alias="customerFeedback")
    """Partial review-status update. Fields that are omitted are left unchanged. ``reviewStatus`` drives the state
    machine; ``resolution`` and ``resolutionNote`` apply only when resolving."""


class AnomalyStatusUpdateDict(TypedDict):
    customer_feedback: CustomerFeedbackDict
