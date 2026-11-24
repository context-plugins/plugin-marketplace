from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sign_request import SignRequest, SignRequestDict


class SignRequestsSendResponse(SdkBaseModel):
    data: Optional[SignRequest] = UNSET
    message: Optional[str] = UNSET


class SignRequestsSendResponseDict(TypedDict):
    data: NotRequired[SignRequestDict]
    message: NotRequired[str]
