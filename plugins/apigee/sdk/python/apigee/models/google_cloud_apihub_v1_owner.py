from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Owner(SdkBaseModel):
    """Owner details."""

    email: Optional[str] = UNSET
    """Required. The email of the owner."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. The name of the owner."""


class GoogleCloudApihubV1OwnerDict(TypedDict):
    email: NotRequired[str]
    display_name: NotRequired[str]
