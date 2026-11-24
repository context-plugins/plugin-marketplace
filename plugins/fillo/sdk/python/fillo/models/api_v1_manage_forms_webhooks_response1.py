from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageFormsWebhooksResponse1(SdkBaseModel):
    id: str
    events: list[str]


class ApiV1ManageFormsWebhooksResponse1Dict(TypedDict):
    id: str
    events: list[str]
