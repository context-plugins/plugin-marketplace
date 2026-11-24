from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.data81 import Data81, Data81Dict


class PoliciesBypassApplicationsRequest(SdkBaseModel):
    data: Data81


class PoliciesBypassApplicationsRequestDict(TypedDict):
    data: Data81Dict
