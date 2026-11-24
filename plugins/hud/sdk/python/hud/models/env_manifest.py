from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .manifest_capability import ManifestCapability, ManifestCapabilityDict
from .manifest_env import ManifestEnv, ManifestEnvDict
from .manifest_task import ManifestTask, ManifestTaskDict


class EnvManifest(SdkBaseModel):
    """What build introspection captured from a v6 image's control channel."""

    env: ManifestEnv
    """Env identity from the control channel's ``hello`` reply."""

    capabilities: Optional[list[ManifestCapability]] = UNSET
    tasks: Optional[list[ManifestTask]] = UNSET


class EnvManifestDict(TypedDict):
    env: ManifestEnvDict
    capabilities: NotRequired[list[ManifestCapabilityDict]]
    tasks: NotRequired[list[ManifestTaskDict]]
