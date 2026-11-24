from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageProjectOriginsResponse(SdkBaseModel):
    origins: list[str]


class ApiV1ManageProjectOriginsResponseDict(TypedDict):
    origins: list[str]
