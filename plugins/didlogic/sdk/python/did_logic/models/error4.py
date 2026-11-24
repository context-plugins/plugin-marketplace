from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .detail_didlogic_com_click2_call_api import DetailDidlogicComClick2CallApi, DetailDidlogicComClick2CallApiDict


class Error4(SdkBaseModel):
    code: str
    message: str
    details: list[DetailDidlogicComClick2CallApi]


class Error4Dict(TypedDict):
    code: str
    message: str
    details: list[DetailDidlogicComClick2CallApiDict]
