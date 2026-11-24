from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Custom1(SdkBaseModel):
    urls: list[str]
    """List of URL names to delete"""


class Custom1Dict(TypedDict):
    urls: list[str]
