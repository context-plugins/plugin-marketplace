from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProductApi(SdkBaseModel):
    """Platform/product metadata used by product listing endpoints."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    id: Optional[str] = UNSET
    platform: Optional[str] = UNSET


class ProductApiDict(TypedDict):
    display_name: NotRequired[str]
    id: NotRequired[str]
    platform: NotRequired[str]
