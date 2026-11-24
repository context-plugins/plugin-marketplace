from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom3 import Custom3, Custom3Dict


class Data8(SdkBaseModel):
    custom: Custom3


class Data8Dict(TypedDict):
    custom: Custom3Dict
