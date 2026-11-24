from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import Date, SdkBaseModel
from .money import Money, MoneyDict


class AwsPurchasePlanStep(SdkBaseModel):
    """A single weekly ladder step within a projection."""

    order: int
    """Step sequence number (1-based) within the ladder."""

    scheduled_date: Date = Field(alias="scheduledDate")
    """Calendar date (UTC) when this purchase step is scheduled to execute, with format YYYY-MM-DD."""

    purchase_amount: Money = Field(alias="purchaseAmount")
    """Hourly commitment to purchase on this step."""

    cumulative_commitment: Money = Field(alias="cumulativeCommitment")
    """Total hourly commitment after this step executes."""

    estimated_savings: Money = Field(alias="estimatedSavings")
    """This step's proportional share of the projection-level ``estimatedSavings`` (allocated by purchase amount). Zero
    when the recommendation total is unavailable."""

    is_bootstrap: bool = Field(alias="isBootstrap")
    """``true`` if this is the initial bootstrap purchase."""

    is_final: bool = Field(alias="isFinal")
    """``true`` if this step reaches the target commitment."""

    requires_approval: bool = Field(alias="requiresApproval")
    """``true`` when this step's ``cumulativeCommitment`` exceeds the customer-approved commitment ceiling
    (``approvedFinalCommitment``). Used for per-step status in the ladder even when the projection-level
    ``purchaseApprovalStatus`` is ``approved``."""


class AwsPurchasePlanStepDict(TypedDict):
    order: int
    scheduled_date: Date
    purchase_amount: MoneyDict
    cumulative_commitment: MoneyDict
    estimated_savings: MoneyDict
    is_bootstrap: bool
    is_final: bool
    requires_approval: bool
