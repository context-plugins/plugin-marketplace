from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Clixexternalv1LiveActivityTarget1(SdkBaseModel):
    device_id: str
    """ID of the target device."""


class Clixexternalv1LiveActivityTarget1Dict(TypedDict):
    device_id: str
