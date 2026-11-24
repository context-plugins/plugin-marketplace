from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OrganizationHealthRequest(SdkBaseModel):
    account_ids: Optional[list[str]] = Field(default=UNSET, alias="AccountIds")
    """The ID of the Amazon Web Services account."""

    organizational_unit_ids: Optional[list[str]] = Field(default=UNSET, alias="OrganizationalUnitIds")
    """The ID of the organizational unit."""


class OrganizationHealthRequestDict(TypedDict):
    account_ids: NotRequired[list[str]]
    organizational_unit_ids: NotRequired[list[str]]
