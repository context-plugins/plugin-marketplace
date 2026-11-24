from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1KeyAliasReference3(SdkBaseModel):
    """Reference name and alias pair to use for client-side authentication."""

    reference: Optional[str] = UNSET
    """Reference name in the following format: ``organizations/{org}/environments/{env}/references/{reference}``"""

    alias_id: Optional[str] = Field(default=UNSET, alias="aliasId")
    """Alias ID. Must exist in the keystore referred to by the reference."""


class GoogleCloudApigeeV1KeyAliasReference3Dict(TypedDict):
    reference: NotRequired[str]
    alias_id: NotRequired[str]
