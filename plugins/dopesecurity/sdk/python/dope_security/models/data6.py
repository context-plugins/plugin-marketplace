from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom1 import Custom1, Custom1Dict


class Data6(SdkBaseModel):
    custom: Custom1


class Data6Dict(TypedDict):
    custom: Custom1Dict
