from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .by_action import ByAction, ByActionDict
from .example import Example, ExampleDict
from .transition import Transition, TransitionDict


class ApiV1PoliciesReplayResponse(SdkBaseModel):
    policy_name: str = Field(alias="policyName")
    days: int
    since: str
    replayed: int
    """Past requests evaluated twice"""

    changed: int
    unchanged: int
    loosened: int
    """Would ask less of the request than now"""

    tightened: int
    rejected_now_allowed: int = Field(alias="rejectedNowAllowed")
    """A person rejected it; the proposal would allow it without asking"""

    rule_changed: int = Field(alias="ruleChanged")
    """Same effect, decided by a different rule"""

    transitions: list[Transition]
    by_action: list[ByAction] = Field(alias="byAction")
    examples: list[Example]
    truncated: bool
    notes: list[str]
    fail: bool
    """Whether this breaks the ``failOn`` line"""

    fail_reason: str | None = Field(alias="failReason")


class ApiV1PoliciesReplayResponseDict(TypedDict):
    policy_name: str
    days: int
    since: str
    replayed: int
    changed: int
    unchanged: int
    loosened: int
    tightened: int
    rejected_now_allowed: int
    rule_changed: int
    transitions: list[TransitionDict]
    by_action: list[ByActionDict]
    examples: list[ExampleDict]
    truncated: bool
    notes: list[str]
    fail: bool
    fail_reason: str | None
