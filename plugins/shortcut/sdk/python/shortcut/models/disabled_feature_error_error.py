from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DisabledFeatureErrorError(SdkBaseModel):
    feature_tag: str
    """The feature that is disabled"""

    message: str
    """The message explaining the error"""


class DisabledFeatureErrorErrorDict(TypedDict):
    feature_tag: str
    message: str
