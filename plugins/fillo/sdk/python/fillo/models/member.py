from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Member(SdkBaseModel):
    id: str
    """The member id the member endpoints address."""

    user_id: str = Field(alias="userId")
    email: str
    name: str
    role: str
    created_at: RFC3339DateTime = Field(alias="createdAt")


class MemberDict(TypedDict):
    id: str
    user_id: str
    email: str
    name: str
    role: str
    created_at: RFC3339DateTime
