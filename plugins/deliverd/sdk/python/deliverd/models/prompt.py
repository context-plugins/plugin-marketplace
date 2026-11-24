from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class Prompt(SdkBaseModel):
    """Send this instead of steps to draft an approved prompt: words people and agents use, versioned and approved like
    any playbook"""

    text: str
    """The approved words. Put each input in as {input name}, e.g. Compare {previous contract} with {renewal
    contract}"""

    limitations: Optional[str] = UNSET
    """What it is not for, and how to check what it produces"""

    department: Optional[str] = UNSET
    """The team or department it is for, as people would filter by it"""

    task_type: Optional[str] = Field(default=UNSET, alias="taskType")
    """What kind of task, such as Analyze, Create or Edit"""

    language: Optional[str] = UNSET
    """The language it is written in, such as en-GB"""

    owner_email: Optional[EmailStr] = Field(default=UNSET, alias="ownerEmail")
    """The member who owns it and keeps it current; whoever drafts it when omitted"""

    review_due_on: Optional[Date] = Field(default=UNSET, alias="reviewDueOn")
    """When it is next reviewed, YYYY-MM-DD; six months on when omitted"""

    check_output: Optional[bool] = Field(default=UNSET, alias="checkOutput")
    """Run as a playbook, a person reviews the output before it is used"""


class PromptDict(TypedDict):
    text: str
    limitations: NotRequired[str]
    department: NotRequired[str]
    task_type: NotRequired[str]
    language: NotRequired[str]
    owner_email: NotRequired[EmailStr]
    review_due_on: NotRequired[Date]
    check_output: NotRequired[bool]
