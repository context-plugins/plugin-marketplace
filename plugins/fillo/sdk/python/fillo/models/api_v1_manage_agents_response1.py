from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageAgentsResponse1(SdkBaseModel):
    id: str
    revoked: Literal["True"] = "True"
    already_revoked: bool = Field(alias="alreadyRevoked")


class ApiV1ManageAgentsResponse1Dict(TypedDict):
    id: str
    revoked: Literal["True"]
    already_revoked: bool
