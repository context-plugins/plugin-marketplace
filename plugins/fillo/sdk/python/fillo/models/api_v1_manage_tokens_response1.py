from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageTokensResponse1(SdkBaseModel):
    id: str
    revoked: Literal["True"] = "True"


class ApiV1ManageTokensResponse1Dict(TypedDict):
    id: str
    revoked: Literal["True"]
