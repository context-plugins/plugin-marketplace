from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ReasonDoiTSignupApi(SdkBaseModel):
    """Why a terminal request did not complete."""

    code: Optional[str] = UNSET
    detail: Optional[str] = UNSET
    retryable: Optional[bool] = UNSET


class ReasonDoiTSignupApiDict(TypedDict):
    code: NotRequired[str]
    detail: NotRequired[str]
    retryable: NotRequired[bool]
