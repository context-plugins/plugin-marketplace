from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class ManifestEnv(SdkBaseModel):
    """Env identity from the control channel's ``hello`` reply."""

    name: str
    version: str = "0.0.0"


class ManifestEnvDict(TypedDict):
    name: str
    version: NotRequired[str]
