from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data1 import Data1, Data1Dict


class ApiV1Click2CallResponse1(SdkBaseModel):
    data: Data1
    """The Click2Call call resource"""


class ApiV1Click2CallResponse1Dict(TypedDict):
    data: Data1Dict
