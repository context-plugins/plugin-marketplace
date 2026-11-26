from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MfaStepUpResponseDto(SdkBaseModel):
    """Step-up response."""

    trusted: Optional[bool] = UNSET
    """This field is set as ``true`` if the current API session is MFA-trusted"""


class MfaStepUpResponseDtoDict(TypedDict):
    trusted: NotRequired[bool]
