from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.mfa_setup_type import MfaSetupTypeOrStr


class MfaSetupValidateRequestDto(SdkBaseModel):
    """Validate MFA setup"""

    setup_id: str = Field(alias="setupId")
    """MFA ``setupId`` from the ``POST /v3/mfa/setup`` response"""

    type_: MfaSetupTypeOrStr = Field(alias="type")
    token: str
    """Validation ``token`` sent to the registered phone number"""


class MfaSetupValidateRequestDtoDict(TypedDict):
    setup_id: str
    type_: MfaSetupTypeOrStr
    token: str
