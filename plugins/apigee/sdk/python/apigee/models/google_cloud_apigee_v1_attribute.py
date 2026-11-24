from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Attribute(SdkBaseModel):
    """Key-value pair to store extra metadata."""

    name: Optional[str] = UNSET
    """API key of the attribute."""

    value: Optional[str] = UNSET
    """Value of the attribute."""


class GoogleCloudApigeeV1AttributeDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
