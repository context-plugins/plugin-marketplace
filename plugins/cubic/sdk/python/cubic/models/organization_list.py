from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .organization import Organization, OrganizationDict


class OrganizationList(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    organizations: list[Organization]
    next_cursor: str = Field(alias="nextCursor")


class OrganizationListDict(TypedDict):
    organizations: list[OrganizationDict]
    next_cursor: str
