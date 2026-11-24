from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data1 import Data1, Data1Dict
from .meta import Meta, MetaDict


class JobCompleted(SdkBaseModel):
    """completed — the endpoint payload is at data.result and meta carries the full success meta (credits charged once,
    platformResults, warnings; pagination is null on a job result)."""

    data: Data1
    meta: Meta
    """Canonical response metadata present on every 200 (§6.3.3)."""


class JobCompletedDict(TypedDict):
    data: Data1Dict
    meta: MetaDict
