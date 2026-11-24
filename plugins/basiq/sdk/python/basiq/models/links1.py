from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Links1(SdkBaseModel):
    """ResourceLinks contains resource links"""

    self: str
    """URL to resource itself"""


class Links1Dict(TypedDict):
    self: str
