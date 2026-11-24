from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UnlimitedDataFileStorageLimits(SdkBaseModel):
    """Unmetered storage capacity for an unlimited team."""

    kind: Literal["unlimited"] = "unlimited"


class UnlimitedDataFileStorageLimitsDict(TypedDict):
    kind: Literal["unlimited"]
