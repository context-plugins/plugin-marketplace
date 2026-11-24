from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer import Customer, CustomerDict


class CompaniesApiCustomersResponse(SdkBaseModel):
    value: Optional[list[Customer]] = UNSET


class CompaniesApiCustomersResponseDict(TypedDict):
    value: NotRequired[list[CustomerDict]]
