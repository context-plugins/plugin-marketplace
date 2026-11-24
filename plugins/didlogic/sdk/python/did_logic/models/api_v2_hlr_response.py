from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .hlr_request import HlrRequest, HlrRequestDict


class ApiV2HlrResponse(SdkBaseModel):
    hlr_request: HlrRequest
    """Created HLR lookup task details"""


class ApiV2HlrResponseDict(TypedDict):
    hlr_request: HlrRequestDict
