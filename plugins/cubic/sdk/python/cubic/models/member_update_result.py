from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .after import After, AfterDict
from .before import Before, BeforeDict


class MemberUpdateResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    github_user_id: str = Field(alias="githubUserId")
    before: Before
    after: After
    changed: bool
    available_seats: float = Field(alias="availableSeats")
    purchased_quantity_changed: Literal["False"] = Field(default="False", alias="purchasedQuantityChanged")


class MemberUpdateResultDict(TypedDict):
    github_user_id: str
    before: BeforeDict
    after: AfterDict
    changed: bool
    available_seats: float
    purchased_quantity_changed: Literal["False"]
