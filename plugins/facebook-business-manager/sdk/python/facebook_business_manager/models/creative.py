from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Creative(SdkBaseModel):
    creative_id: str
    """The ID of the ad creative to use"""


class CreativeDict(TypedDict):
    creative_id: str
