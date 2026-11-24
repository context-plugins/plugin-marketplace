from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageProjectOriginsRequest(SdkBaseModel):
    origins: list[str]


class ApiV1ManageProjectOriginsRequestDict(TypedDict):
    origins: list[str]
