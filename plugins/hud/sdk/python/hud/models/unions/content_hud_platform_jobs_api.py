from __future__ import annotations

from typing import TypeAlias

from ..atif_content_part import AtifContentPart, AtifContentPartDict

ContentHudPlatformJobsApi: TypeAlias = str | list[AtifContentPart]

ContentHudPlatformJobsApiDict: TypeAlias = str | list[AtifContentPartDict]
