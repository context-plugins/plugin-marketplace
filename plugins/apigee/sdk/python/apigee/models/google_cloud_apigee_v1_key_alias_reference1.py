from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1KeyAliasReference1(SdkBaseModel):
    """Reference name and alias-id pair. Set when the customer supplied a ``ref://{referenceID}`` URI in
    ``TraceConfig.OtelMtlsConfig.key_store``. Resolved via the References catalog the same way as
    ``TlsInfoConfig.key_alias_reference`` in target-server TLS. Reuses the top-level ``KeyAliasReference`` message
    defined for ``TlsInfoConfig`` above; no new message."""

    reference: Optional[str] = UNSET
    """Reference name in the following format: ``organizations/{org}/environments/{env}/references/{reference}``"""

    alias_id: Optional[str] = Field(default=UNSET, alias="aliasId")
    """Alias ID. Must exist in the keystore referred to by the reference."""


class GoogleCloudApigeeV1KeyAliasReference1Dict(TypedDict):
    reference: NotRequired[str]
    alias_id: NotRequired[str]
