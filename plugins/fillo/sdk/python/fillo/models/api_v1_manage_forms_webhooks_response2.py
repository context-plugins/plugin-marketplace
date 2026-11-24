from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageFormsWebhooksResponse2(SdkBaseModel):
    id: str
    deleted: bool


class ApiV1ManageFormsWebhooksResponse2Dict(TypedDict):
    id: str
    deleted: bool
