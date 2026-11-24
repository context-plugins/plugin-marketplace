from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .required_page import RequiredPage, RequiredPageDict


class ListAppsRequest(SdkBaseModel):
    page: RequiredPage


class ListAppsRequestDict(TypedDict):
    page: RequiredPageDict
