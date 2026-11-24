from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.expected_role import ExpectedRoleOrStr
from .enums.role3 import Role3OrStr


class MemberUpdate(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    seat: Optional[bool] = UNSET
    """Desired seat state. Send with expectedSeat."""

    role: Optional[Role3OrStr] = UNSET
    """Desired role. Send with expectedRole."""

    expected_seat: Optional[bool] = Field(default=UNSET, alias="expectedSeat")
    """Current seat state from your latest read; send only with seat."""

    expected_role: Optional[ExpectedRoleOrStr] = Field(default=UNSET, alias="expectedRole")
    """Current role from your latest read; send only with role."""


class MemberUpdateDict(TypedDict):
    seat: NotRequired[bool]
    role: NotRequired[Role3OrStr]
    expected_seat: NotRequired[bool]
    expected_role: NotRequired[ExpectedRoleOrStr]
