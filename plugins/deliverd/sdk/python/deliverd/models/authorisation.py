from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Authorisation(SdkBaseModel):
    valid_until: str | None = Field(alias="validUntil")
    max_uses: float = Field(alias="maxUses")
    uses_remaining: float = Field(alias="usesRemaining")


class AuthorisationDict(TypedDict):
    valid_until: str | None
    max_uses: float
    uses_remaining: float
