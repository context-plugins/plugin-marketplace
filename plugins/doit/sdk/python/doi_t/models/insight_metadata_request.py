from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dismissal_details import DismissalDetails, DismissalDetailsDict
from .enums.create_category import CreateCategoryOrStr
from .enums.display_status import DisplayStatusOrStr


class InsightMetadataRequest(SdkBaseModel):
    """Request body for creating or updating a single insight's metadata. Resource results are managed separately via
    the resource-results endpoint."""

    key: str
    """A unique key for this insight within the source."""

    title: str
    """The display title of the insight."""

    short_description: str = Field(alias="shortDescription")
    """A brief summary of the insight."""

    detailed_description_mdx: Optional[str] = Field(default=UNSET, alias="detailedDescriptionMdx")
    """A detailed description of the insight in MDX format."""

    cloud_provider: str = Field(alias="cloudProvider")
    """The cloud provider associated with the resource."""

    categories: list[CreateCategoryOrStr]
    """One or more categories this insight belongs to."""

    report_url: Optional[str] = Field(default=UNSET, alias="reportUrl")
    """URL to an external report related to this insight."""

    cloud_flow_template_id: Optional[str] = Field(default=UNSET, alias="cloudFlowTemplateId")
    """ID of a CloudFlow template that can automate the remediation of this insight."""

    easy_win_description: Optional[str] = Field(default=UNSET, alias="easyWinDescription")
    """A description of why this insight is considered an easy win."""

    status: Optional[DisplayStatusOrStr] = UNSET
    """The display status of the insight."""

    dismissal_details: Optional[DismissalDetails] = Field(default=UNSET, alias="dismissalDetails")
    """Details for why an insight was dismissed."""


class InsightMetadataRequestDict(TypedDict):
    key: str
    title: str
    short_description: str
    detailed_description_mdx: NotRequired[str]
    cloud_provider: str
    categories: list[CreateCategoryOrStr]
    report_url: NotRequired[str]
    cloud_flow_template_id: NotRequired[str]
    easy_win_description: NotRequired[str]
    status: NotRequired[DisplayStatusOrStr]
    dismissal_details: NotRequired[DismissalDetailsDict]
