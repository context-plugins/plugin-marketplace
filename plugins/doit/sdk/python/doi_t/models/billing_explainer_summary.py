from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .billing_explainer_service_summary import BillingExplainerServiceSummary, BillingExplainerServiceSummaryDict


class BillingExplainerSummary(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    aws: BillingExplainerServiceSummary
    doit: BillingExplainerServiceSummary
    aws_without_doit: BillingExplainerServiceSummary = Field(alias="awsWithoutDoit")


class BillingExplainerSummaryDict(TypedDict):
    aws: BillingExplainerServiceSummaryDict
    doit: BillingExplainerServiceSummaryDict
    aws_without_doit: BillingExplainerServiceSummaryDict
