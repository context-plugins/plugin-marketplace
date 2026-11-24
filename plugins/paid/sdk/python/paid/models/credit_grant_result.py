from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CreditGrantResult(SdkBaseModel):
    amount: int
    starts_at: RFC3339DateTime = Field(alias="startsAt")
    """When these credits become spendable, as an RFC3339 datetime with timezone."""

    expires_at: RFC3339DateTime | None = Field(alias="expiresAt")
    """When these credits expire, as an RFC3339 datetime with timezone. Null when the credits do not expire."""

    status: Literal["active"] = "active"
    """Credit grants are active immediately when created."""


class CreditGrantResultDict(TypedDict):
    amount: int
    starts_at: RFC3339DateTime
    expires_at: RFC3339DateTime | None
    status: Literal["active"]
