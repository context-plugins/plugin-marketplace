from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .sanctions import Sanctions, SanctionsDict


class CompaniesKrsSanctionsResponse(SdkBaseModel):
    krs: str
    entity_id: UUID
    sanctions: OptionalNullable[Sanctions] = UNSET


class CompaniesKrsSanctionsResponseDict(TypedDict):
    krs: str
    entity_id: UUID
    sanctions: NotRequired[SanctionsDict | None]
