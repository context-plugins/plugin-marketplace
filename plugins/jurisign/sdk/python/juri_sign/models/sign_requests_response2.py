from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sign_request_detailed import SignRequestDetailed, SignRequestDetailedDict


class SignRequestsResponse2(SdkBaseModel):
    data: Optional[SignRequestDetailed] = UNSET


class SignRequestsResponse2Dict(TypedDict):
    data: NotRequired[SignRequestDetailedDict]
