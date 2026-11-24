from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .composer_recipe_metadata import ComposerRecipeMetadata, ComposerRecipeMetadataDict
from .enums.composer_provider import ComposerProviderOrStr
from .enums.severity import SeverityOrStr
from .enums.status_doi_t_composer_insights_beta_api import StatusDoiTComposerInsightsBetaApiOrStr


class ComposerRecipe(SdkBaseModel):
    """A Composer recipe with findings in your cloud accounts. Counts and savings cover results from recently scanned
    accounts only."""

    id: int
    """Recipe ID. Use it as ``recipeId`` to list the recipe's results."""

    title: str
    """Recipe title, as shown in the Console."""

    description: Optional[str] = UNSET
    """Longer explanation of what the recipe detects. Fetched on a best-effort basis, so it can be absent even when the
    recipe has one."""

    provider: ComposerProviderOrStr
    """Cloud provider or platform, using the Console's provider names."""

    severity: SeverityOrStr
    """Severity of the recipe's results, set by the recipe's author."""

    affected_resource_type: Optional[str] = Field(default=UNSET, alias="affectedResourceType")
    """Type of cloud resource the recipe's findings are on. Absent when unknown."""

    active_results_count: int = Field(alias="activeResultsCount")
    """Number of active results (not resolved and not snoozed). 0 when the recipe is dismissed."""

    total_results_count: int = Field(alias="totalResultsCount")
    """Number of results in any status. 0 when the recipe is dismissed."""

    resolved_results_count: int = Field(alias="resolvedResultsCount")
    """Number of resolved results. 0 when the recipe is dismissed."""

    snoozed_results_count: int = Field(alias="snoozedResultsCount")
    """Number of snoozed results. 0 when the recipe is dismissed."""

    status: Optional[StatusDoiTComposerInsightsBetaApiOrStr] = UNSET
    """Recipe status, derived from its results and whether it is dismissed. Absent when unavailable."""

    is_dismissed: bool = Field(alias="isDismissed")
    """Whether the recipe has been dismissed for your customer."""

    detection_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="detectionTime")
    """When the earliest of the recipe's results was first detected (RFC 3339, UTC). Absent when unavailable."""

    estimated_fix_time_minutes: Optional[int] = Field(default=UNSET, alias="estimatedFixTimeMinutes")
    """Estimated time to fix one finding, in minutes. Absent when not estimated."""

    total_potential_savings: Optional[str] = Field(default=UNSET, alias="totalPotentialSavings")
    """Potential cost savings across the recipe's active results, as a daily amount in US dollars. A decimal string with
    2 decimal places (8 for amounts below 0.01), unlike the numeric per-result ``costEstimationPotentialSavings``. When
    no active result has an estimate, it is the total recorded on the recipe's resolved results instead. The Console
    **Cost savings** column is this daily US-dollar amount × 365, converted to your organization's currency. Absent when
    not estimated."""

    metadata: ComposerRecipeMetadata
    """Remediation guidance for the recipe. Always present; an empty object means no guidance is available. Each field
    is present only when the recipe has that content."""


class ComposerRecipeDict(TypedDict):
    id: int
    title: str
    description: NotRequired[str]
    provider: ComposerProviderOrStr
    severity: SeverityOrStr
    affected_resource_type: NotRequired[str]
    active_results_count: int
    total_results_count: int
    resolved_results_count: int
    snoozed_results_count: int
    status: NotRequired[StatusDoiTComposerInsightsBetaApiOrStr]
    is_dismissed: bool
    detection_time: NotRequired[RFC3339DateTime]
    estimated_fix_time_minutes: NotRequired[int]
    total_potential_savings: NotRequired[str]
    metadata: ComposerRecipeMetadataDict
