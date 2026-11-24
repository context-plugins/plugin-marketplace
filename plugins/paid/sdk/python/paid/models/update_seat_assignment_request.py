from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateSeatAssignmentRequest(SdkBaseModel):
    user_external_id: str | None = Field(alias="userExternalId")


class UpdateSeatAssignmentRequestDict(TypedDict):
    user_external_id: str | None
