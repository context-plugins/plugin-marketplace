from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .relationship import Relationship, RelationshipDict


class Company(SdkBaseModel):
    entity_id: UUID
    registry_number: OptionalNullable[str] = UNSET
    """KRS number (10 digits), if available."""

    company_name: OptionalNullable[str] = UNSET
    relationships: list[Relationship]


class CompanyDict(TypedDict):
    entity_id: UUID
    registry_number: NotRequired[str | None]
    company_name: NotRequired[str | None]
    relationships: list[RelationshipDict]
