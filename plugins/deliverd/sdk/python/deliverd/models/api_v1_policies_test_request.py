from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1PoliciesTestRequest(SdkBaseModel):
    policy_id: Optional[UUID] = Field(default=UNSET, alias="policyId")
    """With ``version``: try a stored version, usually a draft"""

    version: Optional[int] = UNSET
    """The stored version's number"""

    name: Optional[str] = UNSET
    """With ``rules``: try a policy file that has not been pushed"""

    rules: Optional[list[Any]] = UNSET
    """The file's complete rule set"""

    tests: list[Any]
    """Test cases: ``name``, ``action``, ``input``, optional ``agentId``, ``environment``, ``risk``, and ``expect: {
    effect, rule? }``"""


class ApiV1PoliciesTestRequestDict(TypedDict):
    policy_id: NotRequired[UUID]
    version: NotRequired[int]
    name: NotRequired[str]
    rules: NotRequired[list[Any]]
    tests: list[Any]
