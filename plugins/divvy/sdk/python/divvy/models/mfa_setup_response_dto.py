from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MfaSetupResponseDto(SdkBaseModel):
    """MFA Setup response."""

    setup_id: str = Field(alias="setupId")
    """MFA setup ID. This value is required for completing your MFA setup validation with ``POST
    /v3/mfa/setup/validate``."""


class MfaSetupResponseDtoDict(TypedDict):
    setup_id: str
