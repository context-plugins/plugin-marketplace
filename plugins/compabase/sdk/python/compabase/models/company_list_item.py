from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class CompanyListItem(SdkBaseModel):
    """Row from ``company_search`` (fields depend on query path) plus enrichment: ``email``, ``website``, ``logo_url``,
    ``currency``, ``period_to``, and normalized ``company_name_display``. ``full_address`` is derived from postal data
    when present."""

    entity_id: Optional[UUID] = UNSET
    company_name: Optional[str] = UNSET
    company_name_display: OptionalNullable[str] = UNSET
    registry_number: OptionalNullable[str] = UNSET
    nip: OptionalNullable[str] = UNSET
    regon: OptionalNullable[str] = UNSET
    legal_form: OptionalNullable[str] = UNSET
    city: OptionalNullable[str] = UNSET
    postal_code: OptionalNullable[str] = UNSET
    county: OptionalNullable[str] = UNSET
    municipality: OptionalNullable[str] = UNSET
    region: OptionalNullable[str] = UNSET
    full_address: OptionalNullable[str] = UNSET
    primary_pkd: OptionalNullable[str] = UNSET
    all_pkd_codes: Optional[list[str]] = UNSET
    is_active: OptionalNullable[bool] = UNSET
    latest_snapshot_id: OptionalNullable[UUID] = UNSET
    revenue_total: OptionalNullable[float] = UNSET
    revenue_total_usd: OptionalNullable[float] = UNSET
    revenue_operating: OptionalNullable[float] = UNSET
    profit_operating: OptionalNullable[float] = UNSET
    profit_net: OptionalNullable[float] = UNSET
    profit_net_usd: OptionalNullable[float] = UNSET
    operating_costs_total: OptionalNullable[float] = UNSET
    income_tax: OptionalNullable[float] = UNSET
    cost_wages: OptionalNullable[float] = UNSET
    cost_amortization: OptionalNullable[float] = UNSET
    total_assets: OptionalNullable[float] = UNSET
    capital_total: OptionalNullable[float] = UNSET
    has_email: OptionalNullable[bool] = UNSET
    has_website: OptionalNullable[bool] = UNSET
    extracted_at: OptionalNullable[RFC3339DateTime] = UNSET
    state_date: OptionalNullable[Date] = UNSET
    email: OptionalNullable[str] = UNSET
    website: OptionalNullable[str] = UNSET
    logo_url: OptionalNullable[str] = UNSET
    currency: OptionalNullable[str] = UNSET
    period_to: OptionalNullable[str] = UNSET


class CompanyListItemDict(TypedDict):
    entity_id: NotRequired[UUID]
    company_name: NotRequired[str]
    company_name_display: NotRequired[str | None]
    registry_number: NotRequired[str | None]
    nip: NotRequired[str | None]
    regon: NotRequired[str | None]
    legal_form: NotRequired[str | None]
    city: NotRequired[str | None]
    postal_code: NotRequired[str | None]
    county: NotRequired[str | None]
    municipality: NotRequired[str | None]
    region: NotRequired[str | None]
    full_address: NotRequired[str | None]
    primary_pkd: NotRequired[str | None]
    all_pkd_codes: NotRequired[list[str]]
    is_active: NotRequired[bool | None]
    latest_snapshot_id: NotRequired[UUID | None]
    revenue_total: NotRequired[float | None]
    revenue_total_usd: NotRequired[float | None]
    revenue_operating: NotRequired[float | None]
    profit_operating: NotRequired[float | None]
    profit_net: NotRequired[float | None]
    profit_net_usd: NotRequired[float | None]
    operating_costs_total: NotRequired[float | None]
    income_tax: NotRequired[float | None]
    cost_wages: NotRequired[float | None]
    cost_amortization: NotRequired[float | None]
    total_assets: NotRequired[float | None]
    capital_total: NotRequired[float | None]
    has_email: NotRequired[bool | None]
    has_website: NotRequired[bool | None]
    extracted_at: NotRequired[RFC3339DateTime | None]
    state_date: NotRequired[Date | None]
    email: NotRequired[str | None]
    website: NotRequired[str | None]
    logo_url: NotRequired[str | None]
    currency: NotRequired[str | None]
    period_to: NotRequired[str | None]
