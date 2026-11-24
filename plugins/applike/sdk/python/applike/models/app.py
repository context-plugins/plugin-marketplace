from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .app_version import AppVersion, AppVersionDict


class App(SdkBaseModel):
    version: Optional[AppVersion] = UNSET
    store_id: str = Field(alias="storeId")
    """The store id of the app"""


class AppDict(TypedDict):
    version: NotRequired[AppVersionDict]
    store_id: str
