from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.reason1 import Reason1OrStr


class ResolutionNote1(SdkBaseModel):
    """The feedback reason given when the anomaly was resolved. Present only when ``reviewStatus`` is ``RESOLVED`` and a
    reason was given. The resolution comment is not included."""

    reason: Reason1OrStr


class ResolutionNote1Dict(TypedDict):
    reason: Reason1OrStr
