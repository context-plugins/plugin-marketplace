from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ApiProductRef(SdkBaseModel):
    status: Optional[str] = UNSET
    """Status of the API product. Valid values are ``approved`` or ``revoked``."""

    apiproduct: Optional[str] = UNSET
    """Name of the API product."""


class GoogleCloudApigeeV1ApiProductRefDict(TypedDict):
    status: NotRequired[str]
    apiproduct: NotRequired[str]
