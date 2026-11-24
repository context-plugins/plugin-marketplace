from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageRespondentsResponse1(SdkBaseModel):
    external_id: str = Field(alias="externalId")
    forgotten: Literal["True"] = "True"
    responses_deleted: int = Field(alias="responsesDeleted")
    profile_deleted: bool = Field(alias="profileDeleted")


class ApiV1ManageRespondentsResponse1Dict(TypedDict):
    external_id: str
    forgotten: Literal["True"]
    responses_deleted: int
    profile_deleted: bool
