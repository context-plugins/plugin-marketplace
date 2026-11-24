from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class LastInsightStatusChange(SdkBaseModel):
    """If set, this object contains the last status change made by a user for this insight"""

    user_id: str = Field(alias="userId")
    """the reference to the user who made the change (if it was made by a user) If the change was made by an automated
    system, this reference is empty."""

    last_changed_at: RFC3339DateTime = Field(alias="lastChangedAt")


class LastInsightStatusChangeDict(TypedDict):
    user_id: str
    last_changed_at: RFC3339DateTime
