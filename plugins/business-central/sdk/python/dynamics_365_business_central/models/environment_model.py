from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status1 import Status1OrStr
from .enums.type2 import Type2OrStr
from .version_details import VersionDetails, VersionDetailsDict


class EnvironmentModel(SdkBaseModel):
    friendly_name: Optional[str] = Field(default=UNSET, alias="friendlyName")
    """Display name of the environment"""

    type_: Optional[Type2OrStr] = Field(default=UNSET, alias="type")
    """Environment type"""

    name: Optional[str] = UNSET
    """Environment name, unique within an application family"""

    country_code: Optional[str] = Field(default=UNSET, alias="countryCode")
    """Country/region code where the environment is deployed"""

    application_family: Optional[str] = Field(default=UNSET, alias="applicationFamily")
    """Family of the environment application"""

    aad_tenant_id: Optional[UUID] = Field(default=UNSET, alias="aadTenantId")
    """Microsoft Entra tenant ID that owns the environment"""

    status: Optional[Status1OrStr] = UNSET
    """Current status of the environment"""

    web_client_login_url: Optional[str] = Field(default=UNSET, alias="webClientLoginUrl")
    """URL to log into the environment"""

    web_service_url: Optional[str] = Field(default=UNSET, alias="webServiceUrl")
    """URL to access the environment service API"""

    location_name: Optional[str] = Field(default=UNSET, alias="locationName")
    """Azure region where the database is stored"""

    geo_name: Optional[str] = Field(default=UNSET, alias="geoName")
    """Azure geo where the database is stored"""

    ring_name: Optional[str] = Field(default=UNSET, alias="ringName")
    """Logical ring group name (e.g., Prod, Preview)"""

    app_insights_key: Optional[str] = Field(default=UNSET, alias="appInsightsKey")
    """Application Insights instrumentation key"""

    soft_deleted_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="softDeletedOn")
    """When the environment was soft deleted"""

    hard_delete_pending_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="hardDeletePendingOn")
    """When the environment will be permanently deleted"""

    delete_reason: Optional[str] = Field(default=UNSET, alias="deleteReason")
    """Reason the environment was deleted"""

    app_source_apps_update_cadence: Optional[str] = Field(default=UNSET, alias="appSourceAppsUpdateCadence")
    """Update cadence for installed AppSource apps"""

    version_details: Optional[VersionDetails] = Field(default=UNSET, alias="versionDetails")


class EnvironmentModelDict(TypedDict):
    friendly_name: NotRequired[str]
    type_: NotRequired[Type2OrStr]
    name: NotRequired[str]
    country_code: NotRequired[str]
    application_family: NotRequired[str]
    aad_tenant_id: NotRequired[UUID]
    status: NotRequired[Status1OrStr]
    web_client_login_url: NotRequired[str]
    web_service_url: NotRequired[str]
    location_name: NotRequired[str]
    geo_name: NotRequired[str]
    ring_name: NotRequired[str]
    app_insights_key: NotRequired[str]
    soft_deleted_on: NotRequired[RFC3339DateTime]
    hard_delete_pending_on: NotRequired[RFC3339DateTime]
    delete_reason: NotRequired[str]
    app_source_apps_update_cadence: NotRequired[str]
    version_details: NotRequired[VersionDetailsDict]
