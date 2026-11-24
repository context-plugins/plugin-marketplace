from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MfaStepUpRequestDto(SdkBaseModel):
    """Step-up request for MFA"""

    remember_me_id: Optional[str] = Field(default=UNSET, alias="rememberMeId")
    """MFA ID. Set this field for creating an MFA-trusted API session.

    This MFA ID is generated when you set ``rememberMe`` as ``true`` in your ``POST /v3/mfa/challenge/validate``
    request. This value expires in 30 days.

    See `Validate MFA challenge <https://developer.bill.com/reference/validatechallenge>`__ for more information."""

    device: Optional[str] = UNSET
    """Mobile device name. This is a nickname for your mobile device. Set this field when you set ``rememberMeId``."""


class MfaStepUpRequestDtoDict(TypedDict):
    remember_me_id: NotRequired[str]
    device: NotRequired[str]
