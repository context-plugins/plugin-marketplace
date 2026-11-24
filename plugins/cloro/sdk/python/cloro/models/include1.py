from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Include1(SdkBaseModel):
    """Optional flags for including additional response data"""

    model_config = ConfigDict(extra="forbid")

    html: bool = False
    """Include raw HTML response from Google News"""


class Include1Dict(TypedDict):
    html: NotRequired[bool]
