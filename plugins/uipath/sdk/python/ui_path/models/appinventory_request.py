from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .application import Application, ApplicationDict


class AppinventoryRequest(SdkBaseModel):
    applications: Optional[list[Application]] = UNSET


class AppinventoryRequestDict(TypedDict):
    applications: NotRequired[list[ApplicationDict]]
