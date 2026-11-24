from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Path(SdkBaseModel):
    """The path details derived from the spec."""

    description: Optional[str] = UNSET
    """Optional. A short description for the path applicable to all operations."""

    path: Optional[str] = UNSET
    """Optional. Complete path relative to server endpoint. Note: Even though this field is optional, it is required for
    CreateApiOperation API and we will fail the request if not provided."""


class GoogleCloudApihubV1PathDict(TypedDict):
    description: NotRequired[str]
    path: NotRequired[str]
