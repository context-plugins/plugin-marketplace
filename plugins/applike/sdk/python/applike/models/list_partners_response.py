from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .partner_output import PartnerOutput, PartnerOutputDict


class ListPartnersResponse(SdkBaseModel):
    results: list[PartnerOutput]


class ListPartnersResponseDict(TypedDict):
    results: list[PartnerOutputDict]
