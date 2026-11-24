from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DisabledFeatureError(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    feature_tag: str
    """The feature that is disabled"""

    message: str
    """The message explaining the error"""


class DisabledFeatureErrorDict(TypedDict):
    feature_tag: str
    message: str
