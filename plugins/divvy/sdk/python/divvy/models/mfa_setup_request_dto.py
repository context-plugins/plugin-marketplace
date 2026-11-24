from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mfa_setup_type import MfaSetupTypeOrStr


class MfaSetupRequestDto(SdkBaseModel):
    """Add phone for MFA setup"""

    phone: str
    """Phone number for MFA setup. The validation ``token`` is sent to this number."""

    type_: MfaSetupTypeOrStr = Field(alias="type")
    primary: Optional[bool] = UNSET
    """Set as ``true`` to mark the phone number as the primary mobile device. The default value is ``true``."""


class MfaSetupRequestDtoDict(TypedDict):
    phone: str
    type_: MfaSetupTypeOrStr
    primary: NotRequired[bool]
