from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageMembersResponse1(SdkBaseModel):
    id: str
    email: str
    removed: Literal["True"] = "True"


class ApiV1ManageMembersResponse1Dict(TypedDict):
    id: str
    email: str
    removed: Literal["True"]
