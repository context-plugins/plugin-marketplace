from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageFormsDeliveriesRedeliverRequest(SdkBaseModel):
    response_ids: list[str] = Field(alias="responseIds")


class ApiV1ManageFormsDeliveriesRedeliverRequestDict(TypedDict):
    response_ids: list[str]
