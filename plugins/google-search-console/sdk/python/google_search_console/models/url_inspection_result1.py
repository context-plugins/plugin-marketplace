from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .amp_inspection_result2 import AmpInspectionResult2, AmpInspectionResult2Dict
from .index_status_inspection_result2 import IndexStatusInspectionResult2, IndexStatusInspectionResult2Dict
from .mobile_usability_inspection_result1 import MobileUsabilityInspectionResult1, MobileUsabilityInspectionResult1Dict
from .rich_results_inspection_result2 import RichResultsInspectionResult2, RichResultsInspectionResult2Dict


class UrlInspectionResult1(SdkBaseModel):
    """URL inspection results."""

    inspection_result_link: Optional[str] = Field(default=UNSET, alias="inspectionResultLink")
    """Link to Search Console URL inspection."""

    index_status_result: Optional[IndexStatusInspectionResult2] = Field(default=UNSET, alias="indexStatusResult")
    """Result of the index status analysis."""

    amp_result: Optional[AmpInspectionResult2] = Field(default=UNSET, alias="ampResult")
    """Result of the AMP analysis. Absent if the page is not an AMP page."""

    mobile_usability_result: Optional[MobileUsabilityInspectionResult1] = Field(
        default=UNSET, alias="mobileUsabilityResult"
    )
    """Result of the Mobile usability analysis."""

    rich_results_result: Optional[RichResultsInspectionResult2] = Field(default=UNSET, alias="richResultsResult")
    """Result of the Rich Results analysis. Absent if there are no rich results found."""


class UrlInspectionResult1Dict(TypedDict):
    inspection_result_link: NotRequired[str]
    index_status_result: NotRequired[IndexStatusInspectionResult2Dict]
    amp_result: NotRequired[AmpInspectionResult2Dict]
    mobile_usability_result: NotRequired[MobileUsabilityInspectionResult1Dict]
    rich_results_result: NotRequired[RichResultsInspectionResult2Dict]
