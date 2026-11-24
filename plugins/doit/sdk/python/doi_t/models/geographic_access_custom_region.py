from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class GeographicAccessCustomRegion(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: str
    """Stable service-generated custom-region ID."""

    customer_id: str = Field(alias="customerId")
    """Authenticated tenant that owns the custom region."""

    name: str
    """Customer-visible custom-region name."""

    country_codes: list[str] = Field(alias="countryCodes")
    """Canonical ISO 3166-1 alpha-2 country codes in the region."""

    created_by: str = Field(alias="createdBy")
    """User or service-account identifier that created the region."""

    time_created: RFC3339DateTime = Field(alias="timeCreated")
    """Time the region was created."""

    time_modified: RFC3339DateTime = Field(alias="timeModified")
    """Time the region was last modified."""


class GeographicAccessCustomRegionDict(TypedDict):
    id: str
    customer_id: str
    name: str
    country_codes: list[str]
    created_by: str
    time_created: RFC3339DateTime
    time_modified: RFC3339DateTime
