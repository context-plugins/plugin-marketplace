from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.fail_on import FailOnOrStr


class ApiV1PoliciesReplayRequest(SdkBaseModel):
    policy_id: Optional[UUID] = Field(default=UNSET, alias="policyId")
    """With ``version``: try a stored version, usually a draft"""

    version: Optional[int] = UNSET
    """The stored version's number"""

    name: Optional[str] = UNSET
    """With ``rules``: try a policy file that has not been pushed"""

    rules: Optional[list[Any]] = UNSET
    """The file's complete rule set"""

    days: Optional[int] = UNSET
    """How far back to replay. Default 30"""

    examples: Optional[int] = UNSET
    """How many changed decisions to list. Default 25"""

    fail_on: Optional[FailOnOrStr] = Field(default=UNSET, alias="failOn")
    """What counts as failing, for CI: rejected_allowed (default), loosened, changed or never"""


class ApiV1PoliciesReplayRequestDict(TypedDict):
    policy_id: NotRequired[UUID]
    version: NotRequired[int]
    name: NotRequired[str]
    rules: NotRequired[list[Any]]
    days: NotRequired[int]
    examples: NotRequired[int]
    fail_on: NotRequired[FailOnOrStr]
