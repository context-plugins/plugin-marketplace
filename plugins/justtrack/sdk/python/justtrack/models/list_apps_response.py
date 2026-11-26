from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .app_output import AppOutput, AppOutputDict


class ListAppsResponse(SdkBaseModel):
    results: list[AppOutput]


class ListAppsResponseDict(TypedDict):
    results: list[AppOutputDict]
