from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .dismissal_details import DismissalDetails, DismissalDetailsDict
from .enums.category import CategoryOrStr
from .enums.display_status import DisplayStatusOrStr
from .insight_summary import InsightSummary, InsightSummaryDict
from .last_insight_status_change import LastInsightStatusChange, LastInsightStatusChangeDict


class InsightResponse(SdkBaseModel):
    """An insight result containing summary information and metadata."""

    source: Optional[str] = UNSET
    """The source that generated the insight."""

    key: Optional[str] = UNSET
    """The unique key identifying this insight."""

    title: Optional[str] = UNSET
    """The display title of the insight."""

    short_description: Optional[str] = Field(default=UNSET, alias="shortDescription")
    """A brief summary of the insight."""

    detailed_description_mdx: Optional[str] = Field(default=UNSET, alias="detailedDescriptionMdx")
    """A detailed description of the insight in MDX format."""

    display_status: Optional[DisplayStatusOrStr] = Field(default=UNSET, alias="displayStatus")
    """The display status of the insight."""

    cloud_provider: Optional[str] = Field(default=UNSET, alias="cloudProvider")
    """The cloud provider associated with the resource."""

    categories: Optional[list[CategoryOrStr]] = UNSET
    """Categories this insight belongs to."""

    summary: Optional[InsightSummary] = UNSET
    """Aggregate summary of risks and savings across all resource results for an insight."""

    last_status_change: Optional[LastInsightStatusChange] = Field(default=UNSET, alias="lastStatusChange")
    """If set, this object contains the last status change made by a user for this insight"""

    last_updated: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdated")
    """Timestamp of the last update to this insight."""

    tags: Optional[list[str]] = UNSET
    """Tags for the insight, primarily used for security certification labels (e.g. ISO)."""

    report_url: Optional[str] = Field(default=UNSET, alias="reportUrl")
    """URL to an external report related to this insight."""

    cloud_flow_template_id: Optional[str] = Field(default=UNSET, alias="cloudFlowTemplateId")
    """ID of a CloudFlow template that can automate the remediation of this insight."""

    easy_win_description: Optional[str] = Field(default=UNSET, alias="easyWinDescription")
    """A description of why this insight is considered an easy win."""

    dismissal_details: Optional[DismissalDetails] = Field(default=UNSET, alias="dismissalDetails")
    """Details for why an insight was dismissed."""


class InsightResponseDict(TypedDict):
    source: NotRequired[str]
    key: NotRequired[str]
    title: NotRequired[str]
    short_description: NotRequired[str]
    detailed_description_mdx: NotRequired[str]
    display_status: NotRequired[DisplayStatusOrStr]
    cloud_provider: NotRequired[str]
    categories: NotRequired[list[CategoryOrStr]]
    summary: NotRequired[InsightSummaryDict]
    last_status_change: NotRequired[LastInsightStatusChangeDict]
    last_updated: NotRequired[RFC3339DateTime]
    tags: NotRequired[list[str]]
    report_url: NotRequired[str]
    cloud_flow_template_id: NotRequired[str]
    easy_win_description: NotRequired[str]
    dismissal_details: NotRequired[DismissalDetailsDict]
