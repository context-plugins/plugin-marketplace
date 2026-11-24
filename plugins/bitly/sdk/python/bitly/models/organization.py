from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.require2_fa import Require2FaOrStr
from .enums.require_sso import RequireSsoOrStr


class Organization(SdkBaseModel):
    references: Optional[dict[str, str]] = UNSET
    name: str
    is_active: bool
    guid: str
    tier: str
    tier_family: str
    tier_display_name: str
    role: str
    created: str
    modified: str
    bsds: list[str]
    require_sso: Optional[RequireSsoOrStr] = UNSET
    """SSO authentication requirement for this organization. Possible values: "none", "any". Omitted when no auth
    requirements are configured."""

    require_2fa: Optional[Require2FaOrStr] = UNSET
    """Two-factor authentication requirement for this organization. Possible values: "none", "sms". Omitted when no auth
    requirements are configured."""


class OrganizationDict(TypedDict):
    references: NotRequired[dict[str, str]]
    name: str
    is_active: bool
    guid: str
    tier: str
    tier_family: str
    tier_display_name: str
    role: str
    created: str
    modified: str
    bsds: list[str]
    require_sso: NotRequired[RequireSsoOrStr]
    require_2fa: NotRequired[Require2FaOrStr]
