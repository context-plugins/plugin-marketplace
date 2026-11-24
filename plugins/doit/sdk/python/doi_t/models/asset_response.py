from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AssetResponse(SdkBaseModel):
    """Response returned after creating or updating an asset."""

    account_id: Optional[str] = Field(default=UNSET, alias="accountID")


class AssetResponseDict(TypedDict):
    account_id: NotRequired[str]
