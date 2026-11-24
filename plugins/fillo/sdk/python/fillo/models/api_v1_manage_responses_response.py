from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageResponsesResponse(SdkBaseModel):
    id: str
    deleted: bool


class ApiV1ManageResponsesResponseDict(TypedDict):
    id: str
    deleted: bool
