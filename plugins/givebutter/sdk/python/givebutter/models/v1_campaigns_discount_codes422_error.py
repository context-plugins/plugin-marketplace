from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1CampaignsDiscountCodes422Error(SdkBaseModel):
    message: str
    """Error overview."""


class V1CampaignsDiscountCodes422ErrorDict(TypedDict):
    message: str
