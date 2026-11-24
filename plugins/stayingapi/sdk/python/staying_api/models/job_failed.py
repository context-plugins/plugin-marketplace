from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data2 import Data2, Data2Dict
from .meta2 import Meta2, Meta2Dict


class JobFailed(SdkBaseModel):
    """failed — HTTP 200 with the failure nested at data.error (a PlatformFailureError, incl. ``retryable``).
    creditsCharged is 0 (failed work is free). Detect via data.status === "failed", NOT via a top-level ``error``."""

    data: Data2
    meta: Meta2


class JobFailedDict(TypedDict):
    data: Data2Dict
    meta: Meta2Dict
