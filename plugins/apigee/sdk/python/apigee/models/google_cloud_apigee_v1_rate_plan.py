from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.billing_period import BillingPeriodOrStr
from .enums.consumption_pricing_type import ConsumptionPricingTypeOrStr
from .enums.payment_funding_model import PaymentFundingModelOrStr
from .enums.revenue_share_type import RevenueShareTypeOrStr
from .enums.state7 import State7OrStr
from .google_cloud_apigee_v1_rate_range import GoogleCloudApigeeV1RateRange, GoogleCloudApigeeV1RateRangeDict
from .google_cloud_apigee_v1_revenue_share_range import (
    GoogleCloudApigeeV1RevenueShareRange,
    GoogleCloudApigeeV1RevenueShareRangeDict,
)
from .google_type_money5 import GoogleTypeMoney5, GoogleTypeMoney5Dict
from .google_type_money6 import GoogleTypeMoney6, GoogleTypeMoney6Dict


class GoogleCloudApigeeV1RatePlan(SdkBaseModel):
    """Rate plan details."""

    consumption_pricing_rates: Optional[list[GoogleCloudApigeeV1RateRange]] = Field(
        default=UNSET, alias="consumptionPricingRates"
    )
    """API call volume ranges and the fees charged when the total number of API calls is within a given range. The
    method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is
    ``BANDED`` and the ranges are defined as follows: ```` { "start": 1, "end": 100, "fee": 2 }, { "start": 101, "end":
    200, "fee": 1.50 }, { "start": 201, "end": 0, "fee": 1 }, } ```` Then the following fees would be charged based on
    the total number of API calls (assuming the currency selected is ``USD``): * 50 calls cost 50 x $2 = $100 * 150
    calls cost 100 x $2 + 50 x $1.5 = $275 * 250 calls cost 100 x $2 + 100 x $1.5 + 50 x $1 = $400 * 500 calls cost 100
    x $2 + 100 x $1.5 + 300 x $1 = $650"""

    description: Optional[str] = UNSET
    """Description of the rate plan."""

    billing_period: Optional[BillingPeriodOrStr] = Field(default=UNSET, alias="billingPeriod")
    """Frequency at which the customer will be billed."""

    fixed_fee_frequency: Optional[int] = Field(default=UNSET, alias="fixedFeeFrequency")
    """Frequency at which the fixed fee is charged."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Time when the rate plan will expire in milliseconds since epoch. Set to 0 or ``null`` to indicate that the rate
    plan should never expire."""

    apiproduct: Optional[str] = UNSET
    """Name of the API product that the rate plan is associated with."""

    state: Optional[State7OrStr] = UNSET
    """Current state of the rate plan (draft or published)."""

    name: Optional[str] = UNSET
    """Output only. Name of the rate plan."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Time when the rate plan becomes active in milliseconds since epoch."""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Time the rate plan was last modified in milliseconds since epoch."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Display name of the rate plan."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Time that the rate plan was created in milliseconds since epoch."""

    revenue_share_type: Optional[RevenueShareTypeOrStr] = Field(default=UNSET, alias="revenueShareType")
    """Method used to calculate the revenue that is shared with developers."""

    consumption_pricing_type: Optional[ConsumptionPricingTypeOrStr] = Field(
        default=UNSET, alias="consumptionPricingType"
    )
    """Pricing model used for consumption-based charges."""

    fixed_recurring_fee: Optional[GoogleTypeMoney5] = Field(default=UNSET, alias="fixedRecurringFee")
    """Fixed amount that is charged at a defined interval and billed in advance of use of the API product. The fee will
    be prorated for the first billing period."""

    setup_fee: Optional[GoogleTypeMoney6] = Field(default=UNSET, alias="setupFee")
    """Initial, one-time fee paid when purchasing the API product."""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """Currency to be used for billing. Consists of a three-letter code as defined by the `ISO 4217
    <https://en.wikipedia.org/wiki/ISO_4217>`__ standard."""

    revenue_share_rates: Optional[list[GoogleCloudApigeeV1RevenueShareRange]] = Field(
        default=UNSET, alias="revenueShareRates"
    )
    """Details of the revenue sharing model."""

    payment_funding_model: Optional[PaymentFundingModelOrStr] = Field(default=UNSET, alias="paymentFundingModel")
    """DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no
    longer supported. Instead, use the ``billingType`` field inside ``DeveloperMonetizationConfig`` resource. Flag that
    specifies the billing account type, prepaid or postpaid."""


class GoogleCloudApigeeV1RatePlanDict(TypedDict):
    consumption_pricing_rates: NotRequired[list[GoogleCloudApigeeV1RateRangeDict]]
    description: NotRequired[str]
    billing_period: NotRequired[BillingPeriodOrStr]
    fixed_fee_frequency: NotRequired[int]
    end_time: NotRequired[str]
    apiproduct: NotRequired[str]
    state: NotRequired[State7OrStr]
    name: NotRequired[str]
    start_time: NotRequired[str]
    last_modified_at: NotRequired[str]
    display_name: NotRequired[str]
    created_at: NotRequired[str]
    revenue_share_type: NotRequired[RevenueShareTypeOrStr]
    consumption_pricing_type: NotRequired[ConsumptionPricingTypeOrStr]
    fixed_recurring_fee: NotRequired[GoogleTypeMoney5Dict]
    setup_fee: NotRequired[GoogleTypeMoney6Dict]
    currency_code: NotRequired[str]
    revenue_share_rates: NotRequired[list[GoogleCloudApigeeV1RevenueShareRangeDict]]
    payment_funding_model: NotRequired[PaymentFundingModelOrStr]
