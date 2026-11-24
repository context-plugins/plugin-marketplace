from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityActionHttpHeader(SdkBaseModel):
    """An HTTP header."""

    value: Optional[str] = UNSET
    """The header value to be sent to the target."""

    name: Optional[str] = UNSET
    """The header name to be sent to the target."""


class GoogleCloudApigeeV1SecurityActionHttpHeaderDict(TypedDict):
    value: NotRequired[str]
    name: NotRequired[str]
