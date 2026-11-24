from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.reason import ReasonOrStr


class ApiV1GatesVerifyTokenResponse(SdkBaseModel):
    valid: bool
    reason: ReasonOrStr | None
    gate_id: str | None = Field(alias="gateId")
    expires_at: str | None = Field(alias="expiresAt")


class ApiV1GatesVerifyTokenResponseDict(TypedDict):
    valid: bool
    reason: ReasonOrStr | None
    gate_id: str | None
    expires_at: str | None
