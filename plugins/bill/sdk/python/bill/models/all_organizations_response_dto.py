from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .console_organization import ConsoleOrganization, ConsoleOrganizationDict
from .organization_dto import OrganizationDto, OrganizationDtoDict


class AllOrganizationsResponseDto(SdkBaseModel):
    """Get list of organizations response."""

    organizations: Optional[list[OrganizationDto]] = UNSET
    """List of organizations. When a console organization is available in the response, this indicates that the console
    organization is a parent of the listed organization."""

    console_organizations: Optional[list[ConsoleOrganization]] = Field(default=UNSET, alias="consoleOrganizations")
    """List of console organizations"""


class AllOrganizationsResponseDtoDict(TypedDict):
    organizations: NotRequired[list[OrganizationDtoDict]]
    console_organizations: NotRequired[list[ConsoleOrganizationDict]]
