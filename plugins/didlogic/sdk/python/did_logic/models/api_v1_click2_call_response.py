from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data import Data, DataDict


class ApiV1Click2CallResponse(SdkBaseModel):
    data: Data
    """The Click2Call call resource"""


class ApiV1Click2CallResponseDict(TypedDict):
    data: DataDict
