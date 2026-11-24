from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .organization import Organization, OrganizationDict


class Organizations(SdkBaseModel):
    organizations: list[Organization]


class OrganizationsDict(TypedDict):
    organizations: list[OrganizationDict]
