from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status import StatusOrStr


class ApiV1ManageFormsResponse1(SdkBaseModel):
    id: str
    name: str
    slug: str
    status: StatusOrStr


class ApiV1ManageFormsResponse1Dict(TypedDict):
    id: str
    name: str
    slug: str
    status: StatusOrStr
