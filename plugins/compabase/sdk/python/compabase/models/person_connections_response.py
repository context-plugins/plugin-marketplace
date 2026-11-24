from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .company import Company, CompanyDict


class PersonConnectionsResponse(SdkBaseModel):
    person_id: UUID
    companies: list[Company]


class PersonConnectionsResponseDict(TypedDict):
    person_id: UUID
    companies: list[CompanyDict]
