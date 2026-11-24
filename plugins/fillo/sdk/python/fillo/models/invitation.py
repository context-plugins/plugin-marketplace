from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Invitation(SdkBaseModel):
    id: str
    email: str
    role: str
    expires_at: RFC3339DateTime = Field(alias="expiresAt")


class InvitationDict(TypedDict):
    id: str
    email: str
    role: str
    expires_at: RFC3339DateTime
