from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LoginAsUserRequestDto(SdkBaseModel):
    """API login as user"""

    user_id: str = Field(alias="userId")
    """BILL-generated ID of the user you want to sign in as"""

    organization_id: str = Field(alias="organizationId")
    """BILL-generated ID of the organization you want to sign in to"""

    remember_me_id: Optional[str] = Field(default=UNSET, alias="rememberMeId")
    """MFA ID. Set this field for creating an MFA-trusted API session.

    This MFA ID is generated when you set ``rememberMe`` as ``true`` in your ``POST /v3/mfa/challenge/validate``
    request. This value expires in 30 days.

    See `Validate MFA challenge <https://developer.bill.com/reference/validatechallenge>`__ for more information."""

    device: Optional[str] = UNSET
    """Mobile device name. This is a nickname for your mobile device. This field is required when you set
    ``rememberMeId``."""


class LoginAsUserRequestDtoDict(TypedDict):
    user_id: str
    organization_id: str
    remember_me_id: NotRequired[str]
    device: NotRequired[str]
