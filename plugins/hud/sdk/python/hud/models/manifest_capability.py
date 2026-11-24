from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ManifestCapability(SdkBaseModel):
    """Capability declaration, stripped to its stable identity.

    ``url`` and ``params`` from the live ``hello`` reply are deliberately absent: they are ephemeral (substrate-local
    addresses) and may carry secrets (SSH keys), so the build pipeline never transmits or persists them."""

    name: str
    protocol: str


class ManifestCapabilityDict(TypedDict):
    name: str
    protocol: str
