from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_doi_t_roles_api import TypeDoiTRolesApiOrStr


class RoleDoiTRolesApi(SdkBaseModel):
    """Definition and permissions assigned to a role."""

    id: str
    """The unique ID of the role."""

    name: str
    """The name of the role."""

    type_: TypeDoiTRolesApiOrStr = Field(alias="type")
    """The type of the role (preset or custom)."""

    description: str
    """The description of the role. An empty string when no description is set."""

    customer: str
    """The customer ID if this is a custom role. An empty string for a preset role."""

    permissions: list[str]
    """Permission IDs in stored order. An empty array when no permissions are assigned."""

    child_tenant_eligible: bool = Field(alias="childTenantEligible")
    """Whether the owning tenant made this role available as a child tenant role."""


class RoleDoiTRolesApiDict(TypedDict):
    id: str
    name: str
    type_: TypeDoiTRolesApiOrStr
    description: str
    customer: str
    permissions: list[str]
    child_tenant_eligible: bool
