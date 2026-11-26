from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .permission_set import PermissionSet, PermissionSetDict


class CompaniesApiPermissionSetsResponse(SdkBaseModel):
    value: Optional[list[PermissionSet]] = UNSET


class CompaniesApiPermissionSetsResponseDict(TypedDict):
    value: NotRequired[list[PermissionSetDict]]
