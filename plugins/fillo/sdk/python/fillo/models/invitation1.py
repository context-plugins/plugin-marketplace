from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.role1 import Role1OrStr


class Invitation1(SdkBaseModel):
    id: str
    email: str
    role: Role1OrStr
    status: str
    """Better Auth's invitation status, e.g. "pending"."""

    expires_at: RFC3339DateTime = Field(alias="expiresAt")


class Invitation1Dict(TypedDict):
    id: str
    email: str
    role: Role1OrStr
    status: str
    expires_at: RFC3339DateTime
