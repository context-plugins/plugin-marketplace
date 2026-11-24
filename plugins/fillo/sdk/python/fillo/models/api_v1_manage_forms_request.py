from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageFormsRequest(SdkBaseModel):
    name: str


class ApiV1ManageFormsRequestDict(TypedDict):
    name: str
