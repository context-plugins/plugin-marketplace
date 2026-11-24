from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class GcpSpendCud(SdkBaseModel):
    """GCP spend-based Committed Use Discount. Mirrors the stored provider document verbatim (raw values, e.g. ``state``
    "Active", ``term`` "P1Y", ``commitmentAmount`` as a plain double)."""

    commitment_amount: Optional[float] = Field(default=UNSET, alias="commitmentAmount")
    """Hourly commitment amount."""

    commitment_unit: Optional[str] = Field(default=UNSET, alias="commitmentUnit")
    """Unit for ``commitmentAmount``."""

    consumption_model_id: Optional[str] = Field(default=UNSET, alias="consumptionModelId")
    """Provider-assigned ID of the pricing model this CUD's discount is applied through."""

    cud_id: str = Field(alias="cudId")
    """CUD ID (provider-assigned)."""

    cud_product_id: Optional[str] = Field(default=UNSET, alias="cudProductId")
    """Provider-assigned ID of the product family (``cudProductName``) this CUD applies to."""

    cud_product_name: str = Field(alias="cudProductName")
    """Product family name (e.g. ``Compute Flexible``, ``Cloud Run``, ``BigQuery``)."""

    cud_product_type: Optional[str] = Field(default=UNSET, alias="cudProductType")
    """Raw provider CUD type label."""

    end_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """When the CUD term ends. Null when unknown."""

    entitlement_scope: Optional[str] = Field(default=UNSET, alias="entitlementScope")
    """Provider resource path this CUD's discount is scoped to (typically the billing account)."""

    export_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="exportDate")
    """Timestamp of the BigQuery CUD export row this item was read from."""

    last_month_savings: Optional[float] = Field(default=UNSET, alias="lastMonthSavings")
    """Realized savings in the last full calendar month."""

    last_month_utilization: Optional[float] = Field(default=UNSET, alias="lastMonthUtilization")
    """Utilization in the last full calendar month, as a fraction from 0 to 1."""

    name: Optional[str] = UNSET
    """Provider commitment display name."""

    region: Optional[str] = UNSET
    """Region in raw provider form (``us-central1``), or ``global`` for cross-region spend CUDs. Not the
    ``lower_snake_case`` wire form used by the ``region`` query parameter."""

    start_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """When the CUD term started. Null when unknown."""

    state: str
    """Raw provider commitment state."""

    sub_type: Optional[str] = Field(default=UNSET, alias="subType")
    """Normalized coverage sub-type token (``UPPER_SNAKE``) identifying the product family within the product line."""

    term: Optional[str] = UNSET
    """Raw provider commitment term (ISO-8601 duration)."""


class GcpSpendCudDict(TypedDict):
    commitment_amount: NotRequired[float]
    commitment_unit: NotRequired[str]
    consumption_model_id: NotRequired[str]
    cud_id: str
    cud_product_id: NotRequired[str]
    cud_product_name: str
    cud_product_type: NotRequired[str]
    end_time: NotRequired[RFC3339DateTime | None]
    entitlement_scope: NotRequired[str]
    export_date: NotRequired[RFC3339DateTime]
    last_month_savings: NotRequired[float]
    last_month_utilization: NotRequired[float]
    name: NotRequired[str]
    region: NotRequired[str]
    start_time: NotRequired[RFC3339DateTime | None]
    state: str
    sub_type: NotRequired[str]
    term: NotRequired[str]
