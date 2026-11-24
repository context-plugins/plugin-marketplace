from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.destination1 import Destination1OrStr


class ApiV1ManageFormsStorageRequest(SdkBaseModel):
    destination: Destination1OrStr


class ApiV1ManageFormsStorageRequestDict(TypedDict):
    destination: Destination1OrStr
