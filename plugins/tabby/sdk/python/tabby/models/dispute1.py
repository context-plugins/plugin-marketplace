from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dispute import Dispute, DisputeDict


class Dispute1(SdkBaseModel):
    dispute: Dispute


class Dispute1Dict(TypedDict):
    dispute: DisputeDict
