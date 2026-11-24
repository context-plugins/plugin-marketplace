from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .context import Context, ContextDict


class AwsConfig(SdkBaseModel):
    context: Optional[list[Context]] = UNSET
    role_name: Optional[str] = Field(default=UNSET, alias="roleName")
    permissions: Optional[Any] = UNSET
    management_account: Optional[str] = Field(default=UNSET, alias="managementAccount")
    organization_root_id: Optional[str] = Field(default=UNSET, alias="organizationRootId")
    scope_targeted_organizational_unit_ids: Optional[list[str]] = Field(
        default=UNSET, alias="scopeTargetedOrganizationalUnitIds"
    )
    scope_explicit_account_ids: Optional[list[str]] = Field(default=UNSET, alias="scopeExplicitAccountIds")
    scope_excluded_account_ids: Optional[list[str]] = Field(default=UNSET, alias="scopeExcludedAccountIds")
    scope_management_account_explicit_in_scope: Optional[bool] = Field(
        default=UNSET, alias="scopeManagementAccountExplicitInScope"
    )


class AwsConfigDict(TypedDict):
    context: NotRequired[list[ContextDict]]
    role_name: NotRequired[str]
    permissions: NotRequired[Any]
    management_account: NotRequired[str]
    organization_root_id: NotRequired[str]
    scope_targeted_organizational_unit_ids: NotRequired[list[str]]
    scope_explicit_account_ids: NotRequired[list[str]]
    scope_excluded_account_ids: NotRequired[list[str]]
    scope_management_account_explicit_in_scope: NotRequired[bool]
