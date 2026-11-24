from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TrackingSettingsRequest(SdkBaseModel):
    features: list[str]
    """The complete desired selection. Send [] to keep only the locked defaults. Omitting the key is an error, not
    "unchanged"."""


class TrackingSettingsRequestDict(TypedDict):
    features: list[str]
