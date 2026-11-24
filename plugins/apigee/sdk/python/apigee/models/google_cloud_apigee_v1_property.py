from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Property(SdkBaseModel):
    """A single property entry in the Properties message."""

    value: Optional[str] = UNSET
    """The property value"""

    name: Optional[str] = UNSET
    """The property key"""


class GoogleCloudApigeeV1PropertyDict(TypedDict):
    value: NotRequired[str]
    name: NotRequired[str]
