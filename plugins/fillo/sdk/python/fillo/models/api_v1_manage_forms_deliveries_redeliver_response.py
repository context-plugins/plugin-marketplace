from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageFormsDeliveriesRedeliverResponse(SdkBaseModel):
    redelivered: int


class ApiV1ManageFormsDeliveriesRedeliverResponseDict(TypedDict):
    redelivered: int
