from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mfa_phone_response_dto import MfaPhoneResponseDto, MfaPhoneResponseDtoDict


class ListMfaPhoneResponseDto(SdkBaseModel):
    """List type for MFA Phones list."""

    results: Optional[list[MfaPhoneResponseDto]] = UNSET


class ListMfaPhoneResponseDtoDict(TypedDict):
    results: NotRequired[list[MfaPhoneResponseDtoDict]]
