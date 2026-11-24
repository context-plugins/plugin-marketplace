from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MfaChallengeValidateRequestDto(SdkBaseModel):
    """Validate MFA challenge"""

    challenge_id: str = Field(alias="challengeId")
    """MFA ``challengeId`` from the ``POST /v3/mfa/challenge`` response"""

    token: str
    """Validation ``token`` sent to the registered phone number"""

    device: Optional[str] = UNSET
    """Mobile device name. This is a nickname for your mobile device. Set this field when ``rememberMe`` is set as
    ``true``."""

    machine_name: Optional[str] = Field(default=UNSET, alias="machineName")
    """Machine name. This is a nickname for the machine used to complete MFA sign in. Set this field when ``rememberMe``
    is set as ``true``."""

    remember_me: Optional[bool] = Field(default=UNSET, alias="rememberMe")
    """Set as ``true`` for the generated MFA ID to expire in 30 days"""


class MfaChallengeValidateRequestDtoDict(TypedDict):
    challenge_id: str
    token: str
    device: NotRequired[str]
    machine_name: NotRequired[str]
    remember_me: NotRequired[bool]
