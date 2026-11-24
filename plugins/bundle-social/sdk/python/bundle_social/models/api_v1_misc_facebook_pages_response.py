from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item6 import Item6, Item6Dict


class ApiV1MiscFacebookPagesResponse(SdkBaseModel):
    items: list[Item6]


class ApiV1MiscFacebookPagesResponseDict(TypedDict):
    items: list[Item6Dict]
