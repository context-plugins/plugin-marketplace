from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1AudiencesResolveRequest(SdkBaseModel):
    phrases: list[str]


class ApiV1AudiencesResolveRequestDict(TypedDict):
    phrases: list[str]
