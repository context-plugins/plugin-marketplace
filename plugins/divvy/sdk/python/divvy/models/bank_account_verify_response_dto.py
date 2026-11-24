from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BankAccountVerifyResponseDto(SdkBaseModel):
    """Verify a bank account response."""

    verified: Optional[bool] = UNSET
    """Set as ``true`` if the bank account is verified"""


class BankAccountVerifyResponseDtoDict(TypedDict):
    verified: NotRequired[bool]
