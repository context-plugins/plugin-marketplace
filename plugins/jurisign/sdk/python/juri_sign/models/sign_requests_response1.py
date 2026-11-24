from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sign_request import SignRequest, SignRequestDict


class SignRequestsResponse1(SdkBaseModel):
    data: Optional[SignRequest] = UNSET


class SignRequestsResponse1Dict(TypedDict):
    data: NotRequired[SignRequestDict]
