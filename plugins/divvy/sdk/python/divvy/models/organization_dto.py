from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OrganizationDto(SdkBaseModel):
    """Organization response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the organization. The value begins with ``008``."""

    name: Optional[str] = UNSET
    """Organization name"""

    console_organization_id: Optional[str] = Field(default=UNSET, alias="consoleOrganizationId")
    """BILL-generated ID of the console organization. The value begins with ``008``.

    When a console organization is available in the response, this indicates that the console organization is a parent
    of the listed organization."""


class OrganizationDtoDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    console_organization_id: NotRequired[str]
