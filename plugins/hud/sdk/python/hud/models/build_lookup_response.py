from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .build_lookup_match import BuildLookupMatch, BuildLookupMatchDict


class BuildLookupResponse(SdkBaseModel):
    """Builds with the requested digests in environments the caller can view, newest first."""

    builds: list[BuildLookupMatch]


class BuildLookupResponseDict(TypedDict):
    builds: list[BuildLookupMatchDict]
