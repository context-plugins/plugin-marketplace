from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.rule import RuleOrStr


class Step(SdkBaseModel):
    key: Optional[str] = UNSET
    """A short key for the step, lowercase; made from the title when omitted"""

    title: str
    instruction: str
    """What to do at this step, in a sentence or two"""

    rule: Optional[RuleOrStr] = UNSET
    """What applies before the step's action: none, gate (check_gate for ``action``), approval (request_approval) or
    review (request_review). none when omitted"""

    action: Optional[str] = UNSET
    """For a gate step: the action to check, such as payments.send"""

    knowledge_ids: Optional[list[UUID]] = Field(default=UNSET, alias="knowledgeIds")
    """Knowledge entries this step relies on"""


class StepDict(TypedDict):
    key: NotRequired[str]
    title: str
    instruction: str
    rule: NotRequired[RuleOrStr]
    action: NotRequired[str]
    knowledge_ids: NotRequired[list[UUID]]
