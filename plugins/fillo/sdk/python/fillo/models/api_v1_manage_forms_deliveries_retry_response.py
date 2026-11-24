from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageFormsDeliveriesRetryResponse(SdkBaseModel):
    retried: int


class ApiV1ManageFormsDeliveriesRetryResponseDict(TypedDict):
    retried: int
