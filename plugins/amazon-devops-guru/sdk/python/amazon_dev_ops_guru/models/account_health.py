from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account_insight_health import AccountInsightHealth, AccountInsightHealthDict


class AccountHealth(SdkBaseModel):
    account_id: Optional[str] = Field(default=UNSET, alias="AccountId")
    """The ID of the Amazon Web Services account."""

    insight: Optional[AccountInsightHealth] = Field(default=UNSET, alias="Insight")


class AccountHealthDict(TypedDict):
    account_id: NotRequired[str]
    insight: NotRequired[AccountInsightHealthDict]
